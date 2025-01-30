// import React from 'react'
// import './register.css'

// const Register = () => {
//   return (
//     <div className='registerComp'>
//         <div className='info'>
//             <p>Cette platforme et cree pour des activiter personelle , sofe les employeur de notre entreprise peut connecter !</p>
//         </div>
//       <div className='registerForm'>
//         <input type='text' value={} placeholder='nom prenom' required />
//         <input type='text' value={} placeholder='age' required />
//         <input type='text' value={} placeholder='adresse' required />

//         <input type='email' value={} placeholder='e-mail' required />
//         <input type='text' value={entreprise} placeholder='' required />
//         <div className=''>
//             <label className=''>Departement</label>
//             <select className=''>
//                 <option>D-T</option>
//                 <option>D-ARA</option>
//                 <option>D-SR</option>
//                 <option>D-SE</option>
//                 <option>G-PKI</option>
//                 <option>G-CE</option>
//                 <option>S-EGU</option>
//                 <option>S-ASU</option>
//             </select>
//         </div>

//         <input type='password' value={} placeholder='entre password' required />
//         <input type='password' value={} placeholder='confirmer password' required />

// <button className='registerBtn'>register</button>
//       </div>
//     </div>
//   )
// }

// export default Register





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    address: '',
    email: '',
    entreprise: 'tuntrust',
    department: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const response = await fetch('https://api.example.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        navigate('/login');
      } else {
        alert("Échec de l'inscription");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription", error);
    }
  };
  
  return (
    <div className='authContainer'>
      <div className='authBox'>
        <img src='https://www.tuntrust.tn/themes/medianet/image/png/logo_fr.png' alt='logo' className='logoImgRegister' />        
        <p className='descPRegister'>Cette plateforme est réservée aux employés de notre entreprise !</p>
        <form onSubmit={handleSubmit} className='authForm'>
          <input type='text' name='fullName' placeholder='Nom Prénom' required onChange={handleChange} />
          <input type='number' name='age' placeholder='Âge' required onChange={handleChange} />
          <input type='text' name='address' placeholder='Adresse' required onChange={handleChange} />
          <input type='email' name='email' placeholder='E-mail' required onChange={handleChange} />
          <input type='text' name='entreprise' value={formData.entreprise} placeholder='Entreprise' required readOnly  />
          <select name='department' required onChange={handleChange}>
                <option value=''>Sélectionner un département</option>
                <option value='D-T'>D-T</option>
                <option value='D-ARA'>D-ARA</option>
                <option value='D-SR'>D-SR</option>
                <option value='D-SE'>D-SE</option>
                <option value='G-PKI'>G-PKI</option>
                <option value='G-CE'>G-CE</option>
                <option value='S-EGU'>S-EGU</option>
                <option value='S-ASU'>S-ASU</option>
          </select>
          <input type='password' name='password' placeholder='Mot de passe' required onChange={handleChange} />
          <input type='password' name='confirmPassword' placeholder='Confirmer mot de passe' required onChange={handleChange} />
          <button type='submit' className='authBtn'>S'inscrire</button>
        </form>
        <p>Déjà un compte ? <span onClick={() => navigate('/login')}>Se connecter</span></p>
      </div>
    </div>
  );
};

export default Register;
