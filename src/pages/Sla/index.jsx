import './style.css'
import { Link } from 'react-router-dom'

function Sla() {

    return (

        <>
            <h1>
                Sei lá - teste 
            </h1>

            <h6>
                - compara o que funciona e o que nao funciona, boa sorte ok -
            </h6>

            <Link to="/">
                <button>
                    Home
                </button>
            </Link>

        </>

    )

}

export default Sla