import { Link } from "react-router-dom";
import { Figure } from "./styles";

interface IImageProps {
  title?: string;
  link?: string;
  image: string;
  expandImage: boolean;
}

const ImagemCustom = ({ title, link, image, expandImage }: IImageProps) => {



  return (
    <Figure expandImage={expandImage}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Link to={`${link}`}>
        Ler mais
      </Link>
    </Figure>
  );
};

export default ImagemCustom;