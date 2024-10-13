import { gradientThemes, luxuryThemes, solidThemes } from "@/lib/data";

type ThemeType = keyof typeof themes;

export const themes = {
  ...solidThemes,
  ...luxuryThemes,
  ...gradientThemes,
};

function useTheme(profile: any) {
  if (profile && profile.theme && themes[profile.theme as ThemeType]) {
    return themes[profile.theme as ThemeType];
  }
  // Default theme or fallback
  return themes['Solid1'];
}

export default useTheme;
