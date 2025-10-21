'use client';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img 
            src="/finaura.jpg"
            alt="FINAURA AI STUDIO" 
            className="logo-image"
          />
        </div>
      </div>
      <style jsx>{`
        .header {
          padding: 3rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%);
          backdrop-filter: blur(10px);
          position: relative;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(132, 204, 22, 0.5), transparent);
        }
        .header-content {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .logo-image {
          height: 120px;
          width: auto;
          object-fit: contain;
          border-radius: 20px;
          filter: drop-shadow(0 0 20px rgba(132, 204, 22, 0.3));
          transition: all 0.3s ease;
          animation: float 6s ease-in-out infinite, fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .logo-image:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 30px rgba(132, 204, 22, 0.5));
        }
        
        @media (max-width: 768px) {
          .header {
            padding: 2rem 0;
          }
          .logo-image {
            height: 100px;
          }
        }
        
        @media (max-width: 480px) {
          .header {
            padding: 1.5rem 0;
          }
          .logo-image {
            height: 80px;
          }
        }
      `}</style>
    </header>
  )
}