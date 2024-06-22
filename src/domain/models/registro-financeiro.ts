export type TipoRegistro = 'despesa' | 'receita';
export type StatusRegistro = 'pendente' | 'consolidado' | 'cancelado';

export class RegistroFinanceiro {
  public id: string;
  public descricao: string;
  public data: Date;
  public tipo: TipoRegistro;
  public valor: number;
  public status: StatusRegistro;

  constructor(id: string, descricao: string, data: Date, tipo: TipoRegistro, valor: number, status: StatusRegistro) {
    this.id = id;
    this.descricao = descricao;
    this.data = data;
    this.tipo = tipo;
    this.valor = valor;
    this.status = status;
    this.validar();
  }

  private validar() {
    if (!this.descricao) {
      throw new Error("Descrição é obrigatória");
    }
    if (!this.data) {
      throw new Error("Data do registro é obrigatória");
    }
    if (!this.tipo) {
      throw new Error("Tipo do registro é obrigatório");
    }
    if (!this.valor) {
      throw new Error("Valor do registro é obrigatório");
    }
    if (!this.status) {
      throw new Error("Status do registro é obrigatório");
    }
  }

  // Métodos de acesso e modificação conforme necessário
}
