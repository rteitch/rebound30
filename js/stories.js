// ============================================================
// REBOUND 30 — KISAH BANGKIT (INTERACTIVE EDITORIAL CONTROLLER)
// ============================================================

const Stories = {
  activeTab: 'shao',

  switchTab(storyId, cardEl) {
    this.activeTab = storyId;
    
    // Update card selection states
    document.querySelectorAll('.story-selector-card').forEach(c => c.classList.remove('active'));
    if (cardEl) {
      cardEl.classList.add('active');
    } else {
      const activeCard = document.getElementById(`card-story-${storyId}`);
      if (activeCard) activeCard.classList.add('active');
    }

    // Toggle all story contents
    const stories = ['shao', 'tang', 'hendra'];
    stories.forEach(id => {
      const el = document.getElementById(`story-content-${id}`);
      if (el) {
        el.style.display = (id === storyId) ? 'block' : 'none';
      }
    });

    // Scroll to top of reading area smoothly
    const pageHeader = document.querySelector('#screen-stories .page-header');
    if (pageHeader) {
      pageHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
