import React from 'react';
import { CloudRain, Home, Sparkles, Check, X } from 'lucide-react';

interface Props {
  step: number; // 1 to 4
}

export const SunkCostSimulator: React.FC<Props> = ({ step }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-1">
      {/* Top Situation Card */}
      <div className="p-4 bg-rose-50 border-2 border-rose-200 rounded-2xl flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
            <CloudRain className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-bold px-2 py-0.5 bg-rose-200 text-rose-900 rounded">매몰비용 사례</span>
              <span className="text-base font-bold text-rose-900">환불 불가 테이블석 티켓 50,000원 결제 완료</span>
            </div>
            <p className="text-[20px] md:text-[22px] text-slate-800 font-medium leading-snug">
              경기 당일 폭우와 심한 두통이 발생했습니다.{' '}
              <strong>이미 지출한 티켓값 50,000원은 야구장에 가든 가지 않든 돌려받을 수 없습니다.</strong>{' '}
              <span className="text-rose-700 font-bold">따라서 지금부터 발생하는 추가 편익과 추가 비용을 비교하여 선택해야 합니다.</span>
            </p>
          </div>
        </div>
        <div className="hidden sm:block text-right shrink-0 ml-4">
          <span className="text-xs text-rose-600 font-bold block">이미 지출된 비용 (매몰비용)</span>
          <span className="text-[32px] md:text-[36px] font-black text-rose-700 font-mono line-through">
            50,000원
          </span>
        </div>
      </div>

      {/* 2 Comparison Cards (Height reduced 30~40%, Content fitted, Step-by-Step reveal) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-2 flex-1 items-stretch">
        {/* Choice 1: 아파도 야구장에 가기 */}
        <div
          className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
            step >= 3
              ? 'bg-rose-50/70 border-rose-300 shadow-sm'
              : 'bg-white border-slate-200'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                대안 1
              </span>
              {step >= 3 && (
                <span className="text-sm font-bold text-rose-600 flex items-center gap-1">
                  <X className="w-4 h-4" /> 현재 조건에서는 불리
                </span>
              )}
            </div>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-1 tracking-tight flex items-center gap-2">
              <CloudRain className="w-6 h-6 text-slate-600" />
              아픈 몸으로 비 맞으며 직관 가기
            </h3>
            <p className="text-[19px] md:text-[21px] text-slate-600 mb-3">
              "이미 5만 원 냈는데 안 가면 너무 아까워!"
            </p>

            {/* Step 2 & 3: Additional Benefits and Costs */}
            {step >= 2 ? (
              <div className="space-y-2 text-[20px] md:text-[22px] font-medium">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600">추가 편익:</span>
                  <span className="font-bold text-slate-800">10,000원 (비와 두통으로 미미함)</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-rose-200 flex justify-between items-center text-rose-900">
                  <span>예상 추가 비용:</span>
                  <span className="font-bold">30,000원 (건강 악화에 따른 추가 부담)</span>
                </div>
                {step >= 3 ? (
                  <div className="p-3 bg-rose-100 rounded-xl border border-rose-300 flex justify-between items-center font-bold text-rose-950">
                    <span>추가 순편익 (편익 − 비용):</span>
                    <span className="font-mono text-[24px] md:text-[26px] font-black text-rose-700">
                      10,000 − 30,000 = -20,000원
                    </span>
                  </div>
                ) : (
                  <div className="p-2.5 bg-slate-50 text-slate-400 text-center rounded-xl text-sm font-medium">
                    다음 단계에서 순편익이 계산됩니다.
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 text-center text-slate-400 text-base font-semibold bg-slate-50 rounded-xl">
                교사 클릭 시 추가 편익과 비용이 공개됩니다
              </div>
            )}
          </div>

          <div className="text-sm text-slate-500 pt-2 border-t border-slate-100">
            5만 원의 본전 생각에 얽매여 더 큰 손실을 보는 함정
          </div>
        </div>

        {/* Choice 2: 집에서 편히 쉬기 (No "추천" tag until step 3!) */}
        <div
          className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
            step >= 3
              ? 'bg-emerald-50/70 border-emerald-400 shadow-sm'
              : 'bg-white border-slate-200'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                대안 2
              </span>
              {step >= 3 && (
                <span className="text-sm font-bold text-emerald-700 flex items-center gap-1">
                  <Check className="w-4 h-4" /> 현재 조건에서는 더 합리적
                </span>
              )}
            </div>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-1 tracking-tight flex items-center gap-2">
              <Home className="w-6 h-6 text-emerald-700" />
              집에서 따뜻하게 휴식하기
            </h3>
            <p className="text-[19px] md:text-[21px] text-slate-600 mb-3">
              "5만 원은 아쉽지만 어차피 환불 불가야. 지금은 몸 회복이 우선이야!"
            </p>

            {/* Step 2 & 3: Additional Benefits and Costs */}
            {step >= 2 ? (
              <div className="space-y-2 text-[20px] md:text-[22px] font-medium">
                <div className="p-3 bg-white rounded-xl border border-emerald-200 flex justify-between items-center text-emerald-950">
                  <span className="text-emerald-900">추가 편익:</span>
                  <span className="font-bold">+60,000원 (안락함과 건강 회복)</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center text-slate-700">
                  <span>추가 비용:</span>
                  <span className="font-bold">0원 (추가 지출 없음)</span>
                </div>
                {step >= 3 ? (
                  <div className="p-3 bg-emerald-100 rounded-xl border border-emerald-300 flex justify-between items-center font-bold text-emerald-950">
                    <span>추가 순편익 (편익 − 비용):</span>
                    <span className="font-mono text-[24px] md:text-[26px] font-black text-emerald-800">
                      60,000 − 0 = +60,000원
                    </span>
                  </div>
                ) : (
                  <div className="p-2.5 bg-slate-50 text-slate-400 text-center rounded-xl text-sm font-medium">
                    다음 단계에서 순편익이 계산됩니다.
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 text-center text-slate-400 text-base font-semibold bg-slate-50 rounded-xl">
                교사 클릭 시 추가 편익과 비용이 공개됩니다
              </div>
            )}
          </div>

          <div className="text-sm text-slate-500 pt-2 border-t border-slate-100">
            회수 불가능한 과거 비용을 털어내고 미래를 따지는 선택
          </div>
        </div>
      </div>

      {/* STEP 4: Sunk Cost Golden Rule Box */}
      {step >= 4 ? (
        <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-md flex items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </span>
            <p className="text-[20px] md:text-[22px] font-medium leading-snug">
              <strong className="text-yellow-300 font-bold">매몰비용:</strong> 이미 지출하여 회수할 수 없는 비용으로, 현재의 합리적 선택을 판단할 때 고려해서는 안 되는 비용입니다.{' '}
              <span className="text-teal-200 underline font-bold">합리적 선택을 할 때는 이미 회수할 수 없는 과거의 비용에 얽매이지 않고, 앞으로 발생할 편익과 비용을 비교</span>해야 합니다.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono shrink-0 hidden lg:inline">EBS 개념완성 80p</span>
        </div>
      ) : (
        <div className="p-3 bg-slate-100 text-slate-500 rounded-2xl text-center text-sm font-semibold">
          ※ STEP 4에서 매몰비용의 최종 핵심 원리가 공개됩니다.
        </div>
      )}
    </div>
  );
};
