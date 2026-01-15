import './Contacto.css'

const Contacto = () => {
  return (
    <section id="contacto">
        {/* TÍTULO */}
        <div className="section-title">
          <h2>Contacto</h2>
          <p>Visítanos o comunícate con nosotros</p>
        </div>

        <div className="container contacto-grid">
        {/* LADO IZQUIERDO */}
        <div className="contacto-info">
          {/* Dirección */}
          <div className="direccion">
            <span className="pin">📍</span>
            <h3>Av. José Granda 3666, SMP, Lima</h3>
          </div>

          <p className="descripcion">
            Estamos ubicados en la transcurrida avenida José Granda, a pocas
            cuadras del óvalo José Granda. Te esperamos.
          </p>

          {/* Horario */}
          <div className="direccion">
            <span className="pin">⏰</span>
            <h3>Horario de atención</h3>
          </div>

          <p className="descripcion">
            Atendemos de lunes a sábado de 9 am a 6 pm.
          </p>

          <div className="social-icons">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/grandavet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/51949139386"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20 3.9A11.8 11.8 0 0 0 3.6 20.4L2 22l1.7-.4A11.8 11.8 0 1 0 20 3.9zm-8.2 16a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-2.9.8.8-2.8-.2-.3a9.4 9.4 0 1 1 7.4 3.8zm5.2-7.1c-.3-.1-1.7-.8-2-.9s-.4-.1-.6.1-.7.9-.8 1.1-.3.2-.6.1a7.7 7.7 0 0 1-2.3-1.4 8.6 8.6 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.3 0-.5-.6-1.5-.8-2-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.1 3c.1.2 2 3.2 5 4.5.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4s-.2-.2-.5-.3z"/>
              </svg>
            </a>

            {/* Google Maps */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* LADO DERECHO */}
        <div className="contacto-mapa">
          <iframe
            title="Mapa Clínica Veterinaria José Granda"
            src="https://www.google.com/maps?q=Av.%20José%20Granda%203666&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Contacto
