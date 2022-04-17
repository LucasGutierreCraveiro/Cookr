import { TouchableOpacityProps, TextProps } from 'react-native';
import styled from 'styled-components/native';

interface TouchableType extends TouchableOpacityProps {
  color: string;
  isDisabled: boolean;
}

interface TextType extends TextProps {
  isDisabled: boolean;
}

export const Container = styled.View`
  height: 50px;
  background: transparent;
  position: relative;
  margin: 5px 0;
  opacity: 1;
`;

export const Touchable = styled.TouchableOpacity<TouchableType>`
  height: 50px;
  background: ${(props: TouchableType) => props.color || '#fff'};
  opacity: ${(props: TouchableType) => (props.isDisabled ? '0.2' : '1')};
  justify-content: center;
  align-item: center;
  flex-direction: row;
  border-radius: 60px;
`;

export const Text = styled.Text<TextType>`
  color: ${(props: TouchableType) => (props.isDisabled ? '#CCC' : '#FFF')};
  font-size: 12px;
  font-family: bold;
`;
