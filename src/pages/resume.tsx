import React, { ReactElement } from "react"
import Layout from "../components/layout"

interface Props {}

interface Experience {
  id: number
  position: string
  company: string
  timeLine: string
  description: string
}

const experience: Experience[] = [
  {
    id: 1,
    position: "Frontend-end developer",
    company: "RMG",
    timeLine: "ene 2019 - abr 2020",
    description:
      "Siendo asignado al Grupo El Comercio, formé parte de un gran equipo encargado de reconstruir y migrar sus sitios web (Gestión, El Comercio, Perú21, Depor, Publimetro, Trome, Diario Correo, Ojo y Bocón) a ARC Publishing, un CMS de The Washington Post.",
  },
  {
    id: 2,
    position: "Frontend-end developer",
    company: "Grupo Avatar PUCP",
    timeLine: "jul 2018 - dic 2018",
    description:
      "Participé, como miembro de un gran equipo, en el desarrollo de una plataforma web para docentes que forma parte del proyecto Oráculo Matemágico, donde estuve a cargo de maquetar, programar y optimizar interfaces de usuario usando Angular, además de realizar la integración con el Back-End.",
  },
]

export default function resume({}: Props): ReactElement {
  return (
    <Layout title="Resume" icon="resume">
      {experience.map(({ id, position, company, timeLine, description }) => (
        <div className="mb-10" key={id}>
          <h2>{position}</h2>
          <div className="mt-2 mb-5">
            <h4>{company}</h4>
            <p className="text-secondary">{timeLine}</p>
          </div>
          <p>{description}</p>
        </div>
      ))}
    </Layout>
  )
}
