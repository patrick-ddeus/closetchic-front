import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";

export default function formatStars(product){
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= product.rating) {
            stars.push(<FaStar key={i} style={{ color: "#BD9334", margin: "5px 1px", fontSize:"19px" }} />);
        } else if (i === Math.ceil(product.rating)) {
            stars.push(<FaStarHalfAlt key={i} style={{ color: "#BD9334", margin: "5px 1px", fontSize:"19px" }} />);
        }else{
            stars.push(<FaRegStar key={i} style={{ color: "#BD9334", margin: "5px 1px", fontSize:"19px" }} />);
        }
    }

    return stars
}