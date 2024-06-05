import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/FormPatrocinio.module.css';

function FormPatrocinio() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Aqui você pode fazer o que quiser com os dados do formulário
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <div>
          {errors.fullName && (
            <span
              className={styles.errorMessage}
              onClick={() => setShowErrorMessage(!showErrorMessage)}
            >
              * {showErrorMessage ? errors.fullName.message : 'Campo Obrigatório'}
            </span>
          )}
          <input 
            type="text" 
            id="fullName" 
            {...register('fullName', { required: 'Campo obrigatório' })}
            placeholder="Nome Completo"
          />
        </div>

        <div>
          {errors.companyName && (
            <span
              className={styles.errorMessage}
              onClick={() => setShowErrorMessage(!showErrorMessage)}
            >
              * {showErrorMessage ? errors.companyName.message : 'Campo Obrigatório'}
            </span>
          )}
          <input 
            type="text" 
            id="companyName" 
            {...register('companyName', { required: 'Campo obrigatório' })}
            placeholder="Nome Fantasia da Empresa"
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formFieldEmail}>
          {errors.email && (
            <span
              className={styles.errorMessage}
              onClick={() => setShowErrorMessage(!showErrorMessage)}
            >
              * {showErrorMessage ? errors.email.message : 'Campo Obrigatório'}
            </span>
          )}
          <input 
            type="email" 
            id="email" 
            {...register('email', { required: 'Campo obrigatório' })}
            placeholder="E-mail de Contato"
          />
        </div>

        <div className={styles.formFieldTelefone}>
          {errors.phone && (
            <span
              className={styles.errorMessage}
              onClick={() => setShowErrorMessage(!showErrorMessage)}
            >
              * {showErrorMessage ? errors.phone.message : 'Campo Obrigatório'}
            </span>
          )}
          <input 
            type="tel" 
            id="phone" 
            {...register('phone', { required: 'Campo obrigatório' })}
            placeholder="Telefone de Contato"
          />
        </div>
      </div>

      <div>
        {errors.howDidYouKnow && (
          <span
            className={styles.errorMessage}
            onClick={() => setShowErrorMessage(!showErrorMessage)}
          >
            * {showErrorMessage ? errors.howDidYouKnow.message : 'Campo Obrigatório'}
          </span>
        )}
        <textarea
          id="howDidYouKnow" 
          {...register('howDidYouKnow', { required: 'Campo obrigatório' })}
          placeholder="Como você conheceu a Atlética Panterão?"
        />
      </div>

      <div>
      {errors.proposal && (
          <span
            className={styles.errorMessage}
            onClick={() => setShowErrorMessage(!showErrorMessage)}
          >
            * {showErrorMessage ? errors.proposal.message : 'Campo Obrigatório'}
          </span>
        )}
        <textarea id="proposal" {...register('proposal')}  placeholder="Conte para nós um pouco sobre a sua proposta de patrocínio " />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormPatrocinio;
