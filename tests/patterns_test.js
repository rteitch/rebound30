const fs = require('fs');
const path = require('path');
const vm = require('vm');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('\n============================================================');
console.log('📊 SUITE POLA & GRAFIK ANALISIS 77 TOKOH');
console.log('============================================================\n');

const storage = {};
const elements = {};

const mockElement = (id) => ({
  id,
  classList: { add: () => {}, remove: () => {}, toggle: () => {} },
  style: {},
  textContent: '',
  innerHTML: '',
  setAttribute: () => {},
  getAttribute: () => '',
  querySelectorAll: () => [],
  scrollIntoView: () => {},
  remove: () => {}
});

const context = {
  window: {
    addEventListener: () => {},
    scrollTo: () => {}
  },
  navigator: {
    serviceWorker: { register: () => Promise.resolve() },
    clipboard: { writeText: () => Promise.resolve() }
  },
  document: {
    getElementById: (id) => {
      if (!elements[id]) elements[id] = mockElement(id);
      return elements[id];
    },
    querySelectorAll: () => [],
    querySelector: () => null,
    addEventListener: () => {}
  },
  localStorage: {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => { storage[k] = String(v); },
    removeItem: (k) => { delete storage[k]; },
    clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
  },
  console, Math, Date, Set, Map, Array, Object, String, Number,
  setTimeout: (fn) => fn(),
  setInterval: (fn) => fn(),
  clearTimeout: () => {},
  clearInterval: () => {}
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
    'window.ReboundEngine = typeof ReboundEngine !== "undefined" ? ReboundEngine : window.ReboundEngine;\n' +
    'window.Stories = typeof Stories !== "undefined" ? Stories : window.Stories;\n' +
    'window.FinanceEngine = typeof FinanceEngine !== "undefined" ? FinanceEngine : window.FinanceEngine;\n' +
    'window.NotifyCenter = typeof NotifyCenter !== "undefined" ? NotifyCenter : window.NotifyCenter;\n' +
    'window.Exporter = typeof Exporter !== "undefined" ? Exporter : window.Exporter;\n' +
    'window.Icons = typeof Icons !== "undefined" ? Icons : window.Icons;\n' +
    'window.App = typeof App !== "undefined" ? App : window.App;',
    context
  );
}

loadScript('js/icons.js');
loadScript('js/helpers.js');
loadScript('js/store.js');
loadScript('js/engine.js');
loadScript('js/finance.js');
loadScript('js/notify.js');
loadScript('js/exporter.js');
loadScript('js/stories.js');
loadScript('js/app.js');

const { App, Stories } = context.window;

// 1. Data Integrity of Analytics Data
assert(Stories.DATA.length === 77, `Basis data tokoh berjumlah 77 kisah (saat ini ${Stories.DATA.length})`);
assert(typeof Stories.renderPatterns === 'function', 'Stories.renderPatterns adalah fungsi yang valid');
assert(typeof Stories.openPatterns === 'function', 'Stories.openPatterns adalah fungsi yang valid');
assert(typeof Stories.setPatternFilter === 'function', 'Stories.setPatternFilter adalah fungsi yang valid');

// 2. Problem Clusters Mapping Coverage
const allDataIds = new Set(Stories.DATA.map(s => s.id));
let totalProblemIds = 0;
Stories.ANALYTICS_DATA.PROBLEM_CLUSTERS.forEach(pc => {
  totalProblemIds += pc.ids.length;
  pc.ids.forEach(id => {
    assert(allDataIds.has(id), `ID tokoh '${id}' di klaster [${pc.title}] terdaftar di Stories.DATA`);
  });
});
assert(totalProblemIds === 77, `Total pemetaan akar masalah adalah 77 tokoh (saat ini: ${totalProblemIds})`);

// 3. Resolution Strategies Mapping Coverage
let totalResolutionIds = 0;
Stories.ANALYTICS_DATA.RESOLUTION_STRATEGIES.forEach(rs => {
  totalResolutionIds += rs.ids.length;
  rs.ids.forEach(id => {
    assert(allDataIds.has(id), `ID tokoh '${id}' di strategi [${rs.title}] terdaftar di Stories.DATA`);
  });
});
assert(totalResolutionIds === 77, `Total pemetaan strategi penyelesaian adalah 77 tokoh (saat ini: ${totalResolutionIds})`);

// 4. Test renderPatterns output HTML
const container = mockElement('patterns-root');
Stories.renderPatterns(container);
assert(container.innerHTML.includes('patterns-hero-title'), 'renderPatterns menghasilkan hero banner');
assert(container.innerHTML.includes('patterns-kpi-grid'), 'renderPatterns menghasilkan 4 KPI summary cards');
assert(container.innerHTML.includes('horizontal-bar-chart'), 'renderPatterns menghasilkan grafik batang akar masalah');
assert(container.innerHTML.includes('donut-svg-wrap'), 'renderPatterns menghasilkan grafik donat SVG strategi');
assert(container.innerHTML.includes('debt-matrix-grid'), 'renderPatterns menghasilkan matriks skala utang & durasi');
assert(container.innerHTML.includes('mental-shift-grid'), 'renderPatterns menghasilkan 4 konstanta transformasi mental');
assert(container.innerHTML.includes('patterns-explorer-cards'), 'renderPatterns menghasilkan bagian interactive explorer');

// 5. Test Filter Switching
const allCardsHtml = Stories.buildPatternCardsHtml('all');
assert(allCardsHtml.includes('explorer-card'), 'buildPatternCardsHtml("all") menghasilkan kartu tokoh');
const foodCardsHtml = Stories.buildPatternCardsHtml('value_added_food');
assert(foodCardsHtml.includes('Shao Baoling') || foodCardsHtml.includes('Tang Jian'), 'buildPatternCardsHtml("value_added_food") memuat tokoh kuliner');

console.log(`\n🏁 PATTERNS SUITE SUMMARY: ${passed}/${passed + failed} TESTS PASSED (${failed} failures)\n`);
if (failed > 0) process.exit(1);
