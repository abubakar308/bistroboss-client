
const Shared = ( {text, title}) => {
    return (
        <div className="text-center w-fit mx-auto my-8">
            <p className="text-yellow-500 border-b-2 p-3">---{text}---</p>
            <h3 className="uppercase text-3xl border-b-2 p-3">{title}</h3>
        </div>
    );
};

export default Shared;