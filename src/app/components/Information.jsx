import react from "react";
import { data } from "./data";
import { Title } from "./Title";

export const Informacion = () => {
    return (
        <div className="container marketing">
            <Title />
            {data[0].empresas.map((empresa) => ( //iteración de data, ingresamos al primer elemento del array
                <div className="row featurette" key={empresa.id}>
                    <div className="col-md-7">
                        <h1 className="featurette-heading fw-normal lh-1"><b>{empresa.titulo}</b></h1><br />
                        <h2 className="featurette-heading fw-normal lh-1">Descripción</h2><br />
                        <p className="lead">{empresa.descripcion}</p><br />
                        <h3 className="featurette-heading fw-normal lh-1">Caracteristicas</h3><br />
                        <p className="lead">{empresa.caracteristicas}</p><br />
                    </div>
                    <div className="col-md-5">
                        <img src={empresa.imagen} className="bd-placeholder-img bd-placeholder-img-lg featurette-image mx-auto" width="350" height="350" style={{ marginBottom: 20 }} />
                    </div>
                    <hr className="featurette-divider" />
                </div>
            ))}
            <footer className="container">
                <p>© Desarrollado por Oscar Alberto Alas Guzmán | Estudiante de Ingenieria en ciencias de la computación.</p>
            </footer>
        </div>
    );
}
