import { Helmet } from "react-helmet";
import Banner from "./Banner";
import CountrySection from "./CountrySection";
import GetOffer from "./GetOffer";
import TouristsSpots from "./TouristsSpots";
import TopGuide from "./TopGuide";
import AboutAU from "./AboutAU";


const Home = () => {
    return (
        <div className="">
              <Helmet>
                <title>Trek Trove | Home</title>
            </Helmet>
            <Banner></Banner>
            <TouristsSpots></TouristsSpots>
            
            <CountrySection></CountrySection>
            <GetOffer></GetOffer>
            <TopGuide></TopGuide>
            <AboutAU></AboutAU>
          
        </div>
    );
};

export default Home;