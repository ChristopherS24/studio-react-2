import Navbar from "../components/Navbar";
import useCounterProva from "../hooks/useCounter";

function Contatti(){
    useCounterProva();

    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-3xl font-semibold">Contatti</h1>
        </>
    );
}

export default Contatti;