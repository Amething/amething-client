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
   font-weight: 200;
   margin-top: 8vh;
`;
export const RightWrapper = styled(Set)`
   width: 40%;
   border-left: 5px solid #0085ff;
   border-radius: 50px 0px 0px 50px;
`;
export const LoginText = styled.p`
   width: 40vh;
   font-weight: 100;
   font-size: 30px;
   color: #0085ff;
   margin-bottom: 1vh;
`;
export const Comment = styled(LoginText)`
   width: 40vh;
   font-size: 15px;
   color: #b4b0b0;
   margin-bottom: 5vh;
`;
export const LoginWrapper = styled(Set)`
   height: 70%;
   flex-direction: column;
   .password {
      margin-top: 7vh;
   }
`;
export const Line = styled.div`
   width: 40vh;
   border: 1.5px solid #000000;
`;
export const Button = styled.button`
   color: #ffffff;
   border: none;
   width: 25vh;
   height: 5.5vh;
   background: #0085ff;
   border-radius: 40px;
   margin-top: 7vh;
   margin-bottom: -5vh;
   font-weight: 200;
   font-size: 17px;
`;
export const SignUpWrapper = styled(Set)`
   height: 8vh;
`;
export const SignUp = styled.p`
   font-size: 15px;
   color: #858383;
   font-weight: 100;
`;
export const SignupButton = styled.button`
   font-weight: 200;
   font-size: 15px;
   color: #0085ff;
   border: none;
   background: none;
   margin-left: 1vh;
   margin-bottom: 0.3vh;
`;
