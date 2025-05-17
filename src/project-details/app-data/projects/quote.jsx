import { IoIosColorPalette } from "react-icons/io";
import { FaPenFancy } from "react-icons/fa";
import { RiSlideshow2Line } from "react-icons/ri";
import { IoTimer } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import Project from "../project";
import Feature from "../feature";

let features = [
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
];

let tags = [
  "File management",
  "SharedPreferences",
  "Provider",
  "work manager",
  "Android home screen widget",
];

new Project(
  "2",
  "QuoteWidget",
  "Displays user text on a homescreen widget",
  "Turn your home screen into a source of daily motivation! With QuoteWidget, you can add your own quotes, affirmations, or reminders and display them beautifully on a customizable widget. Stay inspired every time you unlock your phone!",
  "https://github.com/hazemxiii/home_quote",
  features,
  [
    "User Can Select Multiple Quotes And The App Will Switch Between Them Every 15 Minutes",
  ],
  tags,
  { android: "test.com" },
  null
);
