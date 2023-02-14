import styled from "styled-components";

export const BarWrapper = styled.div`
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
        padding: 0 10px 0 25px;
        ${props => props.theme.mixin.sprite02};
        background-position: -225px -156px;
    }

    .title-content {
        display: flex;
        .title {
            font-size: 20px;
            font-weight: normal;
            line-height: 28px;
            a  {
                &:hover {
                    color: #333;
                }
            }
        }
        .nav-title {
            display: flex;
            margin: 7px 0 0 20px;
            a {
                color: #666;
                &:hover {
                    text-decoration: underline;
                }
            }
            .item-hr {
                margin: 0 10px;
                color: #ccc;
            }
            .title-item:last-child .item-hr{
                color: #fff;
            }
        }
    }
    .more {
        a {
            display: inline-block;
            padding-right: 5px;
            color: #666;
            &:hover {
                text-decoration: underline;
            }
        }
        .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            ${props => props.theme.mixin.sprite02};
            background-position: 0 -240px;
            vertical-align: middle;
        }
    }
`