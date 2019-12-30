import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { Alert } from 'react-native';

import { updateProfileSuccess, updateProfileFailure } from './action';

export function* updateProfile({ payload }) {
  try {

    const { name, surname, email, avatar_id, ...rest } = payload.data;

    // Une dois objetos = Object.assign
    const profile = Object.assign(
      { name, surname, email, avatar_id },
      rest.oldPassword ? rest : {}
    )

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso',
      'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha na atualização',
      'Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
