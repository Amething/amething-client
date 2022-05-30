import styled from "styled-components";
import "../../../src/index.css";

export const Set = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
`;
export const Positioner = styled(Set)``;

export const LeftWrapper = styled(Set)`
   width: 60%;
`;
export const Wrapper = styled(Set)`
   flex-direction: column;
   img {
      margin-top: 8vh;
      width: 55vh;
      height: 38vh;
   }
   .RightText {
      font-size: 50px;
   }
`;
export const Title = styled.p`
   font-size: 100px;
   color: #0085ff;
   font-family: ED Piedmont-Regular;
`;
export const Text = styled.p`
   color: #000000;
   font-size: 25px;
   font-family: sans-serif;
   font-weight: 200;
   margin-top: 8vh;
`;
export const RightWrapper = styled(Set)`
   width: 40%;
   border-left: 3px solid #0085ff;
   border-radius: 50px 0px 0px 50px;
`;
export const LoginText = styled.p`
   width: 10vh;
   font-family: sans-serif;
   font-weight: 100;
   font-size: 30px;
   color: #0085ff;
`;
export const LoginWrapper = styled(Set)`
   height: 50%;
   flex-direction: column;
   justify-content: left;
`;
