
const Menulist = ({name,recipe,price,image}) => {
    return (
        <div >
            <div className="flex gap-2">
                <img className="w-12 h-12 rounded-r-2xl rounded-b-2xl" src={image} alt="" />
                <div>
                    <p className="uppercase">{name}---------</p>
                    <p>{recipe}</p>
                </div>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Menulist;