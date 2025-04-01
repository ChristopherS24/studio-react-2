// function Card({ title, imgURL, children })
function Card({ title, imgURL, isVisited, description }) {
    // const title = props.title;
    // const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, odio quia pariatur quod soluta optio!"
    // const imgURL = props.imgURL
    const visitedLabel = isVisited ? "visitata" : "non visitata";
    return (
        <div className="rounded-md bg-zinc-950">
            <img src={imgURL} alt=""></img>
            <div className="flex flex-col p-3">
                <h3 className="text-2xl text-red-800 font-bold">
                    {title}
                </h3>
                <p className="text-white">
                    {description}
                </p>
                <span> {visitedLabel} </span>
                {/* {isVisited ? <span>visitata</span> : <span>non visitata</span>} (soluzione alternativa)*/}
                {/* {isVisited && <span>visitata</span>} (soluzione alternativa con solo una stampa su schermo)*/}

                {/* <p className="text-white"> {children} </p> (soluzione alternativa)*/}
            </div>
        </div>
    )
}

export default Card;