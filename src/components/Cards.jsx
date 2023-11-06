import {useEffect, useRef} from "react";
import {useState} from "react";
// import confetti from "canvas-confetti";
import axios from "axios";

let size = 3;
let clicks = 0;
const Cards = () => {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState([]);
  const [opened, setOpened] = useState([]);
  const score = useRef(0);

  const api = "https://rickandmortyapi.com/api/character";

  const fetch = async () => {
    const getAll = await axios.get(api);
    const characterImages = getAll.data.results.map(
      (character) => character.image
    );
    setImages(characterImages);
  };

  useEffect(() => {
    fetch();
  }, []);

  // --------------------------

  // const newImages = images.slice(0, size);
  // const withMap = newImages.map((item) => [`1|${item}`, `2|${item}`]);
  // const arregloSimple = [].concat(...withMap);
  // const newArr = arregloSimple.sort(() => Math.random() - 0.5);

  // console.log("new arr 2", newArr);
  // console.log("arreglado", arregloSimple);
  // console.log("random", newArr);

  // --------------------------

  const newImages = images.slice(0, size);
  const newArr = newImages
    .flatMap((item) => [`1|${item}`, `2|${item}`])
    .sort(() => Math.random() - 0.5);

  console.log("images", newImages);
  console.log("lo que se dibuja", newArr);
  console.log("selected", selected);
  console.log("opened", opened);

  const handleClick = (item) => {
    clicks = clicks + 1;
    if (selected.length < 2) {
      setSelected((selected) => selected.concat(item));
    }
  };

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setOpened((opened) => opened.concat(selected));
      }
      setTimeout(() => setSelected([]), 500);
    }
  }, [selected, images]);

  useEffect(() => {
    if (opened.length === images.length) {
      // calculateScore();
      // size = size + 2;
      clearArrays();
      // setImages(size);

      // confetti({
      //   particleCount: 200,
      //   startVelocity: 30,
      //   spread: 300,
      //   gravity: 1.5,
      //   origin: {y: 0},
      // });
    }
  }, [opened]);

  const clearArrays = () => {
    setSelected([]);
    setOpened([]);
  };
  // const calculateScore = () => {
  //   const passLevel = size * 10;
  //   let total = score.current + passLevel;
  //   const cards = size * 2;

  //   if (clicks === cards) {
  //     total = total + cards * 2 + passLevel;
  //   } else if (clicks > cards && clicks < cards + 5) {
  //     total = total + cards + passLevel;
  //   } else if (clicks > cards && clicks < cards + 10) {
  //     total = total + cards / 2 + passLevel;
  //   } else {
  //     total = total + Math.round(cards / 3) + passLevel;
  //   }
  //   clicks = 0;
  //   score.current = total;
  // };

  let include = false;

  return (
    <div className="cards">
      <h2>Score:{score.current}</h2>
      <ul>
        {newArr.map((item, index) => (
          <li key={index} onClick={() => handleClick(item)}>
            <div className="content">
              {(include = selected.includes(item) || opened.includes(item))}
              <div className={`front ${include ? "flip-front" : ""}`}>
                <img src="/question.png" alt="icon" />
              </div>
              <div className={`back ${include ? "flip-back" : ""}`}>
                <img src={item.split("|")[1]} alt="icon" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
