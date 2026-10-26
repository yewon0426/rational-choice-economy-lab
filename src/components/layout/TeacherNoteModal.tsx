import React from 'react';
import { TeacherNote } from '../../types';
import { X, BookOpen, MessageSquare, HelpCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  note: TeacherNote;
  slideNumber: number;
  slideTitle: string;
}

export const TeacherNoteModal: React.FC<Props> = ({
  isOpen,
  onClose,
  note,
  slideNumber,
  slideTitle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FAF8F5] border-2 border-indigo-200 rounded-3xl max-w-3xl w-full max-h-[88vh] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-indigo-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-800 flex items-center justify-center text-yellow-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-indigo-300 font-bold uppercase tracking-wider">
                교사용 교수학습 지도서 (화면 {slideNumber} / 21)
              </div>
              <h3 className="text-lg font-bold text-white">{slideTitle}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-indigo-300 hover:text-white hover:bg-indigo-900 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-800 text-sm">
          {/* ① 핵심 설명 */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-950 font-bold mb-1.5 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              ① 핵심 설명 (교사가 반드시 설명해야 할 개념)
            </div>
            <p className="text-slate-700 leading-relaxed pl-4 font-medium text-[15px]">
              {note.coreExplanation}
            </p>
          </div>

          {/* ② 학생 질문 */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-amber-900 font-bold mb-1.5 text-base">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              ② 학생 질문 (학생들의 사고를 유도할 발문)
            </div>
            <p className="text-slate-700 leading-relaxed pl-4 bg-amber-50/60 p-3 rounded-xl border border-amber-200 font-medium text-[15px]">
              "{note.studentQuestion}"
            </p>
          </div>

          {/* ③ 예상 오개념 */}
          <div className="p-4 bg-white rounded-2xl border border-rose-200 shadow-xs">
            <div className="flex items-center gap-2 text-rose-900 font-bold mb-1.5 text-base">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              ③ 예상 오개념 (학생들이 자주 혼동하는 개념)
            </div>
            <p className="text-rose-900 leading-relaxed pl-4 bg-rose-50/60 p-3 rounded-xl border border-rose-200 text-[15px]">
              {note.misconceptions}
            </p>
          </div>

          {/* ④ 정리 멘트 */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-xs">
            <div className="flex items-center gap-2 text-yellow-300 font-bold mb-1.5 text-base">
              <MessageSquare className="w-4 h-4 text-yellow-400" />
              ④ 정리 멘트 (수업에서 활용하는 핵심 요약)
            </div>
            <p className="text-slate-200 leading-relaxed pl-4 text-[15px] font-medium">
              "{note.summaryComment}"
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>EBS 개념완성 통합사회2 80~83쪽 교육과정 기준</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
          >
            닫기 (지도서 숨기기)
          </button>
        </div>
      </div>
    </div>
  );
};
