import '../styles/Contact.css';
import RightArrow from "../assets/right_arrow_svg.svg";
import { useEffect, useState } from 'react';
import axios from 'axios';

const updateLabelOnFocus = (e) => {
    const label = document.querySelectorAll('.label-contact');
    const input = e.target;

    label.forEach((item) => {
        if (item.htmlFor === input.id) {
            item.classList.add('input-label-active');
            item.classList.add('input-label-focus');
        }
    });
};

const updateLabelOnBlur = (e) => {
    const label = document.querySelectorAll('.label-contact');
    const input = e.target;

    if (input.value === '') {
        label.forEach((item) => {
            if (item.htmlFor === input.id) {
                item.classList.remove('input-label-active');
            }
        });
    }
    label.forEach((item) => {
        if (item.htmlFor === input.id) {
            item.classList.remove('input-label-focus');
        }
    });
};

const Contact = () => {
    const [alert, setAlert] = useState(true);
    useEffect(() => {
        const form = document.getElementById('contact-form');
        const inputs = form.querySelectorAll('input, textarea');
        const submitButton = document.getElementById('contact-form-submit');

        const validateForm = () => {
            const email = form.querySelector('input[type="email"]');
            const message = form.querySelector('textarea');

            if (email.validity.valid && message.value !== '') {
                submitButton.disabled = false;
                submitButton.classList.add('submit-enabled');
                submitButton.classList.remove('submit-disabled');
            } else {
                submitButton.disabled = true;
                submitButton.classList.remove('submit-enabled');
                submitButton.classList.add('submit-disabled');
            }
        };

        const alertText = document.querySelector('.alert-text');

        const handleSubmit = (e) => {
            e.preventDefault();

            const name = form.querySelector('input[name="name"]').value;
            const phone = form.querySelector('input[name="phone"]').value;
            const company = form.querySelector('input[name="company"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const message = form.querySelector('textarea[name=message]').value;

            axios.post("http://localhost:5000/", { name, phone, company, email, message})
                .then((response) => {
                    setAlert(true);

                    alertText.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible.";
                    alertText.classList.add('alert-success');

                    setTimeout(() => {
                        alertText.classList.remove('alert-success');
                        alertText.classList.add('alert-fade');
                    }, 5000);
                })
                .catch((error) => {
                    setAlert(true);
                    alertText.classList.add('alert-error');
                    alertText.textContent = "¡Oh no! Algo salió mal. Por favor, inténtalo de nuevo más tarde.";

                    setTimeout(() => {
                        alertText.classList.remove('alert-error');
                        alertText.classList.add('alert-fade');
                    }, 5000);
                });

            setTimeout(() => {
                form.reset();
                submitButton.disabled = true;
            }, 500);
        };

        inputs.forEach((input) => {
            input.addEventListener('input', validateForm);
        });

        form.addEventListener('submit', handleSubmit);

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener('input', validateForm);
            });

            form.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return (
        <>
            <section id="contact-section" className='contact-form-section'>
                <article id='contact-form-article'>
                    <div id='contact-message'>
                        <h2>Contáctanos</h2>
                        <p>
                            Envíanos un mensaje o agenda una reunión con nosotros 
                            a través del siguiente formulario. Nos pondremos en contacto 
                            contigo lo más pronto posible.
                        </p>
                    </div>
                    <form id='contact-form' method='POST'>
                        <div className='form-group'>
                            <label className='label-contact' htmlFor='name'>Nombre</label>
                            <input className='input-form' type='text' id='name' name='name' onBlur={updateLabelOnBlur} onFocus={updateLabelOnFocus}/>
                        </div>
                        <div className='form-group'>
                            <label className='label-contact' htmlFor='phone'>Teléfono</label>
                            <input className='input-form' type='tel' id='phone' name='phone' onBlur={updateLabelOnBlur} onFocus={updateLabelOnFocus}/>
                        </div>
                        <div className='form-group'>
                            <label className='label-contact' htmlFor='company'>Empresa</label>
                            <input className='input-form' type='text' id='company' name='company' onBlur={updateLabelOnBlur} onFocus={updateLabelOnFocus}/>
                        </div>
                        <div className='form-group'>
                            <label className='label-contact' htmlFor='email'>Correo electrónico *</label>
                            <input className='input-form' type='email' id='email' name='email' onBlur={updateLabelOnBlur} onFocus={updateLabelOnFocus} required/>
                        </div>
                        <div className='form-group'>
                            <label className='label-contact' htmlFor='message'>Mensaje *</label>
                            <textarea className='input-form' id='message' name='message' onBlur={updateLabelOnBlur} onFocus={updateLabelOnFocus} required></textarea>
                        </div>
                        <button id='contact-form-submit' type='submit'>
                            Enviar
                            <img src={RightArrow} alt="right arrow"></img>
                        </button>
                    </form>
                </article>
                {alert && <div className='alert'>
                        <p className='alert-text'></p>
                        </div>}
            </section>
            
        </>
    );
};

export default Contact;