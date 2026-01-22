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
    projectType: 'Student Project: Discovery to Polished Prototype',
    timeline: '2.5–3 months',
    role: 'Secondary Discovery Researcher · Interviewer · Interview Notetaker · Observational Researcher · Collaborative Insight Analyst · Prototype Designer · Usability Analyst · Collaborative Slide Designer',
    team: ['Kayla Danio', 'Fernanda Alonso Castrejon', 'Kateryna Kravchenko', 'Ryan Leskiw'],
    thumbnailImage: '/assets/gobi/gobi-titleshot.webp',
    heroImage: '/assets/gobi/gobi-titleshot.webp',
    sections: [
      {
        heading: 'Context & Problem',
        body: 'The sober-curious movement, driven by Gen Z\'s shifting attitudes toward wellness, has reshaped how people think about alcohol. The current digital wellness tools abound, but rarely address sobriety or moderation in a way that feels motivating rather than medical.\n\nOur team set out to explore how we might design a system that supports cutting back on alcohol through positive reinforcement and gamified self-tracking.\n\nOur early ideas focused on sober-friendly event spaces, but interviews revealed that what users wanted wasn\'t another meetup app—they wanted support that feels fun, personal, and non-judgmental.',
      },
      {
        heading: 'Research & Insights',
        body: 'Methods:\n• 7 initial discovery interviews\n• 4 Observational usability testing (Zoom & in-person)\n• Secondary discovery research\n• Thematic coding & affinity mapping\n• Alcohol and alcohol-free space observational research (in-person)\n\nTop Insights:\n• Users wanted progress, not perfection—sobriety apps often felt punitive.\n• A mascot or emotional companion made behavior change feel approachable.\n• Gamified elements like achievements and avatar customization improved engagement.\n• Tracking needed to feel private, simple, and encouraging, not judgmental.\n• Personal data (health stats, money saved) increased a sense of control.\n\nKey Finding: Gamification, when paired with humor and emotional design, helps users approach serious topics—like alcohol moderation—with self-compassion and consistency.',
        image: '/assets/gobi/affinity-map.webp',
        imageAlt: 'Usability Affinity Map',
        imageCaption: 'Comprehensive affinity map synthesizing research across four phases: Learnability & Onboarding, Navigation & System Visibility, Emotional Engagement & Mascot Appeal, and more',
      },
      {
        heading: 'Ideation & Architecture',
        body: 'Through iterative workshops and feature pitches, the team distilled early discovery into one clear direction: Sobriety, but gamified.\n\nWe came up with Gobi, a goblin companion embodying self-growth through imperfection.\n\nCore features were mapped across three pillars:\n\nGamification, Tracking, Emotional Support.',
        image: '/assets/gobi/gobi-version-1.webp',
        imageAlt: 'Ideation and feature mapping',
        imageCaption: 'Feature mapping across three core pillars with achievement screens and mascot customization concepts',
      },
      {
        heading: 'Design Evolution',
        body: 'User testing exposed both clarity gaps and emotional wins:\n\nNavigation: Icon ambiguity resolved via clearer titles and simplified bottom bar.\n\nCustomization: Loved changing Gobi\'s outfit, but wanted previews before spending coins. Implemented preview overlay.\n\nOnboarding: Users found setup intuitive and friendly. Kept conversational tone.\n\nReflections Feature: Some users "farmed" coins with empty entries. Added cooldowns and reward caps.\n\nLogging a drink: Confusion between "Manage Challenge" and "Log Drink." Revised button labels and visual hierarchy.\n\nFeedback system: Users responded emotionally to Gobi\'s reactions ("Oh no, I\'ve disappointed my Gobi"). Retained and refined emotional feedback.',
        image: '/assets/gobi/refinements.webp',
        imageAlt: 'Design refinements from user testing',
        imageCaption: 'Before and After refinements: Profile and Reflections screens improved through iterative user testing',
      },
      {
        heading: 'Final Concept',
        body: 'Gobi is a challenge-based sobriety app that turns behavior change into a personalized adventure.\n\nThrough avatar evolution, achievements, and reflective journaling, users see tangible rewards for healthy habits, both emotional and measurable.\n\nKey Features:\n• Gamified Tracking: Avatar growth, achievements, streaks, and GobCoins.\n• Health Insights: Sleep, heart rate, money saved, and weekly progress.\n• Reflections: Guided prompts that transform self-awareness into earned rewards.\n• Personalization: Outfits, colors, and "Goblin moods" that evolve with progress.\n• Smart Integration: Optional biometric sync for data-driven insights.\n\nIdeal Scenario - Alex\'s Journey: Alex isn\'t quitting—she\'s only cutting back. After choosing "One-Drink-a-Week," she logs moods, completes reflections, earns coins, customizes her goblin, and sees her saved money climb. Gobi cheers her on, celebrating every small victory with humor and empathy.',
        image: '/assets/gobi/final-concept.webp',
        imageAlt: 'Final concept app screens',
        imageCaption: 'Complete user journey: Onboarding, challenges, achievements, reflections, and customization',
      },
      {
        heading: 'Outcomes & Learnings',
        body: 'Testing Impact: 4 participant usability sessions validated core flows. All users described Gobi as "fun, human, and motivating." Emotional feedback ("Gobi\'s disappointed face") improved self-awareness. Gamification balanced accountability, reducing stigma.\n\nReflection & Next Steps: Further testing could refine social and community features (friend challenges, leaderboard visibility). Expanded accessibility and adaptive challenge scaling planned for next iteration. Opportunity for data-driven personalization (habit recommendations, AI journaling prompts).\n\nGobi taught me how emotional design can mitigate resistance. By merging gamification with progress tracking, we built a system where self-improvement feels celebratory, not corrective. The key was pairing the mascot\'s personality with genuine progress metrics—making the app both emotionally engaging and functionally supportive.',
      },
    ],
    gallery: [
      {
        src: '/assets/gobi/gobi-version-1.webp',
        alt: 'Gobi Version 1 Wireframes',
        caption: 'Version 1: Early wireframes exploring dashboard, tracking, and mascot customization',
      },
      {
        src: '/assets/gobi/gobi-version-2.webp',
        alt: 'Gobi Version 2 Refined Design',
        caption: 'Version 2: Refined design with improved navigation and visual hierarchy',
      },
      {
        src: '/assets/gobi/prototype-flow.webp',
        alt: 'Complete Onboarding Flow',
        caption: 'Comprehensive onboarding screens: Welcome, Registration, Profile Setup, and Progress Tracking',
      },
      {
        src: '/assets/gobi/welcome-screen.webp',
        alt: 'Welcome Screen',
        caption: 'Welcome onboarding screen introducing Gobi mascot and app purpose',
      },
    ],
    outcomes: {
      metrics: '4 participant usability sessions validated core flows. All users described Gobi as "fun, human, and motivating." Emotional feedback improved self-awareness. Gamification balanced accountability, reducing stigma.',
      learnings: 'Gobi taught me how emotional design can mitigate resistance. By merging gamification with progress tracking, we built a system where self-improvement feels celebratory, not corrective.',
    },
  },
  {
    slug: 'spotify-ux-audit',
    title: 'Spotify — UX Audit',
    summary: 'A comprehensive UX audit identifying pain points in discoverability and algorithm fatigue to balance Spotify\'s data-driven intelligence with human-centered storytelling.',
    projectType: 'UX Audit and design recommendations',
    timeline: '1 Month',
    role: 'Interviewer, UX designer, Insight analyst',
    team: ['Solo Project'],
    thumbnailImage: '/assets/spotify/thumbnail.webp',
    heroImage: '/assets/spotify/hero.webp',
    sections: [
      {
        heading: 'Context & Problem',
        body: 'Spotify is a leading music-streaming platform known for its personalization algorithms and expansive music library. However, interviews and user observations revealed a recurring challenge: many users rely heavily on "Liked Songs" or a handful of playlists, engaging minimally with discovery features.\n\nParticipants described a paradox. Spotify offers endless choice, yet users often feel overwhelmed or stuck in listening habits. New users reported difficulty navigating the interface, while long-time listeners felt discovery had become less personal. This gap highlighted an opportunity to improve discoverability and usability while keeping Spotify\'s emotional connection to music at the forefront.',
      },
      {
        heading: 'Goals & Success Metrics',
        body: 'My goal was to identify pain points in Spotify\'s interface and develop recommendations that would make music discovery more intuitive, personalized, and human-centered. We aimed to:\n\n• Evaluate the clarity and consistency of Spotify\'s user experience.\n• Uncover behavioral patterns behind listening and exploration.\n• Provide actionable design recommendations to improve engagement.\n\nSuccess was measured qualitatively through:\n\n• User resonance during interviews and follow-up discussions.\n• Thematic alignment between insights and proposed improvements.\n• Clearer articulation of Spotify\'s discovery ecosystem for different user types.',
      },
      {
        heading: 'Research & Insights',
        body: 'I conducted three semi-structured interviews with Spotify users aged 22–25, representing both new and long-term subscribers. Sessions explored listening habits, discovery behavior, and interface usability. Interview notes and transcripts were collaboratively coded to reveal shared themes.\n\nCore Finding: Spotify\'s recommendation system is powerful, but its discovery experience lacks guidance and emotional touchpoints, limiting user exploration and growth.\n\nKey Insights:\n\nInfluence of Activity/Setting on Music Genre Choice: Music genre choice is influenced by the activity or setting. Spotify already offers playlists based on mood/activity, but could improve personalization through its recommendation algorithm.\n\nSpotify Interface Feedback: One interviewee described the Spotify interface as "a jumble of all the music I have ever listened to." This highlighted how overwhelming the interface can be for new users, even though regular users are familiar with it.\n\nDiscover Weekly Playlist: Surprised that "Discover Weekly" wasn\'t mentioned in interviews, despite it being a key feature. The vague phrasing of a question on Spotify recommendations may have caused interviewees to not mention it.\n\nAssumptions re-examined:\n\nDiscovery Through Community: Users do discover music through community features, like radio stations based on liked songs, but they didn\'t explicitly say they were "inspired" to discover.\n\nUser Habits: Some users form habits and don\'t use all features (e.g., sticking to "Liked Songs" or podcasts). A new user was still exploring all features, showing habits develop over time. Habit assumption may not fully hold true; more data is needed for deeper insights.\n\nAccessible Music Listening: Users appreciate the affordability and variety streaming offers over owning music, confirming this assumption.',
      },
      {
        heading: 'Ideation & Strategy',
        body: 'Strategic recommendations:\n\n• Simplify Navigation: Consolidate overlapping sections (e.g., "Your Library" vs. "Playlists") for intuitive orientation.\n\n• Highlight Discovery Features: Prioritize Discovery Weekly and Blend playlists on the homepage to surface personalized exploration.\n\n• Personalization through Context: Introduce dynamic listening "modes" (e.g., Focus, Commute, Chill) that adapt to user activity.\n\n• Humanize the Experience: Feature artist-curated content and social elements to reintroduce a sense of connection beyond the algorithm.\n\nThese ideas aimed to balance Spotify\'s data-driven intelligence with human-centered storytelling and simplicity.',
      },
      {
        heading: 'Vision & Goals',
        body: 'Deliver a music streaming platform that offers a variety of listening methods in an accessible, clean, and organized fashion.\n\nGoals:\n• Increase the usage of algorithmic content amongst Spotify users\n• Grow the number of new users swapping from other platforms\n• Increase current users exploration of the app\n• Reduce the amount of "mono-listening" (Listening through only one avenue such as liked songs)\n\nKey Results:\n• Noticeable spike in usage of recommended content\n• Positive feedback online, eg. App store reviews, influencer feedback etc.\n• Noticeable increase in the volume of music users are saving\n• 10% increase in new users',
      },
      {
        heading: 'Outcomes & Learnings',
        body: 'Although this project concluded at the conceptual stage, it provided valuable insight into how platform familiarity shapes discovery behaviour. Users didn\'t resist new features; they simply needed better framing and visibility.\n\nKey Learnings:\n• User interviews revealed the power of context — music habits are emotional and routine-based.\n• Simplification doesn\'t mean less functionality; it means designing for clarity and flow.\n• A balance between algorithmic precision and human storytelling fosters trust and engagement.\n\nReflection:\nThis audit deepened my understanding of how UX evaluation can uncover both functional and emotional pain points. I learned how to move beyond surface-level usability and look for meaning and understanding—not just how users interact, but why. It reinforced the importance of aligning design strategy with behaviour patterns, not assumptions.',
      },
    ],
    gallery: [
      {
        src: '/assets/spotify/goals-metrics.webp',
        alt: 'Goals & Success Metrics',
        caption: 'Goals & Success Metrics with strategic objectives',
      },
      {
        src: '/assets/spotify/research-insights.webp',
        alt: 'Research & Insights',
        caption: 'Research findings and user interview analysis',
      },
      {
        src: '/assets/spotify/insights-detail.webp',
        alt: 'Detailed Insights',
        caption: 'Insights: Activity influence, interface feedback, and assumptions',
      },
      {
        src: '/assets/spotify/ideation-strategy.webp',
        alt: 'Ideation & Strategy',
        caption: 'Strategic recommendations across navigation, discovery, and personalization',
      },
      {
        src: '/assets/spotify/persona-1.webp',
        alt: 'Primary User Persona',
        caption: 'Persona 1: Velma Hoover — Exploratory music lover seeking curation',
      },
      {
        src: '/assets/spotify/persona-2.webp',
        alt: 'Secondary User Persona',
        caption: 'Persona 2: Gerald Spinaker — Habit-driven listener seeking discovery',
      },
      {
        src: '/assets/spotify/vision-goals.webp',
        alt: 'Vision & Goals',
        caption: 'Vision and key results for platform improvement',
      },
    ],
    outcomes: {
      metrics: 'Although this project concluded at the conceptual stage, it provided valuable insight into how platform familiarity shapes discovery behaviour. Users didn\'t resist new features; they simply needed better framing and visibility.',
      learnings: 'This audit deepened my understanding of how UX evaluation can uncover both functional and emotional pain points. I learned how to move beyond surface-level usability and look for meaning and understanding—not just how users interact, but why.',
    },
  },
]
