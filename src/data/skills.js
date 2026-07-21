import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiCypress,
  SiPostman,
  SiGit,
  SiGithub,
  SiJupyter,
  SiGooglecolab,
} from 'react-icons/si'

import {
  FaFileExcel,
  FaChartBar,
  FaDatabase,
  FaRobot,
  FaBug,
  FaTasks,
  FaProjectDiagram,
   FaCode,
  FaPaintBrush,
  FaReact,
} from 'react-icons/fa'

export const skillCategories = [
  {
    id: 1,
    title: 'Programming & Query Languages',
    description:
      'Languages used for data analysis, automation, database querying and application development.',

    skills: [
      {
        name: 'Python',
        level: 'Intermediate',
        icon: SiPython,
      },
       {
        name: 'R',
        level: 'Intermediate',
        icon:  FaDatabase,
      },
       {
    name: 'HTML5',
    level: 'Intermediate',
    icon: FaCode,
  },
     {
    name: 'CSS3',
    level: 'Intermediate',
    icon: FaPaintBrush,
  },
   {
    name: 'React',
    level: 'Intermediate',
    icon: FaReact,
  },
      {
        name: 'JavaScript',
        level: 'Intermediate',
        icon: SiJavascript,
      },
      {
        name: 'TypeScript',
        level: 'Learning',
        icon: SiTypescript,
      },
      {
        name: 'SQL',
        level: 'Intermediate',
        icon: FaDatabase,
      },
    ],
  },

  {
    id: 2,
    title: 'Data Analytics & Business Intelligence',
    description:
      'Tools and techniques used to clean, analyze, visualize and communicate business data.',

    skills: [
      {
        name: 'Microsoft Excel',
        level: 'Advanced',
        icon: FaFileExcel,
      },
      {
        name: 'Power BI',
        level: 'Intermediate',
        icon: FaChartBar,
      },
      {
        name: 'Tableau',
        level: 'Intermediate',
        icon: FaChartBar,
      },
      {
        name: 'Pandas',
        level: 'Intermediate',
        icon: SiPandas,
      },
      {
        name: 'NumPy',
        level: 'Intermediate',
        icon: SiNumpy,
      },
      {
        name: 'Data Visualization',
        level: 'Intermediate',
        icon: FaChartBar,
      },
      {
        name: 'Dashboard Development',
        level: 'Intermediate',
        icon: FaProjectDiagram,
      },
      {
        name: 'KPI Analysis',
        level: 'Intermediate',
        icon: FaTasks,
      },
    ],
  },

  {
    id: 3,
    title: 'Data Science & Machine Learning',
    description:
      'Core technologies used for predictive analysis, statistical modeling and AI-based projects.',

    skills: [
      {
        name: 'Scikit-learn',
        level: 'Intermediate',
        icon: SiScikitlearn,
      },
      {
        name: 'Machine Learning',
        level: 'Intermediate',
        icon: FaRobot,
      },
      {
        name: 'Regression Analysis',
        level: 'Intermediate',
        icon: FaChartBar,
      },
      {
        name: 'Classification',
        level: 'Intermediate',
        icon: FaProjectDiagram,
      },
      {
        name: 'A/B Testing',
        level: 'Intermediate',
        icon: FaTasks,
      },
      {
        name: 'Exploratory Data Analysis',
        level: 'Intermediate',
        icon: FaChartBar,
      },
      {
        name: 'Feature Engineering',
        level: 'Intermediate',
        icon: FaProjectDiagram,
      },
      {
        name: 'Deep Learning',
        level: 'Learning',
        icon: FaRobot,
      },
      {
        name: 'CNN',
        level: 'Learning',
        icon: FaRobot,
      },
    ],
  },

  {
    id: 4,
    title: 'Software QA & Automation',
    description:
      'Testing tools and practices used to ensure software quality, reliability and functional accuracy.',

    skills: [
      {
        name: 'Manual Testing',
        level: 'Intermediate',
        icon: FaBug,
      },
      {
        name: 'Functional Testing',
        level: 'Intermediate',
        icon: FaTasks,
      },
      {
        name: 'Regression Testing',
        level: 'Intermediate',
        icon: FaProjectDiagram,
      },
      {
        name: 'UI Testing',
        level: 'Intermediate',
        icon: FaBug,
      },
      {
        name: 'Negative Testing',
        level: 'Intermediate',
        icon: FaBug,
      },
      {
        name: 'Test Case Design',
        level: 'Intermediate',
        icon: FaTasks,
      },
      {
        name: 'Bug Reporting',
        level: 'Intermediate',
        icon: FaBug,
      },
      {
        name: 'Cypress',
        level: 'Intermediate',
        icon: SiCypress,
      },
     {
  name: 'Playwright',
  level: 'Learning',
  icon: FaBug,
},
      {
        name: 'Postman',
        level: 'Intermediate',
        icon: SiPostman,
      },
    ],
  },

  {
    id: 5,
    title: 'Tools, Platforms & Workflow',
    description:
      'Platforms and development tools used for collaboration, version control and project execution.',

    skills: [
      {
        name: 'Git',
        level: 'Intermediate',
        icon: SiGit,
      },
      {
        name: 'GitHub',
        level: 'Intermediate',
        icon: SiGithub,
      },
      {
  name: 'Visual Studio Code',
  level: 'Intermediate',
  icon: FaProjectDiagram,
},
      {
        name: 'Jupyter Notebook',
        level: 'Intermediate',
        icon: SiJupyter,
      },
      {
        name: 'Google Colab',
        level: 'Intermediate',
        icon: SiGooglecolab,
      },
      {
        name: 'CVAT',
        level: 'Intermediate',
        icon: FaTasks,
      },
      {
        name: 'Agile Workflow',
        level: 'Intermediate',
        icon: FaProjectDiagram,
      },
      {
        name: 'SRS & TOR Analysis',
        level: 'Intermediate',
        icon: FaTasks,
      },
    ],
  },
]