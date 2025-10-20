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
          padding: 80px 0;
          border-top: 1px solid #333;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .footer-title {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
        }
        .footer-tagline {
          font-size: 0.875rem;
          opacity: 0.8;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        .footer-description {
          opacity: 0.8;
          font-weight: 300;
        }
        .contact-title {
          font-size: 1.25rem;
          font-weight: 300;
          margin-bottom: 2rem;
          line-height: 1.4;
        }
        .contact-info {
          space-y-2: 0.5rem;
        }
        .phone-numbers {
          margin-bottom: 1rem;
        }
        .phone-numbers div {
          margin-bottom: 0.25rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </footer>
  )
}