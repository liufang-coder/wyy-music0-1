import styled from "styled-components";

export const PaginationWrapper = styled.div`
    padding: 40px 0;
    text-align: center;
    .control {
        width: 69px;
        height: 24px;
        line-height: 24px;
        color: #333;
        padding: 0;
        border: 1px solid #ccc;
        &:disabled {
            color: #999;
        }
        .text {
            display: inline-block;
            font-size: 10px;
            color: #333;
        }
    }
    .left {
        background-position: 0 -560px;
        .text {
            padding-left: 15px;
        }
        &:hover {
            background-position: 0 -590px;
        }
    }
    .right {
        background-position: -75px -560px;
        .text {
            padding-right: 15px;
        }
        &:hover {
            background-position: -75px -590px;
        }
    }
    .ant-pagination-item {
        border: 1px solid #ccc !important;
        margin: 0 5px;
        border-radius: 3px;

        a {
            font-size: 12px;
        }

        &.ant-pagination-item-active {
            background-color: #c20c0c;
            border-color: #A2161B;
            a {
            color: #fff;
            }
        }
    }
`