import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Menu from "../components/Menu";
import Onlineorder from "../components/Onlineorder";

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
        </div>
    );
};

export default Home;