import React from "react";
import { data } from "./data";
import { Title } from "./Title";

export const Informacion = () => {
  return (
    <div className="container marketing my-5">
      <Title />
      {data[0].empresas.map((empresa) => ( //mapeo de data con el primer valor del array
        <div className="row featurette mb-5" key={empresa.id}>
          <div className="col-md-7 order-md-2 d-flex flex-column justify-content-center">
            <h1 className="featurette-heading fw-bold lh-1 mb-3">
              <b>{empresa.titulo}</b>
            </h1>
            <h2 className="featurette-subheading fw-light lh-1 mb-3" style={{color: "red"}}>
              Descripción
            </h2>
            <p className="lead mb-4" style={{textAlign: "justify"}}>{empresa.descripcion}</p>
            <h3 className="featurette-subheading fw-light lh-1 mb-3" style={{color: "blue"}}>
              Características
            </h3>
            <p className="lead" style={{textAlign: "justify"}}>{empresa.caracteristicas}</p>
          </div>
          <div className="col-md-5 order-md-1">
            <div className="image-container d-flex justify-content-center align-items-center">
              <img
                src={empresa.imagen}
                alt={empresa.titulo}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded"
                width="350"
                height="350"
              />
            </div>
            <br />
          </div>
          <hr />

        </div>
      ))}
      <hr />
      <footer className="container text-center mt-5">
        <p>© Desarrollado por Oscar Alberto Alas Guzmán | Estudiante de Ingeniería en Ciencias de la Computación.</p>
      </footer>
    </div>
  );
};
