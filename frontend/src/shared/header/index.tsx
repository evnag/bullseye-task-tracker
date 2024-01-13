import "./header.css";

export interface HeaderProps {
  children: JSX.Element[];
}

export default function Header({ children }: HeaderProps) {
  return <div className="header">{children}</div>;
}
