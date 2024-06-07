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

const werili = {
  title: "წვიმა მოგონებებს ასველებს",
  content: `ზუსტად 1 წელი 6 თვე და 19 დღე)) ბოლოს მაშინ გნახე ეს დრო ბევრს ვფიქრობდი ბევრი რამე შეიცვალე ეხლა უკეთესად მესმის შენი)) თავიდან დაჟე იმასაც ვფიქრობდი ანასნაირი გოგო არც მე მჭირდება არაფერშითქო მარა ეხლა უკვე ვხდები რატოც დავშორდით)) ვიცი გიყვარდი მე როგორც მჯერა ასეთი გრძნობები არსად არ ქრება სულ რომც გამქრალიყო ერთხელ ხო შეგაყვარე თავი არც მეორედ გამიჭირდება)) გახსოვს ერთხელ მითხარი მარტო სიყვარული საკმარისი არააო მაშინ ბოლომდე ვერ ვხდებოდი რასაც გულისხმობდი მარა ეხლა მივხდი რო მართალი იყავი ცუდად ვიქცეოდი არ ვცდილობდი ჩვენი ურთიერთობა ახალ ეტაპზე გადამეყვანა და პასუხმისმგებლობა ამეღო ჩემ თავზე  მეშინოდა რო არ გამომივიდოდა და იმასაც დავკარგავდი რაც მქონდა მეგონა დრო მოაგვარებდა ყველა პრობლემას იმას ვერ ვხდებოდი რო ბევრ რამეს გიფუჭებდი ჩემი უმოქმედობით შენ ადგილზე ალბათ მეც დაგშორდებოდი)) გახსოვს ჩვენი პირველი შეხვედრა?)) ზემოთ ვიყავით ბახტრიონზე ნაცრისფერ ლურჯი ჰუდი გეცვა მე შენი პლედი მქონდა თავიდანვე ჩხუბით დაიწყე ჩემი პლედი ჩემთანო ბრატ 😁 ეგ დღე იყო პირველად შენზე ფიქრებში რო ჩამეძინა)) ის დღეც მახსოვს ჭოლას მანქანით რო ვბრუნდებოდით ათონელიდან კოპლებიანი კაბა გეცვა ჩემ გვერდით იჯექი და მთელი გზა ჩემ მხარზე გედო თავი მაგ დღეს პირველად აუვიდა ჩემ ტამსაცმელს შენი სუნი)) ის დღეც მახსოვს რო მივხდი რო შენც მოგწონდი)) სიგარეტების მოსაწევად რო გავედით მაღაზიაში ათონელზე პარკში ჩამოვჯექით სკამზე მეორე ღერი რო მთხოვე მაშინ მივხდი რო უკვე შებმული იყავი)) მაგ დღეს საწრუპებიც მიმოფამტე ბარში თუ გახსოვს კი შენი ბრალი იყო მარა რათქმაუნდა ბოდიში მაინც მე მოვიხადე)) ის პერიოდიც კარგად მახსოვს წაკბენების და სწერვობების)) პირველი ჩხუბი "ჩემთან ლაპარაკს ხანდახან მაინც აქ აზრი" და მერე პირველი შემორიგებაც)) ისე მაგ დღეს რო არ გვეჩხუბა შეიძლება არც ამ წერილის მოწერა დამჭირვებოდა)) ლისზე რო ვიყავით ასულები რესტორანში შეკვეთას ველოდებოდით ყველას რო ვკითხე ზოდიაქოზე შენ გარდა 😁 მაგ დღეს პირველად ვიცეკვეთ)) მერე სახლში რო ვბრუნდებოდით ტაქსით ჯერ მარიამი დავტოვეთ მე მანქანიდან გადავედი ფულის გამოსატანად და ჩაჯდომისას გვერდით მოგიჯექი მაგ დღეს შენ მიხვდი რო მომწონდი)) ის გრძნობაც მახსოვს შენით რო მომწერე პირველად ცოტა მოვოწყონე და რამეზე ხო არ გვეჩხუბაო 😁 ჩვენი პირველი პაემანი, მერე ჩვენი პარკი პირველად მანდ ვაკოცეთ ერთამანეთს თეთრი შუბა გეცვა)) მარა შენ ალბათ მაკს რო ვუკვეთავდით ხოლმე ეგ უფრო გემახსოვრება)) ლისზე პირველად გითხარი რო მიყვარხარ)) პიკნიკზე ვიყავით მარა შენ როგორც თავშეკავებულ ქალებს შეეფერებათ არაფერი მიპასუხე თავის დაფასების პონტში მარტო ერთი კვირის მერე მითხარი რო შენც გიჟდებოდი ჩემზე)) ჩვენი პაემნები)) რიყეზე რო ვიყავით გახსოვს?)) ეგ დღე ხშირად მახსენდება ხოლმე გამორჩეული იყო რაღაცნაირად არ ვიცი რატო)) ძაან ლამაზი იყავი შავი ტოპი და თეთრი კაბა გეცვა ალბათ იმიტო მახსოვს ეგ დღე ასე კარგად რო ჩვენ ალბომში ყველაზე მეტად რა სურათიც მომწონს მანდაა გადაღებული)) ეს დრო რაც უფრო ბევრს ვცდილობდი დამევიწყებინე მით უფრო მეტი მეფიქრებოდა შენზე ბევრი რამე მოხდა ჩვენი დაშორების მერე ალბათ ზედმეტად ბევრიც ცუდიც და კარგიც მარა შენ რო ვერ გიყვებოდი ვერაფერს თითქოს აზრი ეკარგებოდა ყველაფერს ძნელი ყოფილა უშენოდ ბედნიერება)) არი რაღაც გრძნობები რასაც ვერ ახსნი და ალბათ არცაა საჭირო ჯობია რაღაცეები უთქმელი დარჩეს)) თქმის გარდა სხვა ბევრი რამეცაა რაღაცეების დასამტკიცებლად და გამოსახატად)) ვერც იმას აგიხსნი რატო ვიცი რო მე და შენ მთელი ცხოვრება ერთად ვიქნებით და მითუმეტეს ვერც იმას რასაც შენ მიმრთ ვგრძნობ)) ამის ახსნა რო შემეძლოს პირიქით არც ვეცდებოდი შენ დაბრუნებას)) მაგიტო ვარ დარწმუნებული რო მიყვარხარ)) ყველა პატარა დეტალი დღემდე მახსოვს თვალებს რო ხუჭავდი ჭამის დროს შენი გამოხედვები როცა გაბრაზებდი ან პირიქით რაღაცნაირი თვალებით რო მიყურებდი ხოლმე რომანტიულ მომენტებში შენი სურნელი ასეთი დეტალები მგონია რო მარტო მე ვიცი და ამიტო კიდე უფრო ძვირფასია რაღაცნაირად ჩემთვის 🥴 ყველაზე მეტად ეგეთი დეტალები მენატრება. ჩემზე ძლიერია ის რასაც შენდამი ვგრძნობ შენსავით არავინ მყვარებია და ვიცი არც არავინ შემიყვარდება შენ გარეშე ცხოვრება არ წარმომედგინა როგორ უნდა გავიღვიძო ვინმე სხვასთან ერთად ან როგორ უნდა დაუძახონ ჩემმა შვილებმა სხვა ქალს დედა. არ მინდა ზედმეტად ბევრი გითხრა ერთ-ერთი შეცდომა ეგეც იყო რო რიტმის განსაზღვრაში ავირიე)) ზედმეტად ვჩქარობდი, ზედმეტს ვითხოვდი არადა ჩემ გასაკათებელს არ ვაკეთებდი მინდოდა შენებს შეწინააღმდეგებოდი არადა საყრდენად თვითონ ვერ ვივარგე ბევრი რამე ვისწავლე ამ დროის განმავლობაში ბევრ რამეს მივხდი და ბევრ რამეში უფრო დავწრწმუნდი მიყვარხარ დღეს კიდე უფრო მეტად ვიდრე ადრე არ ვიცი ალბათ არც დამიჯერებ ასეთების არასდროს გჯეროდა)) იმდენად დავჭკვიანდი რო დაჟე ეხლა უარს რო მეტყვი მაგასაც ვხდები)) ეგ არაფერი მოთმინება მმართებს კარგი რამეებისთვის ლოდინი ყოველთვის ღირს მითუმეტეს შენთვის)) თან ვიცი არაფრით არ შეიძლრბა რო მე და შენ ბოლოს მაინც ერთად არ ვიყოთ)) ასე რომ დაგელოდები იმიტო რო მთელი ცხოცრება უბედნიერესი ვიყო შენთან ერთად)) აქვე გავჩერდები ყველაფერი ეხლა რო გითხრა შეხვედრისას რაღაზე ვილაპარაკოთ)) მიყვარხარ დეტალურად, ძლიერ-ძლიერ)) 💘`,
};

function App() {
  return (
    <div className="App">
      <Serenada />
      <Cards />
      <PoetiArVarMepoeteba />
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
      <div className="audio_wrapper--wrapper">
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
              <span>{isPlaying ? "pause" : "play"}</span>
            </div>
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

function PoetiArVarMepoeteba() {
  const touchMeRef = useRef(0);
  const envelopeTopRef = useRef(0);
  const weriliRef = useRef(0);
  const overlayRef = useRef(0);

  useEffect(() => {
    const handleClick = (e) => {
      envelopeTopRef.current.style.transform = "rotateX(180deg)";
      weriliRef.current.classList.add("active");
      overlayRef.current.classList.add("active");
      envelopeTopRef.current.style.transition = "transform 0.5s ease-in-out";
    };

    const handleOverlayClick = (e) => {
      console.log(e.target);
      e.target.classList.remove("active");
      weriliRef.current.classList.remove("active");
      envelopeTopRef.current.style.transform = "rotateX(0deg)";
      envelopeTopRef.current.style.transitionDelay = "1s";
    };

    touchMeRef.current.addEventListener("click", handleClick);
    overlayRef.current.addEventListener("click", handleOverlayClick);

    return () => {
      touchMeRef.current.removeEventListener("click", handleClick);
      overlayRef.current.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  return (
    <>
      <div className="werili--overlay" ref={overlayRef}></div>
      <div className="envelope__wrapper">
        <button className="envelope__btn" ref={touchMeRef}>
          თაჩ მი
        </button>
        <div className="envelope__top" ref={envelopeTopRef}></div>
        <div className="envelope__bottom"></div>

        <div className="werili__content" ref={weriliRef}>
          <h1 className="werili__title">{werili.title}</h1>
          <p>{werili.content}</p>
        </div>
      </div>
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
      e.target.classList.add("active--btn");

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
      e.target.classList.remove("active--btn");
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
