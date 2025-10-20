'use client';
import Section from './Section';

export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'YOU SEND THE LOOK',
      description: 'A photo of your garment.'
    },
    {
      number: '2',
      title: 'AI CREATES THE VISION',
      description: 'Crafted by our prompt engineers.'
    },
    {
      number: '3',
      title: 'EDITORS REFINE THE DETAIL',
      description: 'Every pixel perfected.'
    }
  ]

  return (
    <Section title="THE PROCESS">
      <p className="text-center text-xl font-light mb-8">
        Effortless. Precise. Beautiful.
      </p>
      <div className="grid grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="step-number">{step.number}</div>
            <h3 className="text-lg">{step.title}</h3>
            <p className="opacity-80">{step.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 opacity-80">
        From photo to fashion story — perfected within a day.
      </p>
      <style jsx>{`
        .step-number {
          font-size: 3rem;
          font-weight: 300;
          opacity: 0.5;
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .grid-cols-3 {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </Section>
  )
}