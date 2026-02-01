
import { Course } from './types';

export const CONTACT_INFO = {
  email: 'mhtcetlawprepare@gmail.com',
  telegram: '@ragexking',
  instagram: '@spotify.piux',
  btechCseLink: 'https://t.me/btech_cse_coding',
  neetHubLink: 'https://t.me/neetlearnhub',
  lawLink: 'https://t.me/cetlaw_clat',
  gateLink: 'https://t.me/gateprephub'
};

export const COURSES: Course[] = [
  {
    id: 'law-cet-clat',
    title: 'MHT CET Law (3/5 Yrs) & CLAT 2025',
    price: 350,
    description: 'Comprehensive Law Entrance Preparation Kit',
    category: 'LAW',
    icon: 'fas fa-balance-scale',
    badge: 'Best Seller',
    link: 'https://t.me/cetlaw_clat',
    points: [
      'Full Syllabus Coverage for 3 & 5 Year Law CET',
      'CLAT 2025 Premium Practice Papers',
      'Handwritten Notes & Detailed Concepts',
      'Topic-wise Test Series & Worksheets',
      'Strategy Guidance to score 100% in Exams'
    ]
  },
  {
    id: 'btech-full-year',
    title: 'B.Tech Computer Engg (Full Year)',
    price: 1000,
    description: 'Complete Engineering Resource Hub (All Subjects)',
    category: 'BTECH',
    icon: 'fas fa-laptop-code',
    badge: 'Value Pack',
    link: 'https://t.me/btechcsecourse',
    points: [
      'All Subjects Covered (1st to 4th Year)',
      'Unit-wise Premium Notes & PDF Resources',
      'Previous Year Questions (PYQs) & Answer Keys',
      'Project Resources & Implementation Guides',
      'Career Guidance & Strategy for Placements'
    ]
  },
  {
    id: 'btech-per-subject',
    title: 'B.Tech Subject-Specific Notes',
    price: 300,
    description: 'Focused Mastery for Individual Engineering Subjects',
    category: 'BTECH',
    icon: 'fas fa-book-open',
    link: 'https://t.me/btechcsecourse',
    points: [
      'Deep-dive into specific subject concepts',
      'Unit-wise MCQ Bank for semester exams',
      'Complex Problem Solving sessions',
      'Simplified PDF Explanations'
    ]
  },
  {
    id: 'coding-python-web',
    title: 'Coding & Programming Course',
    price: 300,
    description: 'Master Industry-Leading Tech Stacks',
    category: 'CODING',
    icon: 'fas fa-code',
    badge: 'Job Ready',
    link: 'https://t.me/programmer_course',
    points: [
      'Selection from Python, Web Dev, Java & more',
      'Real-world Industry Projects & Portfolios',
      'Job-ready Skill Development & Mentorship',
      'Lifetime Access to Coding Resources'
    ]
  },
  {
    id: 'neet-jee-cet',
    title: 'NEET | JEE | MHT CET 2025',
    price: 1000,
    description: 'The Ultimate Competitive Exam Bundle',
    category: 'ENTRANCE',
    icon: 'fas fa-stethoscope',
    link: 'https://t.me/jee_neetmhtcet',
    points: [
      'In-depth Biology, Physics & Chemistry focus',
      'Daily Practice Sheets (DPP) & PYQs',
      'Speed Prep Strategies for Rankers',
      'Premium MCQ Banks & Concept Explainers'
    ]
  },
  {
    id: 'gate-prep-hub',
    title: 'GATE PREP HUB 2026/27',
    price: 1000,
    description: 'Elite GATE Preparation Community',
    category: 'ENTRANCE',
    icon: 'fas fa-graduation-cap',
    link: 'https://t.me/gateprephub',
    points: [
      'Concepts Explained from Basics to Advanced',
      'Structured Learning for GATE 2026/27',
      'Strategy Sessions by Rankers',
      'Exclusive Practice Sheets & Notes'
    ]
  }
];
