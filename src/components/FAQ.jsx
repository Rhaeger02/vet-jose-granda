import './FAQ.css'
import { useState } from 'react'

const faqs = [
  { q: '🚨 ¿Atienden emergencias?', a: 'Por supuesto. La vida de tu mascota es nuestra prioridad.' },
  { q: '💉 ¿Vacunan mascotas?', a: 'Contamos con vacunación completa para el mejor control de salud de tu mascota.' },
  { q: '🐶🐱 ¿Atienden gatos y perros?', a: '¡Claro que sí! Es nuestra especialidad con nuestro personal calificado.' },
  { q: '⏰ ¿Horarios de atención?', a: 'Atendemos de lunes a sábado de 9:00 am a 6:00 pm.' },
  { q: '📍 ¿Dónde están ubicados?', a: 'Encuéntranos en Av. José Granda 3666, SMP, a 6 cuadras del óvalo José Granda.' },

  { q: '💉🐾 ¿Cada cuánto se vacuna un perro o gato?', a: 'Los cachorros y gatitos inician su vacunación desde las 6 a 8 semanas. En adultos, las vacunas se refuerzan una vez al año.' },
  { q: '🩺 ¿Cada cuánto debo llevar a mi mascota a chequeo?', a: 'Se recomienda un chequeo general cada 6 a 12 meses. Las mascotas mayores pueden requerir controles más frecuentes.' },
  { q: '🛁 ¿Cada cuánto tiempo se debe bañar a una mascota?', a: 'Los perros pueden bañarse cada 3 a 4 semanas. Los gatos solo en casos especiales o por indicación veterinaria.' },
  { q: '⏱️ ¿Cuánto dura un baño veterinario?', a: 'El baño dura entre 30 y 60 minutos, dependiendo del tamaño, pelaje y servicios adicionales.' },
  { q: '🦠 ¿Cada cuánto se debe desparasitar a perros y gatos?', a: 'La desparasitación se recomienda cada 3 meses para prevenir parásitos internos y externos.' },
  { q: '✂️ ¿A qué edad se puede esterilizar una mascota?', a: 'Generalmente desde los 5 o 6 meses de edad, previa evaluación del veterinario.' },
  { q: '🚨🐾 ¿Qué señales indican que debo llevar a mi mascota al veterinario?', a: 'Decaimiento, vómitos, diarrea, fiebre, falta de apetito o cambios de conducta son señales de alerta.' },
  { q: '🦷 ¿Las mascotas necesitan limpieza dental?', a: 'Sí. Se recomienda una limpieza dental profesional una vez al año y cuidados dentales en casa.' },
  { q: '❤️🐾 ¿Puedo llevar a mi mascota aunque no esté enferma?', a: 'Sí. Las visitas preventivas ayudan a detectar problemas a tiempo y mejorar su calidad de vida.' }
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq">
      <div className="container">
        <div className="section-title">
          <h2>Preguntas Frecuentes</h2>
        </div>

        {faqs.map((f, i) => (
          <div
            className={`faq-item ${open === i ? 'open' : ''}`}
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
