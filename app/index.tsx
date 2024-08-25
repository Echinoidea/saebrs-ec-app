import { Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

import { Question } from "@/types/Question";
import { SurveyQuestionCard } from "@/components/SurveyQuestionCard";
import { SurveyAnswerButton } from "@/components/SurveyAnswerButton";
import { SurveyQuestion } from "@/components/SurveyQuestion";


const questions: Question[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answers: [
      {
        text: "yes"
      },
      {
        text: 'no'
      },
      {
        text: 'maybe'
      },
      {
        text: 'deinitely'
      }
    ]
  }
]

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.light.background,  
    }}>
      <SurveyQuestion question={questions[0]}/>
    </View>
  );
}
