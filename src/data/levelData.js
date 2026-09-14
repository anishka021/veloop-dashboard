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
  { level: 1, name: "Beginner", status: "completed", reward: "50 VEs" },
  { level: 2, name: "Explorer", status: "completed", reward: "100 VEs" },
  { level: 3, name: "Adventurer", status: "completed", reward: "10 Gems" },
  { level: 4, name: "Rising Star", status: "current", reward: "500 VEs" },
  { level: 5, name: "Achiever", status: "next", reward: "20 Gems" },
  { level: 6, name: "Champion", status: "locked", reward: "2 Spins" },
];

export const xpActivity = [
  { id: 1, amount: 20, source: "Referral Bonus", time: "2h ago", icon: "users" },
  { id: 2, amount: 50, source: "Daily Task", time: "5h ago", icon: "target" },
  { id: 3, amount: 100, source: "Watch & Earn", time: "1d ago", icon: "video" },
  { id: 4, amount: 25, source: "Game Challenge", time: "2d ago", icon: "gamepad" },
];

export const earningOpportunities = [
  { id: 1, title: "Daily Challenge", reward: "+50 XP", desc: "Complete today's mission", icon: "target", available: true, color: "gold" },
  { id: 2, title: "Watch & Earn", reward: "+30 XP", desc: "Watch eligible ads", icon: "video", available: true, color: "blue" },
  { id: 3, title: "Refer & Earn", reward: "+100 XP", desc: "Invite friends", icon: "users", available: true, color: "green" },
  { id: 4, title: "Play & Earn", reward: "+25 XP", desc: "Play mini-game", icon: "gamepad", available: true, color: "purple" },
  { id: 5, title: "Bonus Missions", reward: "+75 XP", desc: "Special missions", icon: "star", available: false, comingSoon: true, color: "gold" },
  { id: 6, title: "Streak XP", reward: "+20 XP", desc: "Maintain streak", icon: "flame", available: false, comingSoon: true, color: "blue" },
];