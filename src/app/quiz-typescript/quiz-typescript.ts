import {
  AfterContentChecked,
  Component,
  DoCheck,
  inject,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PerguntaQuiz } from '../interfaces/pergunta-quiz';
import { CommonModule } from '@angular/common';
import { QuizService } from '../services/quiz-service';

@Component({
  selector: 'app-quiz-typescript',
  imports: [CommonModule],
  templateUrl: './quiz-typescript.html',
  styleUrl: './quiz-typescript.css',
})
export class QuizTypescript implements OnInit {
  private quizServive = inject(QuizService);
  pontuacao: number = 0;
  perguntaAtual: number = 0;
  respostas: number[] = [];
  alternativaSelecionada: number | null = null;
  perguntas: PerguntaQuiz[] = [];
  quizFinalizado: boolean = false;
  aproveitamento: number = 0;

  ngOnInit(): void {
    this.carregarPerguntas();
  }

  // Carrega as perguntas do service
  carregarPerguntas() {
    this.perguntas = this.quizServive.obterPerguntas;
  }

  responderPergunta() {
    // Verifica se alternativa selecionada não é null
    if (this.alternativaSelecionada != null) {
      // Verifica se resposta está certa
      if (
        this.quizServive.corrigirResposta(
          this.perguntas[this.perguntaAtual].id,
          this.alternativaSelecionada
        )
      )
        this.pontuacao++;

      // Verifica se pergunta já foi respondida atnes
      if (this.respostas[this.perguntaAtual] != null) {
        //Caso sim, substitui resposta
        this.respostas[this.perguntaAtual] = this.alternativaSelecionada;
      } else {
        //Caso não, adiciona como ultimo elemento do array de respostas
        this.respostas.push(this.alternativaSelecionada);
      }

      //Incrementa pergunta atual e reseta alternativa para null
      if (this.perguntaAtual + 1 < this.perguntas.length) this.perguntaAtual++;
      this.alternativaSelecionada = null;
    }
  }

  //Seleciona alternativa a partir do index
  selecionarAlternativa(alternativaIndex: number) {
    this.alternativaSelecionada = alternativaIndex;
  }

  //Confere qual a alternativa selecionada
  conferirAlternativaSelecionada(alternativaIndex: number): boolean {
    //Confere se resposta já existe e se não há alternativa selecionada
    if (
      this.respostas[this.perguntaAtual] != null &&
      this.alternativaSelecionada === null
    ) {
      //Marca resposta já existente como selecionada
      return this.respostas[this.perguntaAtual] === alternativaIndex;
    } else {
      //Marca alternativa selecionada
      return this.alternativaSelecionada === alternativaIndex;
    }
  }

  //Retrocede o indice caso indice não seja 0
  perguntaAnterior(): void {
    if (this.perguntaAtual > 0) {
      this.perguntaAtual--;
    }
  }

  //Avanca o indice caso ele seja menor que a quantidade de respostas
  proximaPergunta(): void {
    if (this.perguntaAtual < this.respostas.length) this.perguntaAtual++;
  }

  //Calcular aproveitamento
  calcularAproveitamento(): void {
    this.aproveitamento = (this.pontuacao / this.perguntas.length) * 100;
  }

  //Exibe resultado e aciona calculo do aproveitamento
  finalizarQuiz(): void {
    this.calcularAproveitamento();
    this.quizFinalizado = true;
  }

  //Reseta o quiz
  reset(): void {
    this.quizFinalizado = false;
    this.perguntaAtual = 0;
    this.pontuacao = 0;
    this.aproveitamento = 0;
    this.respostas = [];
  }
}
