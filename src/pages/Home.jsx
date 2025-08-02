import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Menu from "../components/Menu";
import Onlineorder from "../components/Onlineorder";
import FeaturedMenu from "../components/FeaturedMenu";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div>
           <Helmet>
           <title>this is home</title>
           </Helmet>
           <Banner></Banner>
           <Onlineorder></Onlineorder>
           <Featured></Featured>
           <Menu></Menu>
           <div className="bg-black p-8 text-white text-center">
        <p>Call Us: <a href="tel: +8801773398308">+8801773398308</a></p>
           </div>
           <FeaturedMenu></FeaturedMenu>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;