import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  // Cor do placeholder
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  /* Dentro do input */
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;
