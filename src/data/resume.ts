export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export const education: Education[] = [
  {
    degree: "BS Computer Science",
    institution: "Air University, Islamabad",
    period: "2017 — 2021",
    details:
      "Coursework in Full-Stack Web Development, Machine Learning, OOP, Database Management Systems, and Android Development.",
  },
];

export const certifications: string[] = [
  "AWS Cloud Technical Essentials",
  "Machine Learning, Stanford (Coursera)",
  "JavaScript Crash Course, Udemy",
];
