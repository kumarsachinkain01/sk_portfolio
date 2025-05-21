import React, { useEffect, useState } from 'react';

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    // Regenerate stars and meteors on window resize
    const handleResize = () => {
      generateStars();
      generateMeteors();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerHeight * window.innerWidth) / 10000);

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Random size between 1 and 4px
        x: Math.random() * window.innerWidth, // Pixel position
        y: Math.random() * window.innerHeight, // Pixel position
        opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Duration between 2 and 6 seconds
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 2, // Random size between 2 and 4px for visibility
        x: Math.random() * window.innerWidth, // Start anywhere horizontally
        y: Math.random() * window.innerHeight * 0.5, // Start in top half
        delay: Math.random() * 15, // Delay between 0 and 15 seconds
        animationDuration: Math.random() * 3 + 3, // Duration between 3 and 6 seconds
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-[var(--animate-pulse-subtle)]"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-[var(--animate-meteor)]"
          style={{
            width: `${meteor.size*15}px`,
            height: `${meteor.size*1}px`, // Thin for streak effect
            left: `${meteor.x}px`,
            top: `${meteor.y}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};







































// import React, { useEffect, useState } from 'react'

// // id , size , x, y, opacity , animationDUration
// // const generateStars = (numStars) => {
// //     const stars = [];
// //     for (let i = 0; i < numStars; i++) {
// //         const size = Math.random() * 2 + 1; // Random size between 1 and 3
// //         const x = Math.random() * window.innerWidth;
// //         const y = Math.random() * window.innerHeight;
// //         const opacity = Math.random();
// //         const animationDuration = Math.random() * 5 + 5; // Random duration between 5 and 10 seconds
// //         stars.push({ id: i, size, x, y, opacity, animationDuration });
// //     }
// //     return stars;

//  export const StarBackground = () => {
//     const [stars , setStars] = useState()

//     useEffect(()=>{
//         generateStars()
//     },[])

//     const generateStars =()=>{
//         const numberOfStars = Math.floor(window.innerHeight*window.innerWidth / 10000); 

//         const newStars = []; 

//         for(let i = 0 ; i < numberOfStars ; i++){
//             newStars.push({
//                 id : i,
//                 size : Math.random() * 3 + 1, // Random size between 1 and 3
//                 x : Math.random() * window.innerWidth,
//                 y : Math.random() * window.innerHeight,
//                 opacity : Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
//                 animationDuration : Math.random() * 4 + 2 // Random duration between 5 and 10 seconds
//             });
//         }
//         setStars(newStars);
//     }
//   return (
//     <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
//         {
//          stars.map((star)=>{
//             <div key={star.id} className='star animate-pulse-subtle' style={{
//                 width : `${star.size}px`,
//                 height : `${star.size}px`,
//                 left : star.x + "%",
//                 top : `${star.y}%`,
//                 opacity : star.opacity,
//                 animationDuration : `${star.animationDuration}s`
//             }} />
//          })
//         }
        
//     </div>
//   )
// }

