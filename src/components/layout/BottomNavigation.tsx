import React from 'react';
import { ArrowLeft, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
  currentIndex: number;
  totalSlides: number;
  step: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onOpenOverview: () => void;
  onOpenQuiz: () => void;
}

export const BottomNavigation: React.FC<Props> = ({
  slide,
  currentIndex,
  totalSlides,
  step,
  onPrevSlide,
  onNextSlide,
  onNextStep,
  onPrevStep,
  onOpenOverview,
  onOpenQuiz
}) => {
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalSlides - 1;
  const isAllRevealed = step >= slide.totalSteps;

  return (
    <footer className="h-16 px-4 md:px-6 bg-white/95 backdrop-blur-md border-t border-slate-200 flex items-center justify-between gap-4 select-none shrink-0 z-30">
      {/* Left: Slide Information & Overview Drawer Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenOverview}
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition flex items-center gap-1.5 text-xs font-bold"
          title="단원 전체 목록 보기"
        >
          <Layers className="w-4 h-4 text-indigo-900" />
          <span className="hidden sm:inline">목차</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md font-mono">
            {slide.id.toString().padStart(2, '0')} / {totalSlides}
          </span>
          <span className="hidden md:inline text-slate-400">·</span>
          <span className="hidden md:inline text-slate-700 truncate max-w-xs">
            {slide.partTitle}
          </span>
        </div>
      </div>

      {/* Middle: Progress Bar & Step Disclosure Action */}
      <div className="flex-1 max-w-md mx-4 hidden sm:flex items-center gap-3">
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
          <div
            className="bg-teal-700 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
          />
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {step > 1 && (
            <button
              onClick={onPrevStep}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-md transition whitespace-nowrap"
            >
              이전 단계
            </button>
          )}

          {!isAllRevealed && (
            <button
              onClick={onNextStep}
              className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-md shadow-xs flex items-center gap-1 whitespace-nowrap transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              단계 공개 (Space)
            </button>
          )}
        </div>
      </div>

      {/* Right: Previous / Next Slide Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevSlide}
          disabled={isFirstSlide}
          className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition ${
            !isFirstSlide
              ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 shadow-xs'
              : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
          }`}
          title="이전 슬라이드 (← 방향키)"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">이전</span>
        </button>

        <button
          onClick={onNextSlide}
          className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow transition"
          title={isLastSlide ? '개념 확인 평가로 이동' : '다음 슬라이드 (→ 방향키)'}
        >
          <span>{isLastSlide ? '확인 평가 10제 풀기' : '다음'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
