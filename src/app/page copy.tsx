// src/app/page.tsx
'use client';

import { useState } from 'react';
import { Usuario } from '../domain/models/usuario';
import { CriarUsuario } from '../usecases/criar-usuario';

const HomePage = () => {
  const [users, setUsers] = useState<Usuario[]>([
    new Usuario('1', 'John Doe', 'john@example.com'),
    new Usuario('2', 'Jane Doe', 'jane@example.com'),
  ]);

  const createUser = () => {
    const createUserUseCase = new CriarUsuario();
    const newUser = createUserUseCase.executar({
      id: '3',
      nome: 'edson',
      email: 'edson.dionizio@gmail.com',
    });
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.getEmail()}>{user.getEmail()}</li>
        ))}
      </ul>
      <button onClick={createUser}>Adicionar Usuário</button>
    </div>
  );
};

export default HomePage;