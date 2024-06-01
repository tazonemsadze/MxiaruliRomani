// React
import { useEffect, useRef, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  EffectCards,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";

// Lottie
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationDataOne from "./assets/confetti.json";
import animationDataTwo from "./assets/confetti2.json";
import animationDataThree from "./assets/confetti3.json";

// Images
import SerenadaImg from "./assets/images/serenada.png";
import IFeelGood from "./assets/audio/Ifeelgood.mp3";
import MedaJansughi from "./assets/audio/mukhambazi.mp3";
import Nashebi from "./assets/images/nashebi.png";
import Mummy from "./assets/images/mummy.jpg";

function App() {
  return (
    <div className="App">
      <Serenada />
      <Cards />
      <Question />
    </div>
  );
}

function Serenada({ serenadaSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const serenadaRef = useRef(null);

  const handlePlay = () => {
    serenadaRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    serenadaRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(serenadaRef.current.currentTime);
    setDuration(serenadaRef.current.duration);
  };

  const handleSeek = (e) => {
    serenadaRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  function formatDuration(durationSeconds) {
    const mins = Math.floor(durationSeconds / 60);
    const secs = Math.floor(durationSeconds % 60);
    const formattedSecs = secs.toString().padStart(2, "0");
    return `${mins}:${formattedSecs}`;
  }

  useEffect(() => {
    serenadaRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      serenadaRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="audio__wrapper">
      <div className="audio__container">
        <div className="audio__cover">
          <img src={SerenadaImg} alt="me da chemi nasha" />
        </div>

        <div className="serenada__controls">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />

          <audio ref={serenadaRef} src={MedaJansughi} loop />

          <div className="serenada__duration">
            <p>{formatDuration(currentTime)}</p>
            <p>{formatDuration(duration)}</p>
          </div>

          <div className="serenada__btn" onClick={handlePlayPause}>
            <span>{isPlaying ? "play" : "pause"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  const dataObj = [
    { content: "WITH ANY LUCK, BY NEXT YEAR" },
    { content: "I'LL BE GOING OUT WITH ONE OF THOSE GIRLS..." },
    // { imageSrc: `./images/nashebi.png` },
    { imageSrc: Nashebi },
    { content: " BUT FOR NOW LET ME SAY," },
    { content: "WITHOUT HOPE OR AGENDA," },
    { content: "JUST BECAUSE IT'S CHRISTMAS -" },
    { content: "(AND AT CHRISTMAS YOU TELL THE THRUTH)" },
    { content: "TO ME, YOU ARE PERFECT" },
    { content: "AND MY WASTED HEART WILL LOVE YOU" },
    { content: "UNTIL YOU LOOK LIKE THIS..." },
    // { imageSrc: `./images/mummy.jpg` },
    { imageSrc: Mummy },
    { content: "მიყვარხარ დეტალურად))" },
    { content: "ძლიერ-ძლიერ))" },
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[
          EffectCards,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Keyboard,
        ]}
        keyboard={{ enabled: true }}
        className="cards__wrapper mySwiper"
      >
        {dataObj.map((card) =>
          card.content ? (
            <SwiperSlide className="card card--text">
              <p>
                <em>{card.content}</em>
              </p>
            </SwiperSlide>
          ) : (
            <SwiperSlide className="card card--image">
              <img
                className="card-image"
                src={card.imageSrc}
                alt={
                  card.imageSrc === "`./images/nashebi.png`"
                    ? "nashebi"
                    : "mummy"
                }
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}

function Question() {
  const yesBtnRef = useRef(null);
  const noBtnRef = useRef(null);
  const questionContainerRef = useRef(null);

  const song = useRef(null);

  const handlePlay = () => {
    song.current.play();
  };

  useEffect((e) => {
    const originalText = noBtnRef.current.innerHTML;
    const { width: containerWidth, height: containerHeight } =
      questionContainerRef.current.getBoundingClientRect();

    const { width: btnWidth, height: btnHeight } =
      noBtnRef.current.getBoundingClientRect();

    const handleMouseEnter = (e) => {
      e.target.textContent = "💩";
      e.target.classList.add("active");

      const i = Math.abs(
        Math.floor(Math.random() * containerHeight - btnHeight) + 1
      );
      const j = Math.abs(
        Math.floor(Math.random() * containerWidth - btnWidth) + 1
      );

      e.target.style.left = `${j}px`;
      e.target.style.bottom = `${i}px`;
    };

    const handleMouseLeave = (e) => {
      e.target.classList.remove("active");
      setTimeout(() => {
        e.target.textContent = originalText;
      }, 1000);
    };

    function triggerConfetti() {
      if (confettiRefOne.current) confettiRefOne.current.goToAndPlay(0, true);
      if (confettiRefTwo.current) confettiRefTwo.current.goToAndPlay(0, true);
      if (confettiRefThree.current)
        confettiRefThree.current.goToAndPlay(0, true);
    }

    noBtnRef.current.addEventListener("mousemove", handleMouseEnter);
    noBtnRef.current.addEventListener("mouseleave", handleMouseLeave);

    yesBtnRef.current.addEventListener("click", triggerConfetti);
    yesBtnRef.current.addEventListener("click", handlePlay);
  }, []);

  const confettiRefOne = useRef(0);
  const confettiRefTwo = useRef(0);
  const confettiRefThree = useRef(0);

  return (
    <>
      <div className="question__wrapper">
        <Lottie
          lottieRef={confettiRefOne}
          animationData={(animationDataThree, animationDataOne)}
          className="Lottie"
          autoplay={false}
          loop={false}
        />
        <Lottie
          lottieRef={confettiRefTwo}
          animationData={animationDataTwo}
          className="Lottie"
          autoplay={false}
          loop={false}
        />
        <Lottie
          lottieRef={confettiRefThree}
          animationData={animationDataThree}
          className="Lottie"
          autoplay={false}
          loop={false}
        />
        <div className="question__container" ref={questionContainerRef}>
          <div className="quesion">
            <p>დღეს საღამოს ჩვენთან პარკში?))</p>
          </div>

          <div className="btn__container">
            <audio ref={song} src={IFeelGood} />
            <button className="btn btn--yes" ref={yesBtnRef}>
              კი
            </button>
            <button className={`btn btn--no`} ref={noBtnRef}>
              არა
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
