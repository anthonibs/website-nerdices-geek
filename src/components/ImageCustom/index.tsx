import { Link, useLocation } from "react-router-dom";
import { Figure } from "./styles";

interface IImageProps {
  title?: string;
  link?: string;
  image: string;
  size?: string;
  expandImage: boolean;
}

const ImagemCustom = ({ title, link, image, size, expandImage }: IImageProps) => {

  const location = useLocation();

  return (
    <Figure size={size} expandImage={expandImage}>
      <img src={image} alt={title} />
      <h3>{title}</h3>

      {size !== undefined
        && <Link to={`${location.pathname}/${link}`}>
          Ler mais
        </Link>
      }
    </Figure>
  );
};

export default ImagemCustom;