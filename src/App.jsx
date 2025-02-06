import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import backgroundImageday from "./assets/forest_day.svg";
import backgroundImagenight from "./assets/forest_night.svg";
import reset from "./assets/reset_img.svg";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import arrow from "./assets/arrow.svg";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: padding-bottom 0.5s ease;
`;

const Firstcont = styled.div`
  display: ${(props) =>
    props.isMore ? "flex" : "none"}; 
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding: 20px;
  margin-left: 165px;

  @media (max-width: 725px) {
    margin-left: 64px;
  }
  @media (max-width: 580px) {
    margin-left: 26px;
  }
`;

const Paragraph = styled.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  @media (max-width: 580px) {
    font-size: 12px;
  }
`;

const Imagebox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const Secondcont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 165px;

  @media (max-width: 725px) {
    margin-left: 64px;
  }
  @media (max-width: 580px) {
    margin-left: 26px;
  }
`;

const Timer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Time = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 200px;
  letter-spacing: -5px;
  @media (max-width: 580px) {
    font-size: 100px;
  }
`;

const Timezone = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  text-transform: uppercase;
  @media (max-width: 580px) {
    font-size: 15px;
  }
`;

const Buttoncont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 725px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Country = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 4.8px;
  text-transform: uppercase;
`;

const Button = styled.button`
  width: 146px;
  height: 56px;
  border-radius: 28px;
  background: #fff;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 165px;
`;

const Buttonp = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 5px;
  text-transform: uppercase;
  opacity: 0.5;
`;

const Arrowbox = styled.div`
  width: 40px;
  height: 40px;
  background-color: #303030;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #999999;
  }
  transform: ${(props) =>
    props.isRotated ? "rotate(180deg)" : "rotate(0deg)"};
`;

const Hiddencont = styled.div`
  width: 100%;
  height: ${(props) => (props.isVisible ? "640px" : "0px")};
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20.387113571166992px);
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  overflow: hidden;
  transition: height 1s ease-in-out, opacity 3s ease-in-out;
  display: flex;
  justify-content: space-around;
  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    gap: 35px;
  }
`;

const Paragrapscont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const Hiddendiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Hiddenp = styled.div`
  color: #303030;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 3px;
  text-transform: uppercase;
  @media (max-width: 560px) {
    font-size: 10px;
  }
`;

const Hiddenheading = styled.h1`
  color: #303030;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 560px) {
    font-size: 20px;
  }
`;
const Hidebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 400px) {
    padding-right: 22px;
    padding-left: 22px;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
`;

function App() {
  const [time, setTime] = useState(new Date());
  const [isRotated, setIsRotated] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [isHiddenVisible, setIsHiddenVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentHour = time.getHours();

  let greetingText = "GOOD MORNING, IT’S CURRENTLY";
  let imageSrc = sun;
  let backgroundImage = backgroundImageday;

  const isEvening = currentHour >= 18 || currentHour < 6;
  const hiddenTextColor = isEvening ? "#fff" : "#303030"; 

  if (currentHour >= 6 && currentHour < 12) {
    greetingText = "GOOD MORNING, IT’S CURRENTLY";
    imageSrc = sun;
    backgroundImage = backgroundImageday;
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText = "GOOD AFTERNOON, IT’S CURRENTLY";
    imageSrc = sun;
    backgroundImage = backgroundImageday;
  } else if (currentHour >= 18 || currentHour < 6) {
    greetingText = "GOOD EVENING, IT’S CURRENTLY";
    imageSrc = moon;
    backgroundImage = backgroundImagenight;
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
    setIsMore(!isMore);
    setIsHiddenVisible(!isHiddenVisible);
  };

  return (
    <>
      <Background bgImage={backgroundImage}>
        <Paragrapscont>
          <Firstcont isMore={isMore}>
            <Imagebox>
              <Paragraph>
                “The science of operations, as derived from mathematics more{" "}
                <br />
                especially, is a science of itself, and has its own abstract
                truth <br />
                and value.”
              </Paragraph>
              <Img src={reset} alt="Reset" />
            </Imagebox>
            <Paragraph>Ada Lovelace</Paragraph>
          </Firstcont>

          <Secondcont>
            <Imagebox>
              <img src={imageSrc} alt="sun or moon" />
              <Paragraph>{greetingText}</Paragraph>
            </Imagebox>
            <Timer>
              <Time>{formattedTime}</Time>
              <Timezone>BST</Timezone>
            </Timer>
            <Buttoncont>
              <Country>IN LONDON, UK</Country>
              <Button onClick={handleButtonClick}>
                <Buttonp>{isMore ? "MORE" : "LESS"}</Buttonp>
                <Arrowbox isRotated={isRotated}>
                  <img src={arrow} alt="arrow" />
                </Arrowbox>
              </Button>
            </Buttoncont>
          </Secondcont>
        </Paragrapscont>
        <Hiddencont isVisible={isHiddenVisible}>
          <Hiddendiv>
            <Hidebox>
              <Hiddenp style={{ color: hiddenTextColor }}>
                CURRENT TIMEZONE
              </Hiddenp>
              <Hiddenheading style={{ color: hiddenTextColor }}>
                Europe/London
              </Hiddenheading>
            </Hidebox>
            <Hidebox>
              {" "}
              <Hiddenp style={{ color: hiddenTextColor }}>
                Day of the year
              </Hiddenp>
              <Hiddenheading style={{ color: hiddenTextColor }}>
                295
              </Hiddenheading>
            </Hidebox>
          </Hiddendiv>

          <Hiddendiv>
            <Hidebox>
              <Hiddenp style={{ color: hiddenTextColor }}>
                Day of the week
              </Hiddenp>
              <Hiddenheading style={{ color: hiddenTextColor }}>
                5
              </Hiddenheading>
            </Hidebox>
            <Hidebox>
              <Hiddenp style={{ color: hiddenTextColor }}>Week number</Hiddenp>
              <Hiddenheading style={{ color: hiddenTextColor }}>
                42
              </Hiddenheading>
            </Hidebox>
          </Hiddendiv>
        </Hiddencont>
      </Background>
    </>
  );
}

export default App;
