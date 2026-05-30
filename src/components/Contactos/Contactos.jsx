import React, { useState } from "react";
import "./Contactos.css";

const Contactos = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSmsSubmit = async (event) => {
    event.preventDefault();
    setStatus("");
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setStatus("Mensaje enviado correctamente a ambos contactos. Recibirás respuesta pronto.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Error al enviar SMS. Intenta de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contactos-page">
      <div className="contactos-content">
        <h1>Contactos</h1>
        <div className="contactos-grid">
          <article className="contactos-card">
            <h2>Información</h2>
            <p>
              Correo electrónico: <span className="placeholder">Por definir</span>
            </p>
            <p>
              Teléfono 1: <span className="placeholder">Por definir</span>
            </p>
            <p>
              Teléfono 2: <span className="placeholder">Por definir</span>
            </p>
          </article>

          <article className="contactos-card">
            <h2>Enviar SMS</h2>
            <p>
              Completa el formulario y enviaremos un SMS usando Twilio sin exponer los
              números de teléfono en la página.
            </p>
            <form className="sms-form" onSubmit={handleSmsSubmit}>
              <label>
                Nombre
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </label>

              <label>
                Correo electrónico (opcional)
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Tu correo"
                />
              </label>

              <label>
                Mensaje
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Escribe tu mensaje aquí"
                  rows="5"
                  required
                />
              </label>

              <button type="submit" className="sms-submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar SMS"}
              </button>
            </form>

            {status && <p className="status-message">{status}</p>}
            {error && <p className="error-message">{error}</p>}
          </article>

          <article className="contactos-card">
            <h2>Redes Sociales</h2>
            <p>No contamos con perfiles sociales oficiales aún.</p>
            <p className="placeholder">Próximamente</p>
            <div className="social-list">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>WhatsApp</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
