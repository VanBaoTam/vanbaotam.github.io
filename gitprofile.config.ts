// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'vanbaotam', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
    
    },
  },
  seo: {
    title: 'Portfolio of Van Bao Tam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'van-bao-tam',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', 
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+84 338005958',
    email: 'vanbaotam187@gmail.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/VanBaoTam/vanbaotam.github.io/main/src/data/CV_Front-end-Developer_Van_Bao_Tam.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Github',
    'HTML | CSS',
  ],
  experiences: [
    {
      company: 'MangoAds',
      position: 'Front-end Web Developer',
      from: 'December 2024',
      to: 'February 2025',
      companyLink: 'https://mangoads.vn/',
    },
    {
      company: 'The Ark Studio',
      position: 'Front-end Web Developer Internship',
      from: 'March 2024',
      to: 'June 2024',
      companyLink: 'https://www.theark.studio/',
    },
    {
      company: '',
      position: 'Freelancer',
      from: 'April 2023',
      to: 'December 2023',
      companyLink: '',
    }
   
  ],
  certifications: [
    
  ],
  educations: [
    {
      institution: 'Saigon Technology University',
      degree: 'Information Technology - Bachelor of Engineer - Salutatorian',
      from: 'October 2020',
      to: 'November 2024',
    },
  
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
 
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: false,
};

export default CONFIG;
