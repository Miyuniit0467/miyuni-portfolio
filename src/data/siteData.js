// ===== EDIT THIS FILE to update your portfolio. Empty ('') links are hidden automatically. =====
export const profile = {
  name: 'Miyuni Devanga',
  title: 'Aspiring Software Quality Assurance Engineer',
  roles: ['QA & Software Testing Enthusiast', 'Aspiring Software Quality Assurance Engineer', 'IT Undergraduate', 'Software Development Enthusiast'],
  email: 'mdevanga2004@gmail.com',       
  github: 'https://github.com/Miyuniit0467',
  linkedin: 'www.linkedin.com/in/miyuni-dewanga-4a1b2b35b',    
  cv: '/Miyuni_Devanga_Cv.pdf', 
}
// GitHub username is read from profile.github
export const githubUser = profile.github.split('github.com/')[1]?.split('/')[0] || ''

// Manually featured projects. Add screenshot files to src/assets and import them, or use '' for a labeled placeholder.
export const featured = [
  { name: 'Aswanna – Agricultural Platform', type: 'Final Group Project',
    description: 'A group-built agricultural platform.',
    contributions: ['Developed the Local Buyer Dashboard.', 'Implemented and managed local buyer-related features.', 'Participated in software testing activities across the system.', 'Collaborated with team members during development and testing.'],
    stack: [], // add the real tech stack your team used
    repo: '', demo: '', image: '' },
  { name: 'API Testing with Postman', type: 'Personal Practice',
    description: 'REST API testing practice using Postman.',
    contributions: ['REST API Testing', 'HTTP Methods', 'Response Validation', 'Status Code Verification', 'Postman Collections'],
    stack: ['Postman', 'REST', 'JSON'], repo: '', demo: '', image: '' },
]
export const skillGroups = [
  { title: 'Software Testing Fundamentals', icon: 'Bug', items: ['Software Testing Concepts','SDLC','STLC','Functional Testing','Non-Functional Testing','Manual Testing Fundamentals','Black Box Testing','White Box Testing','Integration Testing Fundamentals','Test Case Design Fundamentals','Defect Identification'] },
  { title: 'API Testing', icon: 'Network', items: ['Postman','REST API Fundamentals','HTTP Methods (GET, POST, PUT, PATCH, DELETE)','HTTP Status Codes','API Request and Response Validation','JSON Fundamentals'] },
  { title: 'Programming Languages', icon: 'Code2', items: ['Java','Python','JavaScript','SQL'] },
  { title: 'Development Technologies', icon: 'GitBranch', items: ['React.js','Git','GitHub','IntelliJ IDEA'] },
  { title: 'UI/UX Design', icon: 'PenTool', items: ['Figma','UI Design','Wireframing','Prototyping'] },
]
export const journey = [
  ['BookOpen','Learning Software Testing Fundamentals'],['Workflow','Understanding SDLC and STLC'],
  ['ListChecks','Exploring Functional and Non-Functional Testing'],['Box','Learning Black Box and White Box Testing'],
  ['Network','Practicing REST API Testing with Postman'],['Bug','Improving Test Case Design and Defect Identification Skills'],
  ['Briefcase','Preparing for a QA Internship']]
