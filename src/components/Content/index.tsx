import { ReactNode } from "react";
import { ContentContainer } from "./styles";

interface IProps {
  children: ReactNode;
}


const Content = ({ children }: IProps) => {
  return (
    <ContentContainer>
      {children}
    </ContentContainer>
  );
};

export default Content;