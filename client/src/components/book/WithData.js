import React from 'react';


function withData(Component){

  const covers = [
    {
      id:1,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
      title:"Classical Mythology",
      author:"Mark P. O. Morford",
      publication:2002,
      copies:2,
      isbn:"0195153448",
    },
    {
      id:2,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
      title:"Clara Callan",
      author:"Richard Bruce Wright",
      publication_year: 2001,
      copies:2,
      isbn:"0002005018",
    },
    {
      id:3,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg",
      title:"Decision in Normandy",
      author:"Carlo D'Este",
      publication:1991,
      copies: 9,
      isbn:"0060973129",
    },
    {
      id:4,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0060973129.01.MZZZZZZZ.jpg",
      title:"Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It",
      author:"Gina Bari Kolata",
      publication: 1999,
      copies:1,
      isbn:"0374157065",
    },
    {
      id:5,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg",
      title:"The Mummies of Urumchi",
      author:"E. J. W. Barber",
      publication:1999,
      copies:7,
      isbn:"0393045218",
    },
    {
      id:6,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg",
      title:"The Kitchen God's Wife",
      author:'Amy Tan',
      publication:1991,
      copies: 1,
      isbn:"0399135782",
    },
    {
      id:7,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0399135782.01.MZZZZZZZ.jpg",
      title:"What If?: The World's Foremost Military Historians Imagine What Might Have Been",
      author:"Robert Cowley",
      publication:2000,
      copies: 6,
      isbn:"0425176428",
    },
    {
      id:8,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0671870432.01.MZZZZZZZ.jpg",
      title:"PLEADING GUILTY",
      author:"Scott Turow",
      publication:1993,
      copies: 1,
      isbn:"0671870432",
    },
    {
      id:9,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0679425608.01.MZZZZZZZ.jpg",
      title:"Under the Black Flag: The Romance and the Reality of Life Among the Pirates",
      author:"David Cordingly",
      publication:1996,
      copies: 6,
      isbn:"0679425608",
    },
    {
      id:10,
      coverImageUrlMedium:"http://images.amazon.com/images/P/074322678X.01.MZZZZZZZ.jpg",
      title:"Where You'll Find Me: And Other Stories",
      author:"Ann Beattie",
      publication:2002,
      copies:7,
      isbn:"074322678X",
    },
    {
      id:11,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0679425608.01.MZZZZZZZ.jpg",
      title:"Under the Black Flag: The Romance and the Reality of Life Among the Pirates",
      author:"David Cordingly",
      publication:1996,
      copies: 6,
      isbn:"0679425608",
    },
    {
      id:12,
      coverImageUrlMedium:"http://images.amazon.com/images/P/074322678X.01.MZZZZZZZ.jpg",
      title:"Where You'll Find Me: And Other Stories",
      author:"Ann Beattie",
      publication:2002,
      copies:7,
      isbn:"074322678X",
    },

  ];

  return function (){
    return <Component covers={covers}></Component>;
  };
}

export default withData;
