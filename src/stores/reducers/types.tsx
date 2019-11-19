export interface IAction {
    type: string,
    item: any,
    payload: Array<IMovie>
}

export interface IActors {
    list: Array<string>
  }

  export interface IMovies {
    list: Array<IMovie>
    pending: boolean
    error: boolean
  }

  export interface IMovie {
    id: number,
    name: string
  }