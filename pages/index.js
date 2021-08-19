
import Header from '../section/Header/Header'
import Card from '../section/Portfolio/Portfolio'
import HeroDescMob from '../section/HeroDescMob/HeroDescMob'
import Head from 'next/head'
import { MobileView } from 'react-device-detect';
import Footer from '../components/Footer/Footer';




const Home = () => {
  return (
    <>
      <Head>
        <title>KALE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Agencia creativa digital" />
        <meta property="og:title" content="KALEINDEX" />
        <meta property="og:description" content="Agencia creativa digital." />
        <meta property="og:image" content="/Kaleog.jpg" />
      </Head>
      <section style={{ scrollSnapAlign: "center" }}>
        <Header />
      </section>
      <MobileView>
        <HeroDescMob />
      </MobileView>

      <Card />
      <section style={{ scrollSnapAlign: "center" }}>
        <Footer /
        ></section>


      {/* <Portfolio/>    */}

    </>
  )
}

export default Home;