import { useEffect, useState } from "react";
import Shared from "../shared/Shared";
import { Link } from "react-router-dom";
import Menulist from "../shared/Menulist";

const Menu = () => {
    const [menues, setMenues] = useState([])
    useEffect(()=>{
        fetch('../../public/menu.json')
        .then(res=>res.json())
        .then(data=>{
            setMenues(data);
        })
    },[]);
    
    return (
        <div>
            <Shared text="Check it out" title="from our menu"></Shared>
        <div className="grid grid-cols-2 gap-3">
           {
            menues.slice(0,6).map(menu=> <Menulist key={menu._id}
            name={menu.name} recipe={menu.recipe}
            price={menu.price} image={menu.image}>

            </Menulist>
            )
           }
        </div>
       <Link className="flex justify-center">
       <button className="uppercase border-b-2 rounded-xl">View full menu</button>
       </Link>
            
        </div>
    );
};

export default Menu;