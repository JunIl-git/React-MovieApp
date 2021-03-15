import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header`
color: white;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 50px;
display: flex;
align-items: center;
padding: 0px 10px;
box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`

const List = styled.ul`
    display : flex;
`;

const Item = styled.li`
    width: 70px;
    display: flex;
    justify-content:center;
    align-items: center;
    border-bottom: 3px solid ${props => (props.current ? "#c23616" : "transparent")};
    transition: 0.5s all;

`;

const SLink = styled(Link)`
    width: 100%;
    height: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Header = ({location: {pathname} }) => {
    return(
        <>
            <SHeader className="nav">
                <List>
                    <Item current={pathname === "/"}>
                        <SLink to="/">Movies</SLink>
                    </Item>
                    <Item current={pathname === "/tv"}>
                        <SLink to="/tv">TV</SLink>
                    </Item>
                    <Item current={pathname === "/search"}>
                        <SLink to="/search">Search</SLink>
                    </Item>
                </List>
            </SHeader>
        </>
    )
}

export default withRouter(Header);