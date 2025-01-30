import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='homeComp'>
      <img src='https://www.tuntrust.tn/themes/medianet/image/png/logo_fr.png' alt='logo' className='logoImg' />
      <p className='description' >Cette plateforme permet ainsi de gagner en efficacité, de réduire les erreurs humaines et de garantir une gestion proactive des compétences et des certifications à l’échelle de l’entreprise. Elle constitue un véritable levier pour la performance, en alignant les ressources humaines avec les objectifs à long terme de l'organisation.</p>
      <button className='getStartBtn'><Link to={"/register"} className='link'>Commencer</Link></button>
      <p className='GoLoginBtn'>Vous avez déjà un compte ? <span>Connectez-vous maintenant...</span></p>
    </div>
  )
}

export default Home
