import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

import Input from '../components/Form/Input';
import Select from '../components/Form/Select';
import DatePicker from '../components/Form/DatePicker';

function Contato() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  const selectOptions = [
    { value: 'morro', label: 'Morro de São Paulo - BA' },
    { value: 'muro', label: 'Muro Alto - PE' },
    { value: 'porto', label: 'Porto de Galinhas - PE' },
    { value: 'pajucara', label: 'Maceió - AL' },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <h1>Pagina de Contato</h1>
      <p>Conteudo da página</p>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label={'Nome: '} />
        <Input name="e-mail" label={'E-mail: '} />
        <Select name="city" label="Destino">
          {selectOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <DatePicker
          name="StartDate"
          label="Check-in"
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          name="EndDate"
          label="Check-out"
          dateFormat="dd/MM/yyyy"
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />

        <Input name="quantity" label={'Número de pessoas: '} />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}

export default Contato;
