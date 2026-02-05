
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
  scholarUrl?: string;
  tags: string[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  term: string;
  role: string;
  level: 'Undergraduate' | 'Graduate' | 'PhD';
}

export interface Award {
  year: string;
  title: string;
  issuer: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
}

export interface Position {
  title: string;
  department: string;
  institution: string;
  period: string;
}
