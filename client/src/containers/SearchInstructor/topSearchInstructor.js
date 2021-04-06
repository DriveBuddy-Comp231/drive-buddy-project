import React from 'react';
import styled from 'styled-components';
import TopSearchInstructorBackgroundImg from '../../images/search.jpg'
import { Marginer } from '../../components/marginer';
import { deviceSize } from '../../components/responsive';
import FormSearchInstructor from '../../components/searchInstructorForm';

const TopSectionContainer = styled.div`
    width: 100%;
    height: 800px;
    background:url(${TopSearchInstructorBackgroundImg}) no-repeat;
    background-position: 0px -50px;
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
    justify-content: flex-start;
    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
    }
`;


const SearchInstructorContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 5%;
    margin-top: 3%;
    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
        align-items: center;
        min-width: 200px;
        margin-left: 3%;
    }
`;

const TitleText = styled.h1`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 400;
    font-size: 2.75rem;
    justify-content: flex-start;
    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 24px;
    }
`;


export function TopSearchInstructor(props) {
    const { children } = props;
    return <TopSectionContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
                <SearchInstructorContainer>
                    <TitleText>Search your Instructor</TitleText>
                    <Marginer direction="vertical" margin="2em" />
                    <FormSearchInstructor />
                </SearchInstructorContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
}