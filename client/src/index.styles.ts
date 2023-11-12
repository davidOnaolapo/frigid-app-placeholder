import styled from "styled-components";

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8.3rem;
`;

export const LogoImage = styled.img`
  margin-bottom: -1.322rem;
  @media (max-width: 1200px) {
    max-width: 13.563rem;
  }
`;

export const LogoTextImage = styled.img`
  @media (max-width: 1200px) {
    max-width: 17.5rem;
  }
`;

export const LandingPageText = styled.span`
  font-size: 1.15rem;
  font-weight: 300;
  text-align: center;
  max-width: 30rem;
  letter-spacing: 0.04em;
  line-height: 1.5;
  color: rgb(167, 169, 173);
  margin-top: 4rem;
  @media (max-width: 1200px) {
    max-width: 20.813rem;
    font-size: 1.25rem;
  }
`;
