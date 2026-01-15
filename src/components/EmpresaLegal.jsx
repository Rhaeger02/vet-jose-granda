import "./EmpresaLegal.css";

const EmpresaLegal = () => {
  return (
    <section className="empresa-legal">
      <div className="empresa-legal-grid">

        {/* IZQUIERDA - IDENTIDAD */}
        <div className="empresa-info">
          <h3>Veterinaria José Granda</h3>
          <p>
            Más de 3 décadas dedicadas al cuidado, prevención y bienestar de tus
            mascotas, brindando una atención profesional, responsable y cercana
            a cada familia.
          </p>

          <div className="referencias">
            <a
              href="https://www.who.int"
              target="_blank"
              rel="noopener noreferrer"
            >
              Organización Mundial de la Salud (OMS)
            </a>

            <a
              href="https://www.woah.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Organización Mundial de Sanidad Animal
            </a>
          </div>
        </div>

        {/* CENTRO - EMPRESA */}
        <div className="empresa">
          <h4>Empresa</h4>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#faq">Preguntas Frecuentes</a>
        </div>

        {/* DERECHA - LEGAL */}
        <div className="legal">
          <h4>Legal</h4>
          <p className="link">Términos y Condiciones</p>
          <p className="link">Política de Privacidad</p>
          <p className="link">Aviso Legal</p>
        </div>

      </div>
    </section>
  );
};

export default EmpresaLegal;
