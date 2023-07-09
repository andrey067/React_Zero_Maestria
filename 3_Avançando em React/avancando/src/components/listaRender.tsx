import { useState } from "react";

const ListRender = () => {
  const [lista, setUser] = useState(["Audrey", "Audrey 2", "Audrey 3"]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUser((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.length);
    });
  };
  return (
    <>
      <div>
        <ul>
          {lista.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <button onClick={deleteRandom}>Delete Random user</button>
    </>
  );
};

export default ListRender;
