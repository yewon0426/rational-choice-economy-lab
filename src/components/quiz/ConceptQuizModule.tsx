import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quizData';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, ArrowLeft, RotateCcw, BookOpen } from 'lucide-react';

interface Props {
  onBackToPresentation: () => void;
}

export const ConceptQuizModule: React.FC<Props> = ({ onBackToPresentation }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (!isAnswerRevealed) {
      setSelectedOption(idx);
      setUserAnswers(prev => ({ ...prev, [currentIndex]: idx }));
    }
  };

  const handleRevealAnswer = () => {
    setIsAnswerRevealed(true);
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(userAnswers[currentIndex + 1] ?? null);
      setIsAnswerRevealed(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(userAnswers[currentIndex - 1] ?? null);
      setIsAnswerRevealed(false);
    }
  };

  const handleJumpTo = (index: number) => {
    setCurrentIndex(index);
    setSelectedOption(userAnswers[index] ?? null);
    setIsAnswerRevealed(false);
  };

  const handleResetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setUserAnswers({});
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 md:p-5 bg-[#FAF8F5]">
      {/* Top Header for Quiz */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-indigo-900 text-white font-black text-sm rounded-lg uppercase tracking-wider">
            개념 점검 10제
          </span>
          <h2 className="text-2xl md:text-[28px] font-black text-slate-900">
            {currentQ.category}
          </h2>
        </div>

        {/* 1 to 10 Question Selector Strip */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const isAnswered = userAnswers[idx] !== undefined;
            const isSelected = currentIndex === idx;
            return (
              <button
                key={q.id}
                onClick={() => handleJumpTo(idx)}
                className={`w-9 h-9 rounded-xl text-sm font-black transition ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-indigo-400'
                    : isAnswered
                    ? 'bg-indigo-100 text-indigo-950 hover:bg-indigo-200'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question & Options Area */}
      <div className="my-2 grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch overflow-y-auto">
        {/* Left Side: Question (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-black px-3 py-1 bg-teal-100 text-teal-900 rounded-lg">
                문항 0{currentQ.id} / 10
              </span>
              <span className="text-sm font-bold text-slate-500">
                {currentQ.type === 'OX' ? 'OX 판별형' : currentQ.type === 'CASE' ? '사례 판단형' : '객관식 선택형'}
              </span>
            </div>

            <h3 className="text-[24px] md:text-[28px] font-black text-slate-900 leading-snug mb-3">
              {currentQ.question}
            </h3>

            {currentQ.scenario && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-[19px] md:text-[21px] text-slate-800 whitespace-pre-line leading-relaxed font-sans">
                {currentQ.scenario}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm text-slate-600 font-semibold">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-slate-400" />
              {currentQ.ebsReference}
            </span>
          </div>
        </div>

        {/* Right Side: Options & Reveal Box (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                선택지 (클릭하여 선택)
              </span>
              {!isAnswerRevealed && (
                <button
                  onClick={handleRevealAnswer}
                  disabled={selectedOption === null}
                  className={`px-4 py-2 text-sm font-black rounded-xl transition ${
                    selectedOption !== null
                      ? 'bg-indigo-900 text-white hover:bg-indigo-800 shadow'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  교사 정답 및 해설 공개
                </button>
              )}
            </div>

            {/* Options List with 20~24px text */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctAnswerIndex;

                let optionStyle = 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800';

                if (isAnswerRevealed) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-400 text-rose-950 line-through';
                  } else {
                    optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-indigo-50 border-indigo-600 text-indigo-950 font-black ring-2 ring-indigo-200';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl border-2 text-left text-[20px] md:text-[23px] font-bold transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center font-black text-sm shrink-0">
                        {currentQ.type === 'OX' ? (idx === 0 ? 'O' : 'X') : idx + 1}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswerRevealed && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerRevealed && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Section */}
          {isAnswerRevealed && (
            <div className="mt-3 p-4 rounded-2xl bg-slate-900 text-white animate-fadeIn">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-black px-2.5 py-0.5 bg-yellow-400 text-slate-950 rounded">
                  정답 해설
                </span>
                <span className="text-sm font-bold text-yellow-300">
                  정답: {currentQ.type === 'OX' ? (currentQ.correctAnswerIndex === 0 ? 'O' : 'X') : `${currentQ.correctAnswerIndex + 1}번`}
                </span>
              </div>
              <p className="text-[19px] md:text-[21px] text-slate-100 leading-snug mb-2 font-medium">
                {currentQ.explanation}
              </p>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-base text-amber-200 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <span><strong>오개념 바로잡기:</strong> {currentQ.misconceptionTip}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation for Quiz */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
        <button
          onClick={onBackToPresentation}
          className="px-4 py-2 text-base font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition shadow-xs"
        >
          ← 본문 수업 발표 화면으로 복귀
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleResetQuiz}
            className="px-3 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-1.5 transition"
          >
            <RotateCcw className="w-4 h-4" />
            문제 처음부터
          </button>

          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 text-base font-bold rounded-xl flex items-center gap-1.5 transition ${
              currentIndex > 0
                ? 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            이전 문제
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === QUIZ_QUESTIONS.length - 1}
            className={`px-5 py-2 text-base font-bold rounded-xl flex items-center gap-1.5 transition ${
              currentIndex < QUIZ_QUESTIONS.length - 1
                ? 'bg-slate-900 text-white hover:bg-slate-800 shadow'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            다음 문제
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
