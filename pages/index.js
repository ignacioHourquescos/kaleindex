
import Header from '../section/Header/Header'
import Card from '../section/Portfolio/Portfolio'
import Head from 'next/head'


const Home = () => {
  return (
    <>
      <Head>
        <title>KALE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="agencia creativa digital" />
        <meta property="og:title" content="kaleindex" />
        <meta property="og:description" content="agencia creativa digital" />
        <meta property="og:image" content="/kaleillustration.jpg" />
      </Head>
      <section style={{ scrollSnapAlign: "start" }}>
        <Header />
      </section>

      <Card />


      {/* <Portfolio/>    */}

    </>
  )
}

export default Home;