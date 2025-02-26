import { AiOutlineNumber } from "react-icons/ai";
import { FaKaaba } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { FaPenFancy } from "react-icons/fa";
import { RiSlideshow2Line } from "react-icons/ri";
import { IoTimer } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { RiAccountCircle2Line } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdSync } from "react-icons/io";

export default class Project {
  static data = {};
  constructor(id, title, brief, description, features, tags) {
    this.id = id;
    this.title = title;
    this.brief = brief;
    this.img = `/src/assets/images/screenshots/${title}/icon.png`;
    this.description = description;
    for (let i = 0; i < features.length; i++) {
      features[i].appName = title;
    }
    this.features = features;
    this.tags = tags;
    Project.data[id] = this;
  }
}

class Feature {
  constructor(title, desc, ico) {
    this.title = title;
    this.desc = desc;
    this.appName = "";
    this.ico = ico;
  }

  getImageSrc() {
    return `/src/assets/images/screenshots/${this.appName}/${this.title}.png`;
  }
}

new Project(
  "1",
  "Moazzin",
  "Muslim companion",
  "Moazzin is a powerful and user-friendly tool designed to help Muslims stay connected to their faith throughout the day. Whether you're at home, work, or traveling, this app ensures you never miss a prayer and have access to essential Islamic resources.",
  [
    new Feature(
      "Prayer Time",
      "Never miss a prayer - accurate timings at your fingertips.",
      <IoTimer />
    ),
    new Feature(
      "Notifications",
      "Always be ready before it's adhan time with background notification.",
      <IoTimer />
    ),
    new Feature(
      "Tasbih Counter",
      "Effortless dhikr, one tap at a time.",
      <AiOutlineNumber />
    ),
    new Feature(
      "Qiblah Finder",
      "Find your direction, wherever you are.",

      <FaKaaba />
    ),
    new Feature(
      "Hijri Date",
      "Stay connected to Islamic dates and events.",

      <MdOutlineDateRange />
    ),
    new Feature(
      "Color Customization",
      "Personalize your spiritual experience with custom themes.",

      <IoIosColorPalette />
    ),
  ],
  [
    "Location Services",
    "Shared Preferences",
    "Provider",
    "Background Services",
    "SQL lite",
    "Third-party API",
  ]
);

new Project(
  "2",
  "QuoteWidget",
  "Displays user text on a homescreen widget",
  "Turn your home screen into a source of daily motivation! With QuoteWidget, you can add your own quotes, affirmations, or reminders and display them beautifully on a customizable widget. Stay inspired every time you unlock your phone!",
  [
    new Feature(
      "Write Your Own",
      "Your words, your wisdom, your way!",

      <FaPenFancy />
    ),
    new Feature(
      "Pick Your Favorites",
      "Choose the quotes that speak to you",

      <RiSlideshow2Line />
    ),
    new Feature(
      "Fresh Inspiration",
      "A new quote every 15 minutes!",

      <IoTimer />
    ),
    new Feature(
      "Customize Your Style",
      "Match your widget to your vibe.",

      <IoIosColorPalette />
    ),
    new Feature(
      "Import & Export",
      "Take your quotes wherever you go!",

      <CiFileOn />
    ),
  ],
  [
    "File management",
    "SharedPreferences",
    "Provider",
    "work manager",
    "Android home screen widget",
  ]
);
new Project(
  "3",
  "Accounts' Safe",
  "Saves user accounts",
  "Store, protect, and access your accounts with ease. Encrypted storage, easy copy, password generation, and seamless import/export—all in one app. Stay secure, stay organized!",
  [
    new Feature(
      "Saving Accounts",
      "Securely store all your account details in one place!",

      <RiAccountCircle2Line />
    ),

    new Feature(
      "Encryption & Password Protection",
      "Keep your data safe with strong encryption and password security!",

      <IoKeyOutline />
    ),

    new Feature(
      "Easy Copy",
      "Quickly copy your account details with a single tap!",

      <FaRegCopy />
    ),

    new Feature(
      "Export & Import Data",
      "Seamlessly transfer your data across devices!",
      <CiFileOn />
    ),
    new Feature(
      "Sync your data",
      "Easily send & receive data from your devices",
      <IoMdSync />
    ),

    new Feature(
      "Password Generator",
      "Generate strong and secure passwords instantly!",
      <RiLockPasswordLine />
    ),
  ],
  ["File management", "SharedPreferences", "Provider", "Encryption"]
);

new Project(
  "4",
  "TeamHive",
  "Team or Class Management",
  "Stay connected and productive with secure authentication, team collaboration, quizzes, tasks, and real-time chat—all in one place. Simplify teamwork, boost efficiency!",
  [
    new Feature(
      "Authentication System",
      "Securely sign in and protect your account!",

      <RiAccountCircle2Line />
    ),

    new Feature(
      "Create or Join Team",
      "Easily create a team or join an existing one to collaborate!",

      <RiTeamLine />
    ),

    new Feature(
      "Quizzes",
      "Engage with interactive quizzes to test and improve knowledge!",

      <MdOutlineQuiz />
    ),

    new Feature(
      "Tasks",
      "Stay organized with task management for you and your team!",

      <FaTasks />
    ),

    new Feature(
      "Team Chat & Announcements",
      "Communicate seamlessly with team chat and important updates!",

      <IoChatbubbleEllipsesOutline />
    ),
  ],
  ["SharedPreferences", "Provider", "Firebase", "Third-party API"]
);
