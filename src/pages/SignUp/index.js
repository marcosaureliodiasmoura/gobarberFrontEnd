import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';

import {useDispatch} from 'react-redux';

import {signUpRequest} from '~/store/modules/auth/action';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, surname, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false} //Evita corrigir
            autoCapitalize="none" //Evita colocar letra maiscula
            placeholder="Qual o seu primeiro nome?" // mensagem
            returnKeyType="next"
            ref={nameRef}
            onSubmitEditing={() => surnameRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="person-outline"
            autoCorrect={false} //Evita corrigir
            autoCapitalize="none" //Evita colocar letra maiscula
            placeholder="Qual o seu sobrenome?" // mensagem
            returnKeyType="next"
            ref={surnameRef}
            onSubmitEditing={() => emailRef.current.focus()}
            value={surname}
            onChangeText={setSurname}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false} //Evita corrigir
            autoCapitalize="none" //Evita colocar letra maiscula
            placeholder="Digite seu e-mail" // mensagem
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry //Pra senhas
            placeholder="Sua senha secreta" // mensagem
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={handleSubmit}>Criar Conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possuo conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
