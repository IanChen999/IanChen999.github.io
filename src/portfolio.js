/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ian Chen",
  title: "Hi all, I'm Ian",
  subTitle: emoji(
    "A passionate Development Engineer in Data/AI direction 🧑‍💻 having an experience of building Machine Learning models and Mobile applications with Python / R / Java / Nodejs / Swift and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/https://drive.google.com/file/d/1EqD-AX6Bab7lCmXystZ3AahSbBd4O5iO/view?usp=share_link/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IanChen999",
  linkedin: "https://www.linkedin.com/in/ian-chen-716197164/",
  gmail: "yijunchen0402@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100008474466816&mibextid=LQQJ4d",
  instagram: "https://www.instagram.com/ianyjyj/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVELOPMENT/TECH ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK TO CREATE SOCIAL IMPACT",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Reseach on Impactful Machine Learning techniques on environment/healthcare/business"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Streamlit"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/BerkeleyLogo.png"),
      subHeader: "Master of Development Engineering in Data/AI for Social Impact",
      duration: "August 2021 - December 2022",
      desc: "Participated in the research of methane/wildfire robotic sensor detections, supervised by Prof. Alice M. Agogino.",
      descBullets: [
        "Classified methane leakage video dataset and performed leak volume prediction.",
        "Designed a framework for optimizing robotic sensors as a preliminary step towards realizing the responsiveness of robots in disaster circumstances."
      ]
    },
    {
      schoolName: "University of Waterloo",
      logo: require("./assets/images/WaterlooIcon.png"),
      subHeader: "Bachelor of Science in Computer Science and Statistics, Honors Co-op Degree",
      duration: "September 2017 - August 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, Statistical Forcasting, Machine Learning...",
      descBullets: ["2nd Place in HackTheNorth hackathon 2019"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ML & Cloud Computing", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile Developing",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Amazon.com",
      companylogo: require("./assets/images/AmazonLogo.png"),
      date: "May 2022 – Sep 2022",
      desc: "Utilized AWS SageMaker, Rekognition, and S3 to conduct machine learning research on Amazon Ads Sponsor Display; Integrated CLIP and VirTex image & attributes similarity models to trigger Lambda generating 1) visual similarity scores 2) Image vs. Text similarity scores between two batches of Amazon ASINs. 3) Ranks of product based on similarity scores.",
      descBullets: [
        "Improved the accuracy of current BERT based Deep Learning model for Advertisement vending flow by avg. 23%; added 2 consolidated columns of relevance scores to the current model output; published a visual similarity model implementation guide and a ML research poster on vision similarity model for Amazon’s tech blog.",
      ]
    },
    {
      role: "Build & DevOps Engineer",
      company: "BlackBerry",
      companylogo: require("./assets/images/BlackBerryLogo.png"),
      date: "Aug 2020 – Feb 2021",
      desc: "Authored and integrated tooling solutions to the build pipelines using multiple SCMs; Implemented the release and build process for WatchDox project; provided a clean and efficient CI/CD environment. Designed new algorithms for all company’s products’ SHH keys; shortened the time which required manually replacement before by 80%; Worked with development team to facilitate tooling solutions; Successfully migrated projects across different platforms."
    },
    {
      role: "Software Engineer",
      company: "GS1",
      companylogo: require("./assets/images/GS1Circle.png"),
      date: "Dec 2019 – May 2020",
      descBullets: [
        "Designed and developed many key back and front-end components of the company’s online retailer/item management application (SOAP/REST API); Inserted emergency item list module for merchandise to provide solutions under real-time COVID-19 situation and shortened company transaction time by 25%.",
        "Added Pan Zoom features to company’s website to show labels of items by NPM; Developed a generic Spring Batch based mapping tool allowing JDBC, and Log4j specification of mapping rules between different data providers/consumers."
      ]
    },
    {
      role: "Mobile Software Developer",
      company: "FLIR Systems",
      companylogo: require("./assets/images/FLIRCircle.png"),
      date: "May 2019 – Nov 2019",
      desc: "Developed and maintained the Mission Control Software (MCS) for Android tablet for unmanned air flyer; Enhanced the ground control behavior between pilots and drones by adding the flyer trace-point feature, appraised positively by customers.",
      descBullets: [
        "Implemented the Video and Telemetry modules and helped release the AeryonCommand for Android and iOS, a broadcasting app to allow real-time readout of critical aspects of aircraft location and performance with low latencies (under 3 seconds).",
        "Wrote lots of UIs and increased the API test coverage for the software by 20%; vindicated the fly status data dashboard feature."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Biketopia.png"),
      projectName: "Biketopia",
      projectDesc: "Developed an app and linked with bicycle safety air bag system; sold the airbag system prototype on Amazon",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drive.google.com/file/d/0By2JI2rWi8jMR2RpM1VyR3BFZzA/view?usp=sharing&resourcekey=0-k48thGuKt1rPTXPTm6OHIQ"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Crypto.png"),
      projectName: "CryptoRoboAdvisor",
      projectDesc: "A cryptocurrency portfolio risk and recommendation tool powered by machine learning algorithm and front-end web services that aims for helping different levels of investors with different financial goals",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/IanChen999/crypto-portfolio-advisor"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1kZ8JDGeLI6DoDxr6eTARSDdXcxkk8lTy/view?usp=sharing",
      title: "Tech-Enabled Social Enterprise: Goals, Expectations, and Challenges",
      description:
        "Is it conceivable to make an economical, human-driven, versatile economy that accomplishes different targets including development, consideration, and value?"
    },
    {
      url: "https://datax.berkeley.edu/projects/robo-advisor-for-crypto/",
      title: "Robo-Advisor for Crypto",
      description:
        "Cryptocurrency investment is risky. For every person making millions, there is someone losing the same amount. Luckily, Robo-Advisor for Crypto helps investors do exactly that! "
    },
    {
      url: "https://drive.google.com/file/d/17LXUH7Ws6AdDwJsTFMJSLSlaRUuK4Pgb/view?usp=sharing",
      title: "Risks & Opportunities of ML/AI in Healthcare",
      description:
        "Although it has been demonstrated to be effective in academic research and inference tasks across the economy, artificial intelligence and machine learning still needs to improve in the fundamental functions of public health or healthcare, namely protecting and promoting population health."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-5105029974",
  email_address: "yijunchen0402@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "YijunChen19", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
