import { Answer } from "./Answer"

/**
 * Survey Question type
 * 
 * @since 2024-08-24
 */
export type Question = {
  text: string,
  answers: Answer[]
}
