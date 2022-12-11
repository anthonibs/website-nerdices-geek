import { Container, NavigateCards } from "./styles";

import database from "../../database.json";
import Card from "../../components/Card";


const Games = () => {

  return (
    <Container>
      <h1>Games</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quae iure fuga numquam laborum soluta omnis, ducimus laboriosam consequatur voluptate nostrum obcaecati cumque molestias odio possimus eum quia quo unde.
      </p>

      <p>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, numquam illum nostrum qui, vel dolores animi accusamus autem minima molestiae aut eveniet recusandae fugiat corporis voluptatum repudiandae veniam voluptatibus sequi.
       Nihil, expedita ipsum. Aliquam explicabo dolore suscipit sapiente atque, dicta, perferendis blanditiis corrupti laborum ipsam excepturi totam distinctio fugiat.
       Labore vitae dolorem, assumenda impedit a fuga ab asperiores similique debitis officiis ipsam nulla tenetur totam ducimus, exercitationem corporis laboriosam animi dolorum maiores delectus numquam perferendis laborum dicta! Consequuntur, aspernatur.
      </p>

      <NavigateCards>
        {database.games.map((game, index) => (
          <li key={index}>
            <Card
              title={game.title}
              description={game.description}
              image={game.image}
              link={`${game.title}`}
              expandImage
            />
          </li>
        ))}
      </NavigateCards>
    </Container>
  );
};


export default Games;