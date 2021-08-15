
import Header from '../section/Header/Header'
import Card from '../section/Portfolio/Portfolio'

const Home = () => {
  return (
    <>

      <section style={{ scrollSnapAlign: "start" }}>
        <Header />
      </section>
      <section style={{ scrollSnapAlign: "start" }}>
        <Card />
      </section>

      {/* <Portfolio/>    */}

    </>
  )
}

export default Home;