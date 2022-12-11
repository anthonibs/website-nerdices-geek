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

        {database.bannerAside.map((item, index) => (
          <ImagemCustom key={index}
            image={item.image}
            link="/animes"
            size="12px"
            title={item.description}
            expandImage
          />
        ))}
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
                <ImagemCustom key={index}
                  title={game.title}
                  size="12px"
                  image={game.image}
                  expandImage
                />
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