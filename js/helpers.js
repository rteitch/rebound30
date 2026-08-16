// ============================================================
// HELPERS
// ============================================================
const H = {
  formatRp(n) {
    const num = Math.round(Number(n) || 0);
    if (num >= 1_000_000_000) return `Rp ${(num/1_000_000_000).toFixed(1)}M`;
    if (num >= 1_000_000) return `Rp ${(num/1_000_000).toFixed(1)}jt`;
    if (num >= 1_000) return `Rp ${num.toLocaleString('id')}`;
    return `Rp ${num}`;
  },
  
  parseRp(s) { return parseInt((s || '').replace(/\D/g, '')) || 0; },
  
  uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,7); },
  
  today() { return new Date().toISOString().split('T')[0]; },
  
  formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  },
  
  daysBetween(a, b) {
    const da = new Date(a), db = new Date(b);
    return Math.floor((db - da) / 86400000);
  },
  
  currentDay(startDate) {
    const d = H.daysBetween(startDate, H.today()) + 1;
    return Math.min(Math.max(d, 1), 30);
  },
  
  getPhase(day) {
    if (day <= 4) return { id: 0, name: 'Survive', emoji: 'Shield', days: '1–4' };
    if (day <= 14) return { id: 1, name: 'Create Cash', emoji: 'Cash', days: '5–14' };
    if (day <= 21) return { id: 2, name: 'Stabilize', emoji: 'Scale', days: '15–21' };
    return { id: 3, name: 'Debt Attack', emoji: 'Attack', days: '22–30' };
  },
  
  priorityOrder: { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 },
  
  escHtml(s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  },
  
  monthStart() {
    const d = new Date(); 
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-01`;
  },
  
  isThisMonth(dateStr) {
    if (!dateStr) return false;
    return dateStr >= H.monthStart();
  },
};