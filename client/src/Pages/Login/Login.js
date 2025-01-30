import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://api.example.com/login', formData);
      if (response.status === 200) {
        alert("Connexion réussie !");
        navigate('/dashboard'); // Redirection vers le tableau de bord après connexion
      }
    } catch (error) {
      setError('Email ou mot de passe incorrect.');
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <div className="loginContainer">
      

      <form onSubmit={handleSubmit} className="loginForm">
        <img 
        src="https://www.tuntrust.tn/themes/medianet/image/png/logo_fr.png" 
        alt="logo" 
        className="logoImgLogin" 
      />

      <p className="loginTitle">Connectez-vous à votre interface</p>
        <input 
          type="email" 
          name="email" 
          placeholder="E-mail" 
          required 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Mot de passe" 
          required 
          onChange={handleChange} 
        />
        {error && <p className="errorText">{error}</p>}
        <button type="submit" className="loginBtn">Se connecter</button>

        <p className="LoginRedirect">
        Vous n'avez pas de compte ? <span onClick={() => navigate('/register')}>Inscrivez-vous</span>
      </p>
      </form>

      
    </div>
  );
};

export default Login;
