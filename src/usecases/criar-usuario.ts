import { Usuario } from '../domain/models/usuario'

interface CriarUsuarioRequest {
  id: string
  nome: string
  email: string
}

export class CriarUsuario {
  executar(request: CriarUsuarioRequest): Usuario {
    const { id, nome: nome, email } = request
    const usuario = new Usuario(id, nome, email)
    // Aqui você pode adicionar lógica adicional, como persistência no banco de dados
    return usuario
  }
}
