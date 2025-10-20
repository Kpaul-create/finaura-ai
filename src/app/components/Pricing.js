'use client';
import Section from './Section';

export default function Pricing() {
  const pricingPlans = [
    {
      images: "Up to 10 images",
      price: "₹2,500",
      originalPrice: null,
      popular: false
    },
    {
      images: "Up to 30 images", 
      price: "₹7,200",
      originalPrice: "₹7,500",
      popular: true
    },
    {
      images: "Up to 75 images",
      price: "₹16,500", 
      originalPrice: "₹18,000",
      popular: false
    },
    {
      images: "Up to 120 images",
      price: "₹24,000",
      originalPrice: "₹28,800", 
      popular: false
    }
  ];

  return (
    <Section title="PRICING" id="pricing">
      <div className="text-center space-y-8">
        <p className="text-xl font-light opacity-80">
          Exceptional results at a fraction of the cost
        </p>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
              <div className="pricing-content">
                <h3 className="pricing-title">{plan.images}</h3>
                <div className="pricing-price">
                  <span className="current-price">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="original-price">{plan.originalPrice}</span>
                  )}
                </div>
                <div className="pricing-features">
                  <div className="feature">✓ Professional AI styling</div>
                  <div className="feature">✓ 24-hour delivery</div>
                  <div className="feature">✓ Multiple model options</div>
                  <div className="feature">✓ High-resolution output</div>
                </div>
                <button className="pricing-button">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="feature-item text-center">
            <h4 className="mb-4">TURNAROUND</h4>
            <p className="opacity-80">Within 24 hours guaranteed</p>
          </div>
          <div className="feature-item text-center">
            <h4 className="mb-4">LIMITLESS LOOKS</h4>
            <p className="opacity-80">Diverse models, every aesthetic</p>
          </div>
          <div className="feature-item text-center">
            <h4 className="mb-4">ZERO RISK</h4>
            <p className="opacity-80">No logistics, only perfection</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        .pricing-card {
          background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
          border: 1px solid #333;
          border-radius: 8px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .pricing-card.popular {
          border-color: #84CC16;
          box-shadow: 0 0 20px rgba(132, 204, 22, 0.2);
        }
        .popular-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #84CC16;
          color: #000;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        .pricing-content {
          text-align: center;
        }
        .pricing-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: #fff;
        }
        .pricing-price {
          margin-bottom: 1.5rem;
        }
        .current-price {
          font-size: 2rem;
          font-weight: 600;
          color: #84CC16;
          display: block;
        }
        .original-price {
          font-size: 1rem;
          color: #666;
          text-decoration: line-through;
          margin-left: 0.5rem;
        }
        .pricing-features {
          margin-bottom: 2rem;
        }
        .feature {
          padding: 0.5rem 0;
          color: #ccc;
          font-size: 0.9rem;
        }
        .pricing-button {
          width: 100%;
          background: #84CC16;
          color: #000;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .pricing-button:hover {
          background: #A3E635;
          transform: translateY(-2px);
        }
        .feature-item {
          padding: 2rem 1rem;
        }
        .feature-item h4 {
          font-size: 1rem;
          letter-spacing: 0.1em;
          opacity: 0.9;
        }
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .grid-cols-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  )
}