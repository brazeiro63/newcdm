import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const YOUR_SERVICE_ID = 'service_wv1tukv';
  const YOUR_TEMPLATE_ID = 'template_55ehkes';
  const YOUR_PUBLIC_KEY = 'rYDlMqCnWNp47e9qR';
  const template_parms = {
    from_name: form.current._name.value,
    from_email: form.current._email.value,
    dest_city: form.current._city.value,
    // start_date: form.current._startDate,
    // end_date: form.current._endDate,
    // nr_people: form.current._nrPeople,
  };

  const sendEmail = e => {
    e.preventDefault();
    console.log(template_parms);

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, template_parms, YOUR_PUBLIC_KEY).then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      },
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="_name" />
      <label>Email</label>
      <input type="email" name="_email" />
      <label>Message</label>
      <textarea name="_city" />
      <input type="submit" value="Send" />
    </form>
  );
};
