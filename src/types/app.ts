export type AppState = {
  user?: string
  hasNext: boolean,
  offset: number,
  limit: number,
  data: SqueezeType[],
  isDataLoading: boolean,
  sorting: SortType,
}

export type SortType = {
  sort: string
  parametr: string
}

export type NewSqueezedLink = {
  full: string,
}

export type SqueezeType = {
  id: number,
  short: string,
  target: string,
  counter: number,
}

export type TableType = {
  rows: SqueezeType[],
  sorting: {
    sort: string
    parametr: string
  }
}
