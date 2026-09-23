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

export const motivationalQuotes = [
  '<strong>Tip:</strong> Play the daily game to earn bonus XP! 🎮',
  '<strong>Almost there!</strong> Just 1,580 XP to Level 05! 🚀',
  '<strong>Did you know?</strong> Referring friends gives you +100 XP! 👥',
  '<strong>Daily streaks</strong> multiply your rewards! 🔥',
  '<strong>New challenges</strong> unlock every day! ⭐',
  "<strong>You're doing great!</strong> Top 15% of all players! 🏆",
];

export const mascotMessages = [
  'Hi! Ready to level up? 🚀',
  'Click me for sparkles! ✨',
  "You're doing amazing! 🌟",
  "Let's play a game! 🎮",
  'Almost Level 05! 💪',
  'Keep earning XP! ⚡',
];

// Earn Cards (Dashboard)
export const earnCards = [
  { id: 1, icon: '🎯', title: 'Daily Challenge', desc: "Complete today's mission and earn bonus XP", badge: '⚡ +50 XP', color: 'goldCard', active: true },
  { id: 2, icon: '📺', title: 'Watch & Earn', desc: 'Watch eligible ads and get rewarded instantly', badge: '⚡ +30 XP', color: 'blueCard', active: true },
  { id: 3, icon: '👥', title: 'Refer & Earn', desc: 'Invite friends to VELOOP and earn big rewards', badge: '⚡ +100 XP', color: 'greenCard', active: true },
  { id: 4, icon: '🎮', title: 'Play & Earn', desc: 'Play mini-game daily and boost your XP', badge: '⚡ +25 XP', color: 'purpleCard', active: true },
  { id: 5, icon: '🎁', title: 'Bonus Missions', desc: 'Complete special missions for extra rewards', badge: '🔜 Coming Soon', color: 'pinkCard', active: false },
  { id: 6, icon: '🔥', title: 'Streak XP', desc: 'Maintain daily streak for multiplied rewards', badge: '🔜 Coming Soon', color: 'cyanCard', active: false },
];

// Games page
export const gameCards = [
  { id: 1, icon: '🪙', title: 'VE Coin Catch', desc: 'Catch falling VE coins in 20 seconds. Score 80+ for max reward!', badge: '🔥 Most Popular', color: 'goldCard', active: true },
  { id: 2, icon: '🧩', title: 'Reward Memory', desc: 'Match reward cards to earn a small reward. Test your memory!', badge: '⚡ +20 XP', color: 'blueCard', active: true },
  { id: 3, icon: '⚡', title: 'Tap Challenge', desc: 'Complete a timed tapping challenge. Speed matters!', badge: '⚡ +15 XP', color: 'greenCard', active: true },
  { id: 4, icon: '🎁', title: 'Lucky Box', desc: 'Select one of several reward boxes. Discover your prize!', badge: '⚡ +10 XP', color: 'purpleCard', active: true },
  { id: 5, icon: '🏃', title: 'VE Sprint', desc: 'Complete a short skill-based challenge to unlock rewards', badge: '⚡ +25 XP', color: 'pinkCard', active: true },
  { id: 6, icon: '🧠', title: 'Daily Puzzle', desc: 'Complete a simple puzzle and receive an eligible reward', badge: '🔜 Coming Soon', color: 'cyanCard', active: false },
];

// Rewards page
export const rewardCards = [
  { id: 1, icon: '💎', title: '500 VEs', desc: 'Next level reward — reach Level 05 to unlock', badge: '🔒 Locked', color: 'goldCard', locked: true },
  { id: 2, icon: '✅', title: '100 VEs', desc: 'Level 02 reward — already unlocked', badge: '✓ Claimed', color: 'greenCard', locked: false },
  { id: 3, icon: '✅', title: '10 Gems', desc: 'Level 03 reward — already unlocked', badge: '✓ Claimed', color: 'blueCard', locked: false },
  { id: 4, icon: '💠', title: '20 Gems', desc: 'Level 05 reward — reach next level to unlock', badge: '🔒 Locked', color: 'purpleCard', locked: true },
  { id: 5, icon: '🎰', title: '2 Spins', desc: 'Level 06 reward — reach Level 06 to unlock', badge: '🔒 Locked', color: 'pinkCard', locked: true },
  { id: 6, icon: '🏆', title: 'Legendary Pack', desc: 'Level 10 reward — exclusive legendary rewards await', badge: '🔒 Locked', color: 'cyanCard', locked: true },
];

// Achievements page
export const achievementCards = [
  { id: 1, icon: '⭐', title: 'First Step', desc: 'Complete your first task. Welcome to VELOOP!', badge: '✓ Unlocked', color: 'goldCard', unlocked: true },
  { id: 2, icon: '🎯', title: 'Focused', desc: 'Complete 5 daily challenges in a row', badge: '✓ Unlocked', color: 'blueCard', unlocked: true },
  { id: 3, icon: '🔥', title: 'On Fire', desc: 'Maintain a 7-day streak', badge: '✓ Unlocked', color: 'pinkCard', unlocked: true },
  { id: 4, icon: '🏅', title: 'Champion', desc: 'Reach Level 05 and unlock this prestigious badge', badge: '🔒 Locked', color: 'purpleCard', unlocked: false },
  { id: 5, icon: '👑', title: 'Legend', desc: 'Reach Level 10 to become a VELOOP Legend', badge: '🔒 Locked', color: 'greenCard', unlocked: false },
  { id: 6, icon: '💎', title: 'Diamond', desc: 'Complete all achievements — the ultimate badge', badge: '🔒 Locked', color: 'cyanCard', unlocked: false },
  { id: 7, icon: '🎮', title: 'Gamer', desc: 'Play 10 mini-games and win rewards', badge: '✓ Unlocked', color: 'goldCard', unlocked: true },
  { id: 8, icon: '👥', title: 'Referrer', desc: 'Refer 3 friends to VELOOP', badge: '✓ Unlocked', color: 'blueCard', unlocked: true },
];

// Refer page
export const referCards = [
  { id: 1, icon: '💰', title: '+100 XP', desc: 'For every friend who signs up using your link', badge: '⚡ Instant Reward', color: 'goldCard' },
  { id: 2, icon: '🎁', title: '+500 VEs', desc: 'When 5 friends complete their first game', badge: '🎯 Milestone', color: 'pinkCard' },
  { id: 3, icon: '🏆', title: 'Referrer Badge', desc: 'Unlock exclusive badge after 3 referrals', badge: '🎖️ Achievement', color: 'purpleCard' },
  { id: 4, icon: '🚀', title: 'Super Referrer', desc: 'Refer 10 friends and unlock premium tier rewards', badge: '⭐ Premium', color: 'greenCard' },
  { id: 5, icon: '💎', title: 'Diamond Tier', desc: 'Refer 25 friends for exclusive Diamond rewards', badge: '💎 Elite', color: 'blueCard' },
  { id: 6, icon: '👑', title: 'Legend Tier', desc: 'Refer 50 friends — become a referral legend', badge: '👑 Ultimate', color: 'cyanCard' },
];