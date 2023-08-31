import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import contactImg from '../assets/img/contact-img.svg';

import '../styles/components/Contact.sass';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_s2tv9ur', e.currentTarget, 'hbIapWZ78iiqPJKRH')
      .then(() => {
        toast.success('Mensagem enviada com sucesso');
      }, (error) => {
        toast.error(error.text);
      });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contactLogo">
        <img src={contactImg} alt="" />
      </div>
      <div className="form-container">
        <h2>Entre em contato</h2>
        <form onSubmit={sendEmail}>
          <input name="name" type="text" placeholder="Name" autoComplete="test" />
          <input name="email" type="email" placeholder="Email" autoComplete="" />
          <textarea name="message" cols={30} rows={10} placeholder="Mensagem" />
          <div className="btnSubmit">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default Contact;
