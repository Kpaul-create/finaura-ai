'use client';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-fallback">
              <h1 className="logo-text">FINAURA</h1>
              <div className="tagline-text">AI STUDIO</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          padding: 2rem 0;
          border-bottom: 1px solid #333;
        }
        .header-content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .logo-image {
          height: 80px;
          width: auto;
          object-fit: contain;
          max-width: 200px;
        }
        .logo-fallback {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .logo-text {
          font-size: 2.5rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          margin: 0;
          color: #84CC16;
          text-shadow: 0 0 15px rgba(132, 204, 22, 0.5);
          display: block;
        }
        .tagline-text {
          font-size: 1rem;
          opacity: 1;
          letter-spacing: 0.2em;
          color: #A3E635;
          font-style: italic;
          display: block;
          margin-top: 0.25rem;
        }
        
        @media (max-width: 768px) {
          .header {
            padding: 1.5rem 0;
          }
          .logo-image {
            height: 60px;
          }
          .logo-text {
            font-size: 1.5rem;
            letter-spacing: 0.2em;
          }
          .tagline-text {
            font-size: 0.75rem;
            letter-spacing: 0.15em;
          }
        }
        
        @media (max-width: 480px) {
          .logo-image {
            height: 50px;
          }
          .logo-text {
            font-size: 1.25rem;
            letter-spacing: 0.15em;
          }
          .tagline-text {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </header>
  )
}