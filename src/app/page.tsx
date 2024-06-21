'use client';

import { useState } from 'react';
import { RegistroFinanceiro, StatusRegistro, TipoRegistro } from '../domain/models/registro-financeiro';
import { CriarRegistroFinanceiro } from '../usecases/criar-registro-financeiro';

const HomePage = () => {
  const [registros, setRegistros] = useState<RegistroFinanceiro[]>([]);

  const criarRegistro = () => {
    const criarRegistroUseCase = new CriarRegistroFinanceiro();
    const novoRegistro = criarRegistroUseCase.executar({
      descricao: 'Energia',
      data: new Date(),
      tipo: 'Despesa' as TipoRegistro,
      valor: 150,
      status: 'Pendente' as StatusRegistro,
    });
    setRegistros([...registros, novoRegistro]);
  };

  return (
    <div>
      <h1>Registros Financeiros</h1>
      <ul>
        {registros.map(record => (
          <li key={record.id}>
          <ul>
            <li>ID: {record.id}</li>
            <li>Descrição: {record.descricao}</li>
            <li>Valor: {record.valor}</li>
            <li>Tipo: {record.tipo}</li>
            <li>Status: {record.status}</li>
            <li>Data: {record.data.toLocaleDateString()}</li>
          </ul>
        </li>
        ))}
      </ul>
      <button
          onClick={criarRegistro}
          style={{
            backgroundColor: '#4CAF50', // Cor de fundo verde
            color: 'white', // Texto branco
            padding: '10px 20px', // Espaçamento interno
            margin: '10px', // Margem externa
            border: 'none', // Sem borda
            cursor: 'pointer', // Cursor do mouse como ponteiro
            borderRadius: '5px', // Bordas arredondadas
          }}
      >
          Adicionar Registro
      </button>
    </div>
  );
};

export default HomePage;