import styled from "styled-components";

export const TitleWrapper = styled.div`
    height: 33px;
    border-bottom: 2px solid #C10D0C;

    .title-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
            font-size: 20px;
            font-weight: normal;
            line-height: 28px;
        }
        .hot {
            height: 29px;
            background-position: 0 0;
            border-radius: 3px;
            a {
                display: inline-block;
                width: 46px;
                height: 29px;
                line-height: 29px;
                text-align: center;
                color: #fff;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

`