import { data } from "./data";

export const Title = () => {
    return (
        <>
            <hr className="featurette-divider" />

            {data.map(Description => (
                <h2 className="featurette-heading fw-normal lh-1 text-center">{Description.descripcion}</h2>
            ))}

            <hr className="featurette-divider" />
        </>
    )
}