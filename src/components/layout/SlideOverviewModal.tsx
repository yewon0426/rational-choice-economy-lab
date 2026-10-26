import React from 'react';
import { SLIDES_DATA } from '../../data/slidesData';
import { X, Layers, CheckCircle2, BookOpen } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentSlideId: number;
  onSelectSlide: (id: number) => void;
  onOpenQuiz: () => void;
}

export const SlideOverviewModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentSlideId,
  onSelectSlide,
  onOpenQuiz
}) => {
  if (!isOpen) return null;

  const unit1Slides = SLIDES_DATA.filter(s => s.unitId === 'unit1');
  const unit2Slides = SLIDES_DATA.filter(s => s.unitId === 'unit2');
  const summarySlides = SLIDES_DATA.filter(s => s.unitId === 'summary');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FAF8F5] border-2 border-slate-300 rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-yellow-400" />
            <div>
              <h3 className="text-lg font-bold">ECONOMY LAB 전체 단원 목차 네비게이터</h3>
              <p className="text-xs text-slate-400">화면을 클릭하면 해당 수업 화면으로 즉시 이동합니다</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* UNIT 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-teal-600" />
              <h4 className="font-bold text-slate-900 text-base">UNIT 1. 합리적 선택의 의미와 한계 (화면 1~12)</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {unit1Slides.map(s => {
                const isCurrent = currentSlideId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      onSelectSlide(s.id);
                      onClose();
                    }}
                    className={`p-3 rounded-xl border text-left transition flex items-start justify-between gap-2 ${
                      isCurrent
                        ? 'bg-teal-700 text-white border-teal-800 shadow'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <span className={`text-[11px] font-bold block ${isCurrent ? 'text-teal-200' : 'text-slate-400'}`}>
                        {s.id.toString().padStart(2, '0')}. {s.partTitle.split('.')[1] || s.partTitle}
                      </span>
                      <span className="font-semibold text-xs mt-0.5 line-clamp-1">{s.mainTitle}</span>
                    </div>
                    {isCurrent && <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* UNIT 2 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-indigo-600" />
              <h4 className="font-bold text-slate-900 text-base">UNIT 2. 지속가능발전을 위한 경제주체의 역할과 책임 (화면 13~20)</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {unit2Slides.map(s => {
                const isCurrent = currentSlideId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      onSelectSlide(s.id);
                      onClose();
                    }}
                    className={`p-3 rounded-xl border text-left transition flex items-start justify-between gap-2 ${
                      isCurrent
                        ? 'bg-indigo-700 text-white border-indigo-800 shadow'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <span className={`text-[11px] font-bold block ${isCurrent ? 'text-indigo-200' : 'text-slate-400'}`}>
                        {s.id.toString().padStart(2, '0')}. {s.partTitle.split('.')[1] || s.partTitle}
                      </span>
                      <span className="font-semibold text-xs mt-0.5 line-clamp-1">{s.mainTitle}</span>
                    </div>
                    {isCurrent && <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SUMMARY & QUIZ */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-orange-600" />
              <h4 className="font-bold text-slate-900 text-base">종합 정리 및 개념 확인 평가</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {summarySlides.map(s => {
                const isCurrent = currentSlideId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      onSelectSlide(s.id);
                      onClose();
                    }}
                    className={`p-4 rounded-xl border text-left transition flex items-start justify-between ${
                      isCurrent
                        ? 'bg-orange-600 text-white border-orange-700 shadow'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div>
                      <span className={`text-xs font-bold block ${isCurrent ? 'text-orange-200' : 'text-slate-400'}`}>
                        화면 21. {s.partTitle}
                      </span>
                      <span className="font-bold text-sm mt-1">{s.mainTitle}</span>
                    </div>
                  </button>
                );
              })}

              <button
                onClick={() => {
                  onOpenQuiz();
                  onClose();
                }}
                className="p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50 hover:bg-indigo-100 text-indigo-950 text-left transition flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-indigo-700 block">개념 점검 평가</span>
                  <span className="font-bold text-sm mt-1">EBS 연계 핵심 개념 확인 문제 10제</span>
                </div>
                <BookOpen className="w-5 h-5 text-indigo-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
