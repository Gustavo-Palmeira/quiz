import { IQuestion } from './quiz.types'

const questions: IQuestion[] = [
  {
    id: 1,
    enunciation: 'Qual bicho transmite a Doença de Chagas?',
    answers: [
      { value: 'Abelha', correct: false },
      { value: 'Barata', correct: false },
      { value: 'Pulga', correct: false },
      { value: 'Barbeiro', correct: true },
    ],
  },
  {
    id: 2,
    enunciation: 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    answers: [
      { value: 'Caju', correct: false },
      { value: 'Manga', correct: false },
      { value: 'Chuchu', correct: false },
      { value: 'Abóbora', correct: true },
    ],
  },
  {
    id: 3,
    enunciation: 'Qual é o coletivo de cães?',
    answers: [
      { value: 'Manada', correct: false },
      { value: 'Alcateia', correct: false },
      { value: 'Rebanho', correct: false },
      { value: 'Matilha', correct: true },
    ],
  },
  {
    id: 4,
    enunciation: 'Qual é o triângulo que tem todos os lados diferentes?',
    answers: [
      { value: 'Equilátero', correct: false },
      { value: 'Isósceles', correct: false },
      { value: 'Trapézio', correct: false },
      { value: 'Escaleno', correct: true },
    ],
  },
  {
    id: 5,
    enunciation: 'Quem compôs o Hino da Independência?',
    answers: [
      { value: 'Castro Alves', correct: false },
      { value: 'Manuel Bandeira', correct: false },
      { value: 'Carlos Gomes', correct: false },
      { value: 'Dom Pedro I', correct: true },
    ],
  },
  {
    id: 6,
    enunciation: 'Qual é o antônimo de "malograr"?',
    answers: [
      { value: 'Perder', correct: false },
      { value: 'Fracassar', correct: false },
      { value: 'Desprezar', correct: false },
      { value: 'Conseguir', correct: true },
    ],
  },
  {
    id: 7,
    enunciation: 'Em que país nasceu Carmen Miranda?',
    answers: [
      { value: 'Argentina', correct: false },
      { value: 'Espanha', correct: false },
      { value: 'Brasil', correct: false },
      { value: 'Portugal', correct: true },
    ],
  },
  {
    id: 8,
    enunciation: 'Qual foi o último Presidente do período da ditadura militar no Brasil?',
    answers: [
      { value: 'Costa e Silva', correct: false },
      { value: 'Emílio Médici', correct: false },
      { value: 'Ernesto Geisel', correct: false },
      { value: 'João Figueiredo', correct: true },
    ],
  },
  {
    id: 9,
    enunciation: 'Seguindo a sequência do baralho, qual carta vem depois do dez?',
    answers: [
      { value: 'Ás', correct: false },
      { value: 'Nove', correct: false },
      { value: 'Rei', correct: false },
      { value: 'Valete', correct: true },
    ],
  },
  {
    id: 10,
    enunciation: 'O adjetivo "venoso" está relacionado a:',
    answers: [
      { value: 'Vela', correct: false },
      { value: 'Vento', correct: false },
      { value: 'Vênia', correct: false },
      { value: 'Veia', correct: true },
    ],
  },
  {
    id: 11,
    enunciation: 'Que nome se dá à purificação por meio da água?',
    answers: [
      { value: 'Abrupção', correct: false },
      { value: 'Abolição', correct: false },
      { value: 'Abnegação', correct: false },
      { value: 'Ablução', correct: true },
    ],
  },
  {
    id: 12,
    enunciation: 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?',
    answers: [
      { value: 'Monte Branco', correct: false },
      { value: 'Monte Fuji', correct: false },
      { value: 'Monte Carlo', correct: false },
      { value: 'Monte Everest', correct: true },
    ],
  },
  {
    id: 13,
    enunciation: 'Em que parte do corpo se encontra a epiglote?',
    answers: [
      { value: 'Estômago', correct: false },
      { value: 'Pâncreas', correct: false },
      { value: 'Rim', correct: false },
      { value: 'Pescoço', correct: true },
    ],
  },
  {
    id: 14,
    enunciation: 'A compensação por perda é chamada de...',
    answers: [
      { value: 'Deficit', correct: false },
      { value: 'Indexação', correct: false },
      { value: 'Indébito', correct: false },
      { value: 'Indenização', correct: true },
    ],
  },
  {
    id: 15,
    enunciation: 'Que personagem do folclore brasileiro tem uma perna só?',
    answers: [
      { value: 'Cuca', correct: false },
      { value: 'Curupira', correct: false },
      { value: 'Boitatá', correct: false },
      { value: 'Saci-pererê', correct: true },
    ],
  },
  {
    id: 16,
    enunciation: 'Quem é o "patrono" do Exército Brasileiro?',
    answers: [
      { value: 'Marechal Deodoro', correct: false },
      { value: 'Barão de Mauá', correct: false },
      { value: 'Marquês de Pombal', correct: false },
      { value: 'Duque de Caxias', correct: true },
    ],
  },
]

export default questions
