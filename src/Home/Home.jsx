import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import lethalImage from '../images/lethal.jpg';
import coilhead from '../images/coilhead.png';
import jester from '../images/jester.webp';
import forestkeeper from '../images/forestkeeper.webp';

function Box(props) {
  return (
    <div className="monster-box" onClick={props.onClick}>
      <img src={props.image} className="monster-image" alt={props.title} />
      <h2 className='title'>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

function Home() {
  const monsters = [
    { image: coilhead, title: "Coilhead", to: "/coilhead" },
    { image: jester, title: "Jester", to: "/jester" },
    { image: forestkeeper, title: "Forestkeeper", to: "/forest-keeper" },
  ];

  return (
    <div className='container'>
      <img src={lethalImage} alt="lethal" className='lethalimage' />
      <div className="monsters-buttons">
        {monsters.map((monster, index) => (
          <Link key={index} to={monster.to}>
            <Box
              image={monster.image}
              title={monster.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
