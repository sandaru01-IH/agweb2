export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  images: string[]
  techStack: string[]
  outcomes: string[]
  client?: string
  year?: string
  externalLink?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'geonexus',
    title: 'GeoNexus',
    category: 'Software Development',
    description: 'A comprehensive geospatial platform with responsive design across desktop, tablet, and mobile devices.',
    longDescription: 'GeoNexus is a powerful geospatial platform designed to provide seamless user experiences across all device types. The application features a fully responsive design that adapts beautifully to desktop, tablet, and mobile screens, ensuring optimal functionality and user experience regardless of the device. Built with modern web technologies, GeoNexus delivers high-performance geospatial data visualization and analysis capabilities.',
    image: '/projects/geonexus/img1.png',
    images: [
      '/projects/geonexus/DESKTOP/1.png',
      '/projects/geonexus/DESKTOP/2.png',
      '/projects/geonexus/MOBILE/1.png',
      '/projects/geonexus/MOBILE/2.png',
      '/projects/geonexus/TAB/1.png',
      '/projects/geonexus/TAB/2.png',
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Responsive Design'],
    outcomes: [
      'Fully responsive design across all devices',
      'Optimized performance on desktop, tablet, and mobile',
      'Seamless user experience across platforms',
      'Modern and intuitive interface design',
    ],
    year: '2024',
    featured: true,
  },
  {
    id: 'hrauto',
    title: 'HRAuto',
    category: 'Software Development',
    description: 'An automated HR management system with multi-device support and streamlined workflows.',
    longDescription: 'HRAuto is an innovative human resources management system that automates and streamlines HR processes. The platform offers comprehensive functionality across desktop, tablet, and mobile devices, enabling HR teams to manage their workflows efficiently from anywhere. With a focus on user experience and automation, HRAuto simplifies complex HR tasks and improves overall productivity.',
    image: '/projects/hrauto/img2.png',
    images: [
      '/projects/hrauto/DESKTOP/1.png',
      '/projects/hrauto/DESKTOP/2.png',
      '/projects/hrauto/DESKTOP/3.png',
      '/projects/hrauto/MOBILE/1.png',
      '/projects/hrauto/TAB/1.png',
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Automation'],
    outcomes: [
      'Automated HR workflow processes',
      'Multi-device accessibility and support',
      'Streamlined user interface and experience',
      'Enhanced productivity for HR teams',
    ],
    year: '2024',
    featured: true,
  },
]

export const projectCategories = [
  'All',
  'Data Analysis',
  'Data Visualization',
  'Data Engineering',
  'Software Development',
  'Web Apps',
  'AI Tools',
]


