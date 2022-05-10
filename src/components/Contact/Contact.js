import SocialIcons from "../default/SocialIcons";
import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="container">
      <h1>Contacto</h1>
      <p className="contact-info">
        If you have any questions, please don't hesitate to get in touch with
        us.
      </p>
      <a href="mailto:info@mispartituras.com">
        <h2 className="email">info@mispartituras.com</h2>
      </a>
      <SocialIcons color="#efefef" size="3rem" className="contact-social" />
    </section>
  );
}

export default Contact;
