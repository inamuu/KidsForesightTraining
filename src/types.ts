export type CategoryKey =
  | "foresight"
  | "communication"
  | "perspective"
  | "planning"
  | "responsibility";

export interface CategoryMeta {
  label: string;
  description: string;
  praise: string;
  hint: string;
  color: string;
  softColor: string;
}

export interface QuestionChoice {
  id: string;
  text: string;
  score: 0 | 1 | 2;
  feedback: string;
}

export interface LearningPoint {
  label: string;
  text: string;
}

export interface Question {
  id: string;
  title: string;
  situation: string;
  categories: CategoryKey[];
  choices: QuestionChoice[];
  bestChoiceId: string;
  explanation: string;
  learningPoints: LearningPoint[];
  illustration: string;
  tags: string[];
}

export interface QuestionSet {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface AnswerRecord {
  question: Question;
  choice: QuestionChoice;
}

export interface CategoryStat {
  key: CategoryKey;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

