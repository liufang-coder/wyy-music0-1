import styled from "styled-components";

export const FooterWrapper = styled.div`
    width: 980px;
    margin: 0 auto;
    height: 325px;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    .info-link,.header,.info2,.info3,.info4 {
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    .header {
        margin-top: 33px;
        .item {
            /* width: 45px; */
            text-align: center;
            margin: 0 28px;
            .title {
                font-weight: 400;
                color: rgba(0,0,0, 0.5);
                margin-top: 10px;
            }
            a {
                display: inline-block;
                width: 45px;
                height: 45px;
            }
            :nth-child(1) .link {
                background-position: -170px -5px;
                &:hover {
                    background-position: -5px -115px;
                }
            }
            :nth-child(2) .link {
                background-position: -5px -170px;
                &:hover {
                    background-position: -60px -170px;
                }
            }
            :nth-child(3) .link {
                background-position: -5px -60px;
                &:hover {
                    background-position: -60px -5px;
                }
            }
            :nth-child(4) .link {
                background-position: -60px -60px;
                &:hover {
                    background-position: -115px -5px;
                }
            }
            :nth-child(5) .link {
                background-position: -115px -115px;
                &:hover {
                    background-position: -5px -5px;
                }
            }
            :nth-child(6) .link {
                background-position: -170px -115px;
                &:hover {
                    background-position: -60px -115px;
                }
            }
            :nth-child(7) .link {
                background-position: -170px -60px;
                &:hover {
                    background-position: -115px -60px;
                }
            }
        }
    }
    .info {
        padding-top: 60px;
        color: #666;
        text-align: center;
        line-height: 24px;
        .info-a {
            display: inline-block;
            padding: 0 10px;
            color: #666;
            &:hover {
                text-decoration: underline;
            }
        }
        .info-span {
            display: inline-block;
            padding-left: 10px;
        }
    }
    .info-link {
        .item {
            .title {
                color: #666;
                &:hover {
                    text-decoration: underline;
                }
            }
            .line {
                padding: 0 8px;
                color: #d9d9d9;
            }
        }
        .item:last-child .line {
            color: #fff;
        }
    }
` 