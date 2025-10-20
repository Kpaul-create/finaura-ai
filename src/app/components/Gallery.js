'use client';
import Section from './Section';

export default function Gallery() {
  const beforeAfterPairs = Array(5).fill(null)

  return (
    <Section title="BEFORE & AFTER">
      <div className="space-y-16">
        {beforeAfterPairs.map((_, index) => (
          <div key={index} className="before-after-grid">
            <div className="image-section">
              <div className="image-label">BEFORE</div>
              <div className="image-placeholder"></div>
            </div>
            <div className="image-section">
              <div className="image-label">AFTER</div>
              <div className="image-placeholder"></div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .before-after-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .image-section {
          text-align: center;
        }
        .image-label {
          font-size: 0.875rem;
          opacity: 0.7;
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }
        .image-placeholder {
          height: 400px;
          background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .before-after-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .image-placeholder {
            height: 300px;
          }
        }
      `}</style>
    </Section>
  )
}