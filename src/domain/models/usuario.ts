export class Usuario {
  private id: string;
  private nome: string;
  private email: string;

  constructor(id: string, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.validar();
  }

  private validar() {
    if (!this.nome) {
      throw new Error("Nome é obrigatório");
    }
    if (!this.email) {
      throw new Error("Email é obrigatório");
    }
    // Adicione outras validações conforme necessário
  }

  public alterarNome(novoNome: string) {
    this.nome = novoNome;
    this.validar();
  }

  public getEmail(): string {
    return this.email;
  }

  // Outros métodos de domínio conforme necessário
}