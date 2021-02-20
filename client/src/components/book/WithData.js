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
      coverImageUrlMedium:"http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg",
      title:"Decision in Normandy",
      author:"Carlo D'Este",
      publication:1991,
      copies: 9,
      isbn:"0060973129",
    },
    {
      id:3,
      coverImageUrlMedium:"https://m.media-amazon.com/images/I/71Ro+tqZsEL._AC_UY218_.jpg",
      title:"Decision in Normandy",
      author:"Carlo D'Este",
      publication:1991,
      copies: 9,
      isbn:"0060973129",
    },
    {
      id:4,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg",
      title:"Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It",
      author:"Gina Bari Kolata",
      publication: 1999,
      copies:1,
      isbn:"0374157065",
    },
    {
      id:5,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg",
      title:"The Mummies of Urumchi",
      author:"E. J. W. Barber",
      publication:1999,
      copies:7,
      isbn:"0393045218",
    },
    {
      id:6,
      coverImageUrlMedium:"https://m.media-amazon.com/images/I/81a1jR0JwnL._AC_UY218_.jpg",
      title:"The Kitchen God's Wife",
      author:'Amy Tan',
      publication:1991,
      copies: 1,
      isbn:"0399135782",
    },
    {
      id:7,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0425176428.01.MZZZZZZZ.jpg",
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
      coverImageUrlMedium:"https://m.media-amazon.com/images/I/414R5uDqXAL._AC_UY218_.jpg",
      title:"Under the Black Flag: The Romance and the Reality of Life Among the Pirates",
      author:"David Cordingly",
      publication:1996,
      copies: 6,
      isbn:"0679425608",
    },
    {
      id:10,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0771074670.01.MZZZZZZZ.jpg",
      title:"Nights Below Station Street",
      author:"David Adams Richards",
      publication:1988,
      copies:6,
      isbn:"0771074670",
    },
    {
      id:11,
      coverImageUrlMedium:"http://images.amazon.com/images/P/080652121X.01.MZZZZZZZ.jpg",
      title:"Hitler's Secret Bankers: The Myth of Swiss Neutrality During the Holocaust",
      author:"Adam Lebor",
      publication:2000,
      copies: 8,
      isbn:"080652121X",
    },
    {
      id:12,
      coverImageUrlMedium:"http://images.amazon.com/images/P/0887841740.01.MZZZZZZZ.jpg",
      title:"The Middle Stories",
      author:"Sheila Heti",
      publication:2004,
      copies:7,
      isbn:"0887841740",
    },

  ];

  return function (){
    return <Component covers={covers}></Component>;
  };
}

export default withData;
