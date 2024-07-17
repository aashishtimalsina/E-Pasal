
import HeroSection from "../../components/HeroSection/HeroSection"
import Service from "../../components/service/Service"
import Gallery from "../../components/gallery/Gallery"
import Testemonials from "../../components/Testemonials/Testemonials"

const Home = () => {
  return (
    <>
      <div className="">
      <HeroSection />
      <Service />
      <Gallery />
      <Testemonials />
      </div>
    </>
  )
}

export default Home