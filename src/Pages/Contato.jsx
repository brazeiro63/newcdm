import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../components/Form/Input';
import Select from '../components/Form/Select';
import DatePicker from '../components/Form/DatePicker';

import { registerLocale, setDefaultLocale } from 'react-datepicker';
import { ptBR } from 'date-fns/locale/';

function Contato() {
  registerLocale('ptBR', ptBR);
  setDefaultLocale('ptBR');
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .typeError('O nome deve conter apenas letras')
          .min(3, 'O nome deve ter mais de 2 letras')
          .required('O nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        city: Yup.string().required('Você precisa escolher um destino'),
        StartDate: Yup.date().required('A data de check-in é obrigatória'),
        EndDate: Yup.date().required('A data de check-out é obrigatória'),
        quantity: Yup.number()
          .typeError('A quantidade de possoas deve ser um número')
          .integer('Informe um número inteiro')
          .positive('O número de pessoas deve ser maior que zero')
          .required('A quantidade de pessoas é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      console.log(data);

      reset();
      formRef.current.setErrors([]);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });
        // formRef.current.setErrors(errorMessages);
        console.log(err.errors);
      }
    }
  }

  const selectOptions = [
    { value: '', label: 'Selecione um destino', capacity: 0 },
    { value: 'morro', label: 'Morro de São Paulo - BA', capacity: 8 },
    { value: 'muro', label: 'Muro Alto - PE', capacity: 4 },
    { value: 'porto', label: 'Porto de Galinhas - PE', capacity: 10 },
    { value: 'pajucara', label: 'Maceió - AL', capacity: 6 },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <div className="pages--text--body form--container">
        <h1>Formulário de pedido de reserva</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" label={'Nome: '} />
          <Input name="email" label={'E-mail: '} />
          <Select name="city" label={'Destino: '}>
            {selectOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <DatePicker
            name="StartDate"
            label="Data de Entrada: "
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            name="EndDate"
            label="Data de Saída"
            dateFormat="dd/MM/yyyy"
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />

          <Input name="quantity" label={'Nº de pessoas: '} />
          <button type="submit">Solicitar Reserva</button>
        </Form>
      </div>
    </>
  );
}

export default Contato;
