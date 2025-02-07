import styled from "styled-components";

export const Background = styled.div`
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

export const Firstcont = styled.div`
  display: ${(props) => (props.isMore ? "flex" : "none")};
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

export const Paragraph = styled.p`
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

export const Imagebox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Img = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

export const Secondcont = styled.div`
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

export const Timer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Time = styled.h1`
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

export const Timezone = styled.p`
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

export const Buttoncont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 725px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Country = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 4.8px;
  text-transform: uppercase;
`;

export const Button = styled.button`
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

export const Buttonp = styled.p`
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

export const Arrowbox = styled.div`
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

export const Hiddencont = styled.div`
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

export const Paragrapscont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const Hiddendiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Hiddenp = styled.div`
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

export const Hiddenheading = styled.h1`
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

export const Hidebox = styled.div`
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
