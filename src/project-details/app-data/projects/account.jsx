import { CiFileOn } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { RiAccountCircle2Line } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdSync } from "react-icons/io";
import Feature from "../feature";
import Project from "../project";

let features = [
  new Feature(
    "Securely Save Your Data",
    "Securely store all your account details in one place!",

    <RiAccountCircle2Line />
  ),

  new Feature(
    "Quick Access to Main Attributes",
    "Quickly access your account details on main screen",

    <FaRegCopy />
  ),

  new Feature(
    "Generate Random Password",
    "Generate strong and secure passwords instantly!",
    <RiLockPasswordLine />
  ),

  new Feature(
    "Biometric Authentication",
    "Keep your data safe with biometric authentication!",

    <IoKeyOutline />
  ),


  new Feature(
    "Set a PIN",
    "Set a PIN to secure your data",
    <IoKeyOutline />
  ),

];

let otherFeatures = [];

let tags = ["SharedPreferences", "Provider", "Encryption","Caching"];

new Project(
  "2",
  "Accounts' Safe",
  "Saves user accounts",
  "Store, protect, and access your accounts with ease. Encrypted storage, easy copy, password generation all in one app. Stay secure, stay organized!",
  "https://github.com/hazemxiii/protect_it",
  features,
  otherFeatures,
  tags,
  { android: "test.com", windows: "hi" },
  
);
