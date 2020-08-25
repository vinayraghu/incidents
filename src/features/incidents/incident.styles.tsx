import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 1;
  @media (min-width: 768px) {
    grid-template-columns: 75% 25%;
  }
`;

const Sidebar = styled.div`
  padding: 15px;
`;
const Content = styled.div`
  padding: 15px;
`;

const StyledCount = styled.h3`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const IncidentsContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-gap: 15px;
`;

const StyledCountText = styled.div`
  text-align: center;
  margin-top: 15px;
`


const Card = styled.article`
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: "Roboto Mono", monospace;
`;

const IncidentsHeader = styled.header`
  margin-bottom: 30px;
`

const CardBody = styled.section`
  padding: 15px;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const IncidentTitle = styled.h4`
  font-family: "Poppins", sans-serif;
  margin: 0;
  font-size: 16px;
`;

const Badge = styled.div`
  display: inline-block;
  font-size: 8px;
  line-height: 12px;
  margin: 0;
  background: #ddd;
  border-radius: 4px;
  padding: 0 12px;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  margin-right: 15px;
  width: 30px;
  height: 30px;
`;

const CommanderTitle = styled.h4`
  font-weight: 300;
  margin: 0;
`

const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 15px;
  margin-top: 15px;
`;

export {
  StyledCount,
  StyledCountText,
  Card,
  CardBody,
  CardHeader,
  IncidentTitle,
  Badge,
  AvatarImg,
  CardFooter,
  CommanderTitle,
  IncidentsContainer,
  GlobalStyles,
  SearchInput,
  PageGrid,
  Sidebar,
  Content,
  IncidentsHeader
}