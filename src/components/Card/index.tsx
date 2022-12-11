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
  return (
    <CardItem>
      <ImagemCustom
        image={image}
        link={link}
        size="10px"
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

        <a href="#">Ler notícia</a>
      </div>
    </CardItem>
  );
};

export default Card;