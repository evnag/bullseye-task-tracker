import { Link } from "react-router-dom";

export default function generateNavMenu() {
  const titles = [
    ["Управление пользователями", "/add-user"],
    ["Добавить задачу", "/add-task"],
    ["Управление задачами", "/search"],
    ["Управление спринтами", "#"],
  ];

  const titleList = titles.map((title) => {
    return (
      <ul>
        <li>
          <Link to={title[1]}>{title[0]}</Link>
        </li>
      </ul>
    );
  });
  return titleList;
}
