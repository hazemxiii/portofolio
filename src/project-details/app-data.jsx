import { CiTimer } from "react-icons/ci";
import { AiOutlineNumber } from "react-icons/ai";

export default class Project {
  static data = {};
  constructor(id, title, brief, img, description, features, tags) {
    this.id = id;
    this.title = title;
    this.brief = brief;
    this.description = description;
    this.features = features;
    this.tags = tags;
    Project.data[id] = this;
  }
}

class Feature {
  constructor(title, desc, img, ico) {
    this.title = title;
    this.desc = desc;
    this.img = img;
    this.ico = ico;
  }
}

new Project(
  1,
  "Prayer App",
  "Muslim prayer times companion",
  "",
  "The Muslim Prayer App is a powerful and user-friendly tool designed to help Muslims stay connected to their faith throughout the day. Whether you're at home, work, or traveling, this app ensures you never miss a prayer and have access to essential Islamic resources.",
  [
    new Feature(
      "Prayer Time",
      "Easliy track prayer times and get detailed timer for next prayer",
      "",
      <CiTimer />
    ),
    new Feature(
      "Tasbih Tracker",
      "Track your tasbih count daily and all time",
      "",
      <AiOutlineNumber />
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
  2,
  "Home Quotes",
  "Displays user text on a homescreen widget",
  "",
  "",
  [],
  [
    "File management",
    "SharedPreferences",
    "Provider",
    "work manager",
    "Android home screen widget",
  ]
);

new Project(
  3,
  "Accounts' Safe",
  "Saves user accounts",
  "",
  "",
  [],
  ["File management", "SharedPreferences", "Provider", "Encryption"]
);

new Project(
  4,
  "TeamHive",
  "Team or Class Management",
  "",
  "",
  [],
  ["SharedPreferences", "Provider", "Firebase", "Third-party API"]
);
