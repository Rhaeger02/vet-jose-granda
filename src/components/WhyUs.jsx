import "./WhyUs.css";
import useWhyUsAnimation from "../hooks/useWhyUsAnimation";

const WhyUs = () => {
  useWhyUsAnimation();

  return (
    <section id="nosotros" className="nosotros">
      <h2>¿Por qué elegirnos?</h2>

      <div className="features">
        <div className="feature">
          <div className="icon">⏳</div>
          <h3>Más de 30 Años de Experiencia</h3>
          <p>
            Tres décadas dedicadas al cuidado y bienestar animal con amor y
            ciencia
          </p>
        </div>

        <div className="feature">
          <div className="icon">👨‍⚕️</div>
          <h3>Personal en Constante Capacitación</h3>
          <p>
            Nuestro equipo se actualiza regularmente con las últimas técnicas
            veterinarias
          </p>
        </div>

        <div className="feature">
          <div className="icon">❤️</div>
          <h3>Atención Personalizada</h3>
          <p>
            Estamos disponibles para emergencias y seguimiento continuo de cada
            paciente
          </p>
        </div>

        <div className="feature">
          <div className="icon">🏥</div>
          <h3>Tecnología de Vanguardia</h3>
          <p>
            Contamos con equipos modernos para diagnósticos precisos y
            tratamientos efectivos
          </p>
        </div>

        <div className="feature">
          <div className="icon">💲</div>
          <h3>Precios Accesibles y Transparentes</h3>
          <p>
            Ofrecemos calidad profesional con tarifas justas que se adaptan a tu
            economía
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
