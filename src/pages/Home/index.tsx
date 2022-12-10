import database from "../../database.json";

import { Link } from "react-router-dom";
import ImagemCustom from "../../components/ImageCustom";
import Card from "../../components/Card";

import {
  Aside,
  BannerMain,
  CardItems,
  Container,
  NewsLatest,
  TitleHero
} from "./styles";

const Home = () => {
  return (
    <>
      <TitleHero>
        <h1>Pop Culture?
          <br />
          You &lsquo;ve Naped!
        </h1>

        <p>
          Naped can be your source of informations about
          movies, music, tv-shows and animes.
        </p>
      </TitleHero>

      <BannerMain id="banner-main">
        <div className="banner-main">
          <Link to="#">
            <span>Ver mais</span>
            <img src={database.bannerMain.image} alt={database.bannerMain.title} />
            <h2>{database.bannerMain.title}</h2>
          </Link>
        </div>


        <ImagemCustom
          image={"https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/45cd3de6acf23f58481db5e2ec2269be.jpeg"}
          link="/animes"
          size="12px"
          title={"Diretamente da TOHO animation 10th Anniversary Stage Event, tivemos a confirmação que a previsão de estreia da terceira temporada de Dr. Stone está marcada para a primavera norte-americana do próximo ano."}
          expandImage
        />

        <ImagemCustom
          image={"https://tm.ibxk.com.br/ms/images/highlights/000/047/448/44799.jpg?ims=1200x675"}
          link="/animes"
          size="12px"
          title="O adolescente Jaime Reyes ganha superpoderes quando um misterioso escaravelho se prende à sua coluna e lhe fornece uma poderosa armadura alienígena azul."
          expandImage
        />
      </BannerMain>

      <Container id="news">
        <CardItems>
          {database.notice.map((card, index) => (
            <Card key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              data={card.data}
              expandImage={false}
              link="#"
            />
          ))}
        </CardItems>

        <Aside>
          <h2>Notícias sobre jogos</h2>
          <hr />
          <ul>
            {database.games.map((game, index) => (
              <li key={index}>
                <a href="#">
                  <ImagemCustom key={index}
                    title={game.title}
                    size="12px"
                    image={game.image}
                    expandImage
                  />
                </a>
              </li>
            ))}
          </ul>
        </Aside>
      </Container>

      <NewsLatest id="news-latest">
        <h2>Últimas notícias</h2>
        <hr />
        <ul>
          {database.latestNews.map((newItem, index) => (
            <li key={index}>
              <ImagemCustom
                expandImage
                image={newItem.image}
                size="14px"
                link="#"
                title={newItem.description}
              />
            </li>
          ))}
        </ul>
      </NewsLatest>

    </>
  );
};

export default Home;