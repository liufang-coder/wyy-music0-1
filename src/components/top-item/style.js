import styled from "styled-components";

export const ItemWrapper = styled.div`
flex: 1;
width: ${props => props.itemWidth};
    .title {
        display: flex;
        margin: 20px 0 0 20px;
        height: 100px;
        .img {
            position: relative;
            width: 80px;
            height: 80px;
            img {
                width: 100%;
                height: 100%;
            }
            .cover {
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-position: -145px -57px;
            }
        }
        .info {
            padding: 10px;
            .name>h3 {
                font-size: 14px;
                color: #333;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
            .icon-info {
                margin-top: 7px;
                height: 32px;
                .play-icon,.add-icon {
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    cursor: pointer;
                }
                .play-icon {
                    background-position: -267px -205px;
                    &:hover {
                        background-position: -267px -235px;
                    }
                }
                .add-icon {
                    margin-left: 7px;
                    background-position: -300px -205px;
                    &:hover {
                        background-position: -300px -235px;
                    }
                }
            }
        }
    }
    .song-list {
        height: 319px;
        line-height: 32px;
        margin-left: 27px;
        .song-item {
            display: flex;
            height: 32px;
            cursor: pointer;
            justify-content: space-between;
            :nth-child(-n + 3) .index {
                color: #c10d0c;
            }
            .index {
                color: #666;
                font-size: 16px;
            }
            >.name {
                flex: 1;
                display: inline-block;
                padding-left: 10px;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:hover {
                text-decoration: underline;
            }
            }
            .show-btn {
                
                /* width: 82px; */
                display: none;
                padding: 4px 10px;
                .play-icon,.addto,.add-icon {
                    display: inline-block;
                    width: 17px;
                    height: 17px;
                    
                }
                .play-icon {
                    margin-right: 10px;
                    background-position: -267px -268px;
                    &:hover {
                        background-position: -267px -288px;
                    }
                }

                .addto {
                    /* position: relative; */
                    /* top: 2px; */
                    margin-right: 10px;
                    background-position: 0 -700px;
                    &:hover {
                        background-position: -22px -700px;
                    }
                }

                .add-icon {
                    background-position: -297px -268px;
                    &:hover {
                        background-position: -297px -288px;
                    }
                }
            }
            &:hover {
                .show-btn {
                    display: block;
                }
            }
        }
    }
`