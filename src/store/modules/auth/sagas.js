import {takeLatest, call, put, all} from 'redux-saga/effects';
import api from '../../../services/api';
import {Alert} from 'react-native';

import {signInSuccess, signFailure} from './action';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const {token, user} = response.data;

    if (user.isprovider) {
      Alert.alert(
        'Erro no login',
        'Somente usuários comuns podem acessar este app',
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Falha na autenticação, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, surname, email, password} = payload;

    yield call(api.post, 'users', {
      name,
      surname,
      email,
      password,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados!',
    );
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
