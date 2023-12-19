import generateNavMenu from "./nav-config";
import "./nav-menu.css";
import { cn } from "@bem-react/classname";

export default function NavMenu() {
  const navMenu = cn("nav-menu");

  return <div className={navMenu()}>{generateNavMenu()}</div>;
}
