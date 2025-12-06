import { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'headspace-sleep-mood',
    title: 'Headspace — Sleep Mood',
    summary: 'Designing a personalized sleep feature that addresses the critical but under-served dimension of mental wellness through research-driven design.',
    projectType: 'Student Project: UX Design',
    timeline: 'Jan 2024 - Mar 2024',
    role: 'Lead Researcher',
    team: ['You', 'Design Team', 'Research Partners'],
    thumbnailImage: '/assets/headspace/thumbnail.webp',
    heroImage: '/assets/headspace/hero.webp',
    sections: [
      {
        heading: 'Context & Problem',
        body: 'Headspace users struggle with inconsistent sleep routines that undermine overall wellness. Sleep affects mood, focus, and motivation—yet the app lacked a dedicated feature addressing this connection. This was an opportunity to create a sleep-focused experience within the existing ecosystem.',
      },
      {
        heading: 'Research & Insights',
        body: 'Three semi-structured interviews revealed: users value simplicity and personalization, many associate good sleep with reduced stress, and they prefer human-guided support over AI-only interactions. Key insight: Sleep is a pivotal but under-served dimension of mental wellness that could increase both perceived effectiveness and daily engagement.',
      },
      {
        heading: 'Ideation & Architecture',
        body: 'We brainstormed three concepts: Sleep Mood, Fresh Air Mode, and AI Mindfulness Guide. Affinity mapping prioritized Sleep Mood for universal relevance. Core components: customizable soundscapes, narrated bedtime stories, science-backed sleep videos, and progress tracking. Sleep Mood automatically softens the UI (reduced brightness, cooler tones) to signal mental transition into rest.',
      },
      {
        heading: 'Design Evolution',
        body: 'Wireframes refined the Sleep Mood activation flow, simplifying redundant navigation into a single toggle. Visual hierarchy emphasized calm immersion over information density. Accessibility priorities: large tap targets, high-contrast typography for night-time readability, and consistency with Headspace\'s brand identity.',
      },
      {
        heading: 'Final Concept',
        body: 'Sleep Mood transforms Headspace into a serene night-time companion. Key features: calm interface shift, multi-sensory engagement (soundscapes, stories, videos), gentle progress prompts, and emotional framing through the persona "Emma Taylor," a marketing professional with irregular work hours.',
      },
      {
        heading: 'Outcomes & Learnings',
        body: 'The concept ended at the design phase (no prototype testing). Peer feedback validated sleep as a strategic expansion for retention. Learnings: user empathy improves ideation, collaborative research deepens understanding, and speculative features benefit from human-centered storytelling. Future work: lo-fi prototyping and usability testing.',
      },
    ],
    gallery: [
      {
        src: '/assets/headspace/bedtime-stories-ui.webp',
        alt: 'Bedtime Stories feature interface',
        caption: 'Bedtime Stories interface - multi-sensory engagement with stories, soundscapes, and audiobooks',
      },
      {
        src: '/assets/headspace/research-brainstorm.webp',
        alt: 'Research synthesis and brainstorm mindmap',
        caption: 'Collaborative brainstorm - synthesizing research into core Sleep Mood features',
      },
      {
        src: '/assets/headspace/three-concepts.webp',
        alt: 'Three feature concept options',
        caption: 'Ideation workshop - Fresh Air Mode, Sleep Mood, and AI Feature concepts',
      },
      {
        src: '/assets/headspace/narratives-flow.webp',
        alt: 'Narratives feature selection flow',
        caption: 'User flow - selecting and playing narrated content for sleep',
      },
      {
        src: '/assets/headspace/audiobooks-flow.webp',
        alt: 'Audiobooks library and player',
        caption: 'Audiobook library and playback experience - simple, non-cluttered controls',
      },
      {
        src: '/assets/headspace/sleep-mood-flows.webp',
        alt: 'Sleep Mood interface flows and transitions',
        caption: 'Design evolution - Sleep Mood activation, content selection, and playback flows',
      },
      {
        src: '/assets/headspace/sleep-mood-final.webp',
        alt: 'Final Sleep Mood concept design',
        caption: 'Final concept - Sleep Mood transforms Headspace into a serene night-time companion',
      },
    ],
    outcomes: {
      metrics: 'Our goal was to design a new feature concept that improves user retention and expands Headspace\'s value by addressing unmet user needs. We aimed to: (1) Support healthier, consistent sleep habits, (2) Create a low-effort, calming routine within the app\'s ecosystem, (3) Strengthen engagement through personalization and emotional resonance. Success was measured qualitatively: peer feedback during feature pitches and alignment with research insights.',
      learnings: 'Although the project ended at the concept phase (no prototype testing), we gathered valuable takeaways: (1) User empathy improves ideation fidelity—interviews clarified emotional pain points. (2) Collaborative coding deepened our understanding of shared human needs. (3) The "Sleep Mood" concept resonated strongly with peers, validating sleep as a strategic expansion for retention. (4) Future work would include lo-fi prototyping and usability testing to evaluate flow clarity and emotional tone. Reflection: This project solidified my appreciation for research-driven design. The process, moving from empathy to synthesis to storytelling, demonstrated how even speculative features can be influenced by human characteristics and emotions. The Sleep Mood concept represents a bridge between emotional resonance and functional calm: a UX architecture for rest.',
    },
  },
  {
    slug: 'gobi-gamified-sobriety',
    title: 'Gobi — Gamified Sobriety',
    summary: 'Designing an emotionally resonant app with gamification to support sobriety goals.',
    projectType: 'Emotional Design & Gamification',
    timeline: 'Apr 2024 - Jun 2024',
    role: 'UX Designer',
    team: ['You', 'Product Manager', 'Developers'],
    thumbnailImage: '/assets/gobi/thumbnail.webp',
    heroImage: '/assets/gobi/hero.webp',
    sections: [
      {
        heading: 'Project Overview',
        body: 'An overview of the Gobi app and its mission.',
      },
      {
        heading: 'Context & Problem',
        body: 'Addressing emotional needs in sobriety support apps.',
      },
      {
        heading: 'Research & Insights',
        body: 'User research on emotional design preferences and gamification impact.',
      },
      {
        heading: 'Ideation & Architecture',
        body: 'Designing the mascot and achievement system.',
      },
      {
        heading: 'Design Evolution',
        body: 'Mascot iterations and GobCoins achievement system refinement.',
      },
      {
        heading: 'Final Concept',
        body: 'The complete gamified experience with mascot and reward systems.',
      },
      {
        heading: 'Outcomes & Learnings',
        body: 'Usability testing results and impact on user engagement.',
      },
    ],
    gallery: [
      {
        src: '/assets/gobi/mascot-1.webp',
        alt: 'Mascot exploration sketches',
        caption: 'Early mascot character exploration',
      },
      {
        src: '/assets/gobi/mascot-2.webp',
        alt: 'Final mascot design',
        caption: 'Final mascot design and expressions',
      },
      {
        src: '/assets/gobi/ui-1.webp',
        alt: 'Dashboard interface',
        caption: 'Gamified dashboard with achievement tracking',
      },
      {
        src: '/assets/gobi/ui-2.webp',
        alt: 'Reward system',
        caption: 'GobCoins reward and achievement system',
      },
    ],
    outcomes: {
      metrics: 'Pending - Add quantitative results from testing',
      learnings: 'Pending - Add reflections on emotional design effectiveness',
    },
  },
  {
    slug: 'spotify-ux-audit',
    title: 'Spotify — UX Audit',
    summary: 'Conducting a comprehensive UX audit identifying pain points in discoverability and algorithm fatigue.',
    projectType: 'UX Audit & Analysis',
    timeline: 'Jul 2024 - Sep 2024',
    role: 'UX Researcher',
    team: ['You', 'Audit Team'],
    thumbnailImage: '/assets/spotify/thumbnail.webp',
    heroImage: '/assets/spotify/hero.webp',
    sections: [
      {
        heading: 'Project Overview',
        body: 'Comprehensive UX audit of Spotify interface and user flows.',
      },
      {
        heading: 'Context & Problem',
        body: 'Identifying pain points: mono-listening, overwhelming interface, and algorithm fatigue.',
      },
      {
        heading: 'Research & Insights',
        body: 'Detailed audit findings and analysis of user friction points.',
      },
      {
        heading: 'Ideation & Architecture',
        body: 'Proposed solutions for improved discoverability.',
      },
      {
        heading: 'Design Evolution',
        body: 'Iterating on recommendations based on best practices.',
      },
      {
        heading: 'Final Concept',
        body: 'Final recommendations and prototyped solutions.',
      },
      {
        heading: 'Outcomes & Learnings',
        body: 'Summary of findings and recommendations for product improvement.',
      },
    ],
    gallery: [
      {
        src: '/assets/spotify/audit-1.webp',
        alt: 'Current state analysis',
        caption: 'Current Spotify interface analysis',
      },
      {
        src: '/assets/spotify/audit-2.webp',
        alt: 'Pain point mapping',
        caption: 'Identified pain points and friction areas',
      },
      {
        src: '/assets/spotify/solution-1.webp',
        alt: 'Proposed solution 1',
        caption: 'Improved discoverability interface redesign',
      },
      {
        src: '/assets/spotify/solution-2.webp',
        alt: 'Proposed solution 2',
        caption: 'Algorithm fatigue mitigation strategy',
      },
    ],
    outcomes: {
      metrics: 'Pending - Add audit scope and coverage metrics',
      learnings: 'Pending - Add key findings and recommendations',
    },
  },
]
