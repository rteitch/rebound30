// ============================================================
// REBOUND 30 — KISAH BANGKIT (REAL RECOVERY STORIES)
// ============================================================

const Stories = {
  activeTab: 'shao',

  switchTab(storyId, btn) {
    this.activeTab = storyId;
    document.querySelectorAll('#screen-stories .tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    
    const shaoEl = document.getElementById('story-content-shao');
    const tangEl = document.getElementById('story-content-tang');
    if (storyId === 'shao') {
      if (shaoEl) shaoEl.style.display = 'block';
      if (tangEl) tangEl.style.display = 'none';
    } else {
      if (shaoEl) shaoEl.style.display = 'none';
      if (tangEl) tangEl.style.display = 'block';
    }
  }
};
