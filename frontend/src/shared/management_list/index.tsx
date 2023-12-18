import "./management_list.css";
import { cn } from "@bem-react/classname";

export interface ManagementListProps {
  title: string;
  link: string;
}

export default function ManagementList({}: ManagementListProps) {
  const managementLinks = cn("management");

  const links: ManagementListProps[] = [
    { title: "Управление пользователями", link: "#" },
    { title: "Управление задачами", link: "#" },
    { title: "Управление проектами", link: "#" },
    { title: "Управление спринтами", link: "#" },
  ];

  const linksList = links.map((link) => {
    return (
      <li>
        <a href={link.link}>{link.title}</a>
      </li>
    );
  });

  return (
    <div className={managementLinks()}>
      <ul>{linksList}</ul>
    </div>
  );
}
