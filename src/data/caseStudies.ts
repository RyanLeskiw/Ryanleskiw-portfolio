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
    thumbnailImage: '/assets/headspace/hero.webp',
    heroImage: '/assets/headspace/hero.webp',
    sections: [
      {
        heading: 'Context & Problem',
        body: 'Headspace users struggle with inconsistent sleep routines that undermine overall wellness. Sleep affects mood, focus, and motivation—yet the app lacked a dedicated feature addressing this connection. This was an opportunity to create a sleep-focused experience within the existing ecosystem.',
        image: '/assets/headspace/bedtime-stories-ui.webp',
        imageAlt: 'Bedtime Stories feature interface',
        imageCaption: 'Bedtime Stories interface - multi-sensory engagement with stories, soundscapes, and audiobooks',
      },
      {
        heading: 'Research & Insights',
        body: 'Three semi-structured interviews revealed: users value simplicity and personalization, many associate good sleep with reduced stress, and they prefer human-guided support over AI-only interactions. Key insight: Sleep is a pivotal but under-served dimension of mental wellness that could increase both perceived effectiveness and daily engagement.',
        image: '/assets/headspace/research-brainstorm.webp',
        imageAlt: 'Research synthesis and brainstorm mindmap',
        imageCaption: 'Collaborative brainstorm - synthesizing research into core Sleep Mood features',
      },
      {
        heading: 'Ideation & Architecture',
        body: 'We brainstormed three concepts: Sleep Mood, Fresh Air Mode, and AI Mindfulness Guide. Affinity mapping prioritized Sleep Mood for universal relevance. Core components: customizable soundscapes, narrated bedtime stories, science-backed sleep videos, and progress tracking. Sleep Mood automatically softens the UI (reduced brightness, cooler tones) to signal mental transition into rest.',
        image: '/assets/headspace/three-concepts.webp',
        imageAlt: 'Three feature concept options',
        imageCaption: 'Ideation workshop - Fresh Air Mode, Sleep Mood, and AI Feature concepts',
      },
      {
        heading: 'Design Evolution',
        body: 'Wireframes refined the Sleep Mood activation flow, simplifying redundant navigation into a single toggle. Visual hierarchy emphasized calm immersion over information density. Accessibility priorities: large tap targets, high-contrast typography for night-time readability, and consistency with Headspace\'s brand identity.',
        image: '/assets/headspace/sleep-mood-flows.webp',
        imageAlt: 'Sleep Mood interface flows and transitions',
        imageCaption: 'Design evolution - Sleep Mood activation, content selection, and playback flows',
      },
      {
        heading: 'Final Concept',
        body: 'Sleep Mood transforms Headspace into a serene night-time companion. Key features: calm interface shift, multi-sensory engagement (soundscapes, stories, videos), gentle progress prompts, and emotional framing through the persona "Emma Taylor," a marketing professional with irregular work hours.',
        image: '/assets/headspace/sleep-mood-final.webp',
        imageAlt: 'Final Sleep Mood concept design',
        imageCaption: 'Final concept - Sleep Mood transforms Headspace into a serene night-time companion',
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
      metrics: 'Sleep Mood validated sleep as a strategic retention opportunity for Headspace. Peer feedback confirmed the concept\'s appeal and feasibility within the existing ecosystem.',
      learnings: 'This research-driven project demonstrated that user empathy accelerates ideation, collaborative synthesis deepens insight, and human-centered storytelling strengthens speculative design. Though ending at the concept phase, the process—from interviews to affinity mapping to final design—proved that embedding emotional resonance (calm UI, multi-sensory engagement) into functional features creates compelling UX architecture for user wellbeing.',
    },
  },
  {
    slug: 'gobi-gamified-sobriety',
    title: 'Gobi — Gamified Sobriety',
    summary: 'Designing a gamified sobriety app that turns behavior change into a personalized adventure through emotional design and playful interaction.',
    projectType: 'Full-term UX Project — Discovery to Polished Prototype',
    timeline: '2.5–3 months',
    role: 'Secondary Discovery Researcher · Interviewer · Interview Notetaker · Observational Researcher · Collaborative Insight Analyst · Prototype Designer · Usability Analyst · Collaborative Slide Designer',
    team: ['Kayla Danio', 'Fernanda Alonso Castrejon', 'Kateryna Kravchenko', 'Ryan Leskiw'],
    thumbnailImage: '/assets/gobi/thumbnail.webp',
    heroImage: '/assets/gobi/hero.webp',
    sections: [
      {
        heading: 'Context & Problem',
        body: 'The sober-curious movement, driven by Gen Z\'s shifting attitudes toward wellness, has reshaped how people think about alcohol. The current digital wellness tools abound, but rarely address sobriety or moderation in a way that feels motivating rather than medical.\n\nOur team set out to explore how we might design a system that supports cutting back on alcohol through positive reinforcement and gamified self-tracking.\n\nOur early ideas focused on sober-friendly event spaces, but interviews revealed that what users wanted wasn\'t another meetup app—they wanted support that feels fun, personal, and non-judgmental.',
      },
      {
        heading: 'Research & Insights',
        body: 'Methods:\n• 7 initial discovery interviews\n• 4 Observational usability testing (Zoom & in-person)\n• Secondary discovery research\n• Thematic coding & affinity mapping\n• Alcohol and alcohol-free space observational research (in-person)\n\nTop Insights:\n• Users wanted progress, not perfection—sobriety apps often felt punitive.\n• A mascot or emotional companion made behavior change feel approachable.\n• Gamified elements like achievements and avatar customization improved engagement.\n• Tracking needed to feel private, simple, and encouraging, not judgmental.\n• Personal data (health stats, money saved) increased a sense of control.\n\nKey Finding: Gamification, when paired with humor and emotional design, helps users approach serious topics—like alcohol moderation—with self-compassion and consistency.',
      },
      {
        heading: 'Ideation & Architecture',
        body: 'Through iterative workshops and feature pitches, the team distilled early discovery into one clear direction: Sobriety, but gamified.\n\nWe came up with Gobi, a goblin companion embodying self-growth through imperfection.\n\nCore features were mapped across three pillars:\n\nGamification, Tracking, Emotional Support.',
      },
      {
        heading: 'Design Evolution',
        body: 'User testing exposed both clarity gaps and emotional wins:\n\nNavigation: Icon ambiguity resolved via clearer titles and simplified bottom bar.\n\nCustomization: Loved changing Gobi\'s outfit, but wanted previews before spending coins. Implemented preview overlay.\n\nOnboarding: Users found setup intuitive and friendly. Kept conversational tone.\n\nReflections Feature: Some users "farmed" coins with empty entries. Added cooldowns and reward caps.\n\nLogging a drink: Confusion between "Manage Challenge" and "Log Drink." Revised button labels and visual hierarchy.\n\nFeedback system: Users responded emotionally to Gobi\'s reactions ("Oh no, I\'ve disappointed my Gobi"). Retained and refined emotional feedback.',
      },
      {
        heading: 'Final Concept',
        body: 'Gobi is a challenge-based sobriety app that turns behavior change into a personalized adventure.\n\nThrough avatar evolution, achievements, and reflective journaling, users see tangible rewards for healthy habits, both emotional and measurable.\n\nKey Features:\n• Gamified Tracking: Avatar growth, achievements, streaks, and GobCoins.\n• Health Insights: Sleep, heart rate, money saved, and weekly progress.\n• Reflections: Guided prompts that transform self-awareness into earned rewards.\n• Personalization: Outfits, colors, and "Goblin moods" that evolve with progress.\n• Smart Integration: Optional biometric sync for data-driven insights.\n\nIdeal Scenario - Alex\'s Journey: Alex isn\'t quitting—she\'s only cutting back. After choosing "One-Drink-a-Week," she logs moods, completes reflections, earns coins, customizes her goblin, and sees her saved money climb. Gobi cheers her on, celebrating every small victory with humor and empathy.',
      },
      {
        heading: 'Outcomes & Learnings',
        body: 'Testing Impact:\n• 4 participant usability sessions validated core flows.\n• All users described Gobi as "fun, human, and motivating."\n• Emotional feedback ("Gobi\'s disappointed face") improved self-awareness.\n• Gamification balanced accountability, reducing stigma.\n\nReflection & Next Steps:\n• Further testing could refine social and community features (friend challenges, leaderboard visibility).\n• Expanded accessibility and adaptive challenge scaling planned for next iteration.\n• Opportunity for data-driven personalization (habit recommendations, AI journaling prompts).\n\nGobi taught me how emotional design can mitigate resistance. By merging gamification with progress tracking, we built a system where self-improvement feels celebratory, not corrective. The key was pairing the mascot\'s personality with genuine progress metrics—making the app both emotionally engaging and functionally supportive.',
      },
    ],
    gallery: [
      {
        src: '/assets/gobi/goals-metrics.webp',
        alt: 'Goals and Success Metrics',
        caption: 'Goals & Success Metrics: Core Goal and Success Indicators',
      },
      {
        src: '/assets/gobi/affinity-map.webp',
        alt: 'Usability Affinity Map',
        caption: 'Usability Affinity Map: Comprehensive research synthesis across four phases',
      },
      {
        src: '/assets/gobi/personas.webp',
        alt: 'Guiding Personas',
        caption: '1 of our Guiding Personas: Based on interviews and observational research',
      },
      {
        src: '/assets/gobi/ideation.webp',
        alt: 'Ideation & Architecture',
        caption: 'Ideation & Architecture: Feature Design Across Three Core Pillars',
      },
      {
        src: '/assets/gobi/evolution.webp',
        alt: 'Design Evolution',
        caption: 'Design Evolution: Wireframes → Mid-Fi → High-Fi → Polished Prototype',
      },
      {
        src: '/assets/gobi/refinements.webp',
        alt: 'Refinements Made',
        caption: 'Some Refinements Made: Before & After iterations from user testing',
      },
      {
        src: '/assets/gobi/final-concept.webp',
        alt: 'Final Concept',
        caption: 'Final Concept: Challenge-based sobriety app with personalized adventure',
      },
    ],
    outcomes: {
      metrics: '4 participant usability sessions validated core flows. All users described Gobi as "fun, human, and motivating." Emotional feedback ("Gobi\'s disappointed face") improved self-awareness. Gamification balanced accountability, reducing stigma.',
      learnings: 'Gobi taught me how emotional design can mitigate resistance. By merging gamification with progress tracking, we built a system where self-improvement feels celebratory, not corrective. The key was pairing the mascot\'s personality with genuine progress metrics—making the app both emotionally engaging and functionally supportive.',
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
