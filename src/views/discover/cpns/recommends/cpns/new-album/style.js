import styled from "styled-components";

export const AlbumWrapper = styled.div`
padding-top: 20px;
.album-content {
    height: 187px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    position: relative;
    .album-wrapper {
        display: flex;  
        justify-content: space-between;
        align-items: center;
        height: 184px;
        background-color: #f5f5f5;
        padding: 0 30px;
        .ant-carousel {
            width: 625px!important;
            height: 140px!important;
            font-size: 12px!important;
            .slick-slider  {
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        }
        .album-page {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            margin-top: -18px;
        }

    }
    .control {
        position: absolute;
        top: 40%;
        width: 100%;
        .control-left,.control-right {
            width: 17px;
            height: 17px;
            position: absolute;
            cursor: pointer;
        }
        .control-left {
            left: 5px;
            background-position: -260px -75px;
        }
        .control-right {
            top: 0;
            right: 10px;
            background-position: -300px -75px;
        }
    }
}


`