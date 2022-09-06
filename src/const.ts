export enum HTTP_CODE {
  UNAUTHORIZED = 401,
  UNPROCESSABLE_ENTITY = 422,
}

export enum AppRoute {
  Register = '/register?',
  Login = '/login',
  Squeeze = '/squeeze?',
  Statistics = '/statistics?',
  Redirect = '/s'
}

export const Links = ['Short', 'Target', 'Counter']
