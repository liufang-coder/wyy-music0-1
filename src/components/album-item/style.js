import styled from "styled-components";

export const ItemWrapper = styled.div`
width: ${props => props.itemWidth};
            .album-item {
            /* width: 118px; */
            cursor: pointer;
            padding-top: 20px;
        .album-img {
            position: relative;
            width: ${props => props.size};
            height: ${props => props.size};
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .cover {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                height: ${props => props.size};
                width: ${props => props.width};
                background-position: 0 ${props => props.bgp};
            }  
            &:hover {
            .album-play {
                display: block;
            }  
        }

        }
        .album-play {
                display: none;
                position: absolute;
                bottom: 5px;
                right: 5px;
                width: 22px;
                height: 22px;
                background-position: 0 -110px;
            }

        .album-info {
            margin-top: 5px;
            line-height: 18px;
            width: ${props => props.width};
            .name,.artist {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                &:hover {
                    text-decoration: underline;
                }
            }
            .artist {
                color: #666;
            }
        }
    }
`