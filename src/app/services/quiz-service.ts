import { Injectable } from '@angular/core';
import { PerguntaQuiz } from '../interfaces/pergunta-quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private perguntas: PerguntaQuiz[] = [
  {
    id: 1,
    pergunta: "Qual a diferença entre 'any' e 'unknown' em TypeScript?",
    opcoes: [
      'Não há diferença',
      'unknown é type-safe e requer verificação',
      'any é mais rápido',
      'unknown é deprecated',
    ],
    respostaCorreta: 1,
    explicacao:
      "'unknown' é type-safe e requer verificação de tipo antes do uso, enquanto 'any' desabilita completamente a verificação de tipos.",
    categoria: 'tipos',
  },
  {
    id: 2,
    pergunta: 'Qual a função de Required<T>?',
    opcoes: [
      'constrói um tipo apenas com as propriedades obrigatórias de T',
      'faz com que as propiedades obrigatórias de T se tornem opcionais',
      'cria um tipo igual a T mas com todas as propriedades sendo obrigatórias',
      'transforma as propriedades de T em somente leitura',
    ],
    respostaCorreta: 2,
    explicacao:
      "'Required' constrói um novo tipo com as mesmas propriedades do tipo T fornecido, mas todas elas são obrigatórias.",
    categoria: 'utility-types',
  },
  {
    id: 3,
    pergunta: 'Qual a utilidade da palavra super em uma classe?',
    opcoes: [
      'acessar a classe pai',
      'subscrever métodos da classe pai',
      'priorizar a execução de métodos da classe filho sobre os métodos da classe pai',
      'nenhuma das anteriores',
    ],
    respostaCorreta: 0,
    explicacao:
      'A palavra-chave super é utilizada sempre que é necessário acessar a classe pai de uma classe.',
    categoria: 'classes',
  },
];

//Retorna as perguntas
get obterPerguntas() {
  return this.perguntas;
}

//Corrige se a resposta está correta
corrigirResposta(idPergunta: number, resposta: number): boolean {
  const perguntaSelecionada = this.perguntas.find((pergunta) => pergunta.id === idPergunta)
  if(perguntaSelecionada?.respostaCorreta === resposta) return true
  return false
}

}
