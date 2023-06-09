import styled from "styled-components";
import { MoveTo } from "../../../customComp/MoveTo";
import ThemeBtn from "../../../customComp/ThemeBtn";

const HeaderComp = () => {
  return (
    <HeaderArea>
      <ThemeBtn size={"24"}></ThemeBtn>
      <BtnFrame>
        <MoveTo where={"/SignIn"} InnerText={"Sign In"} />
      </BtnFrame>
    </HeaderArea>
  );
};

export default HeaderComp;
const HeaderArea = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid black;
`;
const BtnFrame = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  padding: 3px;
  width: fit-content;
`;
