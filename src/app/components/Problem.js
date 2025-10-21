'use client';
import Section from './Section';

export default function Problem() {
  const issues = [
    {
      number: '1',
      title: 'SHOOTS ARE EXPENSIVE',
      description: 'High costs associated with professional photoshoots.'
    },
    {
      number: '2',
      title: 'SAMPLES GET LOST OR DAMAGED',
      description: 'Risk of losing or damaging valuable garment samples.'
    },
    {
      number: '3',
      title: 'WEEKS OF WAITING, ENDLESS LOGISTICS',
      description: 'Lengthy processes and complex coordination delays.'
    },
    {
      number: '4',
      title: 'ONE MODEL, ONE LOOK, LIMITED IMAGINATION',
      description: 'Restricted creative options with a single model and style.'
    }
  ];

  return (
    <Section title="THE PROBLEM">
      <p className="text-center text-xl font-light mb-8">
        Challenges. Inefficiencies. Constraints.
      </p>
      <div className="grid grid-cols-3 gap-6">
        {issues.slice(0, 3).map((issue) => (
          <div key={issue.number} className="text-center space-y-4">
            <div className="step-number">{issue.number}</div>
            <h3 className="text-lg">{issue.title}</h3>
            <p className="opacity-80">{issue.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 max-w-md mx-auto text-center space-y-4">
        <div className="step-number">{issues[3].number}</div>
        <h3 className="text-lg">{issues[3].title}</h3>
        <p className="opacity-80">{issues[3].description}</p>
      </div>
      <p className="text-center mt-8 opacity-80">
        From costly shoots to creative limits — obstacles in every step.
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
  );
}