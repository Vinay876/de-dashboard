import { RiProjectorLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { GiCardDraw } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import { MdLiveHelp } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Finance from "../pages/Finance";
import Inspirations from "../pages/Inspirations";
import Project from "../pages/Project";
import RawMaterial from "../pages/RawMaterial";
import Updates from "../pages/Updates";
import Production from "../pages/Production";
import Help_Support from "../pages/Help_Support";
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    shortPath: "/",
    Icon: RxDashboard,
    Element: Dashboard,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    shortPath: "/profile",
    Icon: CgProfile,
    Element: Profile,
  },
  {
    title: "Project",
    path: "/dashboard/project",
    shortPath: "/project",
    Icon: RiProjectorLine,
    Element: Project,
  },
  {
    title: "Inspirations",
    path: "/dashboard/inspirations",
    shortPath: "/inspirations",
    Icon: MdOutlineDashboard,
    Element: Inspirations,
  },
  {
    title: "Production & Installation",
    path: "/dashboard/production&installation",
    shortPath: "/production&installation",
    Icon: MdOutlineSettings,
    Element: Production,
  },
  {
    title: "Raw Material",
    path: "/dashboard/raw-material",
    shortPath: "/raw-material",
    Icon: GiCardDraw,
    Element: RawMaterial,
  },
  {
    title: "Finance Your Project",
    path: "/dashboard/finance-your-project",
    shortPath: "/finance-your-project",
    Icon: FaMoneyCheck,
    Element: Finance,
  },
  {
    title: "Updates",
    path: "/dashboard/updates",
    shortPath: "/updates",
    Icon: GrUpdate,
    Element: Updates,
  },
  {
    title: "Help & Support",
    path: "/dashboard/help&support",
    shortPath: "/help&support",
    Icon: MdLiveHelp,
    Element: Help_Support,
  },
];
