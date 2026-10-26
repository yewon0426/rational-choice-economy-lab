import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Building2, Users2, ShoppingCart, Globe2 } from 'lucide-react';

interface Props {
  step: number; // 1 to 3
}

export const GrandConceptMap: React.FC<Props> = ({ step }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-1">
      {/* Intro Header */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-teal-700 tracking-wider block mb-0.5">
            통합사회2 종합 정리
          </span>
          <h3 className="text-[26px] md:text-[28px] font-black text-slate-900">
            대단원 핵심 개념 연결망 (Grand Concept Map)
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold px-3 py-1 bg-indigo-50 text-indigo-900 rounded-lg border border-indigo-200">
            단계 {step} / 3 공개 완료
          </span>
        </div>
      </div>

      {/* Main 3-Stage Layout (Full Height & Balanced Density) */}
      <div className="my-2 grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left Side: 3-Stage Progressive Flow (7 Cols) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-2">
          {/* 1단계: 합리적 선택의 출발 */}
          <div
            className={`p-4 rounded-2xl border-2 transition-all flex-1 flex flex-col justify-center ${
              step >= 1
                ? 'bg-teal-50/80 border-teal-300 shadow-xs'
                : 'bg-slate-50 border-dashed border-slate-200 opacity-30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black px-2.5 py-0.5 bg-teal-700 text-white rounded-md">
                1단계
              </span>
              <span className="text-base font-bold text-teal-950">합리적 선택의 출발</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap text-base md:text-lg font-bold text-slate-800">
              <span className="px-3 py-1 bg-white rounded-lg border border-teal-200 shadow-xs">자원의 희소성</span>
              <ArrowRight className="w-4 h-4 text-teal-700 shrink-0" />
              <span className="px-3 py-1 bg-white rounded-lg border border-teal-200 shadow-xs">선택의 필요성</span>
              <ArrowRight className="w-4 h-4 text-teal-700 shrink-0" />
              <span className="px-3 py-1 bg-white rounded-lg border border-teal-200 shadow-xs">기회비용 발생</span>
              <ArrowRight className="w-4 h-4 text-teal-700 shrink-0" />
              <span className="px-3 py-1 bg-teal-700 text-white rounded-lg shadow-xs">합리적 선택 (순편익 극대화)</span>
            </div>
          </div>

          {/* 2단계: 합리적 선택의 한계 */}
          <div
            className={`p-4 rounded-2xl border-2 transition-all flex-1 flex flex-col justify-center ${
              step >= 2
                ? 'bg-rose-50/80 border-rose-300 shadow-xs'
                : 'bg-slate-50 border-dashed border-slate-200 opacity-30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black px-2.5 py-0.5 bg-rose-600 text-white rounded-md">
                2단계
              </span>
              <span className="text-base font-bold text-rose-950">합리적 선택의 한계와 보완</span>
            </div>
            {step >= 2 ? (
              <div className="flex items-center gap-2 flex-wrap text-base md:text-lg font-bold text-slate-800">
                <span className="px-3 py-1 bg-white rounded-lg border border-rose-200 shadow-xs">개인의 합리적 선택</span>
                <ArrowRight className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="px-3 py-1 bg-rose-100 text-rose-950 rounded-lg border border-rose-300">
                  시장 실패 가능성 (독과점·외부효과·공공재·정보비대칭)
                </span>
                <ArrowRight className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="px-3 py-1 bg-slate-900 text-white rounded-lg shadow-xs">
                  정부의 시장 개입과 보완
                </span>
              </div>
            ) : (
              <div className="text-sm text-slate-400 py-3 font-medium">단계별 공개 시 2단계가 표시됩니다</div>
            )}
          </div>

          {/* 3단계: 지속가능한 경제 */}
          <div
            className={`p-4 rounded-2xl border-2 transition-all flex-1 flex flex-col justify-center ${
              step >= 3
                ? 'bg-indigo-900 text-white border-indigo-950 shadow-md'
                : 'bg-slate-50 border-dashed border-slate-200 opacity-30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black px-2.5 py-0.5 bg-yellow-400 text-slate-950 rounded-md">
                3단계
              </span>
              <span className="text-base font-bold text-yellow-300">지속가능한 경제의 완성</span>
            </div>
            {step >= 3 ? (
              <div className="space-y-2">
                <div className="text-sm font-medium text-indigo-200">
                  정부의 역할 + 기업가의 책임 + 노동자의 권리와 역할 + 소비자 주권과 윤리적 소비
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-yellow-300 shrink-0" />
                  <span className="text-xl md:text-2xl font-black text-yellow-300">
                    지속가능발전 (Sustainable Development) 달성!
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-sm text-slate-400 py-3 font-medium">단계별 공개 시 3단계가 표시됩니다</div>
            )}
          </div>
        </div>

        {/* Right Side: 한글 중심 경제주체 관계도 (5 Cols) */}
        <div className="md:col-span-5 bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-black text-slate-900 mb-3 text-center">
              지속가능한 경제를 위한 4대 경제주체의 협력도
            </h4>

            <div className="grid grid-cols-2 gap-3 text-center">
              {/* 정부 */}
              <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center mx-auto mb-1">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-sm font-black text-indigo-950 block">정부</span>
                <span className="text-xs text-indigo-800 font-medium">공정 경쟁 · 공공재 공급 · 소득 재분배</span>
              </div>

              {/* 기업가 */}
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-200">
                <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center mx-auto mb-1">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-black text-orange-950 block">기업가</span>
                <span className="text-xs text-orange-800 font-medium">혁신과 도전 · ESG 경영 · 사회적 책임</span>
              </div>

              {/* 노동자 */}
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200">
                <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center mx-auto mb-1">
                  <Users2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-black text-teal-950 block">노동자</span>
                <span className="text-xs text-teal-800 font-medium">노동 3권 보장 · 성실한 생산 참여</span>
              </div>

              {/* 소비자 */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mx-auto mb-1">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <span className="text-sm font-black text-emerald-950 block">소비자</span>
                <span className="text-xs text-emerald-800 font-medium">소비자 주권 · 친환경 및 윤리적 소비</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-900 text-white rounded-xl text-center text-sm font-bold mt-3">
            🌱 네 주체가 상호 존중과 신뢰로 협력할 때 지속가능한 경제가 작동합니다.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-3.5 bg-slate-900 text-white rounded-2xl text-[19px] md:text-[21px] font-bold text-center">
        💡 <strong className="text-yellow-300">핵심 정리:</strong> 개인의 합리적 선택에서 출발하여 시장 실패를 극복하고, 모든 경제주체의 책임 있는 협력으로 지속가능발전을 이룹니다.
      </div>
    </div>
  );
};
