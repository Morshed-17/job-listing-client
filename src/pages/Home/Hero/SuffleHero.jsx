import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Search from "../Search";
import banner from '../../../assets/images/pexels-jakub-novacek-924824.jpg'
const ShuffleHero = () => {
  return (
    <section 
    style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover", // Ensure the background image covers the entire element
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent the background from repeating
        
      }}>
      <div className="bg-slate-950 h-full bg-opacity-70">

    <div className="px-5 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-screen-xl  mx-auto">
    <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Find your dream Job
        </span>
        <h3 className="text-4xl md:text-5xl font-semibold">
          Find Thousand <span className="text-blue-600">Job</span> If You’re
          Ready To Get.
        </h3>
        <p className="text-base md:text-lg text-slate-400 my-4 md:my-6">
          We have 280,000+ live jobs adverts on our site, helping you to find
          any type of job
        </p>
        <Search />
      </div>
      <ShuffleGrid />
    </div>
      </div>
      
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9ifGVufDB8fDB8fHww",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9ifGVufDB8fDB8fHww",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9ifGVufDB8fDB8fHww",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8am9ifGVufDB8fDB8fHww",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507206292181-8142bdfdc312?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxqb2J8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1573496130407-57329f01f769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1622130917047-880baeb6ed54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxqb2J8ZW58MHx8MHx8fDA%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full rounded-lg h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4  h-[450px]  gap-3">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
