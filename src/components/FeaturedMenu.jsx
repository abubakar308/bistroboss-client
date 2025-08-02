import Shared from "../shared/Shared";
import featured from "../assets/home/featured.jpg"

const FeaturedMenu = () => {
    return (
        <div className="bg-featured bg-fixed pt-10 my-20 text-white">
            <Shared text={"check it out"} title={"from our menu"}>
            </Shared>
            <div className="md:flex px-36 pb-20 pt-12 justify-center bg-opacity-60 bg-slate-500">
        <div>
        <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMenu;