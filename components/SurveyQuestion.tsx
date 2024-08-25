import { Colors } from '@/constants/Colors';
import { Question } from '@/types/Question';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
} from '@expo-google-fonts/quicksand'; 
import { StyleSheet, useColorScheme, View, Text, ImageBackground, DimensionValue } from 'react-native';
import { SurveyAnswerButton } from './SurveyAnswerButton';
import { SurveyQuestionCard } from './SurveyQuestionCard';
import { Answer } from '@/types/Answer';


/**
 * Molecule containing one SurveyQuestionCard and 'n' SurveyQuestionAnswerButton componenets.
 * This will be the main content of the survey.
 * 
 * @todo Appears correctly on iPad dimensions, not good on phone.
 * 
 * @since 2024-08-25
 * 
 * @param question One Question type object
 * @returns ReactElement
 */
export function SurveyQuestion({
  question
}: {
  question: Question;
}) {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
  });

  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    }}>
      <SurveyQuestionCard question={question} paddingHorizontal={50} paddingVertical={100}/>
      
      <View style={{
        flex: 1,
        flexDirection: 'row',
        maxHeight: '8%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
      }}>
        {question.answers.map((answer: Answer, index: number) => {
          const basis = 1 / question.answers.length
          
          return (
            <SurveyAnswerButton text={answer.text} onPress={() => {}} basis={basis}/>
          )
        })}
      </View>
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
