import styled from "styled-components";

export const CarouselWrapper = styled.div`
    position: relative;
    background: url(${props => props.bgImage}) center center/6000px;
    .banner-img {
        width: 982px;
        margin: 0 auto;

        .item {
            overflow: hidden;
            height: 285px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .banner-control {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn {
            margin: 0 45px;
            width: 37px;
            height: 63px;
            background-image: url(${require("@/assets/img/banner_sprite.png")});
            background-color: transparent;
            cursor: pointer;
            &:hover {
                background-color: rgba(0, 0, 0, .2);
            }
        }
        .left {
            background-position: 0 -360px;
        }
        .right {
            background-position: 0 -508px;
        }
    }

`