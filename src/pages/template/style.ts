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
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const Wrapper = styled(Set)`
  flex-direction: column;
  img {
    margin-top: 8vh;
    width: 55vh;
    height: 38vh;
  }
  .RightText {
    font-size: 3.125rem;
  }
`;
export const Title = styled.p`
  font-size: 6.25rem;
  color: #0085ff;
  font-family: ED Piedmont-Regular;
`;
export const Text = styled.p`
  color: #000000;
  font-size: 1.563rem;
  font-weight: 200;
  margin-top: 8vh;
`;
export const RightWrapper = styled(Set)`
  width: 40%;
  border-left: 5px solid #0085ff;
  border-radius: 50px 0px 0px 50px;
  @media (max-width: 1200px) {
    border: none;
  }
`;
export const LoginText = styled.p`
  width: 40vh;
  font-weight: 100;
  font-size: 1.875rem;
  color: #0085ff;
  margin-bottom: 1.2vh;
  @media (max-width: 500px) {
    width: 35vh;
  }
`;
export const Comment = styled(LoginText)`
  width: 40vh;
  font-size: 0.938rem;
  color: #858383;
  margin-bottom: 3.5vh;
  @media (max-width: 500px) {
    width: 35vh;
  }
`;
export const LoginWrapper = styled(Set)`
  height: 70%;
  flex-direction: column;
  .password {
    margin-top: 7vh;
  }
`;
export const Line = styled.div`
  input {
    font-size: 17px;
    font-weight: 300;
    width: 40vh;
    height: 3.5vh;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
  }
  @media (max-width: 500px) {
    input {
      width: 35vh;
      font-weight: 100;
    }
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignUpWrapper = styled(Set)`
  height: 8vh;
  width: 50vh;
  @media (max-width: 500px) {
    width: 40vh;
  }
`;
export const SignUp = styled.p`
  font-size: 0.938rem;
  color: #858383;
  font-weight: 100;
`;
export const SignupButton = styled.button`
  font-weight: 200;
  font-size: 0.938rem;
  color: #0085ff;
  border: none;
  background: none;
  margin-left: 1vh;
`;
