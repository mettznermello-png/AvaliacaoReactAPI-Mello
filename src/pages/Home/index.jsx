import './style.css'
import { Link } from 'react-router-dom'
import Card from './components/Card'

function Home() {

    return (
        

        <>
            <h2>
            Home
            </h2>
             <Link to="/api">
                <button>
                    Futurama
                </button>
            </Link>
              <Link to="/about">
                <button>
                    About
                </button>
            </Link>
              <Link to="/seila">
                <button>
                    sei lá o que botar aqui - vai na fé
                </button>
            </Link>
        </>

    )

}

export default Home