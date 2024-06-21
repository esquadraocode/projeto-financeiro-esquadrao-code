'use client';

import { useState } from 'react';
import { Usuario } from '../domain/models/usuario';
import { CriarUsuario } from '../usecases/criar-usuario';

const HomePage = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    new Usuario('1', 'John Doe', 'john@example.com'),
    new Usuario('2', 'Jane Doe', 'jane@example.com'),
  ]);

  const criarUsuario = () => {
    const criarUsuarioUseCase = new CriarUsuario();
    const novoUsuario = criarUsuarioUseCase.executar({
      id: '3',
      nome: 'edson',
      email: 'edson.dionizio@gmail.com',
    });
    setUsuarios([...usuarios, novoUsuario]);
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map(user => (
          <li key={user.getEmail()}>{user.getEmail()}</li>
        ))}
      </ul>
      <button onClick={criarUsuario}>Adicionar Usuário</button>
    </div>
  );
};

export default HomePage;