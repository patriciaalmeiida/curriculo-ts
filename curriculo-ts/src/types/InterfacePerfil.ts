import InterfaceContatos from './InterfaceContatos'
import InterfaceEducacao from './InterfaceEducacao'
import InterfaceExperiencia from './InterfaceExperiencia'

export interface InterfacePerfil {
    nome: string,
    ocupacao: string,
    resumo: string,
    perfilProfissional: string,
    contatos: InterfaceContatos[],
    educacao: InterfaceEducacao[],
    experiencia: InterfaceExperiencia[],
}

export interface InterfacePerfil {
    resposta: InterfacePerfil
}