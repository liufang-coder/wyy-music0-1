import styled from "styled-components";

export const ItemWrapper = styled.div`
width: ${props => props.itemWidth};
padding: 10px 20px;
.item {
    .img-info {
        position: relative;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .bg-cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: 0 0;
        }
        .cover { 
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 27px;
            background: url(${require("@/assets/img/sprite_cover.png")});
            background-position: 0 -537px;
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .playCount {
                color: #ccc;
                .listen {
                    display: inline-block;
                    width: 14px;
                    height: 11px;
                    background-position: 0 -24px;
                    padding-left: 20px;
                }
            }

            .play {
                display: inline-block;
                width: 16px;
                height: 17px;
                background-position: 0 0;
                cursor: pointer;
            }
        }
    }
    .song-info {
        color: #000;
        padding-top: 5px;
        line-height: 18px;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
}
`