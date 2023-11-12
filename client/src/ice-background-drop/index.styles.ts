import styled from "styled-components";
import bgBlueGradientDark from "../icon/bgBlueGradientDark.svg";

export const PageContainer = styled.div<{}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 17.25rem;
  background-color: #181322;
  background-image: url(${bgBlueGradientDark});
  background-size: cover;
`;
