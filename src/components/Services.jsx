import './Services.css'
import { useAnimation } from '../hooks/useAnimation'

const services = [
  {
    id: 1,
    img: '/img/img1.jpg',
    title: 'CONSULTAS',
    desc: 'Atención médica integral para evaluar el estado de salud de tu mascota, detectar problemas tempranos y orientar tratamientos adecuados.'
  },
  {
    id: 2,
    img: '/img/img2.jpg',
    title: 'TERAPIAS',
    desc: 'Aplicamos terapias especializadas para aliviar dolores, mejorar movilidad, acelerar recuperaciones y brindar bienestar a cada paciente.'
  },
  {
    id: 3,
    img: '/img/img3.jpg',
    title: 'IMÁGENES MÉDICAS',
    desc: 'Realizamos estudios de diagnóstico como ecografías y radiografías para obtener información precisa y apoyar decisiones veterinarias.'
  },
  {
    id: 4,
    img: '/img/img4.jpg',
    title: 'LABORATORIO Y FÁRMACOS',
    desc: 'Contamos con análisis clínicos rápidos y un surtido completo de medicamentos para asegurar diagnósticos certeros y tratamientos seguros.'
  },
  {
    id: 5,
    img: '/img/img5.jpg',
    title: 'VACUNACIÓN Y DESPARASITACIÓN',
    desc: 'Protegemos a tu mascota contra enfermedades y parásitos mediante esquemas preventivos que cuidan su salud en cada etapa de vida.'
  },
  {
    id: 6,
    img: '/img/img6.jpg',
    title: 'CIRUGÍAS',
    desc: 'Ofrecemos procedimientos quirúrgicos seguros con equipos modernos y monitoreo constante para garantizar una recuperación adecuada.'
  },
  {
    id: 7,
    img: '/img/img7.jpg',
    title: 'GROOMING',
    desc: 'Brindamos servicios de higiene y estética para mantener el pelaje saludable, reducir molestias y mejorar el bienestar general de tu mascota..'
  },
  {
    id: 8,
    img: '/img/img8.jpg',
    title: 'ACCESORIOS',
    desc: 'Disponemos de collares, camas, juguetes y artículos de cuidado diseñados para brindar confort, seguridad y estilo a tu compañero.'
  }
]

const Services = () => {
  return (
    <section id="servicios">
      <div className="container">
        <div className="section-title">
          <h2>Servicios</h2>
          <p>Conoce todo lo que ofrecemos para el cuidado de tu mascota</p>
        </div>

        <div className="services-grid">
          {services.map(service => {
            const ref = useAnimation()

            return (
              <div
                key={service.id}
                className="service-card"
                ref={ref}
                data-id={service.id}
              >
                <img src={service.img} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
