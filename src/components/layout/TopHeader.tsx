import React from 'react';
import { BookOpen, Layers, Maximize2, Minimize2, RotateCcw, Eye, Sparkles } from 'lucide-react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
  step: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  onRevealAll: () => void;
  onResetStep: () => void;
  onToggleTeacherNote: () => void;
  isTeacherNoteOpen: boolean;
  onOpenOverview: () => void;
  onOpenQuiz: () => void;
  onJumpToUnit: (unit: 'unit1' | 'kia' | 'unit2' | 'summary' | 'quiz') => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const TopHeader: React.FC<Props> = ({
  slide,
  step,
  onNextStep,
  onPrevStep,
  onRevealAll,
  onResetStep,
  onToggleTeacherNote,
  isTeacherNoteOpen,
  onOpenOverview,
  onOpenQuiz,
  onJumpToUnit,
  isFullscreen,
  onToggleFullscreen
}) => {
  const isAllRevealed = step >= slide.totalSteps;

  return (
    <header className="h-16 px-4 md:px-6 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between gap-4 select-none shrink-0 z-30">
      {/* Zone 1: Wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenOverview}
          className="flex items-center gap-2 group text-left focus:outline-hidden"
        >
          <span className="font-extrabold text-xl md:text-2xl tracking-tight text-indigo-950 font-['Plus_Jakarta_Sans',sans-serif]">
            ECONOMY <span className="text-orange-600">LAB</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            통합사회2
          </span>
        </button>
      </div>

      {/* Zone 2: Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
        <button
          onClick={() => onJumpToUnit('unit1')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
            slide.unitId === 'unit1' && slide.id < 3 ? 'text-teal-700 font-bold' : ''
          }`}
        >
          1. 희소성과 선택
        </button>
        <button
          onClick={() => onJumpToUnit('kia')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
            slide.id >= 3 && slide.id <= 6 ? 'text-orange-600 font-bold' : ''
          }`}
        >
          2. KIA 기회비용 시뮬레이터
        </button>
        <button
          onClick={() => onJumpToUnit('unit2')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
            slide.unitId === 'unit2' ? 'text-indigo-700 font-bold' : ''
          }`}
        >
          3. 경제주체의 역할
        </button>
        <button
          onClick={() => onJumpToUnit('summary')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
            slide.unitId === 'summary' ? 'text-slate-950 font-bold' : ''
          }`}
        >
          4. 종합 정리
        </button>
        <button
          onClick={() => onJumpToUnit('quiz')}
          className="hover:text-indigo-900 transition-colors whitespace-nowrap shrink-0 text-indigo-600 font-bold"
        >
          5. 개념 퀴즈 10제
        </button>
      </nav>

      {/* Zone 3: Presentation Tools */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Step-by-Step Reveal Control */}
        <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
          <button
            onClick={onPrevStep}
            disabled={step <= 1}
            className={`px-2 py-1.5 font-bold rounded-md transition whitespace-nowrap ${
              step > 1
                ? 'text-slate-700 hover:bg-slate-200'
                : 'text-slate-300 cursor-not-allowed'
            }`}
            title="이전 단계로 복귀"
          >
            이전 단계
          </button>
          <button
            onClick={onNextStep}
            disabled={isAllRevealed}
            className={`px-2.5 py-1.5 font-bold rounded-md transition whitespace-nowrap ${
              !isAllRevealed
                ? 'bg-teal-700 text-white shadow-xs hover:bg-teal-800'
                : 'text-slate-400 cursor-not-allowed'
            }`}
            title="다음 단계 공개 (스페이스바)"
          >
            단계 {step}/{slide.totalSteps}
          </button>
          <button
            onClick={onRevealAll}
            className="px-2 py-1.5 text-slate-700 hover:text-slate-950 font-medium transition whitespace-nowrap"
            title="전체 내용 즉시 공개"
          >
            전체 공개
          </button>
          <button
            onClick={onResetStep}
            className="p-1.5 text-slate-500 hover:text-slate-900 transition"
            title="설명 초기화"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Teacher's Note Button */}
        <button
          onClick={onToggleTeacherNote}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition flex items-center gap-1.5 whitespace-nowrap ${
            isTeacherNoteOpen
              ? 'bg-indigo-900 text-white shadow-sm'
              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
          title="교사용 지도서 및 발문 노트"
        >
          <BookOpen className="w-3.5 h-3.5 text-yellow-500" />
          <span className="hidden sm:inline">교사용 노트</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
          title={isFullscreen ? '창 모드로 복귀' : '전자칠판 전체 화면 (F11)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
