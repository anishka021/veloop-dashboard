export const levelData = {
  currentLevel: 4,
  currentLevelName: "Rising Star",
  currentXP: 6420,
  nextLevel: 5,
  nextLevelName: "Achiever",
  requiredXP: 8000,
  nextLevelReward: { type: "VEs", amount: 500 },
  xpRemaining: 1580,
  progressPercent: 80,
};

export const levelRoadmap = [
  { level: 1, name: "Beginner", status: "completed", reward: "50 VEs", emoji: "🐣" },
  { level: 2, name: "Explorer", status: "completed", reward: "100 VEs", emoji: "🐥" },
  { level: 3, name: "Adventurer", status: "completed", reward: "10 Gems", emoji: "🦊" },
  { level: 4, name: "Rising Star", status: "current", reward: "500 VEs", emoji: "🦉" },
  { level: 5, name: "Achiever", status: "next", reward: "20 Gems", emoji: "🦁" },
  { level: 6, name: "Champion", status: "locked", reward: "2 Spins", emoji: "🐉" },
];

export const xpActivity = [
  { id: 1, amount: 20, source: "Referral Bonus", time: "2h ago", icon: "👥" },
  { id: 2, amount: 50, source: "Daily Task", time: "5h ago", icon: "🎯" },
  { id: 3, amount: 100, source: "Watch & Earn", time: "1d ago", icon: "📺" },
  { id: 4, amount: 25, source: "Game Challenge", time: "2d ago", icon: "🎮" },
];

export const earningOpportunities = [
  { id: 1, title: "Daily Challenge", reward: "+50 XP", desc: "Complete today's mission", icon: "🎯", color: "gold", available: true },
  { id: 2, title: "Watch & Earn", reward: "+30 XP", desc: "Watch eligible ads", icon: "📺", color: "blue", available: true },
  { id: 3, title: "Refer & Earn", reward: "+100 XP", desc: "Invite friends", icon: "👥", color: "green", available: true },
  { id: 4, title: "Play & Earn", reward: "+25 XP", desc: "Play mini-game", icon: "🎮", color: "purple", available: true },
  { id: 5, title: "Bonus Missions", reward: "+75 XP", desc: "Special missions", icon: "⭐", color: "gold", available: false, comingSoon: true },
  { id: 6, title: "Streak XP", reward: "+20 XP", desc: "Maintain streak", icon: "🔥", color: "blue", available: false, comingSoon: true },
];
