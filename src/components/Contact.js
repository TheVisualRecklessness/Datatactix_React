import '../Contact.css';
import RightArrow from "../assets/right_arrow_svg.svg";

const Contact = () => {
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
                    <form action='/contact' method='POST'>
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
                            <input className='input-form' type='text' id='company' name='company' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Correo electrónico *</label>
                            <input className='input-form' type='email' id='email' name='email' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Mensaje</label>
                            <textarea className='input-form' id='message' name='message'></textarea>
                        </div>
                        <button id='contact-form-submit' type='submit' className="learn-more-button">
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