export type StoryBlockInput = {
  type: "HEADING" | "TEXT" | "IMAGE" | "VIDEO";
  text?: string;
  mediaUrl?: string;
};

export type StoryInput = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImageUrl: string;
  status: "DRAFT" | "PUBLISHED";
  publishedAt?: string;
  author?: string;
  blocks: StoryBlockInput[];
};

export const stories: StoryInput[] = [
  {
    title:
      "AAE Foundation Supports 100 Female Students with Full University Scholarships in Akwa Ibom",

    slug:
      "aae-foundation-supports-100-female-students-with-full-university-scholarships-in-akwa-ibom",

    excerpt:
      "AAE Foundation has awarded 100 female students full university scholarships in Akwa Ibom, reinforcing its commitment to expanding access to education while supporting young women and entrepreneurs with financial opportunities.",

    category: "Education & Empowerment",

    coverImageUrl:
      "/images/aae-100-scholarships-cover.webp",

    status: "PUBLISHED",

    publishedAt: "2025-08-07T00:00:00.000Z",

    author: "AAE Tech Team",

    blocks: [
      {
        type: "TEXT",
        text:
          "The AAE Foundation, under the leadership of its Founder and CEO, Hon. Dr. Judith Mayen Ogbara, has strengthened its commitment to empowering women and girls through education and economic support.",
      },

      {
        type: "TEXT",
        text:
          "At a ceremony held in Ikot Okudom, Okon, Eket Local Government Area of Akwa Ibom State, the Foundation awarded 100 female students full university scholarships. The beneficiaries had successfully passed their JAMB and WAEC examinations, qualifying them for admission into higher institutions.",
      },

      {
        type: "HEADING",
        text: "Expanding access to tertiary education",
      },

      {
        type: "TEXT",
        text:
          "The scholarship initiative builds on the Foundation's previous efforts to expand access to tertiary education in the area. AAE Foundation had earlier purchased more than 500 JAMB forms for students within the community, helping to create access to university entrance examinations for disadvantaged young people.",
      },

      {
        type: "HEADING",
        text: "Supporting women beyond the classroom",
      },

      {
        type: "TEXT",
        text:
          "The Foundation's support also extended beyond education. Several female entrepreneurs received cash grants to support and grow their small businesses, while more than 50 promising young women received startup capital to launch new ventures and pursue their ambitions.",
      },

      {
        type: "TEXT",
        text:
          "Through these initiatives, the AAE Foundation continues to promote opportunities for girls and women through education, financial support, entrepreneurship, and access to pathways for personal and economic growth.",
      },

      {
  type: "IMAGE",
  mediaUrl: "/images/aae-100-scholarships-1.webp",
},
{
  type: "IMAGE",
  mediaUrl: "/images/aae-100-scholarships-2.webp",
},
{
  type: "IMAGE",
  mediaUrl: "/images/aae-100-scholarships-3.webp",
},

      {
        type: "TEXT",
        text:
          "The Foundation's interventions reflect its broader commitment to creating opportunities that enable individuals to develop their potential and contribute meaningfully to their communities and society.",
      },
    ],
  },
  {
  title:
    "Hon. Dr. (Mrs.) Judith Mayen Ogbara Celebrates Father’s 89th Birthday with Back-to-School Support for Over 300 Students in Eket Federal Constituency",

  slug:
    "judith-mayen-ogbara-celebrates-fathers-89th-birthday-with-back-to-school-support-for-over-300-students",

  excerpt:
    "Hon. Dr. (Mrs.) Judith Mayen Ogbara marked her father’s 89th birthday by supporting more than 300 students and pupils across the Eket Federal Constituency with Back-to-School items, combining a family milestone with a meaningful investment in education.",

  category: "Education & Community Support",

  // IMAGE 1 — Cover
  coverImageUrl:
    "/images/judith-back-to-school-cover.webp",

  status: "PUBLISHED",

  publishedAt: "2025-08-26T00:00:00.000Z",

  author: "AAE Tech Team",

  blocks: [
    {
      type: "TEXT",
      text:
        "In an inspiring show of compassion and commitment to community development, Hon. Dr. (Mrs.) Judith Mayen Ogbara marked her father’s 89th birthday by supporting more than 300 students and pupils across the Eket Federal Constituency with Back-to-School items.",
    },

    {
      type: "TEXT",
      text:
        "The initiative, held in celebration of her father, Lord U.D.U. Etuk, brought together families, students, and community leaders to honour a life of longevity and service while supporting the promise of education for a new generation.",
    },

    {
      type: "HEADING",
      text: "A celebration centred on giving",
    },

    {
      type: "TEXT",
      text:
        "The event went beyond a birthday celebration, reaffirming the values of giving, nurturing, and investing in future generations. Lord U.D.U. Etuk, a revered elder and statesman, has lived a life characterized by leadership, discipline, and community building, values that his daughter, Hon. Dr. Judith Ogbara, has consistently embodied through her career and humanitarian efforts.",
    },

    // IMAGE 2
    {
      type: "IMAGE",
      mediaUrl:
        "/images/judith-back-to-school-1.webp",
    },

    {
      type: "HEADING",
      text: "Investing in the next generation",
    },

    {
      type: "TEXT",
      text:
        "Speaking during the presentation, Hon. Dr. Ogbara emphasized that education remains one of the most powerful tools for empowerment. She described the gesture as a way of ensuring that young people, regardless of their background, have the opportunity to begin the school year with confidence, dignity, and the basic materials needed to thrive.",
    },

    // VIDEO
    {
      type: "VIDEO",
      mediaUrl:
        "/videos/judith-back-to-school.mp4",
    },

    {
      type: "TEXT",
      text:
        "According to her, investing in children’s education is not only a responsibility but also a lasting tribute to the principles her father has always stood for.",
    },

    // IMAGE 3
    {
      type: "IMAGE",
      mediaUrl:
        "/images/judith-back-to-school-2.webp",
    },

    {
      type: "TEXT",
      text:
        "Through the initiative, the celebration of Lord U.D.U. Etuk’s 89th birthday became an opportunity to extend practical support to students and families while reinforcing the importance of education, service, and community development.",
    },
  ],
},
{
  title:
    "AAE Foundation Marks International Day of the Girl Child with School Intervention in Eket, Akwa Ibom",

  slug:
    "aae-foundation-marks-international-day-of-the-girl-child-with-school-intervention-in-eket-akwa-ibom",

  excerpt:
    "The AAE Foundation marked the International Day of the Girl Child with an outreach across two secondary schools in Eket, Akwa Ibom, promoting hygiene, education, self-worth, and access to essential learning and personal-care supplies for adolescent girls.",

  category: "Girl Child & Education",

  // IMAGE 1 — Cover
  coverImageUrl:
    "/images/international-girl-child-day-cover.webp",

  status: "PUBLISHED",

  publishedAt: "2025-10-11T00:00:00.000Z",

  author: "AAE Tech Team",

  blocks: [
    {
      type: "TEXT",
      text:
        "The AAE Foundation joined the world in commemorating the International Day of the Girl Child, a day dedicated to recognizing girls’ rights and the unique challenges they face around the globe.",
    },

    {
      type: "TEXT",
      text:
        "This year’s theme, “Invest in Girls’ Rights: Our Leadership, Our Well-being”, reflects a call to action that aligns with the Foundation’s mission to create a world where every girl can thrive, lead, and live free from fear or discrimination.",
    },

    {
      type: "HEADING",
      text: "Creating opportunities for girls to thrive",
    },

    {
      type: "TEXT",
      text:
        "The Foundation reaffirmed its commitment to advocating for equal access to quality education, promoting the mental and physical well-being of young girls, protecting girls from violence, child marriage, and exploitation, and creating safe spaces where girls can lead, dream, and grow.",
    },

    {
      type: "TEXT",
      text:
        "The Foundation also used the occasion to celebrate the strength, resilience, courage, and aspirations of girls while calling on governments, communities, and individuals to invest in girls not simply as beneficiaries, but as agents of change.",
    },

    // IMAGE 2
    {
      type: "IMAGE",
      mediaUrl:
        "/images/international-girl-child-day-1.webp",
    },

    {
      type: "HEADING",
      text: "School intervention in Eket",
    },

    {
      type: "TEXT",
      text:
        "As part of the commemoration, the AAE Foundation carried out a school intervention in two secondary schools within Eket Local Government Area of Akwa Ibom State — Girl’s High School, Ikot Ibiok and Dominion International School, Ikot Okudom, Okon-Eket.",
    },

    // IMAGE 3
    {
      type: "IMAGE",
      mediaUrl:
        "/images/international-girl-child-day-2.webp",
    },

    {
      type: "TEXT",
      text:
        "The outreach focused on raising awareness about hygiene, the value of education, and the importance of building self-worth among adolescent girls. Through interactive sessions, the students were encouraged to prioritize their personal development, embrace education as a powerful tool for transformation, and maintain confidence in their identities.",
    },

    {
      type: "TEXT",
      text:
        "To support their health and academic needs, the Foundation distributed sanitary pads, tissue paper, and notebooks to the students — essential supplies aimed at promoting hygiene, dignity, and effective learning.",
    },

    // IMAGE 4
    {
      type: "IMAGE",
      mediaUrl:
        "/images/international-girl-child-day-3.webp",
    },

    {
      type: "TEXT",
      text:
        "The initiative reflects the AAE Foundation’s ongoing commitment to empowering the girl child, particularly in underserved communities, by providing knowledge, resources, and inspiration to help girls thrive.",
    },

    {
      type: "TEXT",
      text:
        "Through initiatives such as this, the Foundation continues to amplify girls’ voices, promote their rights, and support their ability to build the futures they deserve.",
    },
  ],
},
{
  title:
    "AAE Foundation Completes Skill Acquisition Programme, Equips 10 Women with Tools to Start Their Businesses",

  slug:
    "aae-foundation-completes-skill-acquisition-programme-equips-10-women-with-tools-to-start-their-businesses",

  excerpt:
    "AAE Foundation has completed a one-month skill acquisition programme for 10 women in beauty and makeup, equipping participants with practical skills and personal makeup kits to help them turn their training into sustainable business opportunities.",

  category: "Women & Youth Empowerment",

  // IMAGE 1 — Cover
  coverImageUrl:
    "/images/aae-skill-acquisition-cover.webp",

  status: "PUBLISHED",

  publishedAt: "2025-11-05T00:00:00.000Z",

  author: "AAE Tech Team",

  blocks: [
    {
      type: "TEXT",
      text:
        "The AAE Foundation has completed a one-month Skill Acquisition Programme designed to empower women and young ladies with practical skills in beauty and makeup, reinforcing the Foundation’s commitment to helping individuals build pathways toward economic independence.",
    },

    {
      type: "TEXT",
      text:
        "The programme officially commenced on 1 September 2025, with 10 women selected to participate in hands-on training focused on makeup and hairdressing. From the outset, the initiative was designed not only to provide practical skills but also to prepare participants with the tools needed to put those skills to work.",
    },

    {
      type: "HEADING",
      text: "From training to opportunity",
    },

    {
      type: "TEXT",
      text:
        "The AAE Foundation believes that empowerment goes beyond training. By equipping participants with practical knowledge and the resources required to begin working, the programme was designed to help the beneficiaries move from learning a skill to creating opportunities for themselves.",
    },

    // IMAGE 2
    {
      type: "IMAGE",
      mediaUrl:
        "/images/aae-skill-acquisition-1.webp",
    },

    {
      type: "TEXT",
      text:
        "Throughout the programme, the participants received hands-on training in beauty and makeup, gaining practical experience intended to prepare them for the realities of starting and building their own businesses.",
    },

    {
      type: "HEADING",
      text: "Completing the circle",
    },

    {
      type: "TEXT",
      text:
        "At the completion of the programme, the Foundation followed through on its commitment to equip the women with the essential tools needed to put their new skills into practice. Each participant received a personal Makeup Box to support the next stage of her journey.",
    },

    // IMAGE 3
    {
      type: "IMAGE",
      mediaUrl:
        "/images/aae-skill-acquisition-2.webp",
    },

    {
      type: "VIDEO",
      mediaUrl:
        "/videos/aae-skill-acquisition.mp4",
    },

    {
      type: "TEXT",
      text:
        "The presentation of the Makeup Boxes marked an important transition from training to practical opportunity, giving the beneficiaries resources they can use as they begin developing their businesses and working toward sustainable income.",
    },

    {
      type: "TEXT",
      text:
        "The Foundation encouraged the beneficiaries to make the most of the opportunity while reaffirming its commitment to doing more to support women and young people through skills development, empowerment, and practical economic opportunities.",
    },

    {
      type: "TEXT",
      text:
        "For the AAE Foundation, the programme represents more than a completed training session. It is part of a broader commitment to ensuring that empowerment is supported with the resources people need to take the next step.",
    },
  ],
},
{
  title:
    "AAE Foundation Urges Support for NGOs Accelerating Global Agenda 2030 at UN",

  slug:
    "aae-foundation-urges-support-for-ngos-accelerating-global-agenda-2030-at-un",

  excerpt:
    "At the United Nations in New York, Dr. Judith Mayen Ogbara, Founder of AAE Foundation, called for greater grant access for NGOs advancing the Global Agenda 2030 and urged stronger support for women's participation in politics and sustainable development.",

  category: "Advocacy & Partnerships",

  // IMAGE 1 — Cover
  coverImageUrl:
    "/images/aae-un-global-agenda-cover.webp",

  status: "PUBLISHED",

  publishedAt: "2025-12-19T00:00:00.000Z",

  author: "AAE Tech Team",

  blocks: [
    {
      type: "TEXT",
      text:
        "On 19 December 2025, Dr. Judith Mayen Ogbara, Founder of AAE Foundation, addressed development champions at the NGO Branch under the Global Organization of Sustainable Development Goals office of the United Nations Department of Economic and Social Affairs in New York.",
    },

    {
      type: "TEXT",
      text:
        "In her address, Dr. Ogbara advocated for increased access to grants for non-governmental organizations working to advance the Global Agenda 2030, highlighting the funding constraints faced by many organizations working to deliver sustainable development initiatives.",
    },

    {
      type: "HEADING",
      text: "Expanding access to funding for NGOs",
    },

    {
      type: "TEXT",
      text:
        "Dr. Ogbara called for streamlined grant opportunities that would enable NGOs and foundations to expand their work and contribute to progress in areas including poverty eradication, climate action, and equality.",
    },

    // IMAGE 2
    {
      type: "IMAGE",
      mediaUrl:
        "/images/aae-un-global-agenda-1.webp",
    },

    {
      type: "HEADING",
      text: "Advancing women's participation in leadership",
    },

    {
      type: "TEXT",
      text:
        "She also highlighted the importance of inclusive governance and appealed for greater women's participation in politics, emphasizing the need to create pathways for women to engage in decision-making spaces and amplify their voices.",
    },

    {
      type: "TEXT",
      text:
        "AAE Foundation reaffirmed its commitment to partnering with the United Nations and other stakeholders to advance sustainable development and support organizations working toward the Global Agenda 2030.",
    },

    {
      type: "HEADING",
      text: "Key requests presented",
    },

    {
      type: "TEXT",
      text:
        "The key requests presented by Dr. Ogbara focused on expanding opportunities for NGOs to access grants for Global Agenda 2030 programmes, increasing women's participation in politics, and supporting organizations driving sustainable development.",
    },
  ],
},
{
  title:
    "Eket Free Medical Outreach Provides Healthcare Support to Underserved Residents",

  slug:
    "eket-free-medical-outreach-provides-healthcare-support-to-underserved-residents",

  excerpt:
    "An Eket Free Medical Outreach provided free medical services to widows, teenage girls, and other underserved residents within Eket LGA, supporting access to basic healthcare, treatment, screening, and health education.",

  category: "Health & Community Development",

  // IMAGE 1 — Cover
  coverImageUrl:
    "/images/eket-free-medical-outreach-cover.webp",

  status: "PUBLISHED",

  publishedAt: "2026-01-02T00:00:00.000Z",

  author: "AAE Tech Team",

  blocks: [
    {
      type: "TEXT",
      text:
        "The Eket Free Medical Outreach was a humanitarian initiative organized by Paradise Mission for Widows and Teenage Girls, in collaboration with Hon. Dr. Judith Mayen Etuk-Ogbara.",
    },

    {
      type: "TEXT",
      text:
        "The outreach was designed to provide free medical services to widows, teenage girls, and other underserved residents within Eket Local Government Area, with the goal of improving access to basic healthcare and promoting healthier communities.",
    },

    {
      type: "HEADING",
      text: "Providing essential medical services",
    },

    {
      type: "TEXT",
      text:
        "Medical services provided during the programme included general health consultations, medical screenings, basic treatments, and health education facilitated by qualified healthcare professionals.",
    },

    // IMAGE 2
    {
      type: "IMAGE",
      mediaUrl:
        "/images/eket-free-medical-outreach-1.webp",
    },

    {
      type: "TEXT",
      text:
        "The initiative addressed the health needs of vulnerable populations, particularly widows and teenage girls who often face economic and social barriers to accessing healthcare.",
    },

    {
      type: "HEADING",
      text: "A collaborative effort for community wellbeing",
    },

    {
      type: "TEXT",
      text:
        "The support and collaboration of Hon. Dr. Judith Mayen Etuk-Ogbara played a significant role in mobilization, coordination, and ensuring the successful execution of the outreach.",
    },

    // IMAGE 3
    {
      type: "IMAGE",
      mediaUrl:
        "/images/eket-free-medical-outreach-2.webp",
    },

    {
      type: "TEXT",
      text:
        "The programme recorded an encouraging turnout, with many beneficiaries expressing gratitude for the free services and timely medical intervention received.",
    },

    // IMAGE 4
    {
      type: "IMAGE",
      mediaUrl:
        "/images/eket-free-medical-outreach-3.webp",
    },

    {
      type: "TEXT",
      text:
        "Beyond the medical services, participants also benefited from health awareness sessions that emphasized disease prevention, personal hygiene, and the importance of regular health check-ups.",
    },

    {
      type: "TEXT",
      text:
        "The outreach provided practical support to members of the community while highlighting the importance of accessible healthcare and continued attention to the needs of underserved populations.",
    },
  ],
},
{
  title: "AAE Foundation Celebrates Children’s Day 2026",
  slug: "aae-foundation-celebrates-childrens-day-2026",
  excerpt:
    "AAE Foundation celebrates Children’s Day 2026, reaffirming the importance of inclusion, quality education, protection, and opportunities for every Nigerian child.",
  category: "Children & Education",
  coverImageUrl: "/images/happy-childrens-day-2026.webp",
  status: "PUBLISHED",
  publishedAt: "2026-05-27T00:00:00.000Z",
  author: "AAE Tech Team",
  blocks: [
    {
      type: "TEXT",
      text:
        "Today, we celebrate the bright minds, beautiful dreams, and limitless potential of every child."
    },
    {
      type: "TEXT",
      text:
        "This year’s theme, “Future Now: Promoting Inclusion for Every Nigerian Child,” reminds us that every child deserves love, opportunities, quality education, protection, and a chance to shine regardless of background or ability."
    },
    {
      type: "TEXT",
      text:
        "Our children are not just the leaders of tomorrow… they are the FUTURE NOW."
    },
    {
      type: "TEXT",
      text:
        "Let’s continue to build a world where every child feels seen, heard, valued, and empowered to dream big."
    },
    {
      type: "TEXT",
      text:
        "Happy Children’s Day to all the amazing children out there!"
    },
  ],
},
{
  title:
    "NEW YORK: Citation Highlights Dr. Judith Mayen Etuk Ogbara’s Humanitarian Journey",

  slug:
    "new-york-citation-highlights-dr-judith-mayen-etuk-ogbaras-humanitarian-journey",

  excerpt:
    "A defining moment of Dr. Judith Mayen Etuk Ogbara’s recent humanitarian honour in New York was the presentation of an official citation highlighting her achievements, humanitarian contributions, and commitment to service.",

  category: "Humanitarian Recognition",

  coverImageUrl: "/images/new-york-citation-1.webp",

  status: "PUBLISHED",

  publishedAt: "2026-09-20T00:00:00.000Z",

  author: "AAE Tech Team",

  blocks: [
    {
      type: "TEXT",
      text:
        "A defining moment of the recent humanitarian honour bestowed on Dr. Judith Mayen Etuk Ogbara, Chairman of G4EP, was the presentation of the official citation documenting her humanitarian journey, achievements, and commitment to service.",
    },

    {
      type: "TEXT",
      text:
        "During the event in New York, the citation was read across several pages, highlighting the work, contributions, and service that preceded the recognition. The detailed presentation provided the audience with a broader context to the honour, capturing the journey and impact behind the recognition before it was formally presented.",
    },

    {
      type: "TEXT",
      text:
        "The citation served as a reflection of the work and dedication that culminated in the honour. Watch the full citation and presentation in the video above.",
    },

    {
      type: "IMAGE",
      mediaUrl: "/images/new-york-citation-2.webp",
    },

    {
      type: "IMAGE",
      mediaUrl: "/images/new-york-citation-3.webp",
    },

    {
      type: "VIDEO",
      mediaUrl: "/videos/new-york-citation-video.mp4",
    },
  ],
},
{
  title:
    "AAE Foundation Approves ₦25 Million for 2026/2027 Scholarship Scheme",

  slug:
    "aae-foundation-approves-25-million-for-2026-2027-scholarship-scheme",

  excerpt:
    "AAE Foundation approves ₦25 million for its 2026/2027 scholarship scheme, supporting deserving students and reaffirming its commitment to expanding access to education.",

  category: "Education & Scholarships",

  coverImageUrl: "/images/go-back-to-school-scholarship-1.webp",

  status: "PUBLISHED",

  publishedAt: "2026-09-26T00:00:00.000Z",

  author: "AAE Tech Team",

  blocks: [
    {
      type: "TEXT",
      text:
        "The Abasiama Affiong Etuk (AAE) Foundation has approved ₦25 million for its scholarship scheme for the 2026/2027 academic session, reaffirming its commitment to supporting access to education for deserving children and young people. The announcement was made on Saturday, 26 September 2026, during the Foundation’s 2026 Back-to-School Project, which provided educational support to pupils and students from primary and secondary schools.",
    },

    {
      type: "TEXT",
      text:
        "More than 50 beneficiaries received scholarships and other back-to-school materials during the programme. Speaking at the event, the Programme Coordinator, Prince Charles Edoho, disclosed that the Foundation has supported over 1,000 students across different levels of education, ranging from kindergarten to tertiary institutions, in various parts of the country.",
    },

    {
      type: "TEXT",
      text:
        "The newly approved ₦25 million scholarship allocation will be judiciously disbursed to deserving students for the 2026/2027 academic session, helping to ease the financial burden of education on beneficiary families. The Grand Patron of the AAE Foundation, Lord U.D.U. Etuk, also spoke at the event, highlighting the history and purpose of the Foundation, which was established in memory of his late wife, Mrs. Abasiama Affiong Etuk, by their children, led by their first daughter, Ambassador Dr. Mrs. Judith Mayen Etuk-Ogbara.",
    },

    {
      type: "TEXT",
      text:
        "He further emphasized the importance of collective responsibility in advancing society and encouraged beneficiaries to make judicious use of the opportunities provided to them and, in the future, extend similar support to others. The AAE Foundation continues to advance its humanitarian mission through educational support, healthcare interventions, skills acquisition, and other empowerment initiatives. At AAE Foundation, we believe that education is an investment in people, families, and the future.",
    },

    {
      type: "IMAGE",
      mediaUrl: "/images/go-back-to-school-scholarship-2.webp",
    },

    {
      type: "IMAGE",
      mediaUrl: "/images/go-back-to-school-scholarship-3.webp",
    },

    {
      type: "IMAGE",
      mediaUrl: "/images/go-back-to-school-scholarship-4.webp",
    },
  ],
},
];