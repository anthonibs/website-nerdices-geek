import { Figure } from "./styles";

interface IImageProps {
  title?: string;
  link?: string;
  image: string;
  size: string;
  expandImage: boolean;
}

const ImagemCustom = ({ title, link, image, size, expandImage}: IImageProps) => {
  return (
    <Figure size={size} expandImage={expandImage}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={link}>Ver mais</a>
    </Figure>
  );
};

export default ImagemCustom;