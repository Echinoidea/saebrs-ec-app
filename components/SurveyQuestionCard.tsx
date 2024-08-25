import { Colors } from '@/constants/Colors';
import { Question } from '@/types/Question';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
} from '@expo-google-fonts/quicksand'; 
import { StyleSheet, useColorScheme, View, Text, ImageBackground, DimensionValue } from 'react-native';

export function SurveyQuestionCard({
  question,
  paddingVertical,
  paddingHorizontal
}: {
  question: Question;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
}) {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
  });

  return (
    <View style={{
      borderWidth: 1,
      backgroundColor: Colors.light.card_background,
      borderColor: Colors.light.card_border,
      borderRadius: 6, 
      paddingVertical: paddingVertical, 
      paddingHorizontal: paddingHorizontal,
    }}>
      <Text style={styles.text}>
        {question.text}
      </Text>
    </View>
  )
}

const styles = {
  text: {
    fontFamily: 'Quicksand_400Regular',
    fontSize: 22,
    paddingHorizontal: 8
  },
};
