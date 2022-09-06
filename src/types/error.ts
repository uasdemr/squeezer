export type ErrorType = {
  response: {
    data: { detail: string | [{ msg: string }] },
    status: number
  }
}
