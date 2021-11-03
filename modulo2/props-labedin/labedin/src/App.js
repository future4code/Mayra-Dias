import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import PequenoCard from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/91347041?v=4" 
          nome="Mayra" 
          descricao="Oi, eu sou Mayra. Sou aluna da Labenu. Ta sendo um desafio para mim, estou gostando muito, é um mundo novo que eu cair de paraquedas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className= "container-do-email" >
      <PequenoCard
      imagem="https://cdn-icons-png.flaticon.com/512/116/116340.png"
      texto= "Email: mb509311@gmail.com"
      />
     
     <PequenoCard
      imagem="https://cdn-icons-png.flaticon.com/512/4820/4820122.png"    
        texto="Endereço: Rua do arenoso"
      />
  </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://st2.depositphotos.com/5563466/11029/v/950/depositphotos_110298308-stock-illustration-female-bank-teller-clerk-vector.jpg" 
          nome="Proctovasc Serviços Médicos LTDA(Aracaju)" 
          descricao="Fui recepcionista durante 6 meses." 
        />
        
        <CardGrande 
          imagem="https://st.depositphotos.com/2059701/2006/v/950/depositphotos_20065551-stock-illustration-smiling-cashier-girl.jpg" 
          nome="Novo Mix Bahia" 
          descricao="Estagiei durante 8 meses em um mercado. " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
