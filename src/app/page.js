'use client';

import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Problem from './components/Problem';
import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function Home() {
  const promiseRef = useScrollAnimation(0.2);
  const benefitsRef = useScrollAnimation(0.2);
  const useCasesRef = useScrollAnimation(0.2);
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      
      {/* Promise Section */}
      <Section title="OUR PROMISE">
        <div className="promise-content scroll-pop" ref={promiseRef}>
          <div className="promise-highlights">
            <div className="highlight-item animate-pulse">NO STUDIOS.</div>
            <div className="highlight-item animate-pulse" style={{animationDelay: '0.5s'}}>NO SHIPPING.</div>
            <div className="highlight-item animate-pulse" style={{animationDelay: '1s'}}>NO STRESS.</div>
          </div>
          <p className="promise-main">
            JUST PURE, EDITORIAL-GRADE IMAGERY AT SCALE.
          </p>
          <p className="promise-guarantee">
            DELIVERED WITHIN 24 HOURS — OR IT&apos;S ON US.
          </p>
        </div>
        <style jsx>{`
          .promise-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .promise-highlights {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 1rem;
          }
          .highlight-item {
            font-size: 1.5rem;
            font-weight: 300;
            letter-spacing: 0.02em;
            color: #84CC16;
            text-shadow: 0 0 10px rgba(132, 204, 22, 0.3);
          }
          .promise-main {
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.4;
          }
          .promise-guarantee {
            opacity: 0.8;
            font-size: 1.125rem;
          }
          
          @media (max-width: 768px) {
            .promise-highlights {
              flex-direction: column;
              gap: 1rem;
            }
            .highlight-item {
              font-size: 1.25rem;
            }
            .promise-main {
              font-size: 1.125rem;
            }
            .promise-guarantee {
              font-size: 1rem;
            }
          }
        `}</style>
      </Section>

      <Process />
      <Gallery />
      <Pricing />

      {/* Why It Works Section */}
      <Section title="WHY IT WORKS">
        <div className="benefits-grid scroll-animate" ref={benefitsRef}>
          <div className="benefits-column">
            <div className="benefit-item">
              <h4 className="benefit-title">EXCEPTIONAL RESULTS AT A FRACTION OF THE COST</h4>
              <p className="benefit-description">High-quality imagery without the traditional overhead.</p>
            </div>
            <div className="benefit-item">
              <h4 className="benefit-title">TURNAROUND THAT MATCHES YOUR PACE</h4>
              <p className="benefit-description">Within 24 hours guaranteed delivery.</p>
            </div>
          </div>
          <div className="benefits-column">
            <div className="benefit-item">
              <h4 className="benefit-title">LIMITLESS LOOKS, DIVERSE MODELS</h4>
              <p className="benefit-description">Every aesthetic imaginable for your brand.</p>
            </div>
            <div className="benefit-item">
              <h4 className="benefit-title">ZERO LOGISTICS, ZERO RISK</h4>
              <p className="benefit-description">Only perfection delivered to your inbox.</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .benefits-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .benefits-column {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .benefit-item {
            padding: 2rem;
            background: linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(30, 30, 30, 0.6) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          .benefit-item:hover {
            transform: translateY(-5px);
            border-color: rgba(132, 204, 22, 0.3);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }
          .benefit-title {
            font-size: 1.125rem;
            margin-bottom: 0.75rem;
            font-weight: 500;
          }
          .benefit-description {
            opacity: 0.8;
            line-height: 1.6;
          }
          
          @media (max-width: 768px) {
            .benefits-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            .benefits-column {
              gap: 1.5rem;
            }
            .benefit-item {
              padding: 1.25rem;
            }
          }
        `}</style>
      </Section>

      {/* Where You Shine Section */}
      <Section title="WHERE YOU SHINE">
        <div className="use-cases-grid scroll-animate" ref={useCasesRef}>
          <div className="use-cases-column">
            <div className="use-case-item">
              <h4 className="use-case-title">PRODUCT LISTINGS THAT CONVERT</h4>
              <p className="use-case-description">Elevate your e-commerce with stunning visuals.</p>
            </div>
            <div className="use-case-item">
              <h4 className="use-case-title">SOCIAL CAMPAIGNS THAT STOP THE SCROLL</h4>
              <p className="use-case-description">Create thumb-stopping content for social media.</p>
            </div>
          </div>
          <div className="use-cases-column">
            <div className="use-case-item">
              <h4 className="use-case-title">DIGITAL CATALOGUES FOR GLOBAL LAUNCHES</h4>
              <p className="use-case-description">Scale your visual content across markets.</p>
            </div>
            <div className="use-case-item">
              <h4 className="use-case-title">INFLUENCER-STYLE LOOKS WITHOUT THE LOGISTICS</h4>
              <p className="use-case-description">Achieve influencer-quality content instantly.</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .use-cases-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .use-cases-column {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .use-case-item {
            padding: 2rem;
            background: linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(30, 30, 30, 0.6) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          .use-case-item:hover {
            transform: translateY(-5px);
            border-color: rgba(132, 204, 22, 0.3);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }
          .use-case-title {
            font-size: 1.125rem;
            margin-bottom: 0.75rem;
            font-weight: 500;
          }
          .use-case-description {
            opacity: 0.8;
            line-height: 1.6;
          }
          
          @media (max-width: 768px) {
            .use-cases-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            .use-cases-column {
              gap: 1.5rem;
            }
            .use-case-item {
              padding: 1.25rem;
            }
          }
        `}</style>
      </Section>

      <Footer />
    </main>
  )
}
