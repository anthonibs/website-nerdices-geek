import { useParams } from "react-router-dom";
import ImagemCustom from "../../../components/ImageCustom";

import database from "../../../database.json";
import { SectionGames } from "./styles";


const GamesFromId = () => {

  const params = useParams();
  const gameIdFilter = database.games.filter(game => game.title === params.name);

  const { title, description, image } = gameIdFilter[0];
 
  return (
    <SectionGames>
      <div>
        <ImagemCustom
          image={image}
          expandImage={false}
        />
      </div>

      <h1>{title}</h1>
      <span>{description}</span>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat fuga tempore eligendi, numquam ipsam ea, reprehenderit quia, assumenda natus perferendis cumque. Hic placeat deserunt saepe fugit quis natus possimus!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ipsum, commodi dicta, perspiciatis a, voluptates impedit beatae voluptatum ullam iure quis laboriosam? Consequuntur explicabo esse earum nobis provident, modi vel.
      </p>
    </SectionGames>

  );
};


export default GamesFromId;