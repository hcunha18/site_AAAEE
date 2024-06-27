import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/FormPatrocinio.module.css';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function FormPatrocinio() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, 'patrocinios'), data);
      alert('Sua proposta foi enviada com sucesso!');
      reset(); 
    } catch (e) {
      console.error('Erro ao adicionar documento: ', e);
      alert('Erro ao enviar dados. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          {errors.fullName && (
            <span className={styles.errorMessage}>* Campo Obrigatório</span>
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
            <span className={styles.errorMessage}>* Campo Obrigatório</span>
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
            <span className={styles.errorMessage}>* {errors.email.message}</span>
          )}
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Endereço de e-mail inválido'
              }
            })}
            placeholder="E-mail de Contato"
          />
        </div>

        <div className={styles.formFieldTelefone}>
          {errors.phone && (
            <span className={styles.errorMessage}>* {errors.phone.message}</span>
          )}
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: 'Telefone inválido'
              }
            })}
            placeholder="Telefone de Contato"
          />
        </div>
      </div>

      <div>
        {errors.howDidYouKnow && (
          <span className={styles.errorMessage}>* Campo Obrigatório</span>
        )}
        <textarea
          id="howDidYouKnow"
          {...register('howDidYouKnow', { required: 'Campo obrigatório' })}
          placeholder="Como você conheceu a Atlética Panterão?"
        />
      </div>

      <div>
        {errors.proposal && (
          <span className={styles.errorMessage}>* Campo Obrigatório</span>
        )}
        <textarea
          id="proposal"
          {...register('proposal', { required: 'Campo obrigatório' })}
          placeholder="Conte para nós um pouco sobre a sua proposta de patrocínio "
        />
      </div>

      <div className={styles.buttonPosition}>
        <button type="submit">Enviar</button>
      </div>

    </form>
  );
}

export default FormPatrocinio;
