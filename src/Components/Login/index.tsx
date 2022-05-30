import React from "react";
import * as S from "./style";
import Question from "../../Assets/Login/Question.png";

const Login = () => {
   return (
      <S.Positioner>
         <S.LeftWrapper>
            <S.Wrapper>
               <S.Title>Amething</S.Title>
               <S.Text>Ask me anyting, Amething.</S.Text>
               <img src={Question} />
            </S.Wrapper>
         </S.LeftWrapper>
         <S.RightWrapper>
            <S.Wrapper>
               <S.Title className="RightText">Amething</S.Title>
               <S.LoginWrapper>
                  <S.LoginText>name</S.LoginText>
                  <S.LoginText>password</S.LoginText>
               </S.LoginWrapper>
            </S.Wrapper>
         </S.RightWrapper>
      </S.Positioner>
   );
};

export default Login;
