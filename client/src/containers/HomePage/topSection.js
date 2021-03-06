import React from 'react';
import styled from 'styled-components';

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import BestIntructorsImg from "../../images/best-driver.png";
import { BrandLogo } from '../../components/brandLogo';
import { Marginer } from '../../components/marginer';
import { Button } from '../../components/button';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../../components/responsive';

import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Noto Sans SC']
    }
  });

const TopSectionContainer = styled.div`
    width: 100%;
    height: 700px;
    background:url(${TopSectionBackgroundImg}) no-repeat;
    background-position: 0px -100px;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        background-position: -100px 0px;
        height: 500px;
    }
`;

const BackgroundFilter = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(38, 70, 83, 0.8);
   display: flex; 
   flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
    }
`;

const StandoutImg = styled.div`
    width: 65em;
    height: 43em;
    margin-left: 5%;
    img {
        width: 100%;
        height: 100%;
        opacity: 0.6;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 400px;
    flex-direction: column;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
        align-items: center;
        min-width: 200px;
        margin-left: 3%;
    }
`;

const SloganText = styled.h3`
    font-family: Noto Sans SC;
    font-weight: 100;
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-size: 22px;
    justify-content: flex-start;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 24px;
    }
`;

const AchorLink = styled.a`
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;
`;


export function TopSection(props){
    const { children } = props;

    const isMobile = useMediaQuery( {maxWidth: deviceSize.mobile });

    return <TopSectionContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
                <LogoContainer>
                    <BrandLogo logoSize={isMobile ? 50 : 70} textSize={isMobile ? 40 : 47} hideLogo findGradient />
                    <Marginer margin={8} direction="vertical" />
                    <SloganText>Find the right driving instructor</SloganText>
                    <SloganText>And get your Driving License</SloganText>
                    <Marginer direction="vertical" margin={20} />
                    <AchorLink href="/customer/access/signup">
                        <Button>Join Now</Button>
                    </AchorLink>
                </LogoContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
}