import "./dashboard.css";

export interface DashboardProps {
  children: JSX.Element[];
}

export default function Header({ children }: DashboardProps) {
  return <div className="dashboard">{children}</div>;
}
