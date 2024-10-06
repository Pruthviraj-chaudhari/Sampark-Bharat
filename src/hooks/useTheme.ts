import { themes } from "@/lib/data";

type ThemeType = keyof typeof themes;

function useTheme(profile: any) {
  if (profile && profile.theme && themes[profile.theme as ThemeType]) {
    return themes[profile.theme as ThemeType];
  }
  // Default theme or fallback
  return themes['politics1'];
}

export default useTheme;
