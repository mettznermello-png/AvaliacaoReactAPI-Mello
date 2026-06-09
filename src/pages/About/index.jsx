import './style.css'
import { Link } from 'react-router-dom'

function About() {

    return (

        <>
            <h2>
                about
            </h2>
            
              <Link to="/">
                <button>
                    Home
                </button>
            </Link>
        </>

    )

}

export default About