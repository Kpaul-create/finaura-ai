'use client';
import Section from './Section';
import { useState, useRef, useEffect, useCallback } from 'react';

// Define a default set of images to show if none are provided
const defaultImagePairs = [
  { before: '/path/to/before1.jpg', after: '/path/to/after1.jpg' },
  { before: '/path/to/before2.jpg', after: '/path/to/after2.jpg' },
  { before: '/path/to/before3.jpg', after: '/path/to/after3.jpg' },
  { before: '/path/to/before4.jpg', after: '/path/to/after4.jpg', hasReference: true },
  { before: '/path/to/before5.jpg', after: '/path/to/after5.jpg', hasReference: true },
];

export default function Gallery({ imagePairs = defaultImagePairs }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imagePairs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imagePairs.length) % imagePairs.length);
  };

  const handleSliderMove = useCallback((e) => {
    if (!isDragging || !sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  }, [isDragging]);

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleSliderMove);
      window.addEventListener('touchmove', handleSliderMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleSliderMove);
      window.removeEventListener('touchmove', handleSliderMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleSliderMove, handleDragEnd]);


  return (
    <Section title="BEFORE & AFTER">
      <div className="gallery-container">
        <div className="slider-wrapper">
          <div className="slider-container">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {imagePairs.map((pair, index) => (
                <div key={index} className="slide">
                  <div className={`slider-plus-reference${pair.hasReference ? ' has-reference' : ''}`}>
                    <div 
                      ref={index === currentSlide ? sliderContainerRef : null} 
                      className="comparison-slider-wrapper"
                      onMouseLeave={handleDragEnd} // Stop dragging if mouse leaves
                    >
                      <div
                        className="comparison-image before-image"
                        style={{ backgroundImage: `url(${pair.before})` }}
                      >
                         {!pair.before.startsWith('/') && <span>Original Image</span>}
                      </div>
                      <div
                        className="comparison-image after-image"
                        style={{ 
                          backgroundImage: `url(${pair.after})`,
                          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
                        }}
                      >
                         {!pair.after.startsWith('/') && <span>AI Enhanced</span>}
                      </div>
                      <div className="slider-line" style={{ left: `${sliderPosition}%` }}>
                        <div 
                          className="slider-handle" 
                          onMouseDown={handleDragStart}
                          onTouchStart={handleDragStart}
                        />
                      </div>
                    </div>

                    {pair.hasReference && (
                      <div className="reference-card reference-box-only">
                        <span>Reference</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous Slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="slider-dots">
              {imagePairs.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next Slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .gallery-container {
          max-width: 100%;
          margin: 0 auto;
        }

        .slider-wrapper {
          position: relative;
          margin-bottom: 4rem;
        }

        .slider-container {
          overflow: hidden;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(30, 30, 30, 0.8) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
        }

        .slider-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1);
        }

        .slide {
          min-width: 100%;
          flex-shrink: 0;
          padding: 0 1rem;
        }
        
        .slider-plus-reference {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .has-reference {
          justify-content: center;
        }

        .comparison-slider-wrapper {
          position: relative;
          width: 300px;
          height: 400px;
          overflow: hidden;
          background: #111;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          cursor: ew-resize;
          user-select: none; /* Prevent text selection while dragging */
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .comparison-image {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          display: flex;
          align-items: center; justify-content: center;
          color: #84CC16;
          font-weight: 600;
          font-size: 1.1rem;
          background-size: cover;
          background-position: center;
        }
        
        .before-image {
          z-index: 1;
        }
        .after-image {
          z-index: 2;
        }
        
        .slider-line {
          position: absolute;
          top: 0; bottom: 0;
          width: 4px;
          background: rgba(255,255,255,0.8);
          box-shadow: 0 0 10px rgba(132, 204, 22, 0.7);
          z-index: 10;
          pointer-events: none;
          transform: translateX(-50%); /* Center the line */
        }

        .slider-handle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            background: #84CC16;
            border-radius: 50%;
            border: 3px solid #1a1a1a;
            box-shadow: 0 0 15px rgba(132, 204, 22, 0.5);
            pointer-events: all;
            cursor: ew-resize;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .slider-handle:before, .slider-handle:after {
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-color: transparent #1a1a1a transparent transparent;
            border-width: 4px 4px 4px 0;
        }
        .slider-handle:after {
            transform: rotate(180deg);
        }

        .slider-handle:hover, .slider-handle:active {
            transform: translate(-50%, -50%) scale(1.1);
            box-shadow: 0 0 25px rgba(132, 204, 22, 0.8);
        }

        .reference-box-only {
          background: linear-gradient(135deg, rgba(132, 204, 22, 0.05) 0%, rgba(20,20,20,0.1) 100%);
          border: 2px dashed rgba(132, 204, 22, 0.4);
          display: flex; align-items: center; justify-content: center;
          width: 300px;
          height: 400px;
          border-radius: 16px;
          color: #84CC16;
          opacity: 0.7;
          font-weight: 500;
        }
        
        .slider-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .slider-btn {
          background: linear-gradient(135deg, #84CC16 0%, #A3E635 100%);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a1a1a;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(132, 204, 22, 0.3);
        }

        .slider-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(132, 204, 22, 0.5);
        }

        .slider-dots {
          display: flex;
          gap: 0.75rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #84CC16;
          border-color: #84CC16;
          transform: scale(1.2);
        }
        
        .dot:hover {
          border-color: #84CC16;
        }

        @media (max-width: 768px) {
          .slider-plus-reference {
            flex-direction: column;
            gap: 1.5rem;
          }
          .comparison-slider-wrapper,
          .reference-box-only {
            width: 240px;
            height: 320px;
          }
          .slider-controls {
            gap: 1rem;
          }
          .slider-btn {
            width: 40px;
            height: 40px;
          }
          .slide {
            padding: 0;
          }
        }
      `}</style>
    </Section>
  )
}