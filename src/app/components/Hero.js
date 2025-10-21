'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const heroRef = useScrollAnimation(0.1);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content scroll-pop" ref={heroRef}>
          <h2 className="hero-title">
            YOUR COLLECTION, DIGITALLY STYLED.
          </h2>
          <p className="hero-subtitle">
            No shipping. No damage. No logistics. Just results.
          </p>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 150px 0;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.8) 100%);
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(132, 204, 22, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 300;
          margin-bottom: 2rem;
          letter-spacing: 0.02em;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #84CC16 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(132, 204, 22, 0.3);
        }
        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 0.05em;
          color: #e0e0e0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.4;
        }
        
        /* Tablet */
        @media (max-width: 1024px) {
          .hero {
            padding: 120px 0;
          }
          .hero-title {
            font-size: 3.5rem;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          .hero {
            padding: 100px 0;
          }
          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .hero {
            padding: 80px 0;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </section>
  )
}