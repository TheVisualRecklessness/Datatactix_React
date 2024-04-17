const Card = props => {
    return (
        <article className="card">
            <img src={props.image} alt={props.imageDescription} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p className="card-id">{`Paso ${props.id}`}</p>
        </article>
    );
};

export default Card;