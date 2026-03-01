"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import SliderSlide from "./SliderSlide";

interface Slide {
  id: number;
  layout: "image" | "content";
  image: string;
  title: string;
  description: string;
  cta: { label: string; href: string } | null;
}

interface HeroSliderProps {
  slides: Slide[];
  autoplay?: boolean;
  interval?: number;
}

export default function HeroSlider({
  slides,
  autoplay = true,
  interval = 6000,
}: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isDragging = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, interval);
  }, [autoplay, interval, slides.length, stopTimer]);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, slides.length]);

  const goTo = (index: number) => {
    stopTimer();
    setActiveIndex(index);
    startTimer();
  };

  const goNext = () => {
    goTo((activeIndex + 1) % slides.length);
  };

  const goPrev = () => {
    goTo((activeIndex - 1 + slides.length) % slides.length);
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    stopTimer();
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;

    // Apply live drag offset via CSS transform
    if (trackRef.current) {
      const baseOffset = -activeIndex * 100;
      const dragPercent = (touchDeltaX.current / window.innerWidth) * 100;
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(${baseOffset + dragPercent}%)`;
    }
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Restore CSS transition
    if (trackRef.current) {
      trackRef.current.style.transition = "";
    }

    const threshold = 50;
    if (touchDeltaX.current < -threshold) {
      goNext();
    } else if (touchDeltaX.current > threshold) {
      goPrev();
    } else {
      // Snap back
      startTimer();
    }
    touchDeltaX.current = 0;
  };

  return (
    <section className="relative hero-section">
      {/* Slide track */}
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <SliderSlide
                layout={slide.layout}
                image={slide.image}
                title={slide.title}
                description={slide.description}
                cta={slide.cta}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination — desktop: dots + counter, mobile: counter only, tight to content */}
      <nav
        className="absolute bottom-1 md:bottom-4 right-3 md:right-5 flex items-center gap-2 z-20"
        aria-label="Slider pagination"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            aria-label={`Slajd ${i + 1}`}
            aria-current={i === activeIndex ? "true" : undefined}
            className={`hidden md:block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-accent-gold scale-125" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
        <span className="text-[10px] tracking-widest text-white/40 tabular-nums select-none">
          {activeIndex + 1}/{slides.length}
        </span>
      </nav>
    </section>
  );
}
