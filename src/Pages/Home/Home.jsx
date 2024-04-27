import Banner from "./Banner";
import CountrySection from "./CountrySection";
import GetOffer from "./GetOffer";
import TouristsSpots from "./TouristsSpots";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <TouristsSpots></TouristsSpots>
            
            <CountrySection></CountrySection>
            <GetOffer></GetOffer>
          
        </div>
    );
};

export default Home;