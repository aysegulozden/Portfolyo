import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Teşekkürler ${form.name}, mesajını aldım!`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">İletişim</h2>
      <p className="section-sub">
        Yeni fırsatlara, iş birliklerine ve sohbete açığım.
      </p>
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-lead">
            Bir proje fikri, açık pozisyon ya da sadece merhaba için —
            yazmaktan çekinme.
          </p>
          <ul className="contact-links">
            <li>
              <a href="mailto:ozdenaysegul728@gmail.com">
                → ozdenaysegul728@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aysegulozden"
                target="_blank"
                rel="noreferrer"
              >
                → github.com/aysegulozden
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ozdenaysegul"
                target="_blank"
                rel="noreferrer"
              >
                → linkedin.com/in/ozdenaysegul
              </a>
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Ad
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            E-posta
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mesaj
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
