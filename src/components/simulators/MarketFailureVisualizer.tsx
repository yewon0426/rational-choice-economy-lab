import React, { useState } from 'react';
import {
  Factory,
  Shield,
  Lightbulb,
  FileQuestion,
  AlertOctagon,
  Users,
  Car
} from 'lucide-react';

import pollutionImg from '../../assets/images/market_failure_pollution_1792976363994.jpg';

interface Props {
  slideId: number; // 8, 9, 10, 11, 12
  step: number;
}

export const MarketFailureVisualizer: React.FC<Props> = ({ slideId, step }) => {
  // State for Screen 9 (Cartel toggle)
  const [isCollusion, setIsCollusion] = useState<boolean>(false);

  // State for Screen 10 (Externalities toggle)
  const [activeTabExternality, setActiveTabExternality] = useState<'negative' | 'positive'>('negative');

  // State for Screen 12 (Lemon Market Step)
  const [lemonStep, setLemonStep] = useState<number>(1);

  // SCREEN 8: 시장 실패의 의미와 4대 원인
  // Sequential reveal: Definition -> 1. 독과점 -> 2. 외부 효과 -> 3. 공공재 부족 -> 4. 정보의 비대칭성
  // Card layout: ① 유형 ② 핵심 개념 ③ 대표 사례
  if (slideId === 8) {
    const failures = [
      {
        num: '01',
        title: '독과점 문제',
        concept: '하나 또는 소수의 기업이 시장 지배력을 행사하여 경쟁이 제한될 수 있는 문제',
        example: '기업들이 담합하여 상품 가격을 인상하는 상황',
        color: 'border-amber-400 bg-amber-50/80 text-amber-950',
        badgeColor: 'bg-amber-600 text-white'
      },
      {
        num: '02',
        title: '외부 효과',
        concept: '경제활동이 거래에 참여하지 않은 제3자에게 대가 없이 이익이나 손해를 주는 현상',
        example: '공장 매연으로 주변 주민이 피해를 입는 상황',
        color: 'border-rose-400 bg-rose-50/80 text-rose-950',
        badgeColor: 'bg-rose-600 text-white'
      },
      {
        num: '03',
        title: '공공재 부족',
        concept: '공공재의 비배제성과 비경합성으로 인해 무임승차자 문제가 발생하고 시장에서 충분히 공급되지 않을 수 있는 문제',
        example: '무임승차자 문제로 가로등이 충분히 공급되지 않는 상황',
        color: 'border-teal-400 bg-teal-50/80 text-teal-950',
        badgeColor: 'bg-teal-700 text-white'
      },
      {
        num: '04',
        title: '정보의 비대칭성',
        concept: '거래 당사자들이 가진 정보의 양이나 질이 서로 다른 상태',
        example: '중고차 판매자는 차량 결함을 알고 있지만 구매자는 모르는 상황',
        color: 'border-indigo-400 bg-indigo-50/80 text-indigo-950',
        badgeColor: 'bg-indigo-700 text-white'
      }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        {/* Definition Box */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-bold px-2.5 py-0.5 bg-slate-900 text-white rounded-md">
              시장 실패의 정의
            </span>
          </div>
          <p className="text-[22px] md:text-[25px] font-bold text-slate-900 leading-snug">
            "시장이 불완전하거나 재화와 서비스의 특성 등으로 인해{' '}
            <span className="text-rose-600 underline decoration-2">자원이 효율적으로 배분되지 못하는 상태</span>"
          </p>
        </div>

        {/* 2x2 Cards: ① 유형 ② 핵심 개념 ③ 대표 사례 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 flex-1 items-stretch">
          {failures.map((item, idx) => {
            const isRevealed = step >= idx + 1;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between ${
                  isRevealed
                    ? `${item.color} shadow-sm opacity-100`
                    : 'bg-slate-50 border-dashed border-slate-200 opacity-25'
                }`}
              >
                <div>
                  {/* ① 시장 실패 유형 */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md ${item.badgeColor}`}>
                        원인 {item.num}
                      </span>
                      <h3 className="text-[26px] md:text-[28px] font-black tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {isRevealed ? (
                    <div className="space-y-2 mt-2">
                      {/* ② 핵심 개념 */}
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                          핵심 개념
                        </span>
                        <p className="text-[20px] md:text-[22px] font-medium leading-snug">
                          {item.concept}
                        </p>
                      </div>

                      {/* ③ 대표 사례 */}
                      <div className="pt-2 border-t border-slate-200/60">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                          대표 사례
                        </span>
                        <p className="text-[19px] md:text-[21px] font-semibold text-slate-800">
                          📌 {item.example}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-base text-slate-400 py-6 font-medium">
                      단계별 공개 시 개념과 사례가 표시됩니다
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Key Takeaway */}
        <div className="p-3.5 bg-slate-900 text-white rounded-2xl shadow-sm text-center">
          <p className="text-[20px] md:text-[22px] font-bold">
            💡 <strong className="text-yellow-300">핵심 정리:</strong> 개인이 합리적으로 선택하더라도 시장 전체에서는 자원이 효율적으로 배분되지 못할 수 있습니다.
          </p>
        </div>
      </div>
    );
  }

  // SCREEN 9: 독과점 문제
  if (slideId === 9) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        {/* Top Concept Split: 독점 vs 과점 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-bold text-amber-700 tracking-wider block mb-1">시장 형태 1</span>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-1">독점 (단일 공급자)</h3>
            <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug">
              단 하나의 기업이 시장 전체를 지배하여 경쟁이 원천 차단된 상태
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-bold text-indigo-700 tracking-wider block mb-1">시장 형태 2</span>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-1">과점 (소수 공급자)</h3>
            <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug">
              소수의 대기업이 시장의 대부분을 차지하여 담합의 위험이 큰 상태
            </p>
          </div>
        </div>

        {/* Interactive Collusion Comparison */}
        <div className="my-2 p-5 bg-white rounded-2xl border-2 border-slate-200 shadow-xs flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-0.5">
                인터랙티브 비교 도식
              </span>
              <h3 className="text-[24px] md:text-[26px] font-black text-slate-900">
                자유 경쟁 시장 vs 기업 간 담합(카르텔)
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setIsCollusion(false)}
                className={`px-3 py-1.5 text-base font-bold rounded-lg transition ${
                  !isCollusion ? 'bg-white text-teal-800 shadow-sm' : 'text-slate-600'
                }`}
              >
                자유 경쟁 시장
              </button>
              <button
                onClick={() => setIsCollusion(true)}
                className={`px-3 py-1.5 text-base font-bold rounded-lg transition ${
                  isCollusion ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600'
                }`}
              >
                기업 간 담합(카르텔)
              </button>
            </div>
          </div>

          {/* 3 Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-base text-slate-500 font-bold">시장 공급량</span>
              <div
                className={`text-[26px] md:text-[28px] font-black font-mono mt-1 ${
                  isCollusion ? 'text-rose-600' : 'text-teal-700'
                }`}
              >
                {isCollusion ? '과소 공급 (인위적 감축)' : '충분한 공급 (최적)'}
              </div>
              <p className="text-sm text-slate-600 mt-1">
                {isCollusion ? '가격을 올리기 위해 생산량을 줄임' : '소비자 수요에 맞춰 충분히 생산'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-base text-slate-500 font-bold">시장 가격</span>
              <div
                className={`text-[26px] md:text-[28px] font-black font-mono mt-1 ${
                  isCollusion ? 'text-rose-600' : 'text-teal-700'
                }`}
              >
                {isCollusion ? '비정상적 고가 (폭리)' : '합리적 균형 가격'}
              </div>
              <p className="text-sm text-slate-600 mt-1">
                {isCollusion ? '기업들이 몰래 가격을 올려 소비자가 피해' : '가격 경쟁으로 소비자 후생 증대'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-base text-slate-500 font-bold">소비자 후생</span>
              <div
                className={`text-[26px] md:text-[28px] font-black font-mono mt-1 ${
                  isCollusion ? 'text-rose-600' : 'text-emerald-700'
                }`}
              >
                {isCollusion ? '소비자 잉여 침해' : '사회적 잉여 극대화'}
              </div>
              <p className="text-sm text-slate-600 mt-1">
                {isCollusion ? '선택권 제한 및 경제적 후생 손실' : '자원이 가장 효율적으로 배분됨'}
              </p>
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-base text-amber-950 font-semibold mt-2">
            ⚠️ <strong>담합 규제:</strong> 기업들이 경쟁을 제한하여 부당 이득을 얻지 못하도록 정부(공정거래위원회)가 강력히 제재합니다.
          </div>
        </div>
      </div>
    );
  }

  // SCREEN 10: 외부 효과
  if (slideId === 10) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        {/* Toggle Bar */}
        <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-200 shadow-xs mb-2">
          <span className="text-base font-bold text-slate-700">외부 효과 비교 분석</span>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTabExternality('positive')}
              className={`px-4 py-1.5 text-base font-bold rounded-xl transition ${
                activeTabExternality === 'positive'
                  ? 'bg-teal-700 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              긍정적 외부 효과 (외부 경제)
            </button>
            <button
              onClick={() => setActiveTabExternality('negative')}
              className={`px-4 py-1.5 text-base font-bold rounded-xl transition ${
                activeTabExternality === 'negative'
                  ? 'bg-rose-600 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              부정적 외부 효과 (외부 불경제)
            </button>
          </div>
        </div>

        {/* Content View */}
        {activeTabExternality === 'negative' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch my-1">
            <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col">
              <div className="h-44 bg-slate-900 overflow-hidden shrink-0">
                <img
                  src={pollutionImg}
                  alt="공장 매연과 환경오염"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[24px] md:text-[26px] font-black text-slate-900 mb-1">
                    공장 오염물질 배출 & 층간소음
                  </h4>
                  <p className="text-[19px] md:text-[21px] text-slate-700 leading-snug">
                    공장이 제품을 만들며 매연을 배출해 주민들이 피해를 보지만, 공장은 주민에게 아무런 배상을 하지 않습니다.
                  </p>
                </div>
                <div className="mt-2 p-2 bg-rose-50 rounded-lg text-rose-800 text-sm font-bold">
                  사적 비용 &lt; 사회적 비용
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  시장 왜곡 메커니즘
                </span>
                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-[20px] text-slate-900 block mb-0.5">1. 제3자에게 손해 발생</span>
                    <p className="text-[18px] text-slate-600">거래에 참여하지 않은 주민들에게 질병과 환경 파괴 피해 발생</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-[20px] text-slate-900 block mb-0.5">2. 대가(보상) 미지급</span>
                    <p className="text-[18px] text-slate-600">공장이 피해 보상 비용을 물지 않아 제품 가격이 낮게 왜곡됨</p>
                  </div>
                  <div className="p-4 bg-rose-100 rounded-xl border border-rose-300">
                    <span className="font-bold text-rose-900 text-base block mb-0.5">★ 시장 왜곡 결과</span>
                    <p className="text-rose-950 font-black text-[24px] md:text-[26px]">
                      사회적 최적 수준보다 <span className="underline decoration-wavy">"과다(과잉) 생산 · 소비"</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-900 text-white rounded-xl text-sm font-semibold mt-2">
                정부 처방: 세금 부과(탄소세), 배출권 거래제, 오염물질 배출 기준 법제화
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch my-1">
            <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col">
              <div className="h-44 bg-teal-900 overflow-hidden flex items-center justify-center p-4 shrink-0">
                <Shield className="w-16 h-16 text-teal-300" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[24px] md:text-[26px] font-black text-slate-900 mb-1">
                    독감 예방접종 & 지식 R&D
                  </h4>
                  <p className="text-[19px] md:text-[21px] text-slate-700 leading-snug">
                    예방접종을 맞으면 주변 사람에게 전염을 막아주는 유익을 주지만, 주변 사람들은 접종비를 보태주지 않습니다.
                  </p>
                </div>
                <div className="mt-2 p-2 bg-teal-50 rounded-lg text-teal-800 text-sm font-bold">
                  사적 편익 &lt; 사회적 편익
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  시장 왜곡 메커니즘
                </span>
                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-[20px] text-slate-900 block mb-0.5">1. 제3자에게 유익(혜택) 제공</span>
                    <p className="text-[18px] text-slate-600">거래에 참여하지 않은 타인에게 전염병 예방 혜택을 줌</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-[20px] text-slate-900 block mb-0.5">2. 대가(보상) 미수령</span>
                    <p className="text-[18px] text-slate-600">남에게 혜택을 주었지만 이에 대한 금전적 보상을 받지 못함</p>
                  </div>
                  <div className="p-4 bg-teal-100 rounded-xl border border-teal-300">
                    <span className="font-bold text-teal-900 text-base block mb-0.5">★ 시장 왜곡 결과</span>
                    <p className="text-teal-950 font-black text-[24px] md:text-[26px]">
                      사회적 최적 수준보다 <span className="underline decoration-wavy">"과소(부족) 생산 · 소비"</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-900 text-white rounded-xl text-sm font-semibold mt-2">
                정부 처방: 백신 무료 바우처 지급, 연구개발(R&D) 보조금, 세금 감면 혜택
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // SCREEN 11: 공공재 부족
  if (slideId === 11) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch my-1">
          {/* Left: 2 Key Properties (5 cols) */}
          <div className="md:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-teal-700 tracking-wider block mb-1">
                공공재의 2대 본질
              </span>
              <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-3 tracking-tight">
                공공재의 핵심 특성
              </h3>

              <div className="space-y-3">
                <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                  <h4 className="text-[22px] font-bold text-teal-950 mb-1">
                    비배제성
                  </h4>
                  <p className="text-[19px] text-teal-900 leading-snug">
                    대가를 지불하지 않은 사람이라도 소비에서 배제하기 어렵거나 불가능한 성질
                  </p>
                </div>

                <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                  <h4 className="text-[22px] font-bold text-indigo-950 mb-1">
                    비경합성
                  </h4>
                  <p className="text-[19px] text-indigo-900 leading-snug">
                    한 사람의 소비가 다른 사람의 소비 가능량을 줄이지 않는 성질 (동시 소비 가능)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-base text-slate-700 font-semibold">
              📌 대표 사례: <strong>국방, 치안, 가로등, 등대</strong>
            </div>
          </div>

          {/* Right: Free-Rider Problem (7 cols) */}
          <div className="md:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 tracking-wider block mb-1">
                시장 실패 메커니즘
              </span>
              <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-2 tracking-tight">
                무임승차자(Free Rider) 문제
              </h3>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 mb-3">
                <div className="text-lg font-bold text-amber-950 mb-2">가로등 설치의 딜레마</div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <span className="font-bold text-slate-800 text-base block">개인의 계산</span>
                    <p className="text-slate-600 mt-0.5 text-base leading-snug">
                      "남이 돈 내서 가로등 켜지면 나도 걸어 다니면 되잖아? 난 돈 안 내야지!"
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <span className="font-bold text-rose-700 text-base block">사회적 결과</span>
                    <p className="text-slate-600 mt-0.5 text-base leading-snug">
                      모두가 무임승차를 노려 모금액 0원 $\to$ 아무도 가로등을 설치하지 않음!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
                <div className="text-rose-950 font-bold text-base mb-0.5">시장 실패: 공급 부족(과소 공급)</div>
                <p className="text-[19px] text-slate-800 font-medium">
                  수익성이 없어 민간 기업이 생산하지 않으므로 시장에서 충분히 공급되지 않습니다.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900 text-white rounded-xl text-base font-bold text-center mt-2">
              정부의 해결: 국민의 세금으로 <strong>공공재를 직접 생산하여 무상 공급</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SCREEN 12: 정보의 비대칭성
  return (
    <div className="w-full h-full flex flex-col justify-between py-1">
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-indigo-700 tracking-wider block mb-0.5">거래의 불완전성</span>
          <h3 className="text-[26px] md:text-[28px] font-black text-slate-900">
            정보의 비대칭성과 중고차 시장
          </h3>
          <p className="text-[20px] md:text-[22px] text-slate-600">
            거래 당사자들이 가진 정보의 양과 질이 서로 다른 상태
          </p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <button
              key={s}
              onClick={() => setLemonStep(s)}
              className={`px-3 py-1.5 text-base font-bold rounded-xl transition ${
                lemonStep === s ? 'bg-indigo-900 text-white shadow' : 'bg-slate-100 text-slate-600'
              }`}
            >
              단계 {s}
            </button>
          ))}
        </div>
      </div>

      <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 items-stretch">
        <div className="p-5 bg-white rounded-2xl border-2 border-indigo-100 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded">공급자</span>
              <Car className="w-7 h-7 text-indigo-600" />
            </div>
            <h4 className="text-[24px] md:text-[26px] font-black text-slate-900 mb-2">중고차 판매자 (정보 우위)</h4>
            <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug mb-3">
              차량이 침수되었는지, 엔진에 결함이 있는지 정확히 알고 있습니다.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-base font-medium space-y-1">
              <div>🚗 좋은 차: 실제 가치 1,000만 원</div>
              <div>🍋 불량 차(레몬): 실제 가치 300만 원 (결함 은폐)</div>
            </div>
          </div>
          <div className="text-sm text-indigo-700 font-bold">정보 우위를 이용한 부당 이익 유혹</div>
        </div>

        <div className="p-5 bg-white rounded-2xl border-2 border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded">소비자</span>
              <FileQuestion className="w-7 h-7 text-slate-600" />
            </div>
            <h4 className="text-[24px] md:text-[26px] font-black text-slate-900 mb-2">중고차 구매자 (정보 열세)</h4>
            <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug mb-3">
              겉모습만 보고 결함을 알 수 없어 속을 위험을 고려해 평균 가격(650만 원)만 부릅니다.
            </p>

            {lemonStep >= 2 ? (
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-base text-rose-950 font-bold">
                ⚠️ <strong>역선택 발생:</strong> 좋은 차 주인은 손해라며 시장을 떠나고, 결함 있는 불량 차만 시장에 남습니다!
              </div>
            ) : (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-base text-slate-500 font-medium">
                단계 2 버튼을 눌러 시장 결과를 확인하세요.
              </div>
            )}
          </div>
          <div className="text-sm text-rose-600 font-bold">
            {lemonStep >= 3 ? '신뢰 붕괴로 시장 거래 전체가 위축됨' : '역선택과 도덕적 해이 발생'}
          </div>
        </div>
      </div>

      <div className="p-3.5 bg-slate-900 text-white rounded-2xl text-base font-semibold flex items-center justify-between">
        <span>💡 <strong>정부의 대책:</strong> 성능상태점검기록부 의무 교부, 원산지 표시제, 식품 성분 공시, 안전인증(KC)</span>
        <span className="font-mono text-slate-400 text-xs">EBS 81p</span>
      </div>
    </div>
  );
};
