export interface SkillGroup {
  label: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  href: string
}

export interface Link {
  label: string
  text: string
  href: string
}

export const site = {
  name: 'Aung Phyo Htet',
  role: 'Curious programmer · Fundamentals first',
  tagline:
    'I care about the fundamentals: how data is structured, how algorithms behave, and how programs actually run.',

  about: [
    'I studied computer science through my fourth year at university. I write code because I enjoy it, and I have spent most of that time on the core of the craft rather than on any single framework.',
    'I am most comfortable where the fundamentals matter: choosing the right data structure, reasoning about complexity, reading unfamiliar code, and working a problem down to something simple and correct.',
    'I am looking for a place to put that foundation to work and keep learning alongside people who build real software.',
  ],

  skills: [
    {
      label: 'Fundamentals',
      items: [
        'Data structures',
        'Algorithms',
        'Complexity analysis',
        'Object-oriented design',
        'Problem solving',
      ],
    },
    {
      label: 'Systems',
      items: ['Linux', 'Networking', 'Databases'],
    },
    {
      label: 'Languages',
      items: ['Java', 'C', 'CPP', 'Javascript'],
    },
    {
      label: 'Tools',
      items: ['Git', 'Linux', 'neo-vim'],
    },
  ] satisfies SkillGroup[],

  // TODO: edit — these are placeholders, replace with real projects
  projects: [
    // {
    //   title: 'Project One',
    //   description: 'Placeholder: replace with a real project and what it does.',
    //   tags: ['Tag', 'Tag'],
    //   href: '#',
    // },
    // {
    //   title: 'Project Two',
    //   description: 'Placeholder: replace with a real project and what it does.',
    //   tags: ['Tag', 'Tag'],
    //   href: '#',
    // },
    // {
    //   title: 'Project Three',
    //   description: 'Placeholder: replace with a real project and what it does.',
    //   tags: ['Tag', 'Tag'],
    //   href: '#',
    // },
  ] as Project[],

  education: {
    program: 'Computer Science',
    detail:
      'I enjoyed every year of it and came away with a solid grounding in how computers and programs work.',
    school: 'University of Computer Science, Yangon',
    years: '2016 – 2020',
  },

  links: [
    { label: 'Email', text: 'aungphyohtet1@gmail.com', href: 'mailto:aungphyohtet1@gmail.com' },
    { label: 'GitHub', text: 'github.com/thevowels', href: 'https://github.com/thevowels' },
    {
      label: 'LinkedIn',
      text: 'linkedin.com/in/thevowels',
      href: 'https://www.linkedin.com/in/thevowels',
    },
  ] satisfies Link[],
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
