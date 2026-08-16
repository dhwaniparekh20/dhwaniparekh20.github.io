/* global React */
// Real content imported from Framer "Dhwani Parekh" project — May 18, 2026.
// Section data drives both the project list and case-study pages.

window.CASE_STUDIES = [
  {
    id: 'myplate',
    num: '01',
    title: 'Start Simple with MyPlate',
    shortTitle: 'MyPlate: Redesigning Healthy Eating Habits',
    oneLiner: 'Redesigned the MyPlate app to reduce friction in food logging and support habit formation.',
    headline: 'A research-grounded redesign of the USDA MyPlate app.',
    sub: 'Designing a simpler, more motivating nutrition experience for everyday habit building.',
    category: '',
    tags: 'Product Design · UX Research · Prototyping · Mobile UX',
    year: '2024',
    banner: 'https://framerusercontent.com/images/Hb6Z0YeVw0nClA5xO1rPwy6Vfis.png',
    cardImage: 'https://framerusercontent.com/images/ZzcQXRCz9lctwWnxaiy95gHIfJQ.png',

    meta: {
      team: 'Team of 5',
      duration: '10 weeks',
      tools: 'Figma, FigJam, OpinionX, Maze, Google Sheets',
      myRole: 'Feature redesign · Quantitative research · Prototyping · Usability testing',
    },

    tldr: {
      challenge: "The USDA's MyPlate app aimed to help people build healthier eating habits, but usability testing showed that its core actions were confusing and hard to complete.",
      challengeStat: { n: '40%', label: 'of participants failed to complete essential tasks in round-one usability testing, limiting the app’s ability to support consistent habits.' },
      solution: 'We redesigned the core experience to make healthy eating simpler, more personal, and easier to act on:',
      solutionList: [
        'Flexible food logging so users could track what they actually ate',
        'Personalized nutrition goals tailored to user preferences',
        'A progress dashboard to make habits visible and motivating',
      ],
      impact: [
        { n: '6/6', label: 'understood every redesigned screen' },
        { n: '5.0/7', label: 'average ease across the tested flows' },
        { n: '77.5', label: 'SUS — landed in the “Good” band' },
      ],
      impactNote: 'From concept testing the redesign with 6 participants: early validation. The success targets (task completion, SUS ≥ 80) are set for an interactive usability test next.',
      impactSummary: 'Concept testing the redesign validated the core bet: every screen was understood, and surfaced the two fixes that lead the next round.',
    },

    myRole: {
      title: 'Product Designer',
      copy: 'I led the end-to-end redesign of the core MyPlate experience, focusing on improving usability, personalization, and habit formation.',
      bullets: [
        'Redesigned core product flows',
        'Conducted competitive analysis and prioritized features using a MaxDiff survey',
        'Led usability testing and synthesized insights',
        'Translated insights into clear design directions',
        'Designed high-fidelity interaction flows',
      ],
      footnote: 'Research planning and critique were collaborative with my team.',
    },

    overview: "",

    problem: {
      statement: "Healthy eating shouldn't feel this complicated.",
      barriersIntro: 'Users ran into:',
      barriers: [
        'Key actions they couldn’t find without hunting for them',
        'No simple way to log what they ate',
        'Generic targets that didn’t feel like their own',
        'No sense of whether they were making progress',
      ],
      coda: "For a habit-building app, it wasn't helping anyone build habits.",
      image: 'https://framerusercontent.com/images/ROffIeSaXcckt1fajVzpFAg.png',
      imageCaption: 'Actual user reviews',
    },

    research: {
      question: "What's stopping people from consistently using this app to eat healthier?",
      questionContext: 'We explored market expectations, user feedback, and real user behavior to understand what was preventing consistent use.',
      atAGlance: [
        { n: '5', label: 'research methods triangulated' },
        { n: '38', label: 'survey participants' },
        { n: '4', label: 'competitor apps benchmarked' },
      ],
      methods: [
        {
          h: 'Competitive analysis',
          question: 'How does MyPlate compare to other nutrition apps?',
          summary: 'We compared MyPlate with leading nutrition apps (MyFitnessPal, Lifesum, Yazio, Cronometer) to understand user expectations.',
          focus: 'We focused on key areas: food logging, personalization, habit tracking, progress, and onboarding.',
          image: 'assets/competitive-analysis.png',
          imageCap: 'Feature-by-feature comparison across five apps.',
          groups: [
            { label: 'Strengths', items: ['Free', 'Ad-free', 'Backed by the USDA'] },
            { label: 'Gaps', items: ['Missing food logging', 'No personalization and habit-tracking', 'Outdated progress visualization', 'No modern onboarding'] },
            { label: 'Competitor strengths', items: ['Offer tailored meal plans', 'Provide barcode scanners', 'Culturally inclusive food data'] },
            { label: 'Design implications for MyPlate', items: ['Introduce flexible food logging', 'Add personalized nutrition goals', 'Provide clear progress feedback', 'Modernize onboarding and navigation'], highlight: true },
          ],
        },
        {
          h: 'Sentiment analysis',
          question: 'What are users actually saying about MyPlate in the wild?',
          summary: 'We analyzed app store reviews and online discussions to understand how users perceived the app.',
          sentiment: [
            { n: '68%', label: 'Negative', tone: 'neg' },
            { n: '22%', label: 'Positive', tone: 'pos' },
            { n: '10%', label: 'Neutral', tone: 'neu' },
          ],
          coda: 'While users trusted the USDA-backed content, many found the app difficult to use in daily life.',
          groups: [
            { label: 'What users liked', items: ['Simple nutrition guidance', 'Credible source'] },
            { label: 'Common frustrations', items: ['App feels outdated', 'Confusing to navigate', 'Cluttered and overwhelming'] },
            { label: 'Neutral feedback', items: ['Some find it fine for basic tracking, not so engaging for long-term'] },
            { label: 'Design implications', items: ['Reduce clutter', 'Provide actionable guidance', 'Improve engagement and motivation'], highlight: true },
          ],
        },
        {
          h: 'Usability testing',
          question: 'Where does the current product break down for new users?',
          summary: 'We conducted usability testing with 5 participants across the U.S. to understand how users interacted with the current experience.',
          tasks: [
            {
              n: '01',
              title: 'Understand current eating habits',
              completion: '3 / 5',
              completionLabel: 'completed the quiz correctly',
              time: '~6.5 min',
              note: 'Participants struggled to interpret questions and navigate the quiz flow.',
            },
            {
              n: '02',
              title: 'Review progress over time',
              completion: '5 / 5',
              completionLabel: 'completed the task',
              time: '~1 min',
              note: 'While users could access the information, the path was not always clear — some needed assistance.',
            },
            {
              n: '03',
              title: 'Set protein intake goals',
              completion: '5 / 5',
              completionLabel: 'completed the task',
              time: '~1.5 min',
              note: 'Participants lacked guidance on which goal option was appropriate for them. Some felt uncertain about their choices.',
            },
          ],
          sus: { score: '74.5', label: 'System Usability Score', note: 'Fair usability, but room for meaningful improvements.' },
          issues: ['Confusing navigation and flows', 'Generic goal recommendations', 'Limited personalization'],
          quotes: [
            "The app feels cluttered — there's too much going on.",
            "I wish the app told me which protein goal is best for me, not just show a list.",
            "It doesn't feel like it accounts for my being vegetarian.",
          ],
        },
        {
          h: 'MaxDiff survey',
          question: 'Of all the things we could build — which features actually move the needle?',
          summary: 'To prioritize the features that actually matter, we ran a Maximum Difference (MaxDiff) survey with 38 participants — surfacing the most and least important features from forced-choice trade-offs. The feature pool was drawn from competitive analysis, sentiment analysis, and usability testing.',
          participants: '38 participants',
          method: 'Forced-choice trade-offs · OpinionX',
          images: [
            { src: 'assets/best-worst-features-ranked.png', cap: 'Feature priorities ranked by Best/Worst score across 38 participants.' },
            { src: 'assets/best-worst-rank-chart.png', cap: 'Most important and least important features (all age groups).' },
          ],
          top: [
            'Evidence-based nutrition guidance',
            'Personalized goals',
            'Custom food entry and portion tracking',
            'Flexible food logging (by meal/time)',
          ],
          low: [
            'Gamification elements (badges, streaks)',
            'Social sharing features',
          ],
          implication: "We focused the redesign on logging, personalized goals, and evidence-based guidance — not on gamification or social features.",
        },
        {
          h: 'Priority matrix',
          question: "Which of the winning features should we build first?",
          summary: 'We plotted the MaxDiff results against implementation effort to decide what to build first. Features in the high-value / low-effort and high-value / high-effort quadrants made the cut for prototyping.',
          image: 'assets/priority-matrix.png',
          imageCap: 'Value-vs-effort matrix.',
          quadrants: [
            { label: 'High value · Low effort', tag: 'Build first', items: ['Barcode scanner'], highlight: true },
            { label: 'High value · High effort', tag: 'Build next', items: ['Personalized goals', 'Custom foods', 'Progress dashboard'], highlight: true },
            { label: 'Low value · Low effort', tag: 'Consider later', items: ['Light badging on streaks'] },
            { label: 'Low value · High effort', tag: 'Skip', items: ['Social feed', 'Public sharing'] },
          ],
          implication: 'We used the priority matrix to focus on high-impact, low-effort features, ensuring the redesign addressed core usability gaps without overcomplicating the experience.',
        },
      ],
      keyFindings: {
        intro: 'Across competitive analysis, user sentiment, usability testing, and feature prioritization, three findings stood out:',
        items: [
          { h: 'Generic goals fell flat', p: 'Users wanted goals that fit their own routines and preferences.' },
          { h: 'There was no way to log meals', p: 'Users needed a quick, flexible way to track what they ate — the original app had none.' },
          { h: 'Progress was hard to see', p: 'Users needed clear feedback to stay on track.' },
        ],
        coda: 'These three findings defined what the redesign had to deliver.',
      },
    },

    // Design — full writeup with three decisions
    design: {
      optionA: true,
      intro: {
        lede: 'Research revealed three major barriers preventing users from building consistent habits. The redesign focused on three matching design directions.',
        beforeAfter: {
          beforeOnly: true,
          intro: 'Where MyPlate started. Three gaps research surfaced — each answered by a decision below.',
          pairs: [
            {
              area: 'Food logging',
              beforeAbsence: 'No logging existed',
              beforeNote: 'The original app gave users no way to record what they ate.',
              after: 'assets/meal-based-logging.png',
              afterLabel: 'Redesigned meal logging',
              afterAspect: '874 / 1778',
              problem: 'No way to log a meal at all.',
              fix: 'Redesign: log by meal, camera, search, or custom entry.',
            },
            {
              area: 'Goal setting',
              before: 'assets/original-goal-setup.png',
              beforeLabel: 'Original MyPlate — Set Simple Goals',
              beforeAspect: '874 / 1778',
              after: 'assets/personalized-goals.mp4',
              afterLabel: 'Redesigned guided goal flow',
              afterAspect: '534 / 1080',
              problem: 'A generic list with no guidance on what fit the user.',
              fix: 'Redesign: a three-step flow built around personal motivation.',
            },
            {
              area: 'Progress',
              before: 'assets/original-progress.png',
              beforeLabel: 'Original MyPlate — weekly progress',
              beforeAspect: '874 / 1778',
              after: 'assets/weekly-dashboard.png',
              afterLabel: 'Redesigned weekly progress',
              afterAspect: '936 / 2752',
              problem: 'Only a weekly summary, no daily or monthly view.',
              fix: 'Redesign: daily, weekly, and monthly feedback you can act on.',
            },
          ],
        },
      },
      decisions: [
        {
          n: '01',
          title: 'Flexible food logging',
          insight: 'Users needed simple ways to log what they actually ate.',
          decision: 'Design a flexible logging experience that reduces friction.',
          solutionIntro: 'The redesigned food logging experience let users log meals using several methods.',
          featuresLayout: 'gallery',
          galleryCols: 2,
          features: [
            {
              h: 'Meal-based logging',
              body: 'Users began by selecting the meal they wanted to log: breakfast, lunch, dinner, or snacks.',
              image: 'assets/meal-based-logging.png',
              imageLabel: 'Meal-based logging',
              mediaAspect: '874 / 1778',
            },
            {
              h: 'Camera scan',
              body: 'Users could also scan food items using the camera to speed up logging.',
              image: 'assets/camera-scan.webp',
              imageLabel: 'Camera scan — capturing pancakes',
              mediaAspect: '437 / 889',
            },
            {
              h: 'Search and ingredient selection',
              body: 'Users could search a database of common foods and quickly add them to their meal.',
              image: 'assets/search-ingredient-selection.png',
              imageLabel: 'Search and ingredient selection',
              mediaAspect: '874 / 2440',
            },
            {
              h: 'Custom food entry',
              body: 'Users could add foods that are not in the system by entering basic nutritional information.',
              image: 'assets/custom-food-entry.png',
              imageLabel: 'Custom food entry',
              mediaAspect: '874 / 2442',
            },
          ],
          solutionCoda: 'This supported a wide range of eating behaviors: packaged foods, homemade meals, and culturally diverse diets.',
          outcome: [
            'Flexible logging allowed users to track meals in ways that matched their habits, reducing friction and encouraging consistent use.',
            'Supporting multiple input methods: search, scan, and custom entry made the experience adaptable to the way people actually eat.',
          ],
        },
        {
          n: '02',
          title: 'Personalized goals',
          insight: "Generic goals don't motivate behavior change.",
          decision: 'Create a guided goal-setting flow based on user motivations.',
          solutionIntro: 'The redesigned goal setup guided users through three steps.',
          steps: [
            { h: 'Choose a primary goal', body: 'Select or create a goal based on personal motivation.' },
            { h: 'Select food groups to focus on', body: 'Focus on what matters most.' },
            { h: 'Choose a tracking method', body: 'Track by meals, servings, days, or simple yes/no.' },
          ],
          gif: 'assets/personalized-goals.mp4',
          gifLabel: 'Goal-setup flow — prototype',
          outcome: 'The flow enabled users to create more relevant, personalized goals, reducing confusion and making it easier to get started.',
        },
        {
          n: '03',
          title: 'Progress dashboard',
          insight: "Users can't improve what they can't see.",
          decision: 'Design a multi-level progress system across daily, weekly, and monthly views.',
          solutionIntro: 'The redesigned progress dashboard provided immediate feedback, revealed patterns, and reinforced long-term progress.',
          featuresLayout: 'gallery',
          features: [
            {
              eyebrow: 'Daily',
              h: 'Immediate feedback',
              body: 'Helped users understand how their food intake aligned with their goals, and identify gaps to adjust behavior within the same day.',
              image: 'assets/daily-dashboard.png',
              imageLabel: 'Daily progress view',
              mediaAspect: '936 / 2672',
            },
            {
              eyebrow: 'Weekly',
              h: 'Habit formation',
              body: 'Surfaced patterns and consistency in eating habits, helping users recognize and improve their routines over time.',
              image: 'assets/weekly-dashboard.png',
              imageLabel: 'Weekly progress view',
              mediaAspect: '936 / 2752',
            },
            {
              eyebrow: 'Monthly',
              h: 'Long-term improvement',
              body: 'Showed long-term progress and reinforced behavior change by highlighting cumulative improvement.',
              image: 'assets/monthly-dashboard.png',
              imageLabel: 'Monthly progress view',
              mediaAspect: '936 / 2670',
            },
          ],
          outcomeIntro: 'Users could:',
          outcomeList: [
            'Understand progress at a glance',
            'Identify patterns',
            'Stay motivated through feedback',
          ],
          outcome: 'Progress became something users could see and act on, not just data they logged.',
        },
      ],
      closing: 'Together, these changes created a cohesive system that supported users from goal setting to daily action and long-term progress.',
    },

    testing: {
      eyebrow: '',
      h: 'Closing the loop: concept testing the redesign',
      intro: 'To validate the redesign, I concept-tested the three flows with 6 participants: first-click, comprehension, and ease (SEQ/SUS). Every screen was understood, and ease cleared “easy,” while testing surfaced two specific issues I’d carry into the next round.',
      method: [
        { k: 'Method', v: 'Concept test, think-aloud' },
        { k: 'Participants', v: '6' },
        { k: 'Stimulus', v: 'Static hi-fi screens' },
        { k: 'Measured', v: 'First-click · comprehension · SEQ · SUS' },
      ],
      metrics: [
        { num: '6', unit: '/6', label: 'understood every screen' },
        { num: '5.0', unit: '/7', label: 'avg. perceived ease (SEQ)' },
        { num: '77.5', unit: '', label: 'SUS of the concept' },
        { num: '2', unit: '', label: 'problems to fix' },
      ],
      findings: [
        {
          tag: 'Validated', kind: 'val', area: '01 · Logging',
          h: 'People found the entry point on instinct',
          body: 'Asked where they’d tap to record a meal, **5 of 6 went straight to the meal selector**. Everyone read the screen’s purpose, and adding an item was described as “pretty straightforward.”\n\n',
          quote: 'As I’m under the Food log, I’d click the icon that says Dinner.',
        },
        {
          tag: 'Iterate', kind: 'fix', area: '02 · Goals',
          h: 'The tracking-method step needs work',
          body: 'The goal’s intent landed, but the final step, choosing how to track, **confused 2 of 6**; the options’ order and meaning weren’t self-evident. One participant also wanted to set more than one goal.\n**Next: reorder and relabel the options, and allow multiple goals.**\n\n',
          quote: 'I don’t know. It’s confusing. Days should be at the top, followed by Meals, then Servings.',
        },
        {
          tag: 'Validated', kind: 'val', area: '03 · Progress',
          h: 'Progress was read, and acted on',
          body: 'The clearest flow (5.3/7). Shown the dashboard at “3 p.m.,” people didn’t just read it, they named a next step (“plan a lighter dinner”). The gap: users wanted to know whether their numbers were healthy.\n**Next: add reference ranges so the data reads as good or off-track.**\n\n',
          quote: 'I ingest 3000 calories one day… is this too much? If we’re not explained this data, it’s useless.',
        },
      ],
      takeaway: 'The redesign communicates: every screen was understood and ease cleared “easy.” The two problems it surfaced lead the next iteration, and the success targets (task completion, SUS ≥ 80) wait on an interactive usability test that re-runs the original study for a true before/after.',
    },

    impact: {
      intro: 'The redesigned experience is expected to improve clarity, reduce friction, and increase motivation across key user actions.',
      improvements: [
        'Simplifies goal setup through guided, step-by-step flows',
        'Reduces friction in food logging with multiple input methods',
        'Makes progress visible and actionable through layered dashboards',
      ],
      bridge: 'These improvements are expected to positively impact engagement and consistency:',
      outcomes: [
        'Increased food logging adoption through flexible input methods',
        'Higher goal completion rates through personalized goal setting',
        'Improved daily engagement through clear progress visibility',
      ],
      coda: 'These are targets to validate, not measured results. The baselines are real — they come from round-one usability testing — and the post-redesign numbers are the next step.',
      targets: {
        label: 'How success would be measured',
        intro: 'Each row pairs a real baseline from round-one usability testing with the target the redesign aims for. The targets are hypotheses to test, not outcomes already achieved.',
        rows: [
          { metric: 'System Usability Score', baseline: '74.5', baselineLabel: 'Fair', target: '≥ 80', targetLabel: 'Good', note: 'Move from “fair” into the range users rate as genuinely easy to use.' },
          { metric: 'Core-task completion', baseline: '60%', baselineLabel: '3 of 5 on the habits quiz', target: '≥ 90%', targetLabel: 'Goal', note: 'Close the 40% task-failure rate that defined the original problem.' },
          { metric: 'Goal-setup ease', baseline: 'Low', baselineLabel: 'Users unsure which goal fit them', target: 'SEQ ≥ 5.5 / 7', targetLabel: 'Ease', note: 'A guided, motivation-based flow replaces a generic list of options.' },
        ],
      },
    },

    reflection: {
      lead: 'Behavior change is a design problem, not just a usability one.',
      tension: "Our research sample skewed younger and more tech-fluent than MyPlate's real audience. Through its ties to federal nutrition programs, that audience spans a far wider range of ages and incomes. Anyone can take part in testing; this round simply reached mostly people like us. The redesign solves the friction we saw. But before calling any flow ready, I'd want a second round that deliberately broadens the sample to older and lower-income users. Only then is the design validated for the whole audience, not just the part we reached. Research is only as honest as its sample.",
      learned: [
        'Motivation has to be designed in, not bolted on',
        'Flexible inputs beat strict ones',
        "A clean method doesn't fix an uneven sample",
      ],
      next: [
        'Re-testing with a broader, more representative sample',
        'Adaptive goal recommendations',
        'Habit-based notifications at decision moments',
      ],
      closing: '\n\nMyPlate moved from a passive information tool to an active habit system, a system designed to support habits, not just inform them.',
    },
  },

  {
    id: 'cerave',
    num: '04',
    title: 'CeraVe',
    shortTitle: 'CeraVe: Information architecture & product discovery',
    oneLiner: "Redesigning CeraVe's information architecture and product discovery.",
    headline: "Simpler navigation, clearer paths through a large skincare ecosystem.",
    sub: "Designing a clearer, more navigable skincare site for confident product discovery.",
    category: '',
    tags: 'Information Architecture · UX Research · Content Strategy · Product Design',
    year: '2024',
    banner: 'assets/cerave-hero.png',
    cardImage: '',

    meta: {
      team: 'Solo',
      duration: '4 months',
      tools: 'Figma, Proven by Users, Google Sheets',
      myRole: 'Heuristic evaluation · Content inventory · Cognitive walkthrough · Tree testing · Usability testing · IA redesign',
    },

    tldr: {
      challenge: "CeraVe had the content of a great skincare site; it just wasn't structured like one. In tree testing, **90% missed the cleanser quiz**, and **none located ingredient information**.",
      solution: 'An IA redesign that gives browsing, learning, and deciding each their own clear path.',
      solutionList: [
        'A top-level ingredient education hub',
        'An outcome-oriented quiz hub',
        'Non-overlapping ways to browse: product type, concern, skin type, ingredient',
        'A simpler, more scannable product-page hierarchy',
      ],
      impact: [],
      impactSummary: "The redesigned IA turned the site into a **connected system**: decision-support tools surfaced when needed, ingredient content became discoverable, and product pages became scannable.",
    },

    myRole: {
      title: 'Sole UX Designer',
      copy: "I led the evaluation and redesign of CeraVe's information architecture and product discovery.",
      bullets: [
        'Audited the IA through heuristic evaluation, content inventory, and walkthrough',
        'Ran tree testing and a usability session to find where the structure broke down',
        'Restructured the sitemap to give browsing, learning, and decision-support their own homes',
        'Defined a simpler product-page hierarchy for easier scanning and comparison',
      ],
    },

    overview: "CeraVe is a dermatologist-backed skincare brand trusted for the credibility of its products. But that trust didn't translate to confidence on the site. The experience that should have made expertise easy to act on instead made it hard to navigate.\n\nThis project rebuilt CeraVe's information architecture around how users actually discover, compare, and decide between products.",

    problem: {
      statement: "CeraVe's product range had outgrown its site structure. New categories, content, and tools had been layered onto an architecture built for a smaller catalog, and the navigation now competed with itself.",
      barriersIntro: 'Users ran into:',
      barriers: [
        'Dead ends when a category didn’t lead where expected',
        'Quizzes and ingredient guides they couldn’t find mid-decision',
        'Product pages too dense to scan or compare',
        'No way to predict where a product would live',
        'The same thing labeled differently across sections',
      ],
      coda: 'As a result, users struggled to predict where products belonged, locate helpful tools, and confidently compare products.',
    },

    research: {
      methodsIntro: "To understand where the experience was breaking down, I evaluated the site’s navigation, content structure, and product discovery flows through a combination of usability and information architecture methods.\n\nClick any method to see what I did and what I found.",
      note: "CeraVe revised its navigation more than once during this project. The content inventory and tree test evaluate the earlier structure (Version 1), the version this redesign targets. The heuristic evaluation, cognitive walkthrough, and usability test assessed CeraVe's interim redesign (Version 2), where the same findability problems recurred. That recurrence is strong evidence that the issue was structural, not cosmetic. The live site has since changed again, so this case study reflects CeraVe as it existed during the research.",
      methods: [
        {
          h: 'Content inventory',
          question: "What's on the site, and where does it live?",
          version: 'Earlier version · V1',
          summary: 'I mapped the website pages, navigation entries, and decision-support tools, capturing labels, locations, and overlaps.',
          findings: [
            'Quizzes were duplicated, and one path led to the wrong page',
            'Ingredient information was buried inside the blog',
            'One quiz had two different names',
            'Sections looked inconsistent with each other',
            'Bestsellers couldn’t be filtered by product type',
          ],
          links: [
            { text: 'Full content inventory', href: 'assets/cerave-content-inventory.pdf', format: 'PDF' },
          ],
        },
        {
          h: 'Tree testing',
          question: 'Can users find what they need in the existing structure?',
          version: 'Earlier version · V1',
          summary: 'I ran tree-testing tasks on the live sitemap to measure success, directness, and time, testing the structure with no visual or content cues.',
          findings: [
            '90% of users failed to locate the Facial Cleanser quiz',
            '80% reached the skincare solution quiz, but only through indirect paths, succeeding without ever recognizing the intended route',
            '0% successfully found ingredient information',
          ],
          image: 'assets/cerave-tree-test-round1.png',
          imageCap: 'Round 1 results (Proven by Users). The Facial Cleanser quiz failed for 90% of users; ingredient information for 100%.',
        },
        {
          h: 'Heuristic evaluation',
          question: 'Where does the site violate established usability principles?',
          version: 'Interim redesign · V2',
          summary: "I scored the desktop site against Nielsen's 10 usability heuristics, rating each issue for severity and frequency.",
          findings: [
            'I logged 52 usability issues across navigation, content structure, and product pages',
            'Consistency and standards was the worst category: 17 violations, more than any other',
            'Quizzes, filters, and ingredient content scored lowest on visibility and recognition',
          ],
          links: [
            { text: 'Full heuristic evaluation', href: 'assets/cerave-heuristic-evaluation.pdf', format: 'PDF' },
          ],
        },
        {
          h: 'Cognitive walkthrough',
          question: "Where do users' mental models break during real shopping tasks?",
          version: 'Interim redesign · V2',
          summary: "I walked through three core tasks step-by-step: buying the Daily Moisturizing Lotion, completing the Skincare Solution Finder quiz, and comparing two cleansers, applying Lewis & Rieman's four questions at each action, and rating every breakdown for severity.",
          findings: [
            'The “Buy Online” label set the wrong expectation: it implied checkout on CeraVe but redirected users to outside retailers (severity 3)',
            'The Skincare Solution Finder quiz was buried on the homepage, easy to scroll past entirely (severity 3)',
            'Quiz results overwhelmed users with too many recommended products to act on (severity 3)',
            'In the comparison view, ingredient details sat far from the ingredient list, making side-by-side reading hard (severity 1)',
          ],
          links: [
            { text: 'Full cognitive walkthrough', href: 'assets/cerave-cognitive-walkthrough.pdf', format: 'PDF' },
          ],
        },
        {
          h: 'Usability testing',
          question: 'How do real users experience the site while completing core tasks?',
          version: 'Interim redesign · V2',
          summary: 'I ran moderated remote sessions with five participants: think-aloud, three core tasks, and ASQ plus SUS ratings to see where confidence held and where it broke.',
          findings: [
            'Participants found specific products easily through search and the nav bar; direct lookup wasn’t the problem',
            '4 of 5 abandoned the skincare quiz; they expected to filter by concern, not work through a multi-step flow',
            '3 of 5 never found the comparison tool; the Compare button was too low-visibility to notice',
            'The site scored 54.5 on the SUS, well below the 68 benchmark',
          ],
        },
        {
          h: 'Tree testing · round 2',
          question: 'Does the redesigned structure actually resolve the breakdowns?',
          version: 'Redesigned sitemap · validation',
          summary: 'I re-ran the original tree-testing tasks on the proposed sitemap with 10 testers, to check whether the new structure resolved the breakdowns the first round exposed.',
          findings: [
            'Ingredient information: 0% → 70% found it; the V1 total failure resolved',
            'Facial Cleanser quiz: ~10% → 40% found it; improved, still the weakest task',
            'The skincare quiz now succeeds directly (60% direct), not only through indirect paths',
            '6 of 8 tasks cleared 70% success; baby-care and sensitive-skin were near-perfect',
            'Directness is the remaining gap: several tasks land correctly but by longer routes',
          ],
        },
      ],
      keyFindings: {
        intro: 'Across two versions of the site, five methods told the same story: it worked for people who already knew what they wanted, and failed everyone trying to decide. A sixth method (a second tree test) confirmed the redesign answered it.',
        items: [
          { h: 'Search worked; structure didn’t', p: 'Users found known products easily, but discovery, decision-support, and comparison all broke down. The structure only held up when people already knew exactly what to look for.' },
          { h: 'The tools meant to help were the hardest to find', p: 'Quizzes, ingredient content, and comparison were buried. 90% missed the cleanser quiz, 0% found ingredient information, and 4 of 5 gave up on the quiz when they did reach it.' },
          { h: 'The structure competed with itself', p: 'Duplicate sections and inconsistent labels put the same content in several places under several names, so users could never predict where to look.' },
        ],
        coda: 'The problem wasn’t missing content. It was an information architecture that couldn’t keep up as the catalog and its tools grew.',
      },
    },

    design: {
      intro: {
        lede: 'Each finding pointed to a structural fix. The redesign came down to three moves, most of them visible in the proposed sitemap below.',
        beforeImage: 'assets/cerave-sitemap-before.svg',
        beforeCap: 'The original V1 structure — six top-level sections, with quizzes siloed and ingredient content buried under Skincare 101.',
        image: 'assets/cerave-sitemap-proposed.svg',
        imageCap: 'The proposed sitemap. New sections (N) give ingredients and decision-support their own homes; redundant entries (R) are removed.',
      },
      decisions: [
        {
          n: '01',
          title: 'Merged the quizzes into one hub',
          insight: 'The quizzes were buried and split by concern, so finding help meant already knowing what was wrong.',
          decision: 'Merge the separate quizzes into one top-level hub, named for the outcome people actually want.',
          solutionIntro: 'I merged the five separate quizzes into one hub, “Find your perfect skincare routine.”',
          detail: {
            image: 'assets/cerave-sitemap-detail-quizhub.png',
            cap: 'Detail of the proposed sitemap: five scattered quizzes (marked R) collapse into one top-level “Find your perfect skincare routine” hub.',
          },
          outcome: 'The tools that help people decide now sit where they look first.',
        },
        {
          n: '02',
          title: 'Made the structure predictable',
          insight: 'Duplicate sections and inconsistent labels meant users could never predict where a product lived.',
          decision: 'Cut the overlaps and give each way of browsing one clear place.',
          solutionIntro: 'Skincare now splits into four parallel facets (product type, concern, skin type, ingredient), duplicate entries were removed, and Baby and What’s new got their own front doors.',
          detail: {
            image: 'assets/cerave-sitemap-detail-skincare.png',
            cap: 'Detail of the proposed sitemap: Skincare splits into four parallel facets, and Baby (marked N) gets its own top-level front door.',
          },
          outcome: 'Users can predict where things live and switch between ways of browsing without collisions.',
        },
        {
          n: '03',
          title: 'Simplified the product page',
          insight: 'Product pages were dense, with 17 consistency violations flagged, and comparison was hard to find.',
          decision: 'Lead with the decisions users actually make, and surface comparison.',
          solutionIntro: 'The product-page hierarchy is being rebuilt to open with what it’s for, who it’s for, and what’s in it, with comparison made visible. This is the layer I’m building now.',
          gif: '',
          gifLabel: 'Redesigned product-page hierarchy (in progress)',
          outcome: 'Users will be able to scan, compare, and decide without wading through dense copy.',
        },
      ],
      closing: 'Together, these moves turn a fragmented site into a connected system, where browsing, learning, and deciding reinforce each other instead of competing.',
    },

    impact: {
      intro: 'The redesign turns a fragmented site into a connected system, where browsing, learning, and deciding support each other instead of competing.',
      improvements: [
        'Quizzes and ingredient content sit at the top level, where users look first',
        'No more duplicate sections or mismatched labels, so products are easy to predict',
        'A simpler product page (in progress) leads with what users need to decide',
      ],
      outcomes: [
        'Users can find a product without backtracking',
        'Ingredient information is easy to discover',
        'Comparing products feels guided, not fragmented',
      ],
      coda: 'Re-testing measured the gains directly (10 testers, the same tasks run against V1): ingredient information went from 0% found to 70%, the cleanser quiz from ~10% to 40%, and 6 of 8 tasks cleared 70% success. Directness is now the gap to close, not findability.',
    },

    reflection: {
      lead: 'This project reinforced how strongly information architecture shapes user confidence.',
      tension: "A second round of tree testing validated the core bet: success rose across nearly every task, and both V1 breakdowns (the missed cleanser quiz and the unreachable ingredient content) resolved. What it also surfaced is that findability and directness are different problems: several tasks now succeed but by indirect routes, so the next iteration is about sharpening labels, not restructuring.",
      learned: [
        'Even helpful content becomes difficult to use when navigation feels inconsistent or unpredictable',
        'IA is invisible until it breaks; then it shapes every interaction',
        'Tree testing surfaces structural breakdowns that visual review and heuristic evaluation alone cannot',
      ],
      next: [
        'Sharpen the labels behind the low-directness tasks (cleanser quiz, hyaluronic acid) and re-test',
        'Extend the IA system to mobile navigation and search',
        'Complete the product-page hierarchy and comparison flows on top of the new structure',
      ],
      closing: 'The redesign shifted CeraVe from a content-rich but confusing site into a predictable, navigable site that shoppers can trust.',
    },
  },

  {
    id: 'tandem',
    num: '05',
    title: 'Tandem',
    shortTitle: 'Tandem: AI for parent–teacher alignment',
    oneLiner: 'An AI copilot that helps teachers and parents read a child\u2019s development through one shared lens.',
    headline: 'An AI copilot that turns classroom observations into conversations parents understand.',
    sub: 'Designing a responsible AI tool that helps teachers and parents align on one shared picture of a child.',
    category: '',
    tags: 'Product Design \u00b7 AI Products \u00b7 UX Research \u00b7 0\u2011to\u20111',
    year: '2026',
    banner: 'assets/tandem-01-intro.svg',
    cardImage: '',

    meta: {
      team: 'Team of 5',
      duration: '~5 weeks',
      tools: 'Figma, Figma Make, ChatGPT, Claude',
      myRole: 'Product Design · Research Synthesis · AI Prototyping · AI Heuristic & Risk Evaluation',
    },

    tldr: {
      challenge: 'Parents and elementary teachers meet for about **40 minutes a year**. In that gap, brief feedback by teachers gets misread, parents feel blindsided, and small concerns harden into anxiety before anyone aligns.',
      solution: 'Tandem is an AI copilot that helps teachers turn structured classroom observations into warm, plain-language messages, then helps both sides build a shared plan.\n\nThe teacher stays in control; the AI never diagnoses.\n\n',
      solutionList: [
        'A guided observe \u2192 communicate \u2192 act journey',
        'AI that translates \u201cteacher-speak\u201d into parent-friendly language',
        'A transparency panel showing how each message was built',
        'A collaborative, editable action plan split across home and school',
      ],
      impact: [],
      impactSummary: 'Tandem reframes parent\u2013teacher feedback from a twice-a-year verdict into an **ongoing, low-stakes partnership** with the teacher\u2019s judgment, not the model\u2019s, always in the loop.',
    },

    myRole: {
      title: 'Product Designer',
      copy: 'Tandem was a graduate team project for the AI Experience Design course, a brief to design a responsible AI-enabled EdTech concept end-to-end.\n\nI worked across research, prototyping, and evaluation; prototyping the experience with AI tools and leading the AI heuristic and risk review.\n\n',
      bullets: [
        'Synthesized formative research from interviews and six peer-reviewed sources into the core insights',
        'Prototyped the experience with AI tools \u2014 designing one of five candidate flows the team reviewed before converging on the final journey',
        'Led the AI-assisted heuristic & risk evaluation against Nielsen\u2019s heuristics plus AI-specific criteria (transparency, controllability, bias, over-reliance)',
        'Owned the ethical-risk analysis for handling sensitive information about children',
      ],
      footnote: '\n\nBuilt with a five-person team, with research, prototyping, and evaluation shared across the group. The synthesis and writing here are my own.',
    },

    overview: 'Teachers and parents both care deeply about the same child \u2014 but they see that child in two different worlds: the structured classroom and the busy home. With almost no time to compare notes, the two pictures rarely match up. Tandem set out to close that gap with an AI tool that helps \u2014 without ever trying to diagnose.',

    problem: {
      statement: 'Parents and teachers see the same child through two different lenses \u2014 home and school \u2014 with no reliable way to reconcile them.',
      barriersIntro: 'In practice, that shows up as:',
      barriers: [
        'Brief, fragmented feedback parents can\u2019t act on',
        'Pedagogical language that reads as alarming out of context',
        'Only ~40 minutes of teacher contact per family each year',
        'Concerns surfaced late, at conferences, when they already feel like problems',
        'Parents backfilling the gaps with anxiety-driven online searches',
      ],
      coda: 'The same child ends up living in the gap between two incomplete pictures.',
      causesIntro: 'Across interviews and the literature, three root causes kept surfacing:',
      causes: [
        { h: 'The translation barrier', p: 'Pedagogical terms like \u201cproductive struggle\u201d and routine report-card language trigger parent anxiety when they arrive without context \u2014 one teacher described a parent panicking over a standard \u201cfine motor skills\u201d note.' },
        { h: 'Reactive, not proactive', p: 'With ~40 minutes per family a year, communication is deferred until a concern becomes a \u201cproblem,\u201d so feedback lands as a high-stakes surprise instead of ongoing support.' },
        { h: 'Structural asymmetry', p: 'Teachers juggle 20+ unique family dynamics at once, while parents fill missing school context with unreliable informal sources \u2014 further eroding trust in the school\u2019s read.' },
      ],
    },

    research: {
      methodsIntro: 'We went wide on the problem before proposing anything \u2014 pairing AI-assisted research with human input. I used AI to summarize and cluster sources, then made the interpretation calls by hand.\n\nClick any method to see what we did and what we found.',
      methods: [
        {
          h: 'Literature review',
          question: 'What does the research say about why this gap persists?',
          summary: 'We reviewed six peer-reviewed sources on parent\u2013teacher communication and child development, using AI to summarize and compare them and human judgment to cluster the themes.',
          findings: [
            'Greater parent\u2013teacher perception gaps correlate with lower social and cognitive outcomes \u2014 the misalignment itself has measurable consequences (Jensen et al., 2025)',
            'The early-elementary years (ages 3\u201310) are a critical, high-impact window for getting alignment right',
            'Parents and teachers define \u201cengagement\u201d differently, so each can read the other as \u201cnot involved enough\u201d despite shared goals (Fisher & Baissberg, 2025)',
            'Low-stakes, ongoing communication reduces defensiveness more effectively than scheduled conferences (NAEYC)',
          ],
        },
        {
          h: 'Parent interview',
          question: 'How do parents actually get \u2014 and interpret \u2014 information about school?',
          summary: 'A semi-structured interview with a mother of two children (ages 5 and 7) in a private-school setting.',
          findings: [
            'Relies primarily on biannual conferences; contact outside them is reactive (email when needed)',
            'Has limited visibility into the child\u2019s social world at school',
            'Fills knowledge gaps with online searches and parenting forums \u2014 which can amplify anxiety',
            'Asked, unprompted, for structured question prompts to bring to conferences',
          ],
        },
        {
          h: 'Teacher interview',
          question: 'Where does communication break down from the teacher\u2019s side?',
          summary: 'A semi-structured interview with an early-elementary teacher about how they raise and frame concerns with families.',
          findings: [
            'Waiting until conferences makes parents feel blindsided; early, low-stakes notes reduce defensiveness',
            '\u201cProductive struggle\u201d and routine developmental comments are frequently misread as alarming',
            'Time is the hard constraint \u2014 roughly 40 minutes of direct contact per family, per year',
            'Parents have almost no window into the classroom\u2019s social landscape',
          ],
        },
      ],
      keyFindings: {
        intro: 'Across the literature and both interviews, three insights defined what the design had to do:',
        items: [
          { h: 'The gap is structural, not personal', p: 'Both adults care; they simply observe the child in different contexts with no structured way to reconcile their views. The fix is a shared framework, not more goodwill.' },
          { h: 'Translation is the bottleneck, not information', p: 'Teacher language triggers parent anxiety. The missing piece is a reliable bridge from professional terms to plain, supportive meaning.' },
          { h: 'Reactive timing makes feedback feel like a verdict', p: 'Saved up for conferences, feedback lands as a high-stakes surprise. Continuous, low-stakes contact is what lowers the temperature.' },
        ],
        coda: 'Those three findings pointed straight at a communication tool \u2014 one that translates, paces, and aligns.',
      },
    },

    design: {
      intro: {
        lede: 'Research pointed to three barriers. Each one became a design direction.',
        barriers: [
          'Teacher language triggers parent anxiety without context.',
          'Feedback is saved up for conferences, so it lands as a verdict.',
          'Teachers have minutes, not hours, per family.',
        ],
        directions: [
          'Make the AI translate, never diagnose.',
          'Break the exchange into small, low-stakes steps.',
          'Do the heavy lifting in a few structured inputs.',
        ],
      },
      decisions: [
        {
          n: '01',
          title: 'A guided observe \u2192 communicate \u2192 act journey',
          insight: 'Teachers are time-poor and parents feel blindsided because communication happens all at once, late, at conferences.',
          decision: 'Break the exchange into a calm, multi-step journey that mirrors how a concern actually unfolds.',
          solutionIntro: 'The flow moves through nine screens grouped into three acts \u2014 each one doing a single, low-stakes job.',
          steps: [
            { h: 'Observe', body: 'The teacher logs a specific, structured observation: the concern, frequency, examples, the child\u2019s strengths, and what they\u2019ve already tried.' },
            { h: 'Communicate', body: 'The AI drafts a parent-ready message; the teacher reviews it, adjusts the tone, and approves before anything sends.' },
            { h: 'Act', body: 'The parent adds their home perspective, and both sides build an editable action plan together.' },
          ],
          gif: 'assets/tandem-02-observe.svg',
          gifLabel: 'Tandem flow \u2014 the journey starts with one structured observation',
          outcome: [
            'The journey mirrors how a concern actually surfaces \u2014 notice, talk, act \u2014 so neither side has to carry the whole conversation at once.',
            'In testing, both our human evaluator and the synthetic teacher gravitated to the structure: it turned scattered classroom observations into something they could act on.',
          ],
        },
        {
          n: '02',
          title: 'AI as a copilot that translates, never diagnoses',
          insight: 'The core problem is translation \u2014 professional language triggers parent anxiety. And in a child-behavior context, an AI that sounds clinical is dangerous.',
          decision: 'Make the AI a copilot that turns structured teacher notes into warm, plain-language messages \u2014 with the teacher always in the loop and hard limits on diagnostic language.',
          solutionIntro: 'The copilot is the primary AI pattern; explainability and human-in-the-loop are the supporting patterns that make it trustworthy.',
          features: [
            { eyebrow: 'Explainability', h: '\u201cHow this message was created\u201d', body: 'A transparency panel surfaces the observations, frequency, and patterns the AI used to draft the message \u2014 so the teacher (and later the parent) can see the reasoning, not just the result.', image: 'assets/tandem-03-generating.svg', imageLabel: 'Transparency panel \u2014 how the message was created' },
            { eyebrow: 'Controllability', h: 'Tone control + regenerate', body: 'Teachers set a tone (warm, supportive) and regenerate when a draft misses their intent \u2014 the model proposes, the teacher decides.', image: 'assets/tandem-05-review-edit.svg', imageLabel: 'Tone selector and regenerate' },
            { eyebrow: 'Human-in-the-loop', h: 'Nothing sends unreviewed', body: 'Every AI draft is exactly that \u2014 a draft. The teacher edits and approves before a parent ever sees it.', image: 'assets/tandem-04-feedback-ready.svg', imageLabel: 'Teacher review & edit screen' },
            { eyebrow: 'The payoff', h: 'What the parent receives', body: 'The result lands as a warm, plain-language message \u2014 the translation the whole tool exists to make.', image: 'assets/tandem-06-parent-message.svg', imageLabel: 'The message, from the parent\u2019s side' },
          ],
          solutionCoda: 'A hard line ran through every screen: Tandem never diagnoses, labels, or names conditions. It translates into strength-based, developmentally grounded language and points to professionals when a concern is serious.',
          outcome: 'When a synthetic novice-teacher persona caught the AI defaulting to clinical terms like \u201cexecutive function,\u201d it confirmed the exact risk we were most worried about \u2014 and drove the transparency panel and a bias-aware language safeguard. The fix wasn\u2019t a smarter model; it was keeping the human in front of it.',
        },
        {
          n: '03',
          title: 'Turn one-way feedback into a shared plan',
          insight: 'Parents and teachers see the child in different worlds and define involvement differently \u2014 yet feedback today flows in only one direction.',
          decision: 'Give parents a structured way to add their home perspective, then co-create an editable action plan split across school and home.',
          solutionIntro: 'The final act makes the exchange two-way and ends in something concrete.',
          features: [
            { eyebrow: 'Two-way', h: 'A place for the parent\u2019s view', body: 'Parents add what they see at home through focused prompts \u2014 enough to balance the picture without turning into a form.', image: 'assets/tandem-07-parent-perspective.svg', imageLabel: 'Parent perspective prompts' },
            { eyebrow: 'Aligned action', h: 'A collaborative action plan', body: 'Teacher and parent co-create an editable plan split into school-side and home-side steps, so responsibility is shared and concrete.', image: 'assets/tandem-08-action-plan.svg', imageLabel: 'Collaborative action plan \u2014 school & home' },
            { eyebrow: 'Follow-through', h: 'Follow-ups & progress', body: 'Lightweight reminders and progress check-ins keep the plan alive past the first conversation.', image: 'assets/tandem-09-plan-ready.svg', imageLabel: 'Follow-up & progress tracking' },
          ],
          outcome: 'The exchange becomes collaborative instead of one-directional. Our human evaluator called the shared action plan the most valuable part \u2014 \u201cit focuses on solutions together instead of only pointing out problems.\u201d',
        },
      ],
      closing: 'Together, the three moves turn a twice-a-year verdict into a continuous, low-stakes loop \u2014 observe, translate, align \u2014 with the child, not the tool, at the center.',
    },

    impact: {
      intro: 'Tandem is a concept, but the design targets the specific breakdowns the research surfaced.',
      improvements: [
        'Translates pedagogical language into plain, supportive messages',
        'Replaces saved-up conferences with proactive, low-stakes touchpoints',
        'Shows its reasoning, so trust comes from transparency, not authority',
        'Keeps the teacher in control of every message',
        'Turns feedback into a shared, editable action plan',
      ],
      outcomes: [
        'Fewer blindsided, defensive parents',
        'Less teacher time lost to managing misinterpretation',
        'Earlier, calmer intervention before concerns escalate',
        'Parents positioned as partners, not obstacles',
      ],
      coda: 'These are intended outcomes, not measured ones. We evaluated the concept with three research-grounded synthetic personas, an AI-assisted heuristic & risk review, and a think-aloud with one teacher \u2014 useful for surfacing edge cases, but no substitute for real classrooms.',
      evalIntro: 'Because the tool was a concept, we stress-tested it with three research-grounded synthetic personas \u2014 built from our interviews and run as AI-simulated users. Each one surfaced a different, specific breakdown.',
      personas: [
        { name: 'Sarah', tag: 'The overwhelmed novice teacher', bio: 'First-year kindergarten teacher juggling 22 students and severe time poverty. Drafting a low-stakes note shouldn\u2019t cost her an evening.', surfaced: 'Caught the AI defaulting to clinical terms like \u201cexecutive function\u201d \u2014 language she\u2019d never send a parent. Confirmed the need for a bias-aware language safeguard and a mandatory teacher review.' },
        { name: 'David', tag: 'The impulsive, search-reliant parent', bio: 'Reacts to fragments of information \u2014 a routine \u201cfine motor skills\u201d note sends him Googling \u201cneurological conditions\u201d at midnight.', surfaced: 'Flagged that the privacy note appeared only after he\u2019d typed, and that concern options ordered worst-first anchored him to the scariest choice. Drove earlier consent and a least-to-most ordering.' },
        { name: 'Elena', tag: 'The skeptical, strategic parent', bio: 'Analytical software engineer who values data over opinions and is wary of generic feedback.', surfaced: 'Liked the collaborative tone but wanted to see how the AI reached its conclusions \u2014 reinforcing the case for visible reasoning and transparency.' },
      ],
    },

    reflection: {
      lead: 'In a tool about someone\u2019s child, the riskiest thing the AI can do is sound certain.',
      tension: 'Our evaluation leaned heavily on AI-simulated users. The synthetic personas surfaced real edge cases, but their reactions came out tidy and a little theatrical \u2014 and prompt wording alone could swing them from glowing to harsh. I treated their output as hypotheses, not findings, and grounded them against a real human walkthrough. The concept itself is unvalidated in a real classroom.',
      learned: [
        'The hardest part wasn\u2019t the AI\u2019s capability \u2014 it was its tone. The copilot had to translate without ever sounding like a diagnosis.',
        'Transparency and a visible human-in-the-loop did more for trust than raw accuracy did.',
        'When the AI critique told us to strip the teacher\u2019s input fields to save time, I pushed back \u2014 those fields were the source of the message\u2019s accuracy. We kept the structure and proposed optional templates instead.',
      ],
      next: [
        'Define evaluation prompts and a testing framework up front, so synthetic responses are comparable',
        'Bring real teachers and parents in early, not just at the end',
        'Build the bias-aware language safeguard as a real system rule, not a guideline',
      ],
      closing: 'Tandem didn\u2019t ship, but it changed how I design with AI: the model earns trust by staying a draft, not an authority.',
    },
  },
];

window.SITE = {
  name: 'Dhwani Parekh',
  role: 'Product Designer',
  tagline: 'I blend UX research, systems thinking, and AI-enhanced design to create thoughtful digital products.',
  status: 'Open to work',
  avatar: 'https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg',
  experience: [
    { org: 'TechVentures Inc.', role: 'UX Designer', dates: '2020 — Present' },
    { org: 'Meta', role: 'Junior UX Designer', dates: '2018 — 2020' },
    { org: 'InnovateNext', role: 'UX Intern', dates: '2017 — 2018' },
  ],
  skills: ['Framer', 'Webflow', 'Notion', 'Canva', 'Adobe', 'GitHub'],
  email: 'dhwani@example.com',
};
