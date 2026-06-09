import './style.css'
import { Link } from 'react-router-dom'

function About() {

    return (

        <>
            <h2>
                About
            </h2>

            <p>
                Todos os direitos reservados a Joao Mello - @2026
            </p>
            
              <Link to="/">
                <button>
                    Home
                </button>
            </Link>
        </>

    )

}

export default About