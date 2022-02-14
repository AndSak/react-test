import React from "react";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        /* width: 150px;
        height: 150px; */

        color: ${props => props.ourIf ? 'green' : 'yellow'};
        font - size: 26px;
        :hover { color: blue }
      }
      h2 {
    font - size: 1.2rem;
    color: rgb(211, 92, 92);
}
`
const AppHeader = ({allPosts, likedYet}) => {
    return (
        <Header ourIf = {false}>
            <h1>Andrei Sak</h1>
            <h2>{allPosts}  notice, liked to {likedYet}</h2>
        </Header>
    )
}

export default AppHeader;
