import styled from 'styled-components';

const Header = styled.div`
    display:flex;
    justify-content: space-between;
`;

const Card = styled.div`
    height: 180px;
    width: 300px ;
    padding: 10px ;
    flex-shrink: 0;
    margin: 15px;
    background: inherit;
    color: inherit;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Img = styled.img`
    max-width: 12%;
    max-height: 12%;
    border-radius: 50%;
    margin-right:10px
`;

const Link = styled.a`
&:link  {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
}

&:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    all: unset;
    font-size: 30px;
    border-radius: 100px;
    width:100%;
    text-align: center;
    &:hover {
        background-color: grey;
        opacity: 0.4;
    }
`

const Desc = styled.p`
    padding-left:5px;
    font-size: 1.4rem;
    line-height: 2rem;
`

const Profile = styled.div`
    display: flex;
    align-items: center;
`

const VerticalSection = styled.div`
    display:flex;
    flex-direction: column;
    justify-items: center;
    overflow: auto;
    flex-shrink: 0;
`

const HorizontalSection = styled.div`
    display:flex;
    justify-items: space-between;
    align-items: center;
    overflow: scroll;
    width: 100%;

`

export {Profile, Desc, Button, Footer, Link, Img, Card, Header, VerticalSection, HorizontalSection};