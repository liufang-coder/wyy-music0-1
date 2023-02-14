import styled from "styled-components";

export const LeftWrapper = styled.div`
    .header {
     padding: 12px 12px 10px;
     font-size: 14px;
     color: #000;
     font-family: simsun;
  } 
  .item {
    height: 62px;
    cursor: pointer;
    .item-content {
        display: flex;
        padding: 10px 0 10px 20px;
        img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        }
        .info {
            padding-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .name {
                color: #000;
            }
            .update {
                color: #999;
            }
        }
    }
    &.active {
        background-color: #f4f2f2;
    }
  }

`