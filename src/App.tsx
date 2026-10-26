/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { TopHeader } from './components/layout/TopHeader';
import { BottomNavigation } from './components/layout/BottomNavigation';
import { TeacherNoteModal } from './components/layout/TeacherNoteModal';
import { SlideOverviewModal } from './components/layout/SlideOverviewModal';
import { ConceptQuizModule } from './components/quiz/ConceptQuizModule';
import { ScarcityRationalVisualizer } from './components/simulators/ScarcityRationalVisualizer';
import { KiaOpportunityCostSimulator } from './components/simulators/KiaOpportunityCostSimulator';
import { SunkCostSimulator } from './components/simulators/SunkCostSimulator';
import { MarketFailureVisualizer } from './components/simulators/MarketFailureVisualizer';
import { RolesVisualizer } from './components/simulators/RolesVisualizer';
import { GrandConceptMap } from './components/simulators/GrandConceptMap';

export default function App() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isTeacherNoteOpen, setIsTeacherNoteOpen] = useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [isQuizMode, setIsQuizMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const currentSlide = SLIDES_DATA[slideIndex];

  // Reset steps when slide changes
  const handleSelectSlide = useCallback((id: number) => {
    const foundIdx = SLIDES_DATA.findIndex(s => s.id === id);
    if (foundIdx !== -1) {
      setSlideIndex(foundIdx);
      setCurrentStep(1);
      setIsQuizMode(false);
    }
  }, []);

  const handleNextStep = useCallback(() => {
    if (currentStep < currentSlide.totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, currentSlide.totalSteps]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const handleRevealAll = useCallback(() => {
    setCurrentStep(currentSlide.totalSteps);
  }, [currentSlide.totalSteps]);

  const handleResetStep = useCallback(() => {
    setCurrentStep(1);
  }, []);

  const handleNextSlide = useCallback(() => {
    if (slideIndex < SLIDES_DATA.length - 1) {
      setSlideIndex(prev => prev + 1);
      setCurrentStep(1);
    } else {
      // Reached end of 21 slides -> Open 10-Question Quiz!
      setIsQuizMode(true);
    }
  }, [slideIndex]);

  const handlePrevSlide = useCallback(() => {
    if (isQuizMode) {
      setIsQuizMode(false);
      return;
    }
    if (slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
      setCurrentStep(1);
    }
  }, [isQuizMode, slideIndex]);

  const handleJumpToUnit = useCallback((unit: 'unit1' | 'kia' | 'unit2' | 'summary' | 'quiz') => {
    if (unit === 'quiz') {
      setIsQuizMode(true);
      return;
    }
    setIsQuizMode(false);
    if (unit === 'unit1') {
      handleSelectSlide(1);
    } else if (unit === 'kia') {
      handleSelectSlide(3);
    } else if (unit === 'unit2') {
      handleSelectSlide(13);
    } else if (unit === 'summary') {
      handleSelectSlide(21);
    }
  }, [handleSelectSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fallback
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {
          // Fallback
        });
      }
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing inside input elements
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'Escape') {
        setIsTeacherNoteOpen(false);
        setIsOverviewOpen(false);
        return;
      }

      if (e.key === 't' || e.key === 'T' || e.key === 'ㅅ') {
        setIsTeacherNoteOpen(prev => !prev);
        return;
      }

      if (e.key === 'f' || e.key === 'F' || e.key === 'ㄹ') {
        toggleFullscreen();
        return;
      }

      if (isQuizMode) {
        return;
      }

      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        if (currentStep < currentSlide.totalSteps) {
          handleNextStep();
        } else {
          handleNextSlide();
        }
      } else if (e.key === 'ArrowRight') {
        if (currentStep < currentSlide.totalSteps && !e.shiftKey) {
          handleNextStep();
        } else {
          handleNextSlide();
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentStep > 1 && !e.shiftKey) {
          handlePrevStep();
        } else {
          handlePrevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, currentSlide.totalSteps, handleNextSlide, handleNextStep, handlePrevSlide, handlePrevStep, isQuizMode, toggleFullscreen]);

  return (
    <div className="w-screen h-screen flex flex-col bg-[#FAF8F5] text-slate-800 overflow-hidden font-sans select-none">
      {/* Top Bar Contract compliant presentation header */}
      <TopHeader
        slide={currentSlide}
        step={currentStep}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
        onRevealAll={handleRevealAll}
        onResetStep={handleResetStep}
        onToggleTeacherNote={() => setIsTeacherNoteOpen(prev => !prev)}
        isTeacherNoteOpen={isTeacherNoteOpen}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onOpenQuiz={() => setIsQuizMode(true)}
        onJumpToUnit={handleJumpToUnit}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Main 16:9 Presentation Stage */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-2.5 flex flex-col justify-between overflow-hidden">
        {isQuizMode ? (
          <ConceptQuizModule onBackToPresentation={() => setIsQuizMode(false)} />
        ) : (
          <div className="w-full h-full flex flex-col justify-between">
            {/* Slide Header: Unit Title + Main Title (40~44px) + Subtitle (30~34px) */}
            <div className="mb-1.5 shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold px-2.5 py-0.5 bg-slate-200 text-slate-800 rounded-md tracking-wider">
                  {currentSlide.unitTitle}
                </span>
                <span className="text-sm font-bold text-teal-800">
                  {currentSlide.partTitle}
                </span>
              </div>
              <h1 className="text-3xl md:text-[38px] lg:text-[42px] font-black text-[#0F1E36] tracking-tight leading-tight">
                {currentSlide.mainTitle}
              </h1>
              <p className="text-xl md:text-[26px] lg:text-[30px] font-bold text-slate-700 mt-0.5 leading-snug">
                {currentSlide.subTitle}
              </p>
            </div>

            {/* Interactive Concept Canvas */}
            <div className="flex-1 overflow-hidden my-0.5">
              {/* Screen 1 & 2 */}
              {(currentSlide.id === 1 || currentSlide.id === 2) && (
                <ScarcityRationalVisualizer slideId={currentSlide.id} step={currentStep} />
              )}

              {/* Screen 3, 4, 5, 6: KIA Opportunity Cost Simulator */}
              {currentSlide.id >= 3 && currentSlide.id <= 6 && (
                <KiaOpportunityCostSimulator slideId={currentSlide.id} step={currentStep} />
              )}

              {/* Screen 7: Sunk Cost */}
              {currentSlide.id === 7 && (
                <SunkCostSimulator step={currentStep} />
              )}

              {/* Screen 8, 9, 10, 11, 12: Market Failure */}
              {currentSlide.id >= 8 && currentSlide.id <= 12 && (
                <MarketFailureVisualizer slideId={currentSlide.id} step={currentStep} />
              )}

              {/* Screen 13, 14, 15, 16, 17, 18, 19, 20: Economic Roles */}
              {currentSlide.id >= 13 && currentSlide.id <= 20 && (
                <RolesVisualizer slideId={currentSlide.id} step={currentStep} />
              )}

              {/* Screen 21: Grand Concept Map */}
              {currentSlide.id === 21 && (
                <GrandConceptMap step={currentStep} />
              )}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation & Step Controller */}
      {!isQuizMode && (
        <BottomNavigation
          slide={currentSlide}
          currentIndex={slideIndex}
          totalSlides={SLIDES_DATA.length}
          step={currentStep}
          onPrevSlide={handlePrevSlide}
          onNextSlide={handleNextSlide}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          onOpenOverview={() => setIsOverviewOpen(true)}
          onOpenQuiz={() => setIsQuizMode(true)}
        />
      )}

      {/* Teacher's Note Drawer Modal */}
      <TeacherNoteModal
        isOpen={isTeacherNoteOpen}
        onClose={() => setIsTeacherNoteOpen(false)}
        note={currentSlide.teacherNote}
        slideNumber={currentSlide.id}
        slideTitle={currentSlide.mainTitle}
      />

      {/* Slide Overview Navigator Modal */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentSlideId={currentSlide.id}
        onSelectSlide={handleSelectSlide}
        onOpenQuiz={() => setIsQuizMode(true)}
      />
    </div>
  );
}
