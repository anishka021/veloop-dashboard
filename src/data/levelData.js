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
  { level: 1, name: "Beginner", status: "completed", reward: "50 VEs", animal: "bird" },
  { level: 2, name: "Explorer", status: "completed", reward: "100 VEs", animal: "chick" },
  { level: 3, name: "Adventurer", status: "completed", reward: "10 Gems", animal: "fox" },
  { level: 4, name: "Rising Star", status: "current", reward: "500 VEs", animal: "owl" },
  { level: 5, name: "Achiever", status: "next", reward: "20 Gems", animal: "lion" },
  { level: 6, name: "Champion", status: "locked", reward: "2 Spins", animal: "dragon" },
];

export const xpActivity = [
  { id: 1, amount: 20, source: "Referral Bonus", time: "2h ago", iconType: "referral" },
  { id: 2, amount: 50, source: "Daily Task", time: "5h ago", iconType: "target" },
  { id: 3, amount: 100, source: "Watch & Earn", time: "1d ago", iconType: "video" },
  { id: 4, amount: 25, source: "Game Challenge", time: "2d ago", iconType: "game" },
];

export const earningOpportunities = [
  { id: 1, title: "Daily Challenge", reward: "+50 XP", desc: "Complete today's mission", iconType: "target", color: "gold", available: true },
  { id: 2, title: "Watch & Earn", reward: "+30 XP", desc: "Watch eligible ads", iconType: "video", color: "blue", available: true },
  { id: 3, title: "Refer & Earn", reward: "+100 XP", desc: "Invite friends", iconType: "referral", color: "green", available: true },
  { id: 4, title: "Play & Earn", reward: "+25 XP", desc: "Play mini-game", iconType: "game", color: "purple", available: true },
  { id: 5, title: "Bonus Missions", reward: "+75 XP", desc: "Special missions", iconType: "star", color: "gold", available: false, comingSoon: true },
  { id: 6, title: "Streak XP", reward: "+20 XP", desc: "Maintain streak", iconType: "flame", color: "blue", available: false, comingSoon: true },
];

export const achievements = [
  { id: 1, label: "First Step", unlocked: true, type: "star" },
  { id: 2, label: "Focused", unlocked: true, type: "target" },
  { id: 3, label: "On Fire", unlocked: true, type: "flame" },
  { id: 4, label: "Champion", unlocked: false, type: "lock" },
  { id: 5, label: "Legend", unlocked: false, type: "key" },
  { id: 6, label: "Diamond", unlocked: false, type: "diamond" },
];

export const motivationalQuotes = [
  '<strong>Tip:</strong> Play the daily game to earn bonus XP! 🎮',
  '<strong>Almost there!</strong> Just 1,580 XP to Level 05. Keep going! 🚀',
  '<strong>Did you know?</strong> Referring friends gives you +100 XP! 👥',
  '<strong>Daily streaks</strong> multiply your rewards. Don\'t break the chain! 🔥',
  '<strong>New challenges</strong> unlock every day. Come back tomorrow! ⭐',
  '<strong>You\'re doing great!</strong> Top 15% of all players this week! 🏆',
];

export const mascotMessages = [
  'Hi! Ready to level up? 🚀',
  'Click me for sparkles! ✨',
  'You\'re doing amazing! 🌟',
  'Let\'s play a game! 🎮',
  'Almost Level 05! 💪',
  'Keep earning XP! ⚡',
];
