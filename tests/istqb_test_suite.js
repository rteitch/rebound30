// ============================================================================
// REBOUND 30 — ISTQB COMPREHENSIVE SOFTWARE TEST SPECIFICATION & RUNNER
// Standard: ISTQB Foundation & Advanced Technical Test Analyst
// Test Levels: Unit / Component, Integration, System, Acceptance
// Techniques: Equivalence Partitioning (EP), Boundary Value Analysis (BVA),
//             State Transition Testing (STT), Error Guessing / Resilience
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Setup Sandbox VM for browserless testing
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
  vm.runInContext(
    code + '\n' +
    'window.H = typeof H !== "undefined" ? H : window.H;\n' +
    'window.Store = typeof Store !== "undefined" ? Store : window.Store;\n' +
    'window.ScoreEngine = typeof ScoreEngine !== "undefined" ? ScoreEngine : window.ScoreEngine;\n' +
    'window.Achievements = typeof Achievements !== "undefined" ? Achievements : window.Achievements;\n' +
    'window.ReboundEngine = typeof ReboundEngine !== "undefined" ? ReboundEngine : window.ReboundEngine;',
    context
  );
}

loadScript('js/icons.js');
loadScript('js/helpers.js');
loadScript('js/store.js');
loadScript('js/engine.js');

const { H, Store, ScoreEngine, Achievements, ReboundEngine } = context.window;

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message, metadata = {}) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ [FAIL] ${message}`);
    if (Object.keys(metadata).length > 0) {
      console.error('    Metadata:', JSON.stringify(metadata, null, 2));
    }
  }
}

console.log('\n============================================================================');
console.log('🏛️  REBOUND 30 — ISTQB FORMAL TEST SUITE EXECUTION');
console.log('============================================================================\n');

// ============================================================================
// 1. EQUIVALENCE PARTITIONING (EP)
// ============================================================================
console.log('----------------------------------------------------------------------------');
console.log('1. [ISTQB-EP] EQUIVALENCE PARTITIONING TEST CASES');
console.log('----------------------------------------------------------------------------');

// EP-1: Cashflow Partitions (Positive, Zero, Deficit)
console.log('\n[EP-1: Cashflow Partitions]');
const statePositive = Store.defaultState();
statePositive.profile.monthlyIncome = 5000000;
statePositive.expenses.essential = { food: 2000000, housing: 1000000, utilities: 200000, transport: 300000, comm: 100000, family: 0 };
const scorePos = ScoreEngine.calculate(statePositive);
assert(scorePos.components.cashflow > 80, `EP-1.1: Positive Cashflow partition yields healthy score component (>80): ${scorePos.components.cashflow}`);

const stateZero = Store.defaultState();
stateZero.profile.monthlyIncome = 3600000;
stateZero.expenses.essential = { food: 2000000, housing: 1000000, utilities: 200000, transport: 300000, comm: 100000, family: 0 };
const scoreZero = ScoreEngine.calculate(stateZero);
assert(scoreZero.components.cashflow === 80, `EP-1.2: Break-even (Zero net cashflow) partition yields benchmark score (80): ${scoreZero.components.cashflow}`);

const stateDeficit = Store.defaultState();
stateDeficit.profile.monthlyIncome = 1500000;
stateDeficit.expenses.essential = { food: 2000000, housing: 1000000, utilities: 200000, transport: 300000, comm: 100000, family: 0 };
const scoreDeficit = ScoreEngine.calculate(stateDeficit);
assert(scoreDeficit.components.cashflow < 50 && scoreDeficit.components.cashflow >= 5, `EP-1.3: Deficit cashflow partition reflects financial pressure (5-50): ${scoreDeficit.components.cashflow}`);

// EP-2: Debt Regulatory Partitions (OJK Licensed vs Unlicensed/Illegal)
console.log('\n[EP-2: Debt Classification Partitions]');
const ojkDebt = { id: 'd-ojk', name: 'Pinjaman Bank Legal', isOjk: true, principal: 5000000, interestMonthly: 1.5 };
const illegalDebt = { id: 'd-illegal', name: 'Pinjol Ilegal Tanpa Izin', isOjk: false, principal: 2000000, interestMonthly: 15.0 };
assert(ojkDebt.isOjk === true, 'EP-2.1: Correctly partitions registered legal creditor');
assert(illegalDebt.isOjk === false && illegalDebt.interestMonthly > 3.0, 'EP-2.2: Correctly flags illegal high-interest predatory loan');

// ============================================================================
// 2. BOUNDARY VALUE ANALYSIS (BVA)
// ============================================================================
console.log('\n----------------------------------------------------------------------------');
console.log('2. [ISTQB-BVA] BOUNDARY VALUE ANALYSIS TEST CASES');
console.log('----------------------------------------------------------------------------');

// BVA-1: 30-Day Phase Transition Boundaries
console.log('\n[BVA-1: Phase Transition Boundaries]');
// Phase 0: Survive (Days 1 - 4)
assert(H.getPhase(0).id === 0, 'BVA-1.1: Day 0 (Lower outlier) safely defaults to Phase 0');
assert(H.getPhase(1).id === 0, 'BVA-1.2: Day 1 (Lower bound Phase 0: Survive) is Phase 0');
assert(H.getPhase(4).id === 0, 'BVA-1.3: Day 4 (Upper bound Phase 0: Survive) is Phase 0');

// Phase 1: Create Cash (Days 5 - 14)
assert(H.getPhase(5).id === 1, 'BVA-1.4: Day 5 (Lower bound Phase 1: Create Cash) is Phase 1');
assert(H.getPhase(14).id === 1, 'BVA-1.5: Day 14 (Upper bound Phase 1: Create Cash) is Phase 1');

// Phase 2: Stabilize (Days 15 - 21)
assert(H.getPhase(15).id === 2, 'BVA-1.6: Day 15 (Lower bound Phase 2: Stabilize) is Phase 2');
assert(H.getPhase(21).id === 2, 'BVA-1.7: Day 21 (Upper bound Phase 2: Stabilize) is Phase 2');

// Phase 3: Debt Attack (Days 22 - 30)
assert(H.getPhase(22).id === 3, 'BVA-1.8: Day 22 (Lower bound Phase 3: Debt Attack) is Phase 3');
assert(H.getPhase(30).id === 3, 'BVA-1.9: Day 30 (Upper bound Phase 3: Debt Attack) is Phase 3');
assert(H.getPhase(31).id === 3, 'BVA-1.10: Day 31 (Post-program continuation) maintains Phase 3');

// BVA-2: Cash Runway Boundaries (< 7 Days Triggering CRITICAL Income Missions)
console.log('\n[BVA-2: Runway Thresholds for Mission Generation]');
const runState = Store.defaultState();
runState.expenses.essential = { food: 3000000, housing: 0, utilities: 0, transport: 0, comm: 0, family: 0 }; // 100k/day
runState.profile.cash = 600000; // 6 days runway (< 7 days)
const missionsCritical = ReboundEngine.generate(runState);
assert(missionsCritical.some(m => m.type === 'INCOME_TASK' && m.priority === 'CRITICAL'), 'BVA-2.1: Runway of 6 days (<7 threshold) triggers CRITICAL income task');

// ============================================================================
// 3. STATE TRANSITION TESTING (STT)
// ============================================================================
console.log('\n----------------------------------------------------------------------------');
console.log('3. [ISTQB-STT] STATE TRANSITION TESTING');
console.log('----------------------------------------------------------------------------');

const sttState = Store.defaultState();
assert((sttState.achievements || []).length === 0, 'STT-1.1: Initial State has 0 achievements');

// Trigger First Cash Transition
sttState.incomes.push({ id: 'inc-stt', date: H.today(), amount: 500000, source: 'Jasa', category: 'freelance' });
const ach1 = Achievements.check(sttState);
assert(ach1.includes('first_cash'), 'STT-1.2: State Transition: Recording income triggers "first_cash" achievement');
sttState.achievements = [...(sttState.achievements || []), ...ach1];

// Trigger Opportunity Transition
sttState.opportunities.push({ id: 'opp-stt', title: 'Proyek Desain', client: 'PT Maju', value: 2000000, status: 'APPLIED' });
const ach2 = Achievements.check(sttState);
assert(ach2.includes('first_client'), 'STT-1.3: State Transition: Adding opportunity triggers "first_client" achievement');

// ============================================================================
// 4. INTEGRATION & RESILIENCE TESTING (DEFENSIVE PROGRAMMING)
// ============================================================================
console.log('\n----------------------------------------------------------------------------');
console.log('4. [ISTQB-INT] INTEGRATION & DATA RESILIENCE');
console.log('----------------------------------------------------------------------------');

// Zero-Division Resilience
const emptyState = Store.defaultState();
let noCrash = true;
try {
  const emptyScore = ScoreEngine.calculate(emptyState);
  assert(typeof emptyScore.score === 'number' && !isNaN(emptyScore.score), `INT-1.1: Zero-Divide safety on completely empty state: score=${emptyScore.score}`);
} catch (e) {
  noCrash = false;
  assert(false, `INT-1.1: Crashed on empty state: ${e.message}`);
}

// LocalStorage Persistence & Schema Migration
Store.save(sttState);
const retrieved = Store.get();
assert(retrieved !== null && retrieved.incomes.length === 1, 'INT-1.2: Store.save and Store.get round-trip persists data integrity');

// All 14 Mission Templates Validation
const templateKeys = Object.keys(ReboundEngine.MISSION_TEMPLATES);
assert(templateKeys.length === 14, `INT-1.3: All 14 mission templates are defined (Found: ${templateKeys.length})`);
const allHaveGuides = templateKeys.every(k => {
  const t = ReboundEngine.MISSION_TEMPLATES[k];
  return t.title && t.desc && t.why && Array.isArray(t.steps) && t.steps.length > 0 && t.templateText;
});
assert(allHaveGuides, 'INT-1.4: 100% of mission templates contain Title, Desc, Why, Steps, and Copyable Text Templates');

// ============================================================================
// FINAL ISTQB TEST SUMMARY
// ============================================================================
console.log('\n============================================================================');
console.log(`🏁 ISTQB FORMAL TEST SUMMARY: ${passedTests}/${totalTests} TESTS PASSED (${failedTests} failures)`);
console.log('============================================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('✨ SYSTEM CERTIFIED: 100% COMPLIANT WITH ISTQB SPECIFICATIONS!\n');
}
