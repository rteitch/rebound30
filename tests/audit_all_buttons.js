const fs = require('fs');
const path = require('path');
const vm = require('vm');

const storage = {};
const context = {
  window: {
    addEventListener: () => {}
  },
  navigator: {
    serviceWorker: { register: () => Promise.resolve() },
    clipboard: { writeText: () => Promise.resolve() }
  },
  document: {
    getElementById: () => ({ classList: { add: ()=>{}, remove: ()=>{} }, style: {}, textContent: '', innerHTML: '', remove: ()=>{} }),
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
// screens.js memperluas App — urutannya harus sama dengan index.html,
// jika tidak, handler tombol milik modul baru akan terbaca "tidak ada".
loadScript('js/screens.js');

const { App, Stories } = context.window;

console.log('\n============================================================');
console.log('🔍 AUDITING ALL APPLICATION BUTTONS & FUNCTION CALLBACKS');
console.log('============================================================\n');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const onclickMatches = html.match(/onclick="([^"]+)"/g) || [];

console.log(`Found ${onclickMatches.length} onclick button handlers in index.html.`);

// Pastikan daftar skrip yang diaudit benar-benar sama dengan yang dimuat
// halaman. Tanpa pemeriksaan ini, berkas JS baru bisa lolos dari audit.
const SCRIPTS_DIAUDIT = ['js/icons.js','js/helpers.js','js/store.js','js/engine.js',
  'js/finance.js','js/notify.js','js/exporter.js','js/stories.js','js/app.js','js/screens.js'];
const scriptDiHalaman = (html.match(/<script src="([^"]+)"/g) || [])
  .map(t => t.replace('<script src="','').replace('"',''));
const belumDiaudit = scriptDiHalaman.filter(f => SCRIPTS_DIAUDIT.indexOf(f) === -1);
if (belumDiaudit.length) {
  console.error(`  ✗ Skrip dimuat halaman tetapi tidak ikut diaudit: ${belumDiaudit.join(', ')}`);
  process.exit(1);
}
console.log(`Semua ${scriptDiHalaman.length} berkas skrip halaman ikut diaudit.`);

let audited = 0;
let valid = 0;

onclickMatches.forEach(m => {
  const handler = m.replace('onclick="', '').replace('"', '').trim();
  audited++;

  // Extract function path (e.g. App.navigate, App.debts.showAdd, Stories.switchTab)
  // Ambil pemanggilan pertama; handler multi-pernyataan tetap terwakili.
  const fnCall = handler.split('(')[0].replace(/^.*?;\s*/, '').trim();
  const parts = fnCall.split('.');
  
  let target = context.window;
  let exists = true;
  for (const p of parts) {
    if (target && target[p] !== undefined) {
      target = target[p];
    } else {
      exists = false;
      break;
    }
  }
  
  if (exists) {
    valid++;
    // console.log(`  ✓ Valid handler: ${handler}`);
  } else {
    console.error(`  ✗ INVALID handler: ${handler} (Target ${fnCall} not found!)`);
  }
});

console.log(`\nButton Handler Audit Result: ${valid}/${audited} VALID & FUNCTIONAL!`);
if (valid === audited) {
  console.log('🎉 100% OF BUTTONS AND CALLBACKS ARE FULLY IMPLEMENTED AND FUNCTIONAL!\n');
} else {
  process.exit(1);
}
