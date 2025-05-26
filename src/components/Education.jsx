import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'M.Sc. Computer Science',
      duration: '(2023 – 2025) (Expected)',
      institution: 'Department of Computer Science, Savitribai Phule Pune University, Pune.',
    },
    {
      degree: 'B.Sc. Computer Science (CGPA – 9.17 / 10)',
      duration: '(2020 – 2023)',
      institution: 'Tuljaram Chaturchand College, Baramati.',
    },
    {
      degree: 'HSC (PERCENTAGE – 69.38 %)',
      duration: '(2020)',
      institution: 'Vidya Pratishthan’s Arts, Science and Commerce College, Baramati.',
    },
    {
      degree: 'SSC (PERCENTAGE – 84.20 %)',
      duration: '(2018)',
      institution: 'Aleshwar Madhyamik Vidyalaya, Alegaon.',
    },
  ];

  return (
    <div
      id="education"
      className="flex min-h-screen w-full flex-col items-center gap-14 bg-gradient-to-br px-4 py-16 md:px-16 md:py-24"
    >
      <h1 className="text-4xl md:text-6xl font-semibold text-white text-center">Education</h1>

      <div className="grid w-full max-w-5xl gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-white shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl md:text-2xl font-semibold">{edu.degree}</h2>
              <span className="text-sm md:text-base text-gray-300 mt-2 md:mt-0">{edu.duration}</span>
            </div>
            <p className="mt-2 text-gray-200">{edu.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
