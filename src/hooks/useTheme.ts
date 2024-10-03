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
