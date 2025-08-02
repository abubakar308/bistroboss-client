import { Parallax } from "react-parallax";

const Featured = () => {

    return (
        <Parallax strength={300}>
            <div className="bg-service bg-cover py-16">
            
            <div className="w-8/12 mx-auto z-10  text-center p-10 bg-white text-black">
                <h3 className="text-3xl">Bisto Boss</h3>
                <p>this is good reaturant</p>
            </div>
            
        </div>
        </Parallax>
    );
};

export default Featured;