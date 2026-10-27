import React from 'react';
import { ArrowDown, Check } from 'lucide-react';

interface Props {
  slideId: number; // 1 or 2
  step: number;
}

export const ScarcityRationalVisualizer: React.FC<Props> = ({ slideId, step }) => {
  // SCREEN 1: 희소성과 경제 문제
  if (slideId === 1) {
    const flowItems = [
      {
        num: '01',
        title: '인간의 다양한 욕구',
        desc: '의식주, 건강, 여가, 문화 등 인간의 욕구는 무한하다.',
        color: 'bg-amber-50 border-amber-300 text-amber-950',
        badge: '무한함'
      },
      {
        num: '02',
        title: '한정된 자원',
        desc: '시간, 소득, 자연환경, 생산 자본 등 자원은 유한하다.',
        color: 'bg-slate-100 border-slate-300 text-slate-800',
        badge: '유한함'
      },
      {
        num: '03',
        title: '자원의 희소성',
        desc: '인간의 욕구에 비해 이를 채워줄 자원이 상대적으로 부족한 상태이다.',
        color: 'bg-teal-50 border-teal-400 text-teal-950',
        badge: '핵심 개념'
      },
      {
        num: '04',
        title: '선택의 필요성',
        desc: '모든 것을 가질 수 없으므로 우선순위에 따라 반드시 선택해야 한다.',
        color: 'bg-indigo-50 border-indigo-300 text-indigo-950',
        badge: '경제 문제'
      },
      {
        num: '05',
        title: '기회비용 발생',
        desc: '어떤 대안을 선택함으로써 포기해야 하는 다른 대안의 가치가 발생한다. 따라서 사람들은 선택할 때 발생하는 기회비용을 고려하여 합리적으로 선택해야 한다.',
        color: 'bg-orange-50 border-orange-400 text-orange-950',
        badge: '선택의 대가'
      }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        {/* Core Question Header */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-sm font-bold text-teal-700 tracking-wider block mb-1">
              경제 문제의 근본 원인
            </span>
            <h2 className="text-3xl md:text-[34px] font-extrabold text-[#0F1E36]">
              "우리는 왜 원하는 것을 모두 가질 수 없을까?"
            </h2>
          </div>
          <div className="text-sm font-semibold text-slate-600 bg-slate-100 px-3.5 py-2 rounded-xl hidden sm:block">
            단계별 공개: <strong className="text-teal-700 font-bold">{step}</strong> / 5 단계
          </div>
        </div>

        {/* 5-Step Vertical Flowchart (Enlarged width, 26~28px titles, 22~24px text) */}
        <div className="my-2 w-full max-w-5xl mx-auto flex flex-col items-center justify-center flex-1 gap-1">
          {flowItems.map((item, idx) => {
            const isRevealed = step >= idx + 1;
            return (
              <React.Fragment key={idx}>
                <div
                  className={`w-full px-6 py-3.5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between ${
                    isRevealed
                      ? `${item.color} shadow-sm opacity-100 scale-100`
                      : 'bg-slate-50/70 border-dashed border-slate-200 opacity-25 scale-98'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="w-10 h-10 rounded-xl bg-white shadow-xs font-bold text-lg flex items-center justify-center shrink-0 border border-slate-200">
                      {item.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-[26px] md:text-[28px] font-bold tracking-tight">
                          {item.title}
                        </h3>
                        {isRevealed && (
                          <span className="text-sm px-2.5 py-0.5 bg-white/90 rounded-md font-bold text-slate-700 border border-slate-200">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {isRevealed && (
                        <p className="text-[21px] md:text-[23px] text-slate-700 font-medium mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                  {isRevealed && (
                    <Check className="w-6 h-6 text-emerald-600 shrink-0 hidden md:block" />
                  )}
                </div>

                {idx < flowItems.length - 1 && (
                  <ArrowDown
                    className={`w-5 h-5 my-0.5 transition-colors ${
                      step >= idx + 2 ? 'text-teal-700 stroke-[2.5]' : 'text-slate-300'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Key Concept Summary (Enlarged text 22~24px) */}
        <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-sm flex items-center justify-between">
          <p className="text-[21px] md:text-[23px] font-medium leading-relaxed">
            💡 <strong className="text-yellow-300 font-bold">핵심 개념:</strong> 희소성은 단순히 자원의 절대적인 양이 적다는 뜻이 아니라,{' '}
            <span className="underline decoration-teal-400 font-bold text-teal-200">인간의 욕구에 비해 상대적으로 부족한 상태</span>를 의미합니다.
          </p>
          <span className="text-sm font-mono text-slate-400 shrink-0 ml-4 hidden lg:inline">EBS 개념완성 80p</span>
        </div>
      </div>
    );
  }

  // SCREEN 2: 합리적 선택과 순편익
  const rationalConcepts = [
    {
      title: '편익',
      desc: '어떤 경제적 선택을 통해 얻는 주관적 만족이나 금전적·비금전적 이익',
      color: 'bg-teal-50 border-teal-300 text-teal-950',
      badge: '선택의 이익'
    },
    {
      title: '비용',
      desc: '어떤 선택을 하기 위해 실제로 치르거나 포기해야 하는 모든 대가와 희생',
      color: 'bg-rose-50 border-rose-300 text-rose-950',
      badge: '선택의 대가'
    },
    {
      title: '기회비용',
      desc: '어떤 대안을 선택할 때 실제로 지출하는 명시적 비용과 포기한 최선의 대안에서 얻을 수 있었던 순가치인 암묵적 비용의 합 (기회비용 = 명시적 비용 + 암묵적 비용)',
      color: 'bg-orange-50 border-orange-300 text-orange-950',
      badge: '포기한 순가치'
    },
    {
      title: '합리적 선택',
      desc: '가능한 여러 대안 중 순편익(편익 − 기회비용)이 가장 큰 대안을 선택하는 것',
      color: 'bg-indigo-50 border-indigo-400 text-indigo-950',
      badge: '최선의 선택'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between py-1">
      {/* Title Card */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <span className="text-sm font-bold text-orange-600 tracking-wider block mb-1">
            경제적 의사결정의 원칙
          </span>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-[#0F1E36]">
            "가장 저렴한 선택이 가장 합리적인 선택일까?"
          </h2>
        </div>
        <div className="text-sm font-semibold text-slate-600 bg-slate-100 px-3.5 py-2 rounded-xl hidden sm:block">
          단계별 공개: <strong className="text-indigo-700 font-bold">{step}</strong> / 4 단계
        </div>
      </div>

      {/* 2x2 Concept Cards (Enlarged 28~30px titles, 23~26px descriptions, reduced padding) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 flex-1">
        {rationalConcepts.map((item, idx) => {
          const isRevealed = step >= idx + 1;
          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-center ${
                isRevealed
                  ? `${item.color} shadow-sm opacity-100`
                  : 'bg-slate-50 border-dashed border-slate-200 opacity-25'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold px-3 py-1 rounded-md bg-white/90 border border-slate-200">
                  {item.badge}
                </span>
                <span className="text-sm font-bold text-slate-400">개념 0{idx + 1}</span>
              </div>
              <h3 className="text-[28px] md:text-[30px] font-extrabold tracking-tight mb-2">
                {item.title}
              </h3>
              {isRevealed ? (
                <p className="text-[21px] md:text-[23px] font-medium leading-snug">
                  {item.desc}
                </p>
              ) : (
                <div className="text-lg text-slate-400 py-3 font-medium">단계별 공개 시 내용이 표시됩니다</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Core Formula Box (Single line formula in 30~34px with whitespace-nowrap) */}
      <div className="p-4 bg-white rounded-2xl border-2 border-indigo-300 shadow-sm flex flex-col xl:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <span className="px-3 py-1.5 bg-indigo-900 text-yellow-300 font-extrabold text-sm rounded-lg shrink-0">
            핵심 공식
          </span>
          <div className="text-[28px] md:text-[32px] font-black text-[#0F1E36] font-mono tracking-tight whitespace-nowrap">
            순편익 = 편익 − 기회비용
          </div>
        </div>
        <div className="text-[19px] md:text-[21px] text-slate-700 font-semibold bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 leading-snug">
          💡 합리적 선택은 여러 대안의 편익과 기회비용을 비교하여 <strong className="text-indigo-900 underline">순편익이 가장 큰 대안</strong>을 선택하는 것입니다.
        </div>
      </div>
    </div>
  );
};
