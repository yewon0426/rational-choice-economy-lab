export interface TeacherNote {
  coreExplanation: string; // ① 핵심 설명
  studentQuestion: string; // ② 학생 질문
  misconceptions: string; // ③ 예상 오개념
  summaryComment: string; // ④ 정리 멘트
}

export type UnitId = 'unit1' | 'unit2' | 'summary' | 'quiz';

export interface SlideData {
  id: number; // 1 to 21
  unitId: UnitId;
  unitTitle: string; // UNIT 1. 합리적 선택의 의미와 한계 / UNIT 2. 지속가능발전을 위한 경제주체의 역할과 책임
  partTitle: string; // PART 1. 희소성과 합리적 선택, etc.
  mainTitle: string;
  subTitle: string;
  totalSteps: number; // For progressive disclosure
  teacherNote: TeacherNote;
}

export interface QuizQuestion {
  id: number;
  category: string;
  type: 'OX' | 'MULTIPLE_CHOICE' | 'CASE';
  question: string;
  scenario?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  misconceptionTip: string;
  ebsReference: string;
}
