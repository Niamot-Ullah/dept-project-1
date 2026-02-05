
import { Publication, Course, Award, Education, Position } from './types';

export const PROFILE = {
  name: "Md. Tanvir Ahmed",
  title: "Associate Professor",
  department: "Department of Economics",
  faculty: "Faculty of Social Sciences",
  university: "University of Barishal",
  shortBio: "Associate Professor of Economics specializing in education economics, public health, environmental economics, and development policy, with a focus on Bangladesh.",

longBio: "Md. Tanvir Ahmed is an Associate Professor in the Faculty of Economics at the University of Barishal, Bangladesh. His research interests include economics of education, public health and health economics, environmental and resource economics, and development policy. He earned his MA in Economics from Kansas State University, USA, and his MSS and BSS from the University of Dhaka. He has been serving at the University of Barishal for nearly a decade, advancing from Lecturer to Associate Professor."
,

  profileImage: "./assets/img.jpg",
  email: "mdtanvirahmed03@gmail.com",
  cvUrl: "#",
  scholarUrl: "https://scholar.google.com/citations?user=ToVHNlUAAAAJ&hl=en",
  office: "Room 302, Academic Building 2",
  address: "University of Barishal, Barishal-8200, Bangladesh",
  officeHours: "Sunday to Thursday 10:00 AM – 2:00 PM (or by appointment)"
};

export const RESEARCH_INTERESTS = [
  "IIntroduction to Econometrics",
  "Public Health Economics",
  "Environmental Economics",
  "Development Economics"
];


export const EDUCATION: Education[] = [
  {
    degree: "MA",
    field: "Economics",
    institution: "Kansas State University, USA",
    year: "2022"
  },
  {
    degree: "MSS",
    field: "Economics",
    institution: "University of Dhaka, Bangladesh",
    year: "2014"
  },
  {
    degree: "BSS",
    field: "Economics",
    institution: "University of Dhaka, Bangladesh",
    year: "2013"
  }
];

export const POSITIONS: Position[] = [
  {
    title: "Associate Professor",
    department: "Economics",
    institution: "University of Barishal",
    period: "29 June 2024 – Present"
  },
  {
    title: "Assistant Professor",
    department: "Economics",
    institution: "University of Barishal",
    period: "9 April 2019 – 28 June 2024"
  },
  {
    title: "Lecturer",
    department: "Economics",
    institution: "University of Barishal",
    period: "14 March 2016 – 8 April 2019"
  }
];


export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: "Perilous Resurgence of Dengue Fever in Bangladesh: Gender Based Perspectives on Risk Perception and Adaptation Strategies",
    authors: ["M. T. Ahmed", "M. A. Amin"],
    venue: "Md. Tanvir Ahmed, Md. Al Amin (2023)",
    year: 2024,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Public Health", "Risk Perception", "Bangladesh"]
  },
  {
    id: "pub-2",
    title: "Comparing tourists’ travel cost and consumer surplus to estimate the recreational values of Kuakata Sea Beach in Bangladesh",
    authors: ["K. M. R. Rahat", "M. A. Amin", "M. T. Ahmed"],
    venue: "Journal of Tourism and Hospitality, 13, 541",
    year: 2024,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Tourism Economics", "Environmental Valuation", "Bangladesh"]
  },
  {
    id: "pub-3",
    title: "Impacts of agricultural commercialization on smallholder farmers in south-western region of Bangladesh",
    authors: ["T. Ahmed"],
    venue: "International Journal of Economics and Commerce Research, 7(2), 33-40",
    year: 2017,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Development Economics", "Agricultural Economics", "Bangladesh"]
  },
  {
    id: "pub-4",
    title: "Individualistic or collectivistic: which consideration motivates purchasing intention of organic foods? A developing country perspective",
    authors: ["S. Chowdhury", "M. T. Ahmed", "F. A. Oni", "T. M. Mamun"],
    venue: "Journal of Agribusiness in Developing and Emerging Economies, 14(5), 1089-1108",
    year: 2024,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Consumer Behavior", "Organic Food", "Bangladesh"]
  },
  {
    id: "pub-5",
    title: "Is environmental Kuznets hypothesis vice-versa for Bangladesh especially in the times of global climate change? – An ARDL econometric modeling approach",
    authors: ["R. Ferdous", "M. T. Ahmed"],
    venue: "Energy Economics Letters, 9(1), 55-66",
    year: 2022,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Environmental Economics", "ARDL", "Bangladesh"]
  },
  {
    id: "pub-6",
    title: "Beachgoers’ Knowledge, Perceptions, and Willingness to Pay for Sustainable Waste Management in Kuakata Sea Beach, Bangladesh",
    authors: ["M. Al Amin", "M. T. Ahmed"],
    venue: "",
    year: 2024,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Environmental Management", "Sustainable Tourism", "Bangladesh"]
  },
  {
    id: "pub-7",
    title: "Impact of Social and Economic Variables on Health Care Expenditure: A Case Study on Barishal Division in Bangladesh",
    authors: ["M. T. Ahmed", "R. Ferdous"],
    venue: "Barishal University Journal (Part-2) 3(1), 108-118",
    year: 2019,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Health Economics", "Social Policy", "Bangladesh"]
  },
  {
    id: "pub-8",
    title: "Assessing Livelihood Disruptions and Adaptive Pathways of Hilsa Fishing Communities in Barishal During Seasonal Bans",
    authors: ["S. A. Shova", "S. A. Shathi", "F. S. Naima", "M. Hasanuzzaman", "E. Ahmed", "A. Z. Abed"],
    venue: "Asia-Pacific Journal of Rural Development, 35(2), 139-157",
    year: 2025,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Rural Development", "Fisheries Economics", "Bangladesh"]
  },
  {
    id: "pub-9",
    title: "Macroeconomic Factors Determining CO2 Emission in Bangladesh: Through the Lens of VECM Approach",
    authors: ["M. T. Ahmed", "R. Ferdous"],
    venue: "International Journal of Economy, Energy and Environment, 8(5), 118-128",
    year: 2023,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Macroeconomics", "Environmental Economics", "Bangladesh"]
  },
  {
    id: "pub-10",
    title: "Socio-Economic Determinants of Households’ Per Capita Education Expenditure: A Case Study in Barishal District, Bangladesh",
    authors: ["M. Rahman", "M. T. Ahmed"],
    venue: "Barishal University Journal of Social Sciences, 1(1), 181-194",
    year: 2020,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Education Economics", "Household Finance", "Bangladesh"]
  },
  {
    id: "pub-11",
    title: "Remittance and Household Welfare in Rural Bangladesh: A Micro-Econometric Analysis",
    authors: ["M. T. Ahmed", "S. Basu", "M. Nomi", "A. Roy"],
    venue: "",
    year: 2020,
    pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ToVHNlUAAAAJ&citation_for_view=ToVHNlUAAAAJ:u-x6o8ySG0sC",
    tags: ["Development Economics", "Household Welfare", "Bangladesh"]
  }
];



export const TEACHING: Course[] = [
  {
    id: "econ101",
    code: "ECON 2101",
    title: "Intermediate Microeconomics",
    description: "Detailed analysis of consumer behavior, firm theory, and market mechanisms under various competitive environments.",
    term: "Annual",
    role: "Instructor",
    level: "Undergraduate"
  },
  {
    id: "econ201",
    code: "ECON 3202",
    title: "Introduction to Econometrics",
    description: "Empirical analysis using statistical tools, focusing on ordinary least squares, hypothesis testing, and model specification.",
    term: "Spring Semester",
    role: "Instructor",
    level: "Undergraduate"
  },
  {
    id: "econ301",
    code: "ECON 4105",
    title: "Development Economics",
    description: "Theoretical frameworks of growth, poverty alleviation, and structural transformation in developing nations.",
    term: "Fall Semester",
    role: "Lead Faculty",
    level: "Undergraduate"
  }
];

export const AWARDS: Award[] = [
  {
    year: "2021",
    title: "Graduate Fellowship",
    issuer: "Kansas State University"
  },
  {
    year: "2014",
    title: "Dean's Honor Award",
    issuer: "University of Dhaka"
  }
];
