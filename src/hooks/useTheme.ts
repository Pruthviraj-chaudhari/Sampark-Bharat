// Define available themes with Tailwind classes
const themes = {
  politics1: {
    background: 'bg-orange-400',
    textBackground: 'text-orange-400',
    textPrimary: 'text-gray-700',
    textSecondary: 'text-gray-600'
  },
  politics2: {
    background: 'bg-[#DE2695]',
    textBackground: 'text-[#DE2695]',
    textPrimary: 'text-white',
    textSecondary: 'text-white'
  },
  politics3: {
    background: 'bg-sky-400',
    textBackground: 'text-sky-400',
    textPrimary: 'text-white',
    textSecondary: 'text-white'
  },
  org1: {
    background: 'bg-slate-900',
    textBackground: 'text-slate-900',
    textPrimary: 'text-slate-200',
    textSecondary: 'text-slate-300'
  },
  business1: {
    background: 'bg-[#c7dfef]',
    textBackground: 'text-blue-600',
    textPrimary: 'text-gray-700',
    textSecondary: 'text-blue-600 '
  },
  business2: {
    background: 'bg-orange-400',
    textBackground: 'text-orange-400',
    textPrimary: 'text-gray-700',
    textSecondary: 'text-gray-600'
  },
  // Add more themes as needed
  luxury1: {
    background: 'bg-[#2d6a4f]',
    textBackground: 'text-[#2d6a4f]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury2: {
    background: 'bg-[#1b4332]',
    textBackground: 'text-[#1b4332]',
    textPrimary: 'text-slate-100',
    textSecondary: 'text-slate-300',
  },
  luxury3: {
    background: 'bg-[#5a189a]',
    textBackground: 'text-[#5a189a]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury4: {
    background: 'bg-[#333533]',
    textBackground: 'text-[#333533]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
  },
  luxury5: {
    background: 'bg-[#274c77]',
    textBackground: 'text-[#274c77]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury6: {
    background: 'bg-[#7d3417]',
    textBackground: 'text-[#7d3417]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
  },
  luxury7: {
    background: 'bg-[#b14223]',
    textBackground: 'text-[#b14223]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury8: {
    background: 'bg-[#41335c]',
    textBackground: 'text-[#41335c]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
  },
  luxury9: {
    background: 'bg-[#a67564]',
    textBackground: 'text-[#a67564]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
  },
  luxury10: {
    background: 'bg-[#723e31]',
    textBackground: 'text-[#723e31]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury11: {
    background: 'bg-[#d88b79]',
    textBackground: 'text-[#d88b79]',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  luxury12: {
    background: 'bg-[#a71f13]',
    textBackground: 'text-[#a71f13]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury13: {
    background: 'bg-[#a7382d]',
    textBackground: 'text-[#a7382d]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
  },
  luxury14: {
    background: 'bg-[#3A6D8C]',
    textBackground: 'text-[#3A6D8C]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury15: {
    background: 'bg-[#507687]',
    textBackground: 'text-[#507687]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },

   // Additional Luxury Themes
   luxury16: {
    background: 'bg-[#4a4e69]',
    textBackground: 'text-[#4a4e69]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury17: {
    background: 'bg-[#6a994e]',
    textBackground: 'text-[#6a994e]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-200',
  },
  luxury18: {
    background: 'bg-[#184e77]',
    textBackground: 'text-[#184e77]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-200',
  },
  luxury19: {
    background: 'bg-[#ff6700]',
    textBackground: 'text-[#ff6700]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
  },
  luxury20: {
    background: 'bg-[#0a9396]',
    textBackground: 'text-[#0a9396]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury21: {
    background: 'bg-[#5f0f40]',
    textBackground: 'text-[#5f0f40]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-200',
  },
  luxury22: {
    background: 'bg-[#8338ec]',
    textBackground: 'text-[#8338ec]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury23: {
    background: 'bg-[#264653]',
    textBackground: 'text-[#264653]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
  },
  luxury24: {
    background: 'bg-[#b5838d]',
    textBackground: 'text-[#b5838d]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },
  luxury25: {
    background: 'bg-[#0d3b66]',
    textBackground: 'text-[#0d3b66]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
  },

  gradient1: {
    background: 'bg-gradient-to-l from-blue-100 to-blue-300',
    textBackground: 'text-gradient-to-r from-blue-100 to-blue-300',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  gradient2: {
    background: 'bg-gradient-to-r from-gray-100 to-gray-300',
    textBackground: 'text-gradient-to-r from-gray-100 to-gray-300',
    textPrimary: 'text-gray-700',
    textSecondary: 'text-gray-500',
  },
  gradient3: {
    background: 'bg-gradient-to-r from-green-100 to-teal-200',
    textBackground: 'text-gradient-to-r from-green-100 to-teal-200',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  gradient4: {
    background: 'bg-gradient-to-r from-purple-100 to-indigo-200',
    textBackground: 'text-gradient-to-r from-purple-100 to-indigo-200',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  gradient5: {
    background: 'bg-gradient-to-r from-teal-100 to-teal-300',
    textBackground: 'text-gradient-to-r from-teal-100 to-teal-300',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  gradient6: {
    background: 'bg-gradient-to-r from-slate-100 to-slate-200',
    textBackground: 'text-gradient-to-r from-slate-100 to-slate-200',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  gradient7: {
    background: 'bg-gradient-to-r from-yellow-100 to-orange-200',
    textBackground: 'text-gradient-to-r from-yellow-100 to-orange-200',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  gradient8: {
    background: 'bg-gradient-to-r from-emerald-100 to-emerald-300',
    textBackground: 'text-gradient-to-r from-emerald-100 to-emerald-300',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  gradient9: {
    background: 'bg-gradient-to-r from-indigo-100 to-indigo-300',
    textBackground: 'text-gradient-to-r from-indigo-100 to-indigo-300',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },
  gradient10: {
    background: 'bg-gradient-to-r from-rose-100 to-pink-200',
    textBackground: 'text-gradient-to-r from-rose-100 to-pink-200',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
  },

  darkGradient1: {
    background: 'bg-gradient-to-r from-gray-800 to-gray-900',
    textBackground: 'text-gradient-to-r from-gray-800 to-gray-900',
    textPrimary: 'text-gray-300',
    textSecondary: 'text-gray-400',
  },
  darkGradient2: {
    background: 'bg-gradient-to-r from-slate-700 to-slate-900',
    textBackground: 'text-gradient-to-r from-slate-700 to-slate-900',
    textPrimary: 'text-slate-200',
    textSecondary: 'text-slate-400',
  },
  darkGradient3: {
    background: 'bg-gradient-to-r from-indigo-900 to-gray-900',
    textBackground: 'text-gradient-to-r from-indigo-900 to-gray-900',
    textPrimary: 'text-indigo-300',
    textSecondary: 'text-indigo-400',
  },
  darkGradient4: {
    background: 'bg-gradient-to-r from-purple-900 to-indigo-900',
    textBackground: 'text-gradient-to-r from-purple-900 to-indigo-900',
    textPrimary: 'text-gray-300',
    textSecondary: 'text-gray-400',
  },
  darkGradient5: {
    background: 'bg-gradient-to-r from-teal-800 to-teal-900',
    textBackground: 'text-gradient-to-r from-teal-800 to-teal-900',
    textPrimary: 'text-teal-300',
    textSecondary: 'text-teal-400',
  },
  darkGradient6: {
    background: 'bg-gradient-to-r from-blue-900 to-gray-800',
    textBackground: 'text-gradient-to-r from-blue-900 to-gray-800',
    textPrimary: 'text-blue-300',
    textSecondary: 'text-blue-400',
  },
  darkGradient7: {
    background: 'bg-gradient-to-r from-emerald-900 to-teal-900',
    textBackground: 'text-gradient-to-r from-emerald-900 to-teal-900',
    textPrimary: 'text-gray-300',
    textSecondary: 'text-gray-400',
  },
  darkGradient8: {
    background: 'bg-gradient-to-r from-black to-gray-800',
    textBackground: 'text-gradient-to-r from-black to-gray-800',
    textPrimary: 'text-gray-300',
    textSecondary: 'text-gray-400',
  },
  darkGradient9: {
    background: 'bg-gradient-to-r from-red-900 to-gray-800',
    textBackground: 'text-gradient-to-r from-red-900 to-gray-800',
    textPrimary: 'text-red-300',
    textSecondary: 'text-gray-400',
  },
  darkGradient10: {
    background: 'bg-gradient-to-r from-gray-700 to-black',
    textBackground: 'text-gradient-to-r from-gray-700 to-black',
    textPrimary: 'text-gray-200',
    textSecondary: 'text-gray-400',
  },
};

type ThemeType = keyof typeof themes;

function useTheme(profile: any) {
  if (profile && profile.theme && themes[profile.theme as ThemeType]) {
    return themes[profile.theme as ThemeType];
  }
  // Default theme or fallback
  return themes['politics1'];
}

export default useTheme;
