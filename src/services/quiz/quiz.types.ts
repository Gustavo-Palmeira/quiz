export interface IAnswer {
  value: string
  correct: boolean
  revealed?: boolean
}

export interface IQuestion {
  id: number
  enunciation: string
  answers: IAnswer[]
  correct?: boolean
}

export interface IError {
  message: string
}
