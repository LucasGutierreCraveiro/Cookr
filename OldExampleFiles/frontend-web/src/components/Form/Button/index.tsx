import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  isDisabled: boolean;
  children: string;

}

const Button: React.ElementType<ButtonProps> = ({
  color, isDisabled, children,
}: ButtonProps) => (
  <button type="submit">Enviar</button>
);

export default Button;
