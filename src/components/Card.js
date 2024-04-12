const Card = props => {
    return (
        <article className="card">
            <img src={props.image} alt={props.imageDescription} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </article>
    );
};

export default Card;