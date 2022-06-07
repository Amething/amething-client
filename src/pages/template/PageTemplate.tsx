import React, { Children } from "react";
import * as S from "./style";
import Question from "../../Assets/Login/Question.png";

interface PageProps {
  children: any;
}
const PageTemplate = ({ children }: PageProps) => {
  return (
    <S.Positioner>
      <S.LeftWrapper>
        <S.Wrapper>
          <S.Title>Amething</S.Title>
          <S.Text>Ask me anyting, Amething.</S.Text>
          <img src={Question} />
        </S.Wrapper>
      </S.LeftWrapper>
      <S.RightWrapper>{children}</S.RightWrapper>
    </S.Positioner>
  );
};

export default PageTemplate;
