import '../styles/Card.css';

const Card = props => {
    return (
        <article className="card">
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </article>
    );
};

export default Card;