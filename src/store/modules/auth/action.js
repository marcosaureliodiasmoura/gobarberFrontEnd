// Aqui ele vai receber um email e senha
export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

//Quando der tudo certo vai receber o token e o user
export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, surname, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, surname, email, password }
  };

}

// Não recebe nenhuma informação
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  }
}