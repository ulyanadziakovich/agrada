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
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);
    }, 300);
  }, []);

  const startTimer = useCallback(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 300);
    }, interval);
  }, [autoplay, interval, slides.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleGoTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(index);
    startTimer();
  };

  const current = slides[activeIndex];

  return (
    <section className="relative hero-section">
      {/* Slide */}
      <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}>
        <SliderSlide
          layout={current.layout}
          image={current.image}
          title={current.title}
          description={current.description}
          cta={current.cta}
        />
      </div>

      {/* Paginacja */}
      <nav
        className="absolute bottom-4 right-5 flex items-center gap-2 z-20"
        aria-label="Slider pagination"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => handleGoTo(i)}
            aria-label={`Slajd ${i + 1}`}
            aria-current={i === activeIndex ? "true" : undefined}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-accent scale-125" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
        <span className="ml-2 text-[10px] tracking-widest text-white/40 tabular-nums select-none">
          {activeIndex + 1}/{slides.length}
        </span>
      </nav>
    </section>
  );
}
