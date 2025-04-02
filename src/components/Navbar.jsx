import Link from './Link';
// import { Link } from "react-router-dom";


function Navbar() {

    return (
        <>

        <div className='flex justify-center'>
            <ul className='flex gap-10 mb-10'>
                <li>
                    <Link>Hola</Link>
                </li>
                <li>
                    <Link>Chi siamo</Link>
                </li>
                <li>
                    <Link>Contatti</Link>
                </li>
                <li>
                    <Link>Dove trovarci</Link>
                </li>
            </ul>
        </div>

        </>
    );
}

export default Navbar;