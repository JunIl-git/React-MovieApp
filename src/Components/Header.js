import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const SLink = Styled(Link)``;

const Item =Styled.li``;

const List = Styled.ul`
    display:flex;
    &:hover {
        background-color:blue;
        
    }
`;

export default () => (<header>
    <List>
        <Item>
            <Link to="/">Movies</Link>
        </Item>
        <Item>
            <Link to="/tv">TV</Link>
        </Item>
        <Item>
            <Link to="/search">Search</Link>
        </Item>
    </List>
</header>)