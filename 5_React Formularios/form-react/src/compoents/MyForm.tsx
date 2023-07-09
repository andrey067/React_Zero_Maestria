import { ChangeEvent, FormEvent, useState } from "react";

interface User {
  name: string;
  email: string;
  bio: string;
}

const MyForm = (user: User) => {
  //3- gerenciamento de dados

  const [name, setName] = useState(user.name ?? "");
  const [email, setEmail] = useState(user.email ?? "");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Mudou o nome", e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Enviando o furmulario");
    console.log(name, email, email);

    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <>
      {/* Criacao de form */}
      {/* Envio de Formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* label envolvendo */}
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>
            <span>Bio</span>
            <textarea
              name="bio"
              placeholder="Descricao"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            ></textarea>
          </label>
        </div>

        <div>
          <label>
            <span>Funcao do Sistema</span>
            <select
              name="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="user">Usuario</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrator</option>
            </select>
          </label>
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default MyForm;
