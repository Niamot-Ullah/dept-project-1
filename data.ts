
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
  fbUrl:"https://www.facebook.com/Economicsbu03",
  cvUrl: "#",
  scholarUrl: "https://scholar.google.com/citations?user=ToVHNlUAAAAJ&hl=en",
  office: "Room 302, Academic Building 1",
  address: "University of Barishal, Barishal, Bangladesh",
  officeHours: "Sunday to Thursday 10:00 AM – 2:00 PM (or by appointment)"
};

export const RESEARCH_INTERESTS = [
  "Economics of Education",
  "Public policy",
  "Public Health"
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
    pdfUrl: "https://d1wqtxts1xzle7.cloudfront.net/110227615/UJPH25_17634571-libre.pdf?1704796298=&response-content-disposition=inline%3B+filename%3DPerilous_Resurgence_of_Dengue_Fever_in_B.pdf&Expires=1770978982&Signature=dzfZKBIeUoq7vAnMcIg-uFSLkwjVpDQ3VVMynK1Qcomla8fNmkOuWSj3XvkM31MXm4m9~5CMxMwOgxVNYso3KQh3Ch8ogxk4L3rfGQDg1p8ZR3asz36~d1scHEdTbNFteLuGMh6U5yYzv8BgsUGnqS8RFetULVTYvjBf~sBU5K07LH6lMqgWUcqHkFvOXIpYPt1w-Bn6TbUc3HUtSAO6vybLvKPnBG4Xzk7wz9XcYJPwDNwp8xDZxUk9SGFQgqtU55Utnh78kdniD~FyaIXNPy7aysTZI4UxoCd3HzhSrhS9j57LLHpGjXEC2yvDHlUiNp7Lep8knJyfdMuH9N31xg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
    tags: ["Public Health", "Risk Perception", "Bangladesh"]
  },
  {
    id: "pub-2",
    title: "Comparing tourists’ travel cost and consumer surplus to estimate the recreational values of Kuakata Sea Beach in Bangladesh",
    authors: ["K. M. R. Rahat", "M. A. Amin", "M. T. Ahmed"],
    venue: "Journal of Tourism and Hospitality, 13, 541",
    year: 2024,
    pdfUrl: "https://www.researchgate.net/profile/Md-Al-Amin-76/publication/378658159_Comparing_Tourists'_Travel_Cost_and_Consumer_Surplus_to_Estimate_the_Recreational_Values_of_Kuakata_Sea_Beach_in_Bangladesh/links/65e2ad75e7670d36abeb8440/Comparing-Tourists-Travel-Cost-and-Consumer-Surplus-to-Estimate-the-Recreational-Values-of-Kuakata-Sea-Beach-in-Bangladesh.pdf",
    tags: ["Tourism Economics", "Environmental Valuation", "Bangladesh"]
  },
  {
    id: "pub-3",
    title: "Impacts of agricultural commercialization on smallholder farmers in south-western region of Bangladesh",
    authors: ["T. Ahmed"],
    venue: "International Journal of Economics and Commerce Research, 7(2), 33-40",
    year: 2017,
    pdfUrl: "https://d1wqtxts1xzle7.cloudfront.net/54480502/4.IJECRAPR20174-libre.pdf?1505892499=&response-content-disposition=inline%3B+filename%3DIMPACTS_OF_AGRICULTURAL_COMMERCIALIZATIO.pdf&Expires=1770981622&Signature=ZS~WX6l6jzhrGNyVZROt~8zXa9DRsz366tKMkIPWFREXxCkXQf28tlBYkrKeQ8JbmiKPTbHbhTILwHzI7Z0Hts7CRFF47Zad9e4w9TmIfzdPUrE~xRZD-nuA0y2qkA5LtAX~tICnOydT8gviQXMIsjMhTBb~5T7D5sKll2cb-wrhyQh0wNbOXxLtF9gkBzaAATcZ8pl7imyWIgbYgQmYJ3Ks9q4RIJttfNxseQk0obDjlKxn7qWRLcrEG4VZhbdjNC0S4~1bIEnPGbeDPk~KrKhJ7P~MaV0soohOlupKMZfiZPmV-u2fpRzY5ZU4qYRO2y45WC2a0gCb2aXidoLDKw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
    tags: ["Development Economics", "Agricultural Economics", "Bangladesh"]
  },
  {
    id: "pub-4",
    title: "Individualistic or collectivistic: which consideration motivates purchasing intention of organic foods? A developing country perspective",
    authors: ["S. Chowdhury", "M. T. Ahmed", "F. A. Oni", "T. M. Mamun"],
    venue: "Journal of Agribusiness in Developing and Emerging Economies, 14(5), 1089-1108",
    year: 2024,
    pdfUrl: "https://www.researchgate.net/profile/Tasnim-Murad/publication/369660229_Individualistic_or_collectivistic_which_consideration_motivates_purchasing_intention_of_organic_foods_A_developing_country_perspective/links/645a6f906090c43d0f5bdd17/Individualistic-or-collectivistic-which-consideration-motivates-purchasing-intention-of-organic-foods-A-developing-country-perspective.pdf?origin=journalDetail&_tp=eyJwYWdlIjoiam91cm5hbERldGFpbCJ9",
    tags: ["Consumer Behavior", "Organic Food", "Bangladesh"]
  },
  {
    id: "pub-5",
    title: "Is environmental Kuznets hypothesis vice-versa for Bangladesh especially in the times of global climate change? – An ARDL econometric modeling approach",
    authors: ["R. Ferdous", "M. T. Ahmed"],
    venue: "Energy Economics Letters, 9(1), 55-66",
    year: 2022,
    pdfUrl: "https://www.researchgate.net/profile/Refat-Ferdous-3/publication/362606161_IS_ENVIRONMENTAL_KUZNETS_HYPOTHESIS_VICE-VERSA_FOR_BANGLADESH_ESPECIALLY_IN_THE_TIMES_OF_GLOBAL_CLIMATE_CHANGE_-AN_ARDL_ECONOMETRIC_MODELING_APPROACH/links/62f3ca08c6f6732999bf33c8/IS-ENVIRONMENTAL-KUZNETS-HYPOTHESIS-VICE-VERSA-FOR-BANGLADESH-ESPECIALLY-IN-THE-TIMES-OF-GLOBAL-CLIMATE-CHANGE-AN-ARDL-ECONOMETRIC-MODELING-APPROACH.pdf",
    tags: ["Environmental Economics", "ARDL", "Bangladesh"]
  },
  {
    id: "pub-6",
    title: "Beachgoers’ Knowledge, Perceptions, and Willingness to Pay for Sustainable Waste Management in Kuakata Sea Beach, Bangladesh",
    authors: ["M. Al Amin", "M. T. Ahmed"],
    venue: "",
    year: 2024,
    pdfUrl: "https://www.researchgate.net/profile/Md-Al-Amin-76/publication/381120334_Beachgoers'_Knowledge_Perceptions_and_Willingness_to_Pay_for_Sustainable_Waste_Management_in_Kuakata_Sea_Beach_Bangladesh/links/665e0c67479366623a3db573/Beachgoers-Knowledge-Perceptions-and-Willingness-to-Pay-for-Sustainable-Waste-Management-in-Kuakata-Sea-Beach-Bangladesh.pdf",
    tags: ["Environmental Management", "Sustainable Tourism", "Bangladesh"]
  },
  {
    id: "pub-7",
    title: "Impact of Social and Economic Variables on Health Care Expenditure: A Case Study on Barishal Division in Bangladesh",
    authors: ["M. T. Ahmed", "R. Ferdous"],
    venue: "Barishal University Journal (Part-2) 3(1), 108-118",
    year: 2019,
    pdfUrl: "https://www.researchgate.net/profile/Refat-Ferdous-3/publication/359421199_Impact_of_Social_and_Economic_Variables_on_Health_Care_Expenditure_A_Case_Study_on_Barishal_Division_in_Bangladesh/links/623b323c3818892e0a6be513/Impact-of-Social-and-Economic-Variables-on-Health-Care-Expenditure-A-Case-Study-on-Barishal-Division-in-Bangladesh.pdf",
    tags: ["Health Economics", "Social Policy", "Bangladesh"]
  },
  {
    id: "pub-8",
    title: "Assessing Livelihood Disruptions and Adaptive Pathways of Hilsa Fishing Communities in Barishal During Seasonal Bans",
    authors: ["S. A. Shova", "S. A. Shathi", "F. S. Naima", "M. Hasanuzzaman", "E. Ahmed", "A. Z. Abed"],
    venue: "Asia-Pacific Journal of Rural Development, 35(2), 139-157",
    year: 2025,
    pdfUrl: "https://journals.sagepub.com/doi/abs/10.1177/10185291251388252",
    tags: ["Rural Development", "Fisheries Economics", "Bangladesh"]
  },
  {
    id: "pub-9",
    title: "Macroeconomic Factors Determining CO2 Emission in Bangladesh: Through the Lens of VECM Approach",
    authors: ["M. T. Ahmed", "R. Ferdous"],
    venue: "International Journal of Economy, Energy and Environment, 8(5), 118-128",
    year: 2023,
    pdfUrl: "https://www.researchgate.net/profile/Refat-Ferdous-3/publication/375640767_Macroeconomic_Factors_Determining_CO_2_Emission_in_Bangladesh_Through_the_Lens_of_VECM_Approach/links/655466ef3fa26f66f4042a91/Macroeconomic-Factors-Determining-CO-2-Emission-in-Bangladesh-Through-the-Lens-of-VECM-Approach.pdf",
    tags: ["Macroeconomics", "Environmental Economics", "Bangladesh"]
  },
  {
    id: "pub-10",
    title: "Socio-Economic Determinants of Households’ Per Capita Education Expenditure: A Case Study in Barishal District, Bangladesh",
    authors: ["M. Rahman", "M. T. Ahmed"],
    venue: "Barishal University Journal of Social Sciences, 1(1), 181-194",
    year: 2020,
    pdfUrl: "https://www.researchgate.net/profile/Md-Tanvir-Ahmed-5/publication/359747529_SOCIO-ECONOMIC_DETERMINANTS_OF_HOUSEHOLDS'_PER_CAPITA_EDUCATION_EXPENDITURE_A_CASE_STUDY_IN_BARISHAL_DISTRICT_BANGLADESH/links/624cbe58d726197cfd3f7d4a/SOCIO-ECONOMIC-DETERMINANTS-OF-HOUSEHOLDS-PER-CAPITA-EDUCATION-EXPENDITURE-A-CASE-STUDY-IN-BARISHAL-DISTRICT-BANGLADESH.pdf",
    tags: ["Education Economics", "Household Finance", "Bangladesh"]
  },
  {
    id: "pub-11",
    title: "Remittance and Household Welfare in Rural Bangladesh: A Micro-Econometric Analysis",
    authors: ["M. T. Ahmed", "S. Basu", "M. Nomi", "A. Roy"],
    venue: "",
    year: 2020,
    pdfUrl: "https://www.researchgate.net/profile/Sudipa-Basu/publication/341384376_REMITTANCE_AND_HOUSEHOLD_WELFARE_IN_RURAL_BANGLADESH_A_MICRO-ECONOMETRIC_ANALYSIS/links/5f0879a0a6fdcc4ca45bd0f3/REMITTANCE-AND-HOUSEHOLD-WELFARE-IN-RURAL-BANGLADESH-A-MICRO-ECONOMETRIC-ANALYSIS.pdf",
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
