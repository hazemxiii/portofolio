import { AiOutlineNumber } from "react-icons/ai";
import { FaKaaba } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoTimer } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import Feature from "../feature";
import Project from "../project";

let features = [
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
];

let otherFeatures = [
  "Hijri Date",
  "Colour Customisation",
  "Offline Data Access",
];
let tags = [
  "Location Services",
  "Shared Preferences",
  "Provider",
  "Background Services",
  "SQL lite",
  "Third-party API",
];

new Project(
  "1",
  "Moazzin",
  "Muslim companion",
  "Moazzin is a powerful and user-friendly tool designed to help Muslims stay connected to their faith throughout the day. Whether you're at home, work, or traveling, this app ensures you never miss a prayer and have access to essential Islamic resources.",
  "https://github.com/hazemxiii/prayerapp",
  features,
  otherFeatures,
  tags,
  { android: "test.com", windows: "hi" },
  null
);
