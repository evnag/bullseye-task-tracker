import "./dashboard.css";

export interface DashboardProps {
  children: JSX.Element[];
}

export default function Dashboard({ children }: DashboardProps) {
  return <div className="dashboard">{children}</div>;
}
