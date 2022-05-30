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
               <img src={Question}></img>
            </S.Wrapper>
         </S.LeftWrapper>
         <S.RightWrapper>hello</S.RightWrapper>
      </S.Positioner>
   );
};

export default Login;
