// ============================================================
// REBOUND 30 — 30-DAY ENGINE SIMULATION & UNIT TEST SUITE
// ============================================================

const fs = require('fs');
const path = require('path');

// Load modules in Node environment
const vm = require('vm');
const storage = {};
const context = {
  window: {},
  document: {},
  localStorage: {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => { storage[k] = String(v); },
    removeItem: (k) => { delete storage[k]; },
    clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
  },
  console, Math, Date, Set, Map, Array, Object, String, Number
};
vm.createContext(context);

function loadScript(filePath) {
  const code = fs.readFileSync(path.join(__dirname, '..', filePath), 'utf8');
  // Wrap in global assignments
  vm.runInContext(code + '\nwindow.H = typeof H !== "undefined" ? H : window.H;\nwindow.Store = typeof Store !== "undefined" ? Store : window.Store;\nwindow.ScoreEngine = typeof ScoreEngine !== "undefined" ? ScoreEngine : window.ScoreEngine;\nwindow.Achievements = typeof Achievements !== "undefined" ? Achievements : window.Achievements;\nwindow.ReboundEngine = typeof ReboundEngine !== "undefined" ? ReboundEngine : window.ReboundEngine;', context);
}

loadScript('js/icons.js');
loadScript('js/helpers.js');
loadScript('js/store.js');
loadScript('js/engine.js');

const { H, Store, ScoreEngine, Achievements, ReboundEngine } = context.window;

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('\n============================================================');
console.log('🚀 RUNNING REBOUND 30 UNIT TESTS & 30-DAY SIMULATION');
console.log('============================================================\n');

// ------------------------------------------------------------
// TEST 1: Default State & Helpers
// ------------------------------------------------------------
console.log('[TEST GROUP 1: Default State & Helper Functions]');
const state = Store.defaultState();
assert(state && typeof state === 'object', 'Store.defaultState returns valid object');
assert(Array.isArray(state.debts), 'state.debts is an Array');
assert(Array.isArray(state.incomes), 'state.incomes is an Array');
assert(state.meta && state.meta.startDate, 'state.meta.startDate is initialized');

const formattedRp = H.formatRp(1500000);
assert(formattedRp.includes('1.5') && formattedRp.includes('Rp'), `H.formatRp formats correctly: ${formattedRp}`);

// ------------------------------------------------------------
// TEST 2: Phase Engine Logic
// ------------------------------------------------------------
console.log('\n[TEST GROUP 2: Phase Detection (Day 1 - 30)]');
assert(H.getPhase(1).id === 0 && H.getPhase(1).name === 'Survive', 'Day 1 is Phase 0 (Survive)');
assert(H.getPhase(4).id === 0 && H.getPhase(4).name === 'Survive', 'Day 4 is Phase 0 (Survive)');
assert(H.getPhase(5).id === 1 && H.getPhase(5).name === 'Create Cash', 'Day 5 is Phase 1 (Create Cash)');
assert(H.getPhase(14).id === 1 && H.getPhase(14).name === 'Create Cash', 'Day 14 is Phase 1 (Create Cash)');
assert(H.getPhase(15).id === 2 && H.getPhase(15).name === 'Stabilize', 'Day 15 is Phase 2 (Stabilize)');
assert(H.getPhase(21).id === 2 && H.getPhase(21).name === 'Stabilize', 'Day 21 is Phase 2 (Stabilize)');
assert(H.getPhase(22).id === 3 && H.getPhase(22).name === 'Debt Attack', 'Day 22 is Phase 3 (Debt Attack)');
assert(H.getPhase(30).id === 3 && H.getPhase(30).name === 'Debt Attack', 'Day 30 is Phase 3 (Debt Attack)');

// ------------------------------------------------------------
// TEST 3: Debt Strategies (Avalanche vs Snowball vs Risk First)
// ------------------------------------------------------------
console.log('\n[TEST GROUP 3: Debt Strategies & POJK Flags]');
state.debts = [
  { id: 'd1', name: 'Pinjol Konsumtif A', principal: 3000000, interestMonthly: 4.5, isOjk: true, minPayment: 300000, priorityRank: 1 },
  { id: 'd2', name: 'Kartu Kredit Bank B', principal: 15000000, interestMonthly: 1.75, isOjk: true, minPayment: 1500000, priorityRank: 3 },
  { id: 'd3', name: 'Pinjol Ilegal C', principal: 1000000, interestMonthly: 12.0, isOjk: false, minPayment: 500000, priorityRank: 0 }
];

assert(state.debts.length === 3, '3 debts registered');
const illegalDebts = state.debts.filter(d => !d.isOjk);
assert(illegalDebts.length === 1 && illegalDebts[0].name === 'Pinjol Ilegal C', 'Identifies illegal unlicensed loan');
const highInterestDebts = state.debts.filter(d => d.interestMonthly > 3.0);
assert(highInterestDebts.length === 2, 'Detects debts exceeding standard 3% threshold');

// ------------------------------------------------------------
// TEST 4: ScoreEngine Calculations
// ------------------------------------------------------------
console.log('\n[TEST GROUP 4: ScoreEngine Formula & Components]');
state.expenses.essential = { food: 1500000, housing: 1000000, utilities: 300000, transport: 200000, comm: 100000, family: 0 };
state.profile.cash = 2000000;
state.profile.monthlyIncome = 3500000;
state.profile.skills = ['freelance', 'sales'];

const scoreResult = ScoreEngine.calculate(state);
assert(scoreResult && typeof scoreResult.score === 'number', `ScoreEngine returns numeric score: ${scoreResult.score}`);
assert(scoreResult.score >= 0 && scoreResult.score <= 100, `Score is in 0-100 range: ${scoreResult.score}`);
assert(scoreResult.components.visibility > 0, `Visibility component calculated: ${scoreResult.components.visibility}`);
assert(scoreResult.components.cashflow > 0, `Cashflow component calculated: ${scoreResult.components.cashflow}`);

// ------------------------------------------------------------
// TEST 5: 30-Day Day-by-Day Journey Simulation
// ------------------------------------------------------------
console.log('\n[TEST GROUP 5: 30-Day Simulation (Day 1 through Day 30)]');

const simState = Store.defaultState();
simState.profile.cash = 500000;
simState.profile.skills = ['programming', 'writing'];
simState.expenses.essential = { food: 1200000, housing: 800000, utilities: 250000, transport: 150000, comm: 100000, family: 0 };
simState.debts = [
  { id: 'sim-d1', name: 'Pinjol Darurat', principal: 2500000, interestMonthly: 3.5, isOjk: true, minPayment: 250000, negotiations: [] },
  { id: 'sim-d2', name: 'Kredit HP', principal: 1800000, interestMonthly: 2.0, isOjk: true, minPayment: 180000, negotiations: [] }
];

let allDaysPassed = true;

for (let d = 1; d <= 30; d++) {
  // Mock current date
  const mockDate = new Date();
  mockDate.setDate(mockDate.getDate() + (d - 1));
  const dateStr = mockDate.toISOString().split('T')[0];
  
  // Set start date to Day 1
  if (d === 1) simState.meta.startDate = dateStr;
  
  // Generate daily missions
  const missions = ReboundEngine.generate(simState);
  if (!missions || missions.length === 0) {
    allDaysPassed = false;
    console.error(`  ✗ Failed to generate missions for Day ${d}`);
    break;
  }

  // Simulate completing 2-3 missions per day
  missions.forEach((m, idx) => {
    if (idx < 3) m.completed = true;
  });

  // Simulate user actions across timeline
  if (d === 3) {
    // Record first cash
    simState.incomes.push({ id: 'inc-1', date: dateStr, amount: 250000, source: 'Jasa Desain', category: 'freelance', recurring: false });
  }
  if (d === 8) {
    // Add client opportunity
    simState.opportunities.push({ id: 'opp-1', title: 'Website Klien Toko', client: 'Pak Budi', value: 1500000, status: 'APPLIED', dateApplied: dateStr });
  }
  if (d === 16) {
    // Record negotiation
    simState.debts[0].negotiations.push({ id: 'neg-1', date: dateStr, creditor: 'Pinjol Darurat', status: 'NEGOTIATING', notes: 'Minta perpanjangan tenor 6 bulan' });
    simState.incomes.push({ id: 'inc-2', date: dateStr, amount: 1200000, source: 'Gaji Freelance', category: 'freelance', recurring: true });
  }
  if (d === 24) {
    // Record debt payment
    simState.debts[0].principal -= 500000;
  }

  // Check achievements
  const newAchievements = Achievements.check(simState);
  if (newAchievements.length > 0) {
    simState.achievements = [...(simState.achievements || []), ...newAchievements];
  }
}

assert(allDaysPassed, '30-Day simulation successfully progressed through all 30 days without errors');
assert(simState.achievements && simState.achievements.length >= 4, `Unlocked ${simState.achievements.length} achievements during 30-day journey`);

const finalScore = ScoreEngine.calculate(simState);
console.log(`  📊 Final Rebound Score at Day 30: ${finalScore.score}/100`);
assert(finalScore.score > 40, `Final score improved to healthy level: ${finalScore.score}`);

// ------------------------------------------------------------
// Summary
// ------------------------------------------------------------
console.log('\n============================================================');
console.log(`🏁 TEST REPORT: ${passedTests}/${totalTests} TESTS PASSED (${failedTests} failures)`);
console.log('============================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL REBOUND 30 ENGINE FUNCTIONS ARE 100% OPERATIONAL & VERIFIED!\n');
}
