import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Coins, Sparkles, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Props {
  slideId: number; // 3, 4, 5, 6
  step: number; // 1 to totalSteps
}

export const KiaOpportunityCostSimulator: React.FC<Props> = ({ slideId, step }) => {
  // State for Screen 5 (Sliders)
  const [ticketPrice, setTicketPrice] = useState<number>(50000);
  const [hourlyWage, setHourlyWage] = useState<number>(15000);
  const [hours, setHours] = useState<number>(3);

  // State for Screen 6 (Benefit Slider)
  const [benefit, setBenefit] = useState<number>(110000);

  // Derived calculations
  const explicitCost = ticketPrice;
  const implicitCost = hourlyWage * hours;
  const opportunityCost = explicitCost + implicitCost;

  // Screen 5 Comparison with baseline
  const BASELINE_OPP_COST = 95000;
  const diffFromBaseline = opportunityCost - BASELINE_OPP_COST;

  // Screen 6 calculations
  const netBenefit = benefit - BASELINE_OPP_COST;
  const isRational = netBenefit > 0;

  const handleResetSliders = () => {
    setTicketPrice(50000);
    setHourlyWage(15000);
    setHours(3);
  };

  const handlePreset = (ticket: number, wage: number, h: number) => {
    setTicketPrice(ticket);
    setHourlyWage(wage);
    setHours(h);
  };

  // SCREEN 3: 야구 관람 vs 아르바이트 대립 상황
  if (slideId === 3) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        {/* Top Condition Banner */}
        <div className="p-3 bg-indigo-900 text-white rounded-2xl shadow-xs text-center">
          <p className="text-[22px] md:text-[25px] font-bold tracking-tight">
            ⚡ <span className="text-yellow-300">선택 조건:</span> "토요일 오후 3시간, 둘 중 하나만 선택할 수 있다!"
          </p>
        </div>

        {/* 2-Column Comparison Cards (Equal height, content-fitted, no empty dead space) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2 flex-1 items-stretch">
          {/* Option A: 야구 관람 */}
          <div className="bg-white rounded-2xl border-2 border-orange-300 overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-44 sm:h-48 bg-orange-950 overflow-hidden shrink-0">
              <img
                src="/src/assets/images/kia_baseball_stadium_1792976362365.jpg"
                alt="KIA 타이거즈 광주-기아 챔피언스 필드 야구 경기장"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-orange-600 text-white font-extrabold px-3 py-1 rounded-lg text-sm shadow">
                대안 A 선택
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-[28px] md:text-[30px] font-black text-slate-900 mb-3 tracking-tight">
                  KIA 타이거즈 홈경기 관람
                </h3>
                <ul className="space-y-2 text-[23px] md:text-[25px] text-slate-800 font-medium leading-normal">
                  <li className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
                    <span>장소: 광주-기아 챔피언스 필드</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
                    <span>좌석: 테이블석 (<strong className="text-orange-600 font-black">입장료 50,000원</strong>)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
                    <span>소요 시간: <strong>토요일 오후 3시간</strong></span>
                  </li>
                </ul>
              </div>
              <div className="mt-3 p-3 bg-orange-50 rounded-xl border border-orange-200 text-orange-900 text-base font-semibold">
                ⚾ 직관의 열띤 응원과 생생한 감동을 누릴 수 있습니다.
              </div>
            </div>
          </div>

          {/* Option B: 아르바이트 */}
          <div className="bg-white rounded-2xl border-2 border-teal-300 overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-44 sm:h-48 bg-teal-950 overflow-hidden shrink-0">
              <img
                src="/src/assets/images/part_time_job_cafe_1792976363488.jpg"
                alt="카페 아르바이트 근무 현장"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-teal-700 text-white font-extrabold px-3 py-1 rounded-lg text-sm shadow">
                대안 B 선택
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-[28px] md:text-[30px] font-black text-slate-900 mb-3 tracking-tight">
                  카페 주말 아르바이트
                </h3>
                <ul className="space-y-2 text-[23px] md:text-[25px] text-slate-800 font-medium leading-normal">
                  <li className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0" />
                    <span>업무: 음료 제조 및 매장 관리</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0" />
                    <span>시급: <strong>시간당 15,000원</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0" />
                    <span>예상 임금: 15,000원 × 3시간 = <strong className="text-teal-700 font-black">45,000원</strong></span>
                  </li>
                </ul>
              </div>
              <div className="mt-3 p-3 bg-teal-50 rounded-xl border border-teal-200 text-teal-900 text-base font-semibold">
                ☕ 근로 소득 45,000원을 얻어 다른 필요한 곳에 쓸 수 있습니다.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Teacher Question (Without revealing 95,000 KRW yet!) */}
        <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-orange-500 text-white font-black text-lg flex items-center justify-center shrink-0">
              ?
            </span>
            <p className="text-[22px] md:text-[24px] font-bold">
              "야구장 관람을 선택할 때 치르는 진짜 비용은 입장료 50,000원뿐일까요?"
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden lg:inline">※ 다음 화면에서 단계별 계산 공개</span>
        </div>
      </div>
    );
  }

  // SCREEN 4: 기회비용 단계별 계산
  // Cards height reduced by 35~45%, empty space removed, big typography
  if (slideId === 4) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 items-stretch my-2">
          {/* STEP 1: 명시적 비용 */}
          <div
            className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between ${
              step >= 1
                ? 'bg-orange-50/80 border-orange-300 shadow-sm opacity-100'
                : 'bg-slate-50 border-dashed border-slate-200 opacity-25'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-orange-600 text-white text-sm font-black rounded-lg">
                  STEP 1
                </span>
                <Coins className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-[28px] md:text-[30px] font-black text-slate-900 mb-2 tracking-tight">
                명시적 비용
              </h3>
              <p className="text-[21px] md:text-[23px] text-slate-700 font-medium mb-4 leading-snug">
                선택을 위해 지갑에서 실제로 지출하는 금전적 비용
              </p>

              {step >= 1 && (
                <div className="p-4 bg-white rounded-xl border border-orange-200 text-center">
                  <div className="text-base text-slate-500 font-semibold">야구 테이블석 입장료</div>
                  <div className="text-[38px] md:text-[42px] font-black text-orange-600 font-mono my-1">
                    50,000원
                  </div>
                  <div className="text-sm font-bold text-orange-800">
                    실제로 지출하는 금전적 비용
                  </div>
                </div>
              )}
            </div>
            <div className="text-sm text-slate-500 pt-3 border-t border-orange-100">
              영수증이 발급되는 실제 결제액
            </div>
          </div>

          {/* STEP 2: 암묵적 비용 */}
          <div
            className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between ${
              step >= 2
                ? 'bg-teal-50/80 border-teal-300 shadow-sm opacity-100'
                : 'bg-slate-50 border-dashed border-slate-200 opacity-25'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-teal-700 text-white text-sm font-black rounded-lg">
                  STEP 2
                </span>
                <Clock className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-[28px] md:text-[30px] font-black text-slate-900 mb-2 tracking-tight">
                암묵적 비용
              </h3>
              <p className="text-[21px] md:text-[23px] text-slate-700 font-medium mb-4 leading-snug">
                선택으로 인해 포기해야 했던 다른 대안의 가치
              </p>

              {step >= 2 && (
                <div className="p-4 bg-white rounded-xl border border-teal-200 text-center">
                  <div className="text-base text-slate-500 font-semibold">포기한 아르바이트 임금</div>
                  <div className="text-[23px] md:text-[25px] font-bold text-teal-800 font-mono my-1">
                    15,000원 × 3시간
                  </div>
                  <div className="text-[38px] md:text-[42px] font-black text-teal-700 font-mono">
                    = 45,000원
                  </div>
                </div>
              )}
            </div>
            <div className="text-sm text-slate-500 pt-3 border-t border-teal-100">
              손에 쥘 수 있었지만 포기한 임금
            </div>
          </div>

          {/* STEP 3: 기회비용 합산 */}
          <div
            className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between ${
              step >= 3
                ? 'bg-indigo-900 text-white border-indigo-950 shadow-lg opacity-100'
                : 'bg-slate-50 border-dashed border-slate-200 opacity-25'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-indigo-500 text-white text-sm font-black rounded-lg">
                  STEP 3
                </span>
                <Sparkles className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="text-[28px] md:text-[30px] font-black mb-2 tracking-tight">
                기회비용
              </h3>
              <p className="text-[21px] md:text-[23px] text-indigo-200 font-medium mb-4 leading-snug">
                명시적 비용과 암묵적 비용을 모두 더한 진짜 대가
              </p>

              {step >= 3 && (
                <div className="p-4 bg-indigo-800/90 rounded-xl border border-indigo-700 text-center">
                  <div className="text-[22px] md:text-[24px] text-indigo-200 font-mono font-bold">
                    50,000원 + 45,000원
                  </div>
                  <div className="text-[40px] md:text-[44px] font-black text-yellow-300 font-mono my-1">
                    = 95,000원
                  </div>
                  <div className="text-sm text-yellow-200 font-bold">
                    야구 관람의 총 기회비용
                  </div>
                </div>
              )}
            </div>
            <div className="text-sm text-indigo-300 pt-3 border-t border-indigo-800">
              경제학에서 평가하는 진정한 선택의 비용
            </div>
          </div>
        </div>

        {/* Ratio Graph: Shown ONLY AFTER STEP 3 is revealed! */}
        {step >= 3 ? (
          <div className="mt-3 p-4 bg-white rounded-2xl border-2 border-slate-200 shadow-sm animate-fadeIn">
            <div className="flex items-center justify-between text-base font-bold text-slate-700 mb-2">
              <span>기회비용 구성 비율 (총 95,000원)</span>
              <span className="text-sm text-slate-500 font-normal">
                명시적 비용 50,000원 (52.6%) · 암묵적 비용 45,000원 (47.4%)
              </span>
            </div>
            <div className="h-10 w-full bg-slate-100 rounded-xl overflow-hidden flex shadow-inner">
              <div
                className="bg-orange-500 text-white text-[19px] font-black flex items-center justify-center transition-all duration-500"
                style={{ width: '52.6%' }}
              >
                명시적 50,000원 (52.6%)
              </div>
              <div
                className="bg-teal-600 text-white text-[19px] font-black flex items-center justify-center transition-all duration-500"
                style={{ width: '47.4%' }}
              >
                암묵적 45,000원 (47.4%)
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-3 p-3 bg-slate-100 text-slate-500 rounded-2xl text-center text-sm font-semibold">
            ※ STEP 3까지 공개되면 기회비용 구성 비율 그래프가 나타납니다.
          </div>
        )}
      </div>
    );
  }

  // SCREEN 5: 기회비용 인터랙티브 조절 시뮬레이터
  if (slideId === 5) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        {/* Main interactive area: Top row (Sliders + Calculation Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch my-1">
          {/* Controls: Left (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Coins className="w-6 h-6 text-orange-500" />
                  조건 조절 슬라이더
                </h3>
                <button
                  onClick={handleResetSliders}
                  className="px-3 py-1.5 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition"
                >
                  <RotateCcw className="w-4 h-4" />
                  기본값 복원
                </button>
              </div>

              {/* Slider 1: 입장료 */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[20px] md:text-[22px] font-bold text-slate-800">
                    야구 입장료 (명시적 비용)
                  </label>
                  <span className="text-[26px] md:text-[30px] font-black text-orange-600 font-mono">
                    {ticketPrice.toLocaleString()}원
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={80000}
                  step={5000}
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full accent-orange-600 h-3 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
                  <span>10,000원 (외야석)</span>
                  <span>50,000원 (테이블)</span>
                  <span>80,000원 (VIP)</span>
                </div>
              </div>

              {/* Slider 2: 시급 */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[20px] md:text-[22px] font-bold text-slate-800">
                    아르바이트 시급
                  </label>
                  <span className="text-[26px] md:text-[30px] font-black text-teal-700 font-mono">
                    {hourlyWage.toLocaleString()}원
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={30000}
                  step={1000}
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  className="w-full accent-teal-600 h-3 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
                  <span>10,000원 (최저시급)</span>
                  <span>15,000원 (표준)</span>
                  <span>30,000원 (고시급)</span>
                </div>
              </div>

              {/* Slider 3: 포기한 근무시간 */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[20px] md:text-[22px] font-bold text-slate-800">
                    포기한 근무시간
                  </label>
                  <span className="text-[26px] md:text-[30px] font-black text-indigo-700 font-mono">
                    {hours}시간
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-indigo-600 h-3 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
                  <span>1시간</span>
                  <span>3시간 (기본)</span>
                  <span>5시간</span>
                </div>
              </div>
            </div>

            {/* Scenario Buttons (20~22px font) */}
            <div className="pt-3 border-t border-slate-100">
              <span className="text-sm font-bold text-slate-500 block mb-2">교사용 시나리오 버튼:</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handlePreset(50000, 15000, 3)}
                  className="px-2.5 py-2 text-[19px] md:text-[21px] bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold transition text-center"
                >
                  기본 (EBS)
                </button>
                <button
                  onClick={() => handlePreset(50000, 25000, 3)}
                  className="px-2.5 py-2 text-[19px] md:text-[21px] bg-teal-50 hover:bg-teal-100 text-teal-900 rounded-xl font-bold transition text-center"
                >
                  고시급 알바
                </button>
                <button
                  onClick={() => handlePreset(70000, 15000, 4)}
                  className="px-2.5 py-2 text-[19px] md:text-[21px] bg-orange-50 hover:bg-orange-100 text-orange-950 rounded-xl font-bold transition text-center"
                >
                  VIP석+장시간
                </button>
              </div>
            </div>
          </div>

          {/* Results: Right (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 tracking-tight">
                  실시간 기회비용 계산 결과
                </h3>
                <span className="text-sm font-bold text-slate-500 font-mono">
                  명시적 + 암묵적 = 기회비용
                </span>
              </div>

              {/* 3 Result Cards */}
              <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                  <div className="text-base text-orange-800 font-bold">명시적 비용</div>
                  <div className="text-[30px] md:text-[34px] font-black text-orange-600 font-mono mt-1">
                    {explicitCost.toLocaleString()}원
                  </div>
                  <div className="text-xs text-orange-700 mt-1">입장료</div>
                </div>

                <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200">
                  <div className="text-base text-teal-800 font-bold">암묵적 비용</div>
                  <div className="text-[30px] md:text-[34px] font-black text-teal-700 font-mono mt-1">
                    {implicitCost.toLocaleString()}원
                  </div>
                  <div className="text-xs text-teal-700 mt-1">{hourlyWage.toLocaleString()}원 × {hours}h</div>
                </div>

                <div className="p-3.5 rounded-xl bg-indigo-900 text-white shadow">
                  <div className="text-base text-indigo-200 font-bold">총 기회비용</div>
                  <div className="text-[34px] md:text-[38px] font-black text-yellow-300 font-mono mt-1">
                    {opportunityCost.toLocaleString()}원
                  </div>
                  <div className="text-xs text-indigo-300 mt-1">실제 치른 대가</div>
                </div>
              </div>

              {/* Baseline Comparison Display */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between mb-3">
                <div className="text-[19px] md:text-[21px] font-semibold text-slate-700">
                  기본값: <span className="font-mono font-bold">{BASELINE_OPP_COST.toLocaleString()}원</span>
                  <span className="mx-2 text-slate-300">|</span>
                  변경값: <span className="font-mono font-bold text-indigo-900">{opportunityCost.toLocaleString()}원</span>
                </div>
                <div className="text-[20px] md:text-[22px] font-black font-mono">
                  변화:{' '}
                  <span
                    className={
                      diffFromBaseline > 0
                        ? 'text-rose-600'
                        : diffFromBaseline < 0
                        ? 'text-teal-700'
                        : 'text-slate-500'
                    }
                  >
                    {diffFromBaseline > 0 ? `+${diffFromBaseline.toLocaleString()}` : diffFromBaseline.toLocaleString()}원
                  </span>
                </div>
              </div>

              {/* Dynamic Ratio Bar */}
              <div>
                <div className="h-8 w-full bg-slate-100 rounded-xl overflow-hidden flex shadow-inner">
                  <motion.div
                    layout
                    className="bg-orange-500 text-white font-mono text-sm font-bold flex items-center justify-center"
                    style={{ width: `${(explicitCost / opportunityCost) * 100}%` }}
                  >
                    명시적 {Math.round((explicitCost / opportunityCost) * 100)}%
                  </motion.div>
                  <motion.div
                    layout
                    className="bg-teal-600 text-white font-mono text-sm font-bold flex items-center justify-center"
                    style={{ width: `${(implicitCost / opportunityCost) * 100}%` }}
                  >
                    암묵적 {Math.round((implicitCost / opportunityCost) * 100)}%
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Teaching Explanation Quote */}
            <div className="p-3.5 bg-indigo-50 rounded-xl border border-indigo-200 text-slate-800 text-[19px] md:text-[21px] font-medium leading-snug mt-2">
              💡 "야구 입장료가 같더라도 아르바이트 시급이나 포기한 근무시간이 증가하면 암묵적 비용이 증가하여 기회비용도 커집니다."
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SCREEN 6: 편익과 순편익
  return (
    <div className="w-full h-full flex flex-col justify-between py-1">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch my-1">
        {/* Left Slider: Benefit (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-sm font-bold text-teal-700 tracking-wider block mb-1">
              주관적 가치 측정
            </span>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-2 tracking-tight">
              야구 관람의 편익 조절
            </h3>
            <p className="text-[20px] md:text-[22px] text-slate-600 mb-4 leading-snug">
              직관에서 느끼는 열기와 만족감을 화폐 가치로 환산해 보세요.
            </p>

            <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-base font-bold text-teal-900">야구 관람 편익</span>
                <span className="text-[32px] md:text-[36px] font-black text-teal-700 font-mono">
                  {benefit.toLocaleString()}원
                </span>
              </div>
              <input
                type="range"
                min={30000}
                max={180000}
                step={5000}
                value={benefit}
                onChange={(e) => setBenefit(Number(e.target.value))}
                className="w-full accent-teal-700 h-3 bg-teal-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-teal-700 mt-1 font-mono">
                <span>30,000원 (관심 낮음)</span>
                <span>110,000원 (EBS 기본값)</span>
                <span>180,000원 (한국시리즈)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setBenefit(60000)}
                className="px-3 py-2 text-base font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-center"
              >
                편익 60,000원 (비합리)
              </button>
              <button
                onClick={() => setBenefit(110000)}
                className="px-3 py-2 text-base font-bold bg-teal-100 hover:bg-teal-200 text-teal-900 rounded-xl text-center"
              >
                편익 110,000원 (합리)
              </button>
            </div>
          </div>

          <div className="text-base text-slate-600 pt-3 border-t border-slate-100 font-medium">
            비교 기준: 야구 관람 기회비용 = <strong className="text-slate-900 font-mono font-bold">95,000원</strong>
          </div>
        </div>

        {/* Right Comparison: Net Benefit & Verdict (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 tracking-tight">
                순편익 계산 및 선택 판정
              </h3>
              <span className="text-sm font-bold text-slate-600 font-mono">
                순편익 = 편익 − 기회비용
              </span>
            </div>

            {/* Scorecard */}
            <div className="grid grid-cols-3 gap-3 mb-4 text-center">
              <div className="p-3.5 bg-teal-50 rounded-xl border border-teal-200">
                <div className="text-base text-teal-800 font-bold">편익</div>
                <div className="text-[28px] md:text-[32px] font-black text-teal-800 font-mono mt-1">
                  {benefit.toLocaleString()}원
                </div>
              </div>

              <div className="p-3.5 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-base text-orange-800 font-bold">기회비용</div>
                <div className="text-[28px] md:text-[32px] font-black text-orange-800 font-mono mt-1">
                  {BASELINE_OPP_COST.toLocaleString()}원
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isRational ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'
                }`}
              >
                <div className={`text-base font-bold ${isRational ? 'text-emerald-800' : 'text-rose-800'}`}>
                  순편익
                </div>
                <div
                  className={`text-[28px] md:text-[32px] font-black font-mono mt-1 ${
                    isRational ? 'text-emerald-700' : 'text-rose-700'
                  }`}
                >
                  {netBenefit > 0 ? `+${netBenefit.toLocaleString()}` : netBenefit.toLocaleString()}원
                </div>
              </div>
            </div>

            {/* Rationality Banner */}
            <div
              className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${
                isRational
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-md'
                  : 'bg-rose-500 text-white border-rose-600 shadow-md'
              }`}
            >
              {isRational ? (
                <CheckCircle2 className="w-10 h-10 text-white shrink-0" />
              ) : (
                <XCircle className="w-10 h-10 text-white shrink-0" />
              )}
              <div>
                <h4 className="text-[24px] md:text-[26px] font-black">
                  {isRational
                    ? '합리적 선택! (야구장 관람이 합리적)'
                    : '비합리적 선택! (아르바이트가 합리적)'}
                </h4>
                <p className="text-[19px] md:text-[21px] opacity-95 mt-0.5 leading-snug">
                  {isRational
                    ? `편익(${benefit.toLocaleString()}원)이 기회비용(95,000원)보다 커서 순편익(+${netBenefit.toLocaleString()}원)이 발생합니다.`
                    : `편익(${benefit.toLocaleString()}원)보다 포기한 기회비용(95,000원)이 더 커서 경제적 손실(-${Math.abs(netBenefit).toLocaleString()}원)이 발생합니다.`}
                </p>
              </div>
            </div>
          </div>

          {/* Educational Conclusion */}
          <div className="p-3.5 bg-slate-900 text-white rounded-2xl mt-2 text-center">
            <p className="text-[21px] md:text-[23px] font-bold">
              📢 <strong className="text-yellow-300">핵심 정리:</strong> 합리적 선택은 무조건 돈을 적게 쓰는 선택이 아니라,{' '}
              <span className="text-teal-200 underline">순편익이 가장 큰 선택</span>입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
