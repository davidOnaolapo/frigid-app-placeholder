import { IceBackgroundDrop } from "./ice-background-drop";
import frigidVerticalIcon from "./icon/frigidVerticalIcon.svg";
import {
  LandingPageContainer,
  LandingPageText,
  LogoImage,
} from "./index.styles";

export const App = () => {
  return (
    <IceBackgroundDrop>
      <LandingPageContainer>
        <LogoImage src={frigidVerticalIcon} />
        <LandingPageText>
          Harnessing the power of artificial intelligence and advanced analytics
          for your portfolio
        </LandingPageText>
      </LandingPageContainer>
    </IceBackgroundDrop>
  );
};
