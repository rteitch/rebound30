'use strict';

// ============================================================
// STORAGE LAYER
// ============================================================
const Store = {
  KEY: 'rebound30_v1',
  
  get() {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  },
  
  save(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch(e) {
      console.error('Storage error:', e);
    }
  },
  
  defaultState() {
    return {
      meta: {
        startDate: new Date().toISOString().split('T')[0],
        onboardingDone: false,
        lastBackupReminder: null,
        snapshotDay1: null,
      },
      profile: {
        employment: null,
        monthlyIncome: 0,
        incomeFrequency: 'bulanan',
        cash: 0,
        skills: [],
        goal: null,
      },
      expenses: {
        essential: { food: 0, housing: 0, utilities: 0, transport: 0, comm: 0, other: 0 },
        records: [],
      },
      debts: [],
      incomes: [],
      opportunities: [],
      assets: [],
      missions: {},
      achievements: [],
      settings: {
        backupReminderEnabled: true,
        backupReminderDays: 7,
        lastExport: null,
        debtStrategy: 'risk_first',
      },
    };
  }
};