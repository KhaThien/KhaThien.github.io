export type CertType = 'image' | 'pdf';

export interface Cert {
  src:    string;
  title:  string;
  issued: string;
  type:   CertType;
  why:    string;
}

export const certifications: Cert[] = [
  {
    src:    '/certifications/PMP.jpeg',
    title:  'Project Management Professional (PMP)',
    issued: 'Jan 2025',
    type:   'image',
    why:    'The PMP is the gold standard in project management. It validates my ability to lead cross-functional teams, manage scope, schedule, and risk on complex engineering projects — skills I use daily in systems integration work.',
  },
  {
    src:    '/certifications/CSWP.pdf',
    title:  'Certified SOLIDWORKS Professional (CSWP)',
    issued: 'Feb 2026',
    type:   'pdf',
    why:    'CSWP certifies advanced 3D modeling and design competency in SOLIDWORKS. It demonstrates I can design production-ready parts and assemblies to engineering standards — critical for my mechanical design work.',
  },
  {
    src:    '/certifications/GD&T Fundamentals.pdf',
    title:  'GD&T Fundamentals',
    issued: 'April 2026',
    type:   'pdf',
    why:    'Geometric Dimensioning & Tolerancing is the language of engineering drawings. This certification ensures I can read, interpret, and apply GD&T correctly so parts are manufactured and inspected to spec.',
  },
  {
    src:    '/certifications/Print Reading and Tolerances.pdf',
    title:  'Print Reading and Tolerances',
    issued: 'March 2026',
    type:   'pdf',
    why:    'Being able to read engineering prints precisely is foundational to mechanical engineering. This certification confirms I can interpret manufacturing drawings, tolerances, and assembly instructions accurately.',
  },
  {
    src:    '/certifications/MiT 6.00.1x Cert.png',
    title:  'MITx: Introduction to Computer Science and Programming Using Python',
    issued: 'March 2026',
    type:   'image',
    why:    'Completed through MIT OpenCourseWare on edX. This course grounded me in computational thinking, algorithms, and Python — skills I now apply to data analysis, automation scripts, and building tools like this portfolio.',
  },
];
