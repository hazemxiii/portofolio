import Project from "../project";
import Feature from "../feature";
import { RiAccountCircle2Line } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

let features = [
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
];

new Project(
  "4",
  "TeamHive",
  "Team or Class Management",
  "Stay connected and productive with secure authentication, team collaboration, quizzes, tasks, and real-time chat—all in one place. Simplify teamwork, boost efficiency!",
  "https://github.com/hazemxiii/team_hive",
  features,
  [],
  ["SharedPreferences", "Provider", "Firebase", "Third-party API"],
  { web: "www.google.com" }
);
