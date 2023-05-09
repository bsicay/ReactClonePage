import React, { useState } from 'react';
import PlayIcon from '@/assets/PlayIcon.svg';
import HeartIcon from '@/assets/HeartIcon.svg';


function Interface() {
  const components = ['Thumbnail', 'LikeButton', 'Video'];
  const [heartFilled, setHeartFilled] = useState(false);

  const toggleHeart = () => {
    setHeartFilled((prevState) => !prevState);
  };

  return (
    <section className="bg-[#1b1e24] min-h-screen flex flex-col items-center justify-center text-white py-16">
      <h1 className="text-5xl font-bold mb-2 text-center w-3/4 md:w-1/2 mx-auto py-6">Create user interfaces from components</h1>
      <h2 className="text-xl mb-6 text-center w-3/4 md:w-1/2 mx-auto mb-14">
        React lets you build user interfaces out of individual pieces called components. Create your own React
        components like{' '}
        {components.map((component, index) => (
          <>
            <span
              key={component}
              className="bg-[#404756] px-2 py-1 mx-1 rounded-2xl inline-block"
            >
              {component}
            </span>
            {index === components.length - 2 && ' and '}
            {index < components.length - 2 && index !== components.length - 1 && ', '}
          </>
        ))}
        . Then combine them into entire screens, pages, and apps.
      </h2>
      <div className="flex w-3/4 md:w-1/2 mx-auto gap-4">
        {/* Columna izquierda */}
        <div className="bg-[#16181d] p-4 flex-1 rounded-3xl">
          <h3 className="bg-[#23272f] px-2 py-1 text-white mb-4 inline-block rounded-3xl">Video.js</h3>
          <pre className="bg-[#16181d] p-4 rounded-3xl whitespace-pre-wrap">
{`function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}`}
          </pre>
        </div>
        {/* Columna derecha */}
        <div
          className="relative bg-gradient-to-br from-[#2e304b] via-[#2e304b] to-[#1a3b46] p-4 flex-1 h-[70%] rounded-3xl"
        >
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-br from-[#195a9b] via-[#12659a] to-[#097da4] p-4 rounded w-2/5 flex items-center justify-center">
              <img src={PlayIcon} alt="Play Icon" className="w-10 h-10" />
            </div>
            <div className="ml-4">
              <h3 className="mb-2">My Video</h3>
              <p className="mb-4">Video description</p>
            </div>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={toggleHeart}>
            <img src={HeartIcon} alt="Heart Icon" className={`w-8 h-8 ${heartFilled ? 'text-red-500' : ''}`} style={heartFilled ? { filter: 'none' } : { filter: 'grayscale(100%)' }} />
          </div>
        </div>
      </div>
      <h2 className="text-xl mb-6 text-center w-3/4 md:w-1/2 mx-auto py-16">
        Whether you work on your own or with thousands of other developers, using 
        React feels the same. It is designed to let you seamlessly combine components
        written by independent people, teams, and organizations.
      </h2>
      </section>
  );
}

export default Interface;