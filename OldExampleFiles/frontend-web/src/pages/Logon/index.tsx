import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Input } from '../../components/Form';

import './styles.css';

interface FormData {
  email: string,
  password: string
}

export default function Logon(): any {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      /**
       *
       * To-do
       *
       * Chamada de autenticação pro backend e gatilho de navegação pra próxima rota
       */

      formRef.current?.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error): any => {
          errorMessages[error.path!] = error.message;
        });
        formRef.current!.setFieldValue('email', '');
        formRef.current!.setErrors(errorMessages);
      }
    }
  };

  return (
    <section className="logon-container">
      <div className="form">
        <div className="welcome-text">
          <h3>Welcome to</h3>
          <h1>Cookr</h1>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Login" />
          <Input name="password" placeholder="Password" type="password" />
          <button type="submit">Enviar</button>
        </Form>
      </div>
    </section>
  );
}
