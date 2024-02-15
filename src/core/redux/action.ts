
export const SET_TOKEN = 'SET_TOKEN'


export const setToken = (token: any): any => ({
  type: SET_TOKEN,
  payload: token
})

export const clearReduxState = (): void => {
  sessionStorage.clear()
}
