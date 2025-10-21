'use client';
import Section from './Section';
import { useState } from 'react';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const beforeAfterPairs = Array(5).fill(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterPairs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);
  };

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <Section title="BEFORE & AFTER">
      <div className="gallery-container">
        {/* Main Slider */}
        <div className="slider-wrapper">
          <div className="slider-container">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {beforeAfterPairs.map((_, index) => (
                <div key={index} className="slide">
                  <div className={`slider-plus-reference${(index === 3 || index === 4) ? ' has-reference' : ''}`}>  
                    {/* Image Comparison Slider */}
                    <div className="comparison-slider-container">
                      <div className="comparison-slider-wrapper" onMouseMove={handleSliderMove} onMouseLeave={() => setSliderPosition(50)}>
                        <div className="comparison-image before-image passport-size"><span>Original Image {index+1}</span></div>
                        <div className="comparison-image after-image passport-size" style={{ clipPath: `inset(0 ${100-sliderPosition}% 0 0)`}}><span>AI Enhanced {index+1}</span></div>
                        <div className="slider-line" style={{ left: `${sliderPosition}%` }} />
                      </div>
                    </div>
                    {/* Reference box for sets 4 & 5 */}
                    {(index === 3 || index === 4) && (
                      <div className="reference-card reference-box-only passport-size"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="slider-controls">
            <button className="slider-btn prev-btn" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="slider-dots">
              {beforeAfterPairs.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button className="slider-btn next-btn" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
        
        /* Slider Styles */
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
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .slide {
          min-width: 100%;
          flex-shrink: 0;
        }
        
        /* Image Set Container */
        .image-set-container {
          width: 100%;
          max-width: 470px;
          padding: 1rem 0.5rem;
        }
        
        .before-after-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .image-section {
          text-align: center;
        }
        
        .image-label {
          font-size: 1rem;
          opacity: 0.8;
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
          color: #84CC16;
          font-weight: 500;
        }
        
        .image-placeholder {
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(30, 30, 30, 0.8) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #84CC16;
          font-size: 1rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .passport-size {
          width: 150px;
          height: 180px;
          margin: 0 auto;
        }
        
        .image-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .image-placeholder:hover::before {
          opacity: 1;
        }
        
        .image-placeholder:hover {
          transform: scale(1.05);
          border-color: rgba(132, 204, 22, 0.3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .image-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .image-placeholder:hover::before {
          opacity: 1;
        }
        
        /* Reference Section */
        .reference-section {
          margin-top: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(30, 30, 30, 0.6) 100%);
          border: 1px solid rgba(132, 204, 22, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }
        
        .reference-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 300;
          text-align: center;
          margin-bottom: 2rem;
          color: #84CC16;
          letter-spacing: 0.05em;
        }
        
        .reference-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .reference-card {
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(30, 30, 30, 0.8) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .reference-card:hover {
          transform: translateY(-5px);
          border-color: rgba(132, 204, 22, 0.3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .reference-image {
          height: 120px;
          background: linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, rgba(20, 20, 20, 0.9) 100%);
          border: 1px solid rgba(132, 204, 22, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #84CC16;
          font-weight: 600;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }
        
        .reference-image:hover {
          transform: scale(1.02);
          border-color: rgba(132, 204, 22, 0.5);
        }
        
        .reference-content h5 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        
        .reference-content p {
          color: #e0e0e0;
          opacity: 0.8;
          line-height: 1.4;
          font-size: 0.875rem;
        }
        
        /* Slider Controls */
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
          color: #000;
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
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: #84CC16;
          transform: scale(1.2);
        }
        
        .dot:hover {
          background: rgba(132, 204, 22, 0.7);
        }
        
        .slider-plus-reference {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
        }

        .has-reference {
          justify-content: center;
        }

        .comparison-slider-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .comparison-slider-wrapper {
          position: relative;
          width: 240px;
          height: 300px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(20,20,20,0.8), rgba(40,40,40,0.8));
          border-radius: 32px;
        }
        .comparison-image {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          display: flex;
          align-items: center; justify-content: center;
          color: #84CC16;
          font-weight: 600;
          font-size: 1.05rem;
          margin: 0; padding: 0;
          border-radius: 32px;
        }
        .before-image {
          background: linear-gradient(135deg, rgba(100,100,100,0.14) 0%, rgba(50,50,50,0.2) 100%);
          z-index: 1;
        }
        .after-image {
          background: linear-gradient(135deg, rgba(132,204,22,0.18) 0%, rgba(30,30,30,0.7) 100%);
          z-index: 2;
        }
        .slider-line {
          position: absolute;
          top: 0; bottom: 0;
          width: 3px;
          background: #84CC16;
          border-radius: 8px;
          z-index: 10;
          pointer-events: none;
          transition: background 0.2s;
        }
        .reference-box-only {
          background: linear-gradient(135deg, rgba(132, 204, 22, 0.12) 0%, rgba(20,20,20,0.38) 100%);
          border: 1.5px dashed #84CC16;
          display: flex; align-items: center; justify-content: center;
          min-width: 90px;
          margin-left: 0.7rem;
          width: 240px;
          height: 300px;
          border-radius: 32px;
        }
        
        
        @media (max-width: 768px) {
          .before-after-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .passport-size,
          .reference-box-only,
          .comparison-slider-wrapper,
          .comparison-image {
            width: 180px;
            height: 220px;
            border-radius: 24px;
          }
          
          .slider-controls {
            gap: 1rem;
          }
          
          .slider-btn {
            width: 40px;
            height: 40px;
          }
          
          .reference-grid {
            grid-template-columns: 1fr;
          }
          
          .reference-section {
            padding: 1.5rem;
          }
          .slider-plus-reference {
            flex-direction: column;
            gap: 0.7rem;
          }
          .reference-box-only {
            margin-left: 0;
            margin-top: 0.7rem;
            min-width: 60px;
          }
        }
      `}</style>
    </Section>
  )
}