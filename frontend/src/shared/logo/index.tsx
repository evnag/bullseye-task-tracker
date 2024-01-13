import "./logo.css";
import { withNaming } from "@bem-react/classname";

const cn = withNaming({ n: "", e: "", m: "_", v: "_" });

export interface LogoProps {
  small: boolean;
  color: string;
}

export default function Logo({ small, color }: LogoProps) {
  const logo = cn("logo");
  const icon = cn("icon ", color);
  return (
    <div className={logo({ small })}>
      <div className={icon()} />
      <div className="brand">ВЯБЛОЧКО</div>
    </div>
  );
}
