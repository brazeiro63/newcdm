import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import '../contato.css';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';

function Contato() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    destination: '',
    nrPeople: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [maxPeople, setMaxPeople] = useState(null);
  const [capacityError, setCapacityError] = useState(false);

  const maxPeopleOptions = [
    { name: 'maxPeopOpt', value: 'Selecione o Número de Hóspedes', key: 0 },
    { name: 'maxPeopOpt', value: 1, key: 1, disabled: 'disabled' },
    { name: 'maxPeopOpt', value: 2, key: 2, disabled: 'disabled' },
    { name: 'maxPeopOpt', value: 3, key: 3, disabled: 'disabled' },
    { name: 'maxPeopOpt', value: 4, key: 4, disabled: 'disabled' },
    { name: 'maxPeopOpt', value: 5, key: 5, disabled: 'disabled' },
    { name: 'maxPeopOpt', value: 6, key: 6, disabled: 'disabled' },
    { name: 'maxPeopOpt', value: 7, key: 7, disabled: 'disabled' },
    { name: 'maxPeopOpt', value: 8, key: 8, disabled: 'disabled' },
  ];
  const selectOptions = [
    { name: 'destOption', value: '', label: 'Selecione um destino', capacity: 0 },
    {
      name: 'destOption',
      value: 'Morro de São Paulo - BA',
      label: 'Morro de São Paulo - BA',
      capacity: 8,
    },
    { name: 'destOption', value: 'Muro Alto - PE', label: 'Muro Alto - PE', capacity: 4 },
    {
      name: 'destOption',
      value: 'Porto de Galinhas - PE',
      label: 'Porto de Galinhas - PE',
      capacity: 10,
    },
    { name: 'destOption', value: 'Maceió - AL', label: 'Maceió - AL', capacity: 6 },
  ];

  const handleNameInputChange = event => {
    setValues({ ...values, name: event.target.value });
  };

  const handleEmailInputChange = event => {
    setValues({ ...values, email: event.target.value });
  };

  const handleDestinationInputChange = event => {
    setValues({ ...values, destination: event.target.value });
    selectOptions.map(opt => {
      if (opt.label == event.target.value) {
        setMaxPeople(opt.capacity);
      }
    });
    console.log('No handleDestinationInputChange: maxPeople ', event.target.value, maxPeople);
  };
  const handleMaxNrPeopleOptions = maxSelected => {
    // if (maxP != null) {
    if (maxSelected > maxPeople) {
      setCapacityError(true);
    } else {
      setCapacityError(false);
    }
    console.log('No handleMaxNrPeopleOptions: maxPeople ', maxSelected, maxPeople);
    // }
  };

  const handleNrPeopleInputChange = event => {
    setValues({ ...values, nrPeople: event.target.value });
    handleMaxNrPeopleOptions(event.target.value);
  };

  const dateFormatAux = date => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
  };

  const dateFormat = date => {
    let formatDayMonthYear = dateFormatAux(date);

    return [formatDayMonthYear];
  };

  function handleSubmit(e) {
    e.preventDefault();
    let startDateDMY, endDateDMY;
    setSubmitted(true);

    if (startDate != null) startDateDMY = dateFormat(startDate);
    if (endDate != null) endDateDMY = dateFormat(endDate);

    console.log('Verifica a validacao');
    console.log(
      'validacao: ',
      values.name && values.email && values.destination && values.nrPeople,
      startDate,
      endDate,
      capacityError,
    );

    if (
      values.name &&
      values.email &&
      values.destination &&
      values.nrPeople &&
      startDate &&
      endDate &&
      !capacityError
    ) {
      setValid(true);
      console.log('Valido: ', valid, ' Submetido: ', submitted);
      const YOUR_SERVICE_ID = 'service_wv1tukv';
      const YOUR_TEMPLATE_ID = 'template_55ehkes';
      const YOUR_PUBLIC_KEY = 'rYDlMqCnWNp47e9qR';

      console.log(e);

      const template_parms = {
        from_name: values.name,
        from_email: values.email,
        dest_city: values.destination,
        nr_people: values.nrPeople,
        start_date: startDateDMY,
        end_date: endDateDMY,
      };

      // console.log('E-mail pseudo enviado.', template_parms);
      emailjs
        .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, template_parms, YOUR_PUBLIC_KEY)
        .then(Response => {
          console.log('Email enviado', Response.status, Response.text);
        });
    }
  }

  return (
    <div className="form-container">
      <h1 className="title">Solicitação de cotação</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Sucesso! Obrigado por entrar em contato.</div>
        ) : null}
        <input
          onChange={handleNameInputChange}
          value={values.name}
          id="name"
          className="form-field"
          type="text"
          placeholder="Nome completo"
          name="name"
        />
        {submitted && !values.name ? (
          <span id="name-error">Por favor, informe seu nome completo.</span>
        ) : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span id="email-error">Por favor, informe um email válido.</span>
        ) : null}
        <select
          onChange={handleDestinationInputChange}
          id="destination"
          name="destination"
          className="form-field"
          placeholder="Destino"
        >
          {selectOptions.map(option => (
            <option key={option.value} value={option.label}>
              {option.label} &nbsp;- Até &nbsp; {option.capacity}&nbsp; pessoas.
            </option>
          ))}
        </select>
        {submitted && !values.destination ? (
          <span id="destination-error">Por favor, selecione um destino.</span>
        ) : null}
        <select
          onChange={handleNrPeopleInputChange}
          value={values.nrPeople}
          id="npPeople"
          className="form-field"
          placeholder="Número de pessoas"
        >
          {maxPeopleOptions.map(option2 => (
            <option key={option2.key} value={option2.key}>
              {option2.value}
            </option>
          ))}
        </select>
        {submitted && (!values.nrPeople || capacityError) ? (
          <span id="nrPeople-error">Por favor, selecione a quantidade de hospedes.</span>
        ) : null}
        <ReactDatePicker
          label="Data de Entrada"
          placeholderText="Data de Entrada"
          id="start"
          className="form-field"
          selected={startDate}
          onChange={e => setStartDate(e)}
          dateFormat="dd/MM/yyyy"
          selectsStart
          startDate={startDate}
          minDate={new Date()}
          name="startdade"
        />
        {submitted && !startDate ? (
          <span id="startDate-error">Por favor, informe a data de check-in.</span>
        ) : null}
        <ReactDatePicker
          placeholderText="Data de Saída"
          id="end"
          className="form-field"
          selected={endDate}
          onChange={date => setEndDate(date)}
          dateFormat="dd/MM/yyyy"
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          name="enddate"
        />
        {submitted && !endDate ? (
          <span id="endDate-error">Por favor, informe a data de check-out.</span>
        ) : null}

        <button className="submitBtn" type="submit">
          Solicitar Cotação
        </button>
      </form>
    </div>
  );
}
export default Contato;
