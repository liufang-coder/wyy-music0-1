import styled from "styled-components";

export const NavWrapper = styled.div`
height: 30px;
background-color: #c20c0c;
    .discover-menu {
        display: flex;
        width: 1100px;
        margin: 0 auto;
        padding-left: 180px;
        position: relative;
        top: -4px;

        .item {
            a {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            color: #fff;

            &:hover, &.active {
                text-decoration: none;
                background-color: #9B0909;
                border-radius: 20px;
            }
            }
        }
    }
`