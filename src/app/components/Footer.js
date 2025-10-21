'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h2 className="footer-title">FINAURA</h2>
            <div className="footer-tagline">AI STUDIO</div>
            <p className="footer-description">
              WE MERGE COUTURE WITH CODE.
            </p>
          </div>
          
          <div className="footer-contact">
            <h3 className="contact-title">READY FOR YOUR NEXT COLLECTION TO HIT THE RUNWAY VIRTUALLY?</h3>
            <div className="contact-info">
              <div className="phone-numbers">
                <div>+91 9123993358</div>
                <div>+91 8697815996</div>
              </div>
              <div 
              className="instagram-link"
              onClick={() => {
                window.open('instagram://user?username=finaura.ai', '_blank');
                  setTimeout(() => {
                window.open('https://instagram.com/finaura.ai', '_blank');
              }, 500);
              }}
             style={{cursor: 'pointer'}}
            >
            finaura.ai
            </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 100px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.8) 100%);
          position: relative;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(132, 204, 22, 0.5), transparent);
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        .footer-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #84CC16 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-tagline {
          font-size: 1rem;
          opacity: 0.8;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          color: #84CC16;
        }
        .footer-description {
          opacity: 0.9;
          font-weight: 300;
          font-size: 1.125rem;
          line-height: 1.6;
        }
        .contact-title {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 2rem;
          line-height: 1.4;
          color: #e0e0e0;
        }
        .contact-info {
          margin-bottom: 0.5rem;
        }
        .phone-numbers {
          margin-bottom: 2rem;
        }
        .phone-numbers div {
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
          color: #ffffff;
          font-weight: 400;
        }
        .instagram-link {
          font-size: 1.125rem;
          color: #84CC16;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .instagram-link:hover {
          color: #A3E635;
          text-shadow: 0 0 10px rgba(132, 204, 22, 0.5);
        }
        @media (max-width: 768px) {
          .footer {
            padding: 80px 0;
          }
          .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-title {
            font-size: 1.75rem;
          }
          .contact-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </footer>
  )
}