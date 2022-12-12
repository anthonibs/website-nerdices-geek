import { Link, useLocation } from "react-router-dom";
import ImagemCustom from "../ImageCustom";
import { CardItem } from "./styles";

interface ICard {
  image: string;
  title: string;
  description: string;
  data?: string;
  link?: string;
  expandImage: boolean;
}




const Card = ({ title, description, image, data, expandImage, link }: ICard) => {
  const location = useLocation();

  return (
    <CardItem>
      <ImagemCustom
        image={image}
        link={link}
        expandImage={expandImage}
      />
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
        <span>{data}</span>

        <Link to={`${location.pathname}/${link}`}>
          Ler mais
        </Link>
      </div>
    </CardItem>
  );
};

export default Card;