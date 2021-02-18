import React from 'react'

const aboutContainer={
  justifyContent:'flex-start',
  width:'100%',
  height:'auto',
  margin:'20px',
  textAlign:'left',
}

const aboutTitle = {
  borderBottom:'2px solid black',
  fontSize:'2rem',
  textAlign:'center',
  marginBottom:'1rem',
  marginTop:'25px',
};

const aboutUsStyle = {
  fontSize:'1.5rem',
  textAlign:'left',
  marginBottom:'1rem',
  marginTop:'50px',
};

const aboutBody = {
  fontSize:'1.2rem',
  marginBottom:'1rem',
};

const About = () => {
    return (
      <>
        <div style={aboutContainer}>
          <h1 style={aboutTitle}>ABOUT US</h1>
            <h2 style={aboutUsStyle}>What is it about coffee and books that makes life wonderful?</h2>
            <p style={aboutBody}>Bat Team's Coffee Shop, is a local book store focused on community building through books, fair trade coffee, and local restaurers. It is targeted at booklovers, coffee drinkers, adventurers, curious cats, authors and you. It offers feature releases and a host of events including live readings and writing workshops. But our best known service is our artisinal brews and mouth watering pasteries.</p>
        </div>
        </>
    )
}

export default About;
