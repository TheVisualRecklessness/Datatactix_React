import '../Contact.css';
import RightArrow from "../assets/right_arrow_svg.svg";
import { useState } from 'react';


const Contact = () => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [disabledSubmit, setDisabledSubmit] = useState(true);

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
        if(e.target.value.length < 1){
            e.target.style.borderColor = 'red';
        }
        else {
            e.target.style.borderColor = 'black';
        }
        if(e.target.value.length < 1 || email.indexOf('@') < 0 || email.indexOf('.') < 0){
            setDisabledSubmit(true);
        }
        else {
            setDisabledSubmit(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if(e.target.value.indexOf('@') < 0 || e.target.value.indexOf('.') < 0){
            e.target.style.borderColor = 'red';
        }
        else {
            e.target.style.borderColor = 'black';
        }
        if(company.length < 1 || e.target.value.indexOf('@') < 0 || e.target.value.indexOf('.') < 0){
            setDisabledSubmit(true);
        }
        else {
            setDisabledSubmit(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log('Name:', e.target.name.value);
        console.log('Company:', e.target.company.value);
        console.log('Phone:', e.target.phone.value);
        console.log('Email:', e.target.email.value);
        console.log('Message:', e.target.message.value);
        e.target.reset();
        setCompany('');
        setEmail('');
    };
    return (
        <main>
            <section className='contact-form-section'>
                <article id='contact-form-article'>
                    <div id='contact-message'>
                        <h2>Contáctanos</h2>
                        <p>
                            Envíanos un mensaje o agenda una reunión con nosotros 
                            a través del siguiente formulario. Nos pondremos en contacto 
                            contigo lo más pronto posible.
                        </p>
                    </div>
                    <form action='/contact' method='POST' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Nombre</label>
                            <input className='input-form' type='text' id='name' name='name' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Teléfono</label>
                            <input className='input-form' type='tel' id='phone' name='phone' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='company'>Empresa *</label>
                            <input 
                                value={company} 
                                onChange={handleCompanyChange} 
                                className='input-form' 
                                type='text' id='company' 
                                name='company' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Correo electrónico *</label>
                            <input 
                                value={email} 
                                onChange={handleEmailChange} 
                                className='input-form' 
                                type='email' 
                                id='email' 
                                name='email' 
                                required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Mensaje</label>
                            <textarea className='input-form' id='message' name='message'></textarea>
                        </div>
                        <button 
                            id='contact-form-submit' 
                            type='submit' 
                            className="learn-more-button" 
                            disabled={disabledSubmit}
                        >
                            Enviar
                            <img src={RightArrow} alt="right arrow"></img>
                        </button>
                    </form>
                </article>
            </section>
        </main>
    );
};

export default Contact;