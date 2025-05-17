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
    "Sync your data",
    "Easily send & receive data from your devices",
    <IoMdSync />
  ),

  new Feature(
    "Password Generator",
    "Generate strong and secure passwords instantly!",
    <RiLockPasswordLine />
  ),
];

let otherFeatures = ["Import/Export data as a file"];

let tags = ["File management", "SharedPreferences", "Provider", "Encryption"];

new Project(
  "3",
  "Accounts' Safe",
  "Saves user accounts",
  "Store, protect, and access your accounts with ease. Encrypted storage, easy copy, password generation, and seamless import/export—all in one app. Stay secure, stay organized!",
  "https://github.com/hazemxiii/protect_it",
  features,
  otherFeatures,
  tags,
  { android: "test.com", windows: "hi" },
  {
    "A major update is coming soon": "var(--light-blue)",
  }
);
