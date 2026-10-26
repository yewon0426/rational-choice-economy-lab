import React, { useState } from 'react';
import {
  Shield,
  Scale,
  Building2,
  Users2,
  ShoppingCart,
  HeartHandshake,
  TrendingUp,
  Leaf,
  Globe2,
  CheckCircle2,
  ArrowDown
} from 'lucide-react';

interface Props {
  slideId: number; // 13, 14, 15, 16, 17, 18, 19, 20
  step: number;
}

export const RolesVisualizer: React.FC<Props> = ({ slideId, step }) => {
  // Screen 13 State: Click to reveal policy purpose and detailed example
  const [selectedFailure, setSelectedFailure] = useState<number | null>(null);

  // Screen 14 State (Tax bracket simulator)
  const [taxIncome, setTaxIncome] = useState<number>(6000); // 6,000만원

  // Screen 16 State (ESG Tab)
  const [activeEsg, setActiveEsg] = useState<'E' | 'S' | 'G'>('E');

  // Screen 18 State (Labor rights quiz: answer revealed only on teacher click)
  const [isLaborAnswerRevealed, setIsLaborAnswerRevealed] = useState<boolean>(false);
  const [selectedLaborRight, setSelectedLaborRight] = useState<string | null>(null);

  // SCREEN 13: 정부의 역할 (시장 실패 원인 → 정부 대응 연결 구조)
  if (slideId === 13) {
    const mappings = [
      {
        failure: '독과점 및 담합',
        response: '독점 규제, 공정 거래 촉진, 불공정 거래 행위 규제',
        purpose: '인위적인 공급 감축과 부당한 가격 인상을 방지하여 공정한 시장 경쟁을 회복함',
        case: '대형 통신사나 정유사의 가격 담합 적발 시 과징금 부과 및 시정명령 (공정거래위원회)'
      },
      {
        failure: '긍정적 외부 효과',
        response: '보조금 지급, 세제 지원 등을 통한 생산 · 소비 촉진',
        purpose: '사회적으로 유익함에도 시장에서 과소 생산되는 재화의 공급과 소비를 장려함',
        case: '신종 감염병 백신 무료 접종 바우처 지원, 친환경 기술 R&D 세액 공제'
      },
      {
        failure: '부정적 외부 효과',
        response: '환경 규제, 환경 관련 과세, 온실가스 배출권 거래제 운영',
        purpose: '외부 비용을 제품 생산 비용에 내부화하여 사회적 최적 수준보다 과다 생산되는 것을 억제함',
        case: '공장 굴뚝 매연에 대한 탄소세 부과, 하천 폐수 무단 방류 단속 및 정화 비용 징수'
      },
      {
        failure: '공공재 부족',
        response: '정부의 직접 생산 · 공급 또는 공공재 공급 지원',
        purpose: '비배제성과 비경합성으로 무임승차자가 생겨 민간이 만들지 않는 필수 시설을 공급함',
        case: '국민 세금으로 국방, 치안, 도로, 교량, 가로등, 등대를 직접 설치하고 무료 개방'
      },
      {
        failure: '정보의 비대칭성',
        response: '원산지 표시제, 품질 정보 공개, 상품 정보 제공 제도',
        purpose: '소비자가 정확한 정보에 기반하여 합리적 판단을 내리도록 돕고 역선택을 방지함',
        case: '식품 영양성분 공시, 농축산물 원산지 의무 표시제, 의약품 성분 및 부작용 고지'
      }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-bold px-2.5 py-0.5 bg-indigo-900 text-white rounded">
              정부의 역할
            </span>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900">
              시장 실패의 원인과 정부의 정책적 대응
            </h3>
          </div>
          <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug">
            시장의 불완전성을 보완하기 위한 원인별 맞춤 정책 (카드를 클릭하면 목적과 구체적 사례가 나타납니다)
          </p>
        </div>

        <div className="space-y-2 flex-1 overflow-y-auto">
          {mappings.map((item, idx) => {
            const isRevealed = step >= idx + 1;
            const isExpanded = selectedFailure === idx;

            return (
              <div
                key={idx}
                onClick={() => isRevealed && setSelectedFailure(isExpanded ? null : idx)}
                className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                  isRevealed
                    ? isExpanded
                      ? 'bg-indigo-50 border-indigo-600 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                    : 'bg-slate-50 border-dashed border-slate-200 opacity-30 cursor-default'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-900 flex items-center justify-center font-black text-sm shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                          원인: {item.failure}
                        </span>
                        <span className="text-xs text-slate-400 font-bold">→ 정부 대응:</span>
                      </div>
                      {isRevealed ? (
                        <span className="text-[20px] md:text-[22px] font-black text-slate-900 mt-0.5 block">
                          {item.response}
                        </span>
                      ) : (
                        <span className="text-base text-slate-400">단계별 공개 시 정책이 표시됩니다</span>
                      )}
                    </div>
                  </div>
                  {isRevealed && (
                    <span className="text-xs font-bold text-indigo-700 underline shrink-0 hidden sm:inline">
                      {isExpanded ? '상세 닫기 ▲' : '목적 및 사례 보기 ▼'}
                    </span>
                  )}
                </div>

                {isRevealed && isExpanded && (
                  <div className="mt-3 pt-3 border-t border-indigo-200/60 space-y-1.5 text-base text-slate-800 animate-fadeIn">
                    <div>
                      <strong className="text-indigo-950 font-bold">• 정책 목적:</strong> {item.purpose}
                    </div>
                    <div>
                      <strong className="text-indigo-950 font-bold">• 구체적 사례:</strong> {item.case}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-3 bg-slate-900 text-white rounded-2xl text-base font-semibold flex justify-between items-center mt-2">
          <span>💡 정부의 역할은 단순한 시장 통제가 아니라, <strong>시장의 한계를 보완하고 공정한 경쟁을 촉진</strong>하는 것입니다.</span>
          <span className="font-mono text-slate-400 text-xs">EBS 82p</span>
        </div>
      </div>
    );
  }

  // SCREEN 14: 소득 재분배 (시장 실패 4대 원인과 구분하여 정부의 별도 역할로 제시)
  if (slideId === 14) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs mb-2">
          <span className="text-xs font-bold text-teal-700 tracking-wider block mb-0.5">정부의 고유 역할</span>
          <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-1">
            소득 재분배와 사회 안전망 구축
          </h3>
          <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug">
            시장 실패 교정과 구분되는 정부의 중요한 역할로, 시장경제의 구조적 <strong>경제적 불평등을 완화</strong>합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 items-stretch my-1">
          {/* Left: 누진세 제도 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-indigo-700 tracking-wider block mb-1">조세 정책</span>
              <h4 className="text-[24px] md:text-[26px] font-black text-slate-900 mb-1 tracking-tight">
                누진세 제도
              </h4>
              <p className="text-[19px] md:text-[21px] text-slate-700 leading-snug mb-3">
                소득이 많을수록 더 높은 세율을 적용하여 고소득자의 세부담을 늘리고 빈부격차를 완화합니다.
              </p>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-base font-bold text-slate-800">가상 과세표준(연소득)</span>
                  <span className="text-[24px] font-black text-indigo-900 font-mono">
                    {taxIncome.toLocaleString()}만 원
                  </span>
                </div>
                <input
                  type="range"
                  min={1400}
                  max={20000}
                  step={1000}
                  value={taxIncome}
                  onChange={(e) => setTaxIncome(Number(e.target.value))}
                  className="w-full accent-indigo-700 h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
                  <span>1,400만 (6%)</span>
                  <span>5,000만 (24%)</span>
                  <span>1억 초과 (35%~)</span>
                </div>
              </div>

              <div className="space-y-1.5 text-sm font-semibold">
                <div className="p-2 bg-slate-100 rounded-lg flex justify-between">
                  <span>1,400만 원 이하 구간</span>
                  <span className="font-bold text-slate-800">세율 6% (저소득층 부담 완화)</span>
                </div>
                <div className="p-2 bg-indigo-50 rounded-lg flex justify-between">
                  <span>5,000만 ~ 8,800만 원 구간</span>
                  <span className="font-bold text-indigo-800">세율 24% (중상위 소득층)</span>
                </div>
                <div className="p-2 bg-indigo-100 rounded-lg flex justify-between">
                  <span>3억 원 초과 구간</span>
                  <span className="font-bold text-indigo-950">세율 40% (초고소득층)</span>
                </div>
              </div>
            </div>

            <div className="text-base text-indigo-900 font-bold pt-2 border-t border-slate-100">
              ✓ 조세 형평성 제고 및 계층 간 소득 격차 완화
            </div>
          </div>

          {/* Right: 사회 보장 제도 3대 축 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-teal-700 tracking-wider block mb-1">사회 안전망</span>
              <h4 className="text-[24px] md:text-[26px] font-black text-slate-900 mb-1 tracking-tight">
                사회 보장 제도
              </h4>
              <p className="text-[19px] md:text-[21px] text-slate-700 leading-snug mb-3">
                질병, 실업, 빈곤, 노령 등 사회적 위험으로부터 국민의 기본적인 생활을 보장합니다.
              </p>

              <div className="space-y-2.5">
                <div className="p-3 bg-teal-50 rounded-xl border border-teal-200">
                  <h5 className="font-bold text-teal-950 text-base mb-0.5 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-teal-700" />
                    사회보험 (사전 예방)
                  </h5>
                  <p className="text-sm text-teal-900 leading-snug">
                    국민건강보험, 국민연금, 고용보험, 산업재해보상보험 (국민과 기업 분담)
                  </p>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <h5 className="font-bold text-amber-950 text-base mb-0.5 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-amber-700" />
                    공공부조 (사후 처방)
                  </h5>
                  <p className="text-sm text-amber-900 leading-snug">
                    국민기초생활보장제도, 의료급여 (국가 재정으로 저소득층 최저생활 전액 지원)
                  </p>
                </div>

                <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                  <h5 className="font-bold text-purple-950 text-base mb-0.5 flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-purple-700" />
                    사회서비스 (돌봄·상담)
                  </h5>
                  <p className="text-sm text-purple-900 leading-snug">
                    노인 돌봄, 장애인 활동 보조, 아동 보육 등 비금전적 복지 서비스
                  </p>
                </div>
              </div>
            </div>

            <div className="text-base text-slate-600 font-semibold pt-2 border-t border-slate-100">
              💡 최저 생활 보장으로 사회 갈등을 완화하고 경제의 지속가능성을 제고
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SCREEN 15: 기업가 정신 (고용 창출과 사회 기여는 '기대 결과'로 명확히 구분!)
  if (slideId === 15) {
    const pillars = [
      {
        tag: '핵심 역량',
        title: '혁신과 도전 (Innovation)',
        desc: '새로운 기술과 새로운 상품을 개발하고 생산 방식을 과감히 개편하는 태도'
      },
      {
        tag: '핵심 역량',
        title: '신시장 개척',
        desc: '기존에 존재하지 않던 새로운 수요를 발굴하고 시장 영역을 넓히는 노력'
      },
      {
        tag: '핵심 역량',
        title: '위험과 불확실성 감수',
        desc: '미래의 불확실성과 실패에 대한 두려움을 극복하고 과감한 투자와 연구개발 결단'
      },
      {
        tag: '기대 결과',
        title: '고용 창출과 사회 기여',
        desc: '기업가 활동의 결과로 양질의 일자리가 창출되고 사회 전체의 부가 증진됨'
      }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold px-2 py-0.5 bg-orange-600 text-white rounded">슘페터의 이론</span>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900">
              기업가 정신과 창조적 파괴
            </h3>
          </div>
          <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug">
            <strong>창조적 파괴(Creative Destruction):</strong> 새로운 기술·상품·생산 방식의 등장으로 기존 산업과 시장 구조가 혁신적으로 변화하는 현상
          </p>
        </div>

        {/* 2x2 Cards: Height reduced by 20~25%, fitting content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1 my-1">
          {pillars.map((item, idx) => {
            const isRevealed = step >= idx + 1;
            const isOutcome = item.tag === '기대 결과';
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-center ${
                  isRevealed
                    ? isOutcome
                      ? 'bg-amber-50/80 border-amber-300 shadow-xs'
                      : 'bg-orange-50/70 border-orange-200 shadow-xs'
                    : 'bg-slate-50 border-dashed border-slate-200 opacity-30'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-orange-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="text-[22px] md:text-[24px] font-black text-slate-900">
                      {item.title}
                    </h4>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${isOutcome ? 'bg-amber-200 text-amber-900' : 'bg-orange-200 text-orange-900'}`}>
                    {item.tag}
                  </span>
                </div>
                {isRevealed ? (
                  <p className="text-[19px] md:text-[21px] text-slate-700 font-medium leading-snug pl-9">
                    {item.desc}
                  </p>
                ) : (
                  <div className="text-sm text-slate-400 pl-9">단계별 공개 시 내용이 표시됩니다</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-3 bg-slate-900 text-white rounded-2xl text-base font-bold text-center mt-2">
          고용 창출과 사회 기여는 기업가 정신 자체의 정의라기보다, 혁신과 도전 활동을 통해 얻어지는 소중한 사회적 열매입니다.
        </div>
      </div>
    );
  }

  // SCREEN 16: 기업 윤리와 ESG
  if (slideId === 16) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        {/* Top: CSR 5대 축 */}
        <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs mb-2">
          <span className="text-xs font-bold text-indigo-700 tracking-wider block mb-0.5">기본 책무</span>
          <h3 className="text-[24px] md:text-[26px] font-black text-slate-900 mb-1">
            기업 윤리와 사회적 책임(CSR)의 핵심
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-sm font-bold text-slate-800">
            <div className="p-2 bg-slate-100 rounded-lg">1. 법규 준수</div>
            <div className="p-2 bg-slate-100 rounded-lg">2. 공정 경쟁</div>
            <div className="p-2 bg-slate-100 rounded-lg">3. 노동권 존중</div>
            <div className="p-2 bg-slate-100 rounded-lg">4. 소비자 보호</div>
            <div className="p-2 bg-slate-100 rounded-lg">5. 환경 보호</div>
          </div>
        </div>

        {/* ESG Interactive Tabs: working and content-fitted */}
        <div className="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-xs flex-1 flex flex-col justify-between my-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[22px] md:text-[24px] font-black text-slate-900">
              지속가능한 성장을 위한 ESG 경영
            </h4>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveEsg('E')}
                className={`px-4 py-1.5 text-base font-bold rounded-xl transition ${
                  activeEsg === 'E' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-100 text-slate-600'
                }`}
              >
                E (환경)
              </button>
              <button
                onClick={() => setActiveEsg('S')}
                className={`px-4 py-1.5 text-base font-bold rounded-xl transition ${
                  activeEsg === 'S' ? 'bg-indigo-600 text-white shadow' : 'bg-slate-100 text-slate-600'
                }`}
              >
                S (사회)
              </button>
              <button
                onClick={() => setActiveEsg('G')}
                className={`px-4 py-1.5 text-base font-bold rounded-xl transition ${
                  activeEsg === 'G' ? 'bg-amber-600 text-white shadow' : 'bg-slate-100 text-slate-600'
                }`}
              >
                G (지배구조)
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl border flex-1 flex flex-col justify-center">
            {activeEsg === 'E' && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-black text-[22px]">
                  <Leaf className="w-6 h-6" />
                  E (환경) — 친환경 생산 및 생태계 보호
                </div>
                <div className="text-[20px] md:text-[22px] text-slate-800 font-medium leading-snug">
                  • 탄소 배출 감축 & RE100 재생에너지 동참<br />
                  • 자원 절약 및 수자원·폐기물 재활용<br />
                  • 친환경 생분해 제품 생산
                </div>
              </div>
            )}

            {activeEsg === 'S' && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 font-black text-[22px]">
                  <Users2 className="w-6 h-6" />
                  S (사회) — 노동자·소비자·인권 존중
                </div>
                <div className="text-[20px] md:text-[22px] text-slate-800 font-medium leading-snug">
                  • 노동자 안전 보장 및 산업재해 예방 설비 투자<br />
                  • 소비자 안전 보호 및 제품 결함 신속 리콜<br />
                  • 인권 존중, 협력업체 상생, 사회적 약자 채용
                </div>
              </div>
            )}

            {activeEsg === 'G' && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-700 font-black text-[22px]">
                  <Scale className="w-6 h-6" />
                  G (지배구조) — 투명하고 책임 있는 경영
                </div>
                <div className="text-[20px] md:text-[22px] text-slate-800 font-medium leading-snug">
                  • 투명한 회계 감사 공시 및 이사회 독립성 확보<br />
                  • 횡령·부패 방지 내부고발 준법 시스템 운영<br />
                  • 주주 권익 보호와 공정한 의사결정
                </div>
              </div>
            )}
          </div>

          <div className="p-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold text-center mt-2">
            결론: 이윤 추구와 사회적 책임은 결코 상충되지 않으며, 기업의 지속가능한 생존을 위한 필수 조건입니다.
          </div>
        </div>
      </div>
    );
  }

  // SCREEN 17: 노동자의 역할
  if (slideId === 17) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs mb-2">
          <span className="text-xs font-bold text-teal-700 tracking-wider block mb-0.5">헌법 제32조</span>
          <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-1">
            노동자의 의미와 근로의 권리
          </h3>
          <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug">
            노동자는 노동력을 제공하고 임금을 받아 생활하는 경제주체로, 법적으로 기본적 권리를 보호받습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 my-1">
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-teal-700 block mb-1">법적 보호 1</span>
              <h4 className="text-[22px] md:text-[24px] font-black text-slate-900 mb-2">근로기준법</h4>
              <p className="text-[18px] md:text-[20px] text-slate-700 leading-snug">
                인간다운 생활을 보장하기 위해 <strong>근로 조건의 최저 기준</strong>을 정하는 법률
              </p>
            </div>
            <div className="text-sm text-teal-900 font-bold pt-2 border-t border-teal-200">
              법정근로시간: 1일 8시간, 1주 40시간 (휴게시간 제외)
            </div>
          </div>

          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-indigo-700 block mb-1">법적 보호 2</span>
              <h4 className="text-[22px] md:text-[24px] font-black text-slate-900 mb-2">최저임금제</h4>
              <p className="text-[18px] md:text-[20px] text-slate-700 leading-snug">
                국가가 <strong>임금의 최저 수준을 법적으로 정하여</strong> 노동자의 생계 안정과 노동력 향상 도모
              </p>
            </div>
            <div className="text-sm text-indigo-900 font-bold pt-2 border-t border-indigo-200">
              모든 사업장에 강제 적용
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-700 block mb-1">상호 존중</span>
              <h4 className="text-[22px] md:text-[24px] font-black text-slate-900 mb-2">노사 상호 존중</h4>
              <p className="text-[18px] md:text-[20px] text-slate-700 leading-snug">
                기업과 노동자는 대립 관계가 아니라 상호 존중과 신뢰를 바탕으로 생산성을 높이는 파트너
              </p>
            </div>
            <div className="text-sm text-amber-950 font-bold pt-2 border-t border-amber-200">
              성실한 생산 활동 참여와 권리 보장
            </div>
          </div>
        </div>

        <div className="p-3 bg-slate-900 text-white rounded-2xl text-base font-bold text-center mt-2">
          근로기준법과 최저임금제는 노동자의 존엄성을 지키는 최소한의 법적 안전판입니다.
        </div>
      </div>
    );
  }

  // SCREEN 18: 헌법상 노동 3권 (헌법 제33조) + 사례 구분 문제
  if (slideId === 18) {
    const rights = [
      {
        title: '단결권',
        desc: '근로자가 근로조건 개선을 위해 스스로 노동조합을 조직하거나 가입할 수 있는 권리',
        case: '근로자들이 모여 노동조합 설립 신고를 하고 노조에 가입함'
      },
      {
        title: '단체교섭권',
        desc: '노동조합을 통해 사용자와 근로 조건에 관하여 대등하게 교섭할 수 있는 권리',
        case: '노동조합 대표와 회사 측이 임금 인상률에 관해 교섭 테이블에 마주 앉음'
      },
      {
        title: '단체행동권',
        desc: '근로 조건의 유지·개선을 위해 법에서 정한 범위에서 쟁의행위를 할 수 있는 권리',
        case: '법에서 정한 요건과 절차에 따라 평화적으로 파업에 참여함'
      }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs mb-2">
          <span className="text-xs font-bold text-teal-800 tracking-wider block mb-0.5">헌법 제33조</span>
          <h3 className="text-[24px] md:text-[26px] font-black text-slate-900 mb-0.5">
            헌법상 노동 3권의 이해
          </h3>
          <p className="text-[19px] md:text-[21px] text-slate-700 leading-snug">
            근로자가 사용자와 대등한 지위에서 근로 조건을 개선할 수 있도록 헌법이 보장한 권리
          </p>
        </div>

        {/* 3 Cards: Height reduced by 30% */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 my-1">
          {rights.map((item, idx) => {
            const isRevealed = step >= idx + 1;
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                  isRevealed
                    ? 'bg-white border-teal-300 shadow-xs'
                    : 'bg-slate-50 border-dashed border-slate-200 opacity-30'
                }`}
              >
                <div>
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-900 font-black text-xs flex items-center justify-center mb-1.5">
                    0{idx + 1}
                  </span>
                  <h4 className="text-[22px] md:text-[24px] font-black text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  {isRevealed ? (
                    <>
                      <p className="text-[18px] md:text-[19px] text-slate-700 leading-snug mb-2 font-medium">
                        {item.desc}
                      </p>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800">
                        📌 {item.case}
                      </div>
                    </>
                  ) : (
                    <div className="text-sm text-slate-400 py-3">단계별 공개 시 내용 표시</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Matching Exercise: Hidden until teacher clicks */}
        <div className="p-3 bg-indigo-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 mt-2">
          <div className="text-[18px] font-bold">
            💡 [발문 사례] "노조 대표가 사장님과 근로시간 단축을 협상했다" $\to$ 어떤 권리일까요?
          </div>
          <div className="flex items-center gap-2">
            {!isLaborAnswerRevealed ? (
              <button
                onClick={() => setIsLaborAnswerRevealed(true)}
                className="px-4 py-1.5 text-sm bg-yellow-400 text-slate-950 font-black rounded-xl hover:bg-yellow-300 transition"
              >
                교사 정답 확인
              </button>
            ) : (
              <div className="px-4 py-1.5 bg-emerald-600 text-white font-black text-base rounded-xl animate-fadeIn">
                정답: 단체교섭권!
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // SCREEN 19: 소비자 주권과 달러 투표 (세로 흐름도)
  if (slideId === 19) {
    const flowSteps = [
      {
        num: '01',
        title: '소비자의 구매 선택',
        desc: '소비자들이 상품의 가치와 가격을 따져 지갑을 열어 구매함 (달러 투표)',
        color: 'bg-orange-50 border-orange-300 text-orange-950'
      },
      {
        num: '02',
        title: '기업의 판매량과 수익 변화',
        desc: '선택받은 제품의 매출과 이윤은 증가하고, 외면받은 제품은 재고가 누적됨',
        color: 'bg-indigo-50 border-indigo-300 text-indigo-950'
      },
      {
        num: '03',
        title: '기업의 생산 결정에 영향',
        desc: '기업은 시장 수요에 맞춰 생산 품목, 수량, 친환경 공정 등 생산 활동을 조정함',
        color: 'bg-emerald-50 border-emerald-300 text-emerald-950'
      }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs mb-2">
          <span className="text-xs font-bold text-orange-600 tracking-wider block mb-0.5">소비자의 힘</span>
          <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-1">
            소비자 주권과 달러 투표 (Dollar Voting)
          </h3>
          <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug">
            소비자 주권은 <strong>소비자의 선택이 시장에서 기업의 생산 활동에 영향을 미칠 수 있다</strong>는 원리입니다.
          </p>
        </div>

        {/* Vertical Flowchart: Step by Step */}
        <div className="flex flex-col items-center justify-center flex-1 my-1 gap-2">
          {flowSteps.map((item, idx) => {
            const isRevealed = step >= idx + 1;
            return (
              <React.Fragment key={idx}>
                <div
                  className={`w-full max-w-4xl p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                    isRevealed
                      ? `${item.color} shadow-xs`
                      : 'bg-slate-50 border-dashed border-slate-200 opacity-30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-xl bg-white font-black text-sm flex items-center justify-center shrink-0 border border-slate-200">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="text-[22px] md:text-[24px] font-black">{item.title}</h4>
                      {isRevealed && (
                        <p className="text-[19px] md:text-[21px] text-slate-700 font-medium leading-snug mt-0.5">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                  {isRevealed && <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 hidden sm:block" />}
                </div>

                {idx < flowSteps.length - 1 && (
                  <ArrowDown
                    className={`w-5 h-5 ${
                      step >= idx + 2 ? 'text-orange-600 stroke-[2.5]' : 'text-slate-300'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="p-3 bg-slate-900 text-white rounded-2xl text-base font-bold text-center mt-2">
          소비자의 구매 선택이 시장의 수요를 형성하고 기업의 생산 결정에 지대한 영향을 미칩니다.
        </div>
      </div>
    );
  }

  // SCREEN 20: 합리적 소비 vs 윤리적 소비
  return (
    <div className="w-full h-full flex flex-col justify-between py-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 items-stretch my-1">
        {/* Left: 합리적 소비 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 tracking-wider block mb-1">개인적 관점</span>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-2 tracking-tight">
              합리적 소비
            </h3>
            <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug mb-3">
              자신의 소득 범위 내에서 <strong>편익과 비용을 고려하여 순편익을 높이는 소비</strong>
            </p>

            <div className="space-y-2 text-[19px] text-slate-800 font-medium">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                • 가격 대비 품질(가성비) 꼼꼼한 비교
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                • 충동구매 자제 및 계획적 소비 지출
              </div>
            </div>
          </div>
          <div className="text-base text-slate-500 pt-2 border-t border-slate-100 font-semibold">
            초점: 개인의 편익과 비용의 균형
          </div>
        </div>

        {/* Right: 윤리적 소비 */}
        <div className="bg-white p-5 rounded-2xl border-2 border-emerald-400 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-700 tracking-wider block mb-1">사회적 가치 확장</span>
            <h3 className="text-[26px] md:text-[28px] font-black text-slate-900 mb-2 tracking-tight">
              윤리적 소비
            </h3>
            <p className="text-[20px] md:text-[22px] text-slate-700 leading-snug mb-3">
              상품의 가격과 효용뿐 아니라 <strong>환경, 인권, 공정성 등 사회적 가치를 함께 고려</strong>하는 소비
            </p>

            <div className="space-y-2 text-[18px] md:text-[19px] font-medium text-emerald-950">
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                <strong>• 친환경 소비:</strong> 로컬 푸드, 탄소 발자국 저감 상품
              </div>
              <div className="p-2.5 bg-teal-50 rounded-xl border border-teal-200">
                <strong>• 공정무역 제품:</strong> 생산자에게 정당한 가격을 지불한 상품
              </div>
              <div className="p-2.5 bg-indigo-50 rounded-xl border border-indigo-200">
                <strong>• 노동자 인권 존중:</strong> 아동 노동 착취 금지, 안전 준수 기업 선택
              </div>
            </div>
          </div>
          <div className="text-base text-emerald-800 pt-2 border-t border-slate-100 font-bold">
            초점: 사회적 가치를 고려한 성숙한 연대
          </div>
        </div>
      </div>

      <div className="p-3.5 bg-slate-900 text-white rounded-2xl text-[19px] md:text-[21px] font-bold text-center mt-2">
        💡 <strong>핵심 이해:</strong> 두 개념은 대립하지 않습니다. 소비자가 중요하게 여기는 사회적 가치를 편익으로 고려한다면{' '}
        <span className="text-yellow-300 underline">윤리적 소비 역시 합리적 선택</span>이 될 수 있습니다.
      </div>
    </div>
  );
};
