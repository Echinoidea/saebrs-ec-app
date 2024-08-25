import { Colors } from '@/constants/Colors';
import { Question } from '@/types/Question';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
} from '@expo-google-fonts/quicksand'; 
import { useState } from 'react';
import { StyleSheet, useColorScheme, View, Text, ImageBackground, DimensionValue, Button, Pressable } from 'react-native';

export function SurveyAnswerButton({
  text,
  onPress,
  basis
}: {
  text: string;
  onPress: () => void;
  basis: number;
}) {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
  });

  const [ buttonColor, setButtonColor ] = useState<string>(Colors.light.card_background);

  const handlePressIn = () => {
    setButtonColor(Colors.light.card_border);
  }

  const handlePressOut = () => {
    onPress();
    setButtonColor(Colors.light.card_background);
  }
  
  return (
    <Pressable style={{
      backgroundColor: buttonColor,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: Colors.light.card_border,
      paddingHorizontal: 32,
      paddingVertical: 16,
      alignItems: 'center',
      justifyContent: 'center',
      flexBasis: `${basis}%`,
      flexGrow: 1
    }} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = {
  text: {
    fontFamily: 'Quicksand_400Regular',
    fontSize: 22,
  },
};
