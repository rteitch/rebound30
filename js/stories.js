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

    // Toggle content visibility with smooth fade
    const shaoContent = document.getElementById('story-content-shao');
    const tangContent = document.getElementById('story-content-tang');
    
    if (storyId === 'shao') {
      if (shaoContent) shaoContent.style.display = 'block';
      if (tangContent) tangContent.style.display = 'none';
    } else {
      if (shaoContent) shaoContent.style.display = 'none';
      if (tangContent) tangContent.style.display = 'block';
    }

    // Scroll to top of reading area smoothly
    const pageHeader = document.querySelector('#screen-stories .page-header');
    if (pageHeader) {
      pageHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
