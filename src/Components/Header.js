import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = Styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 50px;
    display:flex;
    align-items:center;
    padding: 0px 10px;
    background-color:rgba(20,20,20,0.8);
    box-shadow : 0px 1px 5px 2px rgba(0,0,0,0.8);
`

const SLink = Styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    `;

const Item =Styled.li`
    width: 50px;
    text-align:center;
    `;

const List = Styled.ul`
    display:flex;
    /* &:hover {
        background-color:blue;
        
    } */
`;

export default () => (<Header>
    <List>
        <Item>
            <SLink to="/">Movies</SLink>
        </Item>
        <Item>
            <SLink to="/tv">TV</SLink>
        </Item>
        <Item>
            <SLink to="/search">Search</SLink>
        </Item>
    </List>
</Header>)