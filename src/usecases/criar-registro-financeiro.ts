import { RegistroFinanceiro, TipoRegistro, StatusRegistro } from '../domain/models/registro-financeiro';
import { v4 as uuidv4 } from 'uuid';

interface CriarRegistroFinanceiroRequest {
  descricao: string;
  data: Date;
  tipo: TipoRegistro;
  valor: number;
  status: StatusRegistro;
}

export class CriarRegistroFinanceiro {
  executar(request: CriarRegistroFinanceiroRequest): RegistroFinanceiro {
    const { descricao: descricao, data: date, tipo: type, valor: value, status } = request;
    const id = uuidv4(); // Gera um ID único para o registro
    const registroFinanceiro = new RegistroFinanceiro(id, descricao, date, type, value, status);
    // Aqui você pode adicionar lógica adicional, como persistência no banco de dados
    return registroFinanceiro;
  }
}