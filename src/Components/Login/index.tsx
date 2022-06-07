import React from "react";
import * as S from "./style";
import Question from "../../Assets/Login/Question.png";

const ButtonTest = () => {
  alert("Clicked !");
};
const Login = () => {
  return (
    <S.Positioner>
      <S.RightWrapper>
        <S.Wrapper>
          <S.Title className="RightText">Amething</S.Title>
          <S.LoginWrapper>
            <S.LoginText>name</S.LoginText>
            <S.Comment>이름을 입력해주세요.</S.Comment>
            <S.Line>
              <input type="id" />
            </S.Line>
            <S.LoginText className="password">password</S.LoginText>
            <S.Comment>비밀번호를 입력해주세요.</S.Comment>
            <S.Line>
              <input type="password" />
            </S.Line>
            <S.SignUpWrapper>
              <S.SignUp>아직 계정이 없으신가요 ?</S.SignUp>
              <S.SignupButton onClick={ButtonTest}>회원가입</S.SignupButton>
            </S.SignUpWrapper>
            <S.Button onClick={ButtonTest}>로그인</S.Button>
          </S.LoginWrapper>
        </S.Wrapper>
      </S.RightWrapper>
    </S.Positioner>
  );
};

export default Login;
