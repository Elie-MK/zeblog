import * as Haptics from "expo-haptics";

export function handleVibrateButtonPress() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
}
