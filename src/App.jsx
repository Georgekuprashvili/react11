import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import backgroundImageday from "./assets/forest_day.svg";
import backgroundImagenight from "./assets/forest_night.svg";
import reset from "./assets/reset_img.svg";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import arrow from "./assets/arrow.svg";
import {
  Background,
  Firstcont,
  Paragraph,
  Imagebox,
  Img,
  Secondcont,
  Timer,
  Time,
  Timezone,
  Buttoncont,
  Country,
  Button,
  Buttonp,
  Arrowbox,
  Hiddencont,
  Paragrapscont,
  Hiddendiv,
  Hiddenp,
  Hiddenheading,
  Hidebox,
} from "./styledComponents";

function App() {
  const [time, setTime] = useState(new Date());
  const [Rotated, setRotated] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [isHiddenVisible, setIsHiddenVisible] = useState(false);
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const fetchIpInfo = async () => {
      try {
        const response = await axios.get(
          "https://ipinfo.io/109.172.223.8?token=0e5d356bb9b95b"
        );
        setIpInfo(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchIpInfo();
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

  const ButtonClick = () => {
    setRotated(!Rotated);
    setIsMore(!isMore);
    setIsHiddenVisible(!isHiddenVisible);
  };

  const start = new Date(time.getFullYear(), 0, 0);
  const diff = time - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const dayOfWeek = time.getDay();

  const firstDayOfYear = new Date(time.getFullYear(), 0, 1);
  const daysBetween = Math.floor(
    (time - firstDayOfYear) / (1000 * 60 * 60 * 24)
  );
  const weekNumber = Math.ceil((daysBetween + 1) / 7);

  return (
    <Background bgImage={backgroundImage}>
      <Paragrapscont>
        <Firstcont isMore={isMore}>
          <Imagebox>
            <Paragraph>
              “The science of operations, as derived from mathematics more{" "}
              <br />
              especially, is a science of itself, and has its own abstract truth{" "}
              <br />
              and value.”
            </Paragraph>
            <Img src={reset} />
          </Imagebox>
          <Paragraph>Ada Lovelace</Paragraph>
        </Firstcont>

        <Secondcont>
          <Imagebox>
            <img src={imageSrc} />
            <Paragraph>{greetingText}</Paragraph>
          </Imagebox>
          <Timer>
            <Time>{formattedTime}</Time>
          </Timer>
          <Buttoncont>
            <Country>
              {ipInfo ? `${ipInfo.city}, ${ipInfo.country}` : "Loading......"}
            </Country>
            <Button onClick={ButtonClick}>
              <Buttonp>{isMore ? "MORE" : "LESS"}</Buttonp>
              <Arrowbox Rotated={Rotated}>
                <img src={arrow} />
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
              {ipInfo ? ipInfo.timezone : "Loading..."}
            </Hiddenheading>
          </Hidebox>
          <Hidebox>
            <Hiddenp style={{ color: hiddenTextColor }}>
              Day of the year
            </Hiddenp>
            <Hiddenheading style={{ color: hiddenTextColor }}>
              {dayOfYear}
            </Hiddenheading>
          </Hidebox>
        </Hiddendiv>

        <Hiddendiv>
          <Hidebox>
            <Hiddenp style={{ color: hiddenTextColor }}>
              Day of the week
            </Hiddenp>
            <Hiddenheading style={{ color: hiddenTextColor }}>
              {
                [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ][dayOfWeek]
              }
            </Hiddenheading>
          </Hidebox>
          <Hidebox>
            <Hiddenp style={{ color: hiddenTextColor }}>Week number</Hiddenp>
            <Hiddenheading style={{ color: hiddenTextColor }}>
              {weekNumber}
            </Hiddenheading>
          </Hidebox>
        </Hiddendiv>
      </Hiddencont>
    </Background>
  );
}

export default App;
