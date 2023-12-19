import { ChangeEvent, useState } from "react";

export default interface SearchProps {}

export default function Search({}) {
  const [search, setSearch] = useState<string>("");
  const onclickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  return (
    <>
      <div>
        <input value={search} onChange={(e) => onclickHandler(e)} />
      </div>
      <div>Введите имя задачи. Мы ее найдем или создадим для вас!</div>
      <div>
        <img src="/src/assets/search.svg" alt="" />
      </div>
    </>
  );
}
