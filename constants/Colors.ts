/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://ta  magui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintLight = "#f0f9ff"; // sky 50

export const Colors = {
  light: {
    text: '#0c0a09',
    background: '#e7e5e4',
    card_background: '#f5f5f4',
    card_border: '#d6d3d1',
    accent: '#fdba74',
    tint: '#bae6fd',
  },
  dark: {
    text: '#fafaf9',
    background: '#1c1917',
    tint: tintLight,
    icon: '#7dd3fc',
    tabIconDefault: '#7dd3fc',
    tabIconSelected: tintLight,
  }
};
