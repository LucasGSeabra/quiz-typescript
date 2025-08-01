export interface PerguntaQuiz {
  id: number;
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
  explicacao: string;
  categoria: 'tipos' | 'classes' | 'generics' | 'utility-types';
}
