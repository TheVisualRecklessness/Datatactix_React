import { Link } from "react-router-dom";
import RightArrow from "../assets/right_arrow_svg.svg";

const ActionButton = ({text, link}) => {
    return (
        <Link to={link} className="action-button">
            {text}
            <img src={RightArrow} alt="right arrow"></img>
        </Link>
    );
}

export default ActionButton;