import styled from "styled-components";

export const TitleWrapper = styled.div`
padding: 40px;
display: flex;
    .img {
        position: relative;
        padding: 3px;
        border: 1px solid #ccc;
        img {
            width: 150px;
            height: 150px;
        }
        .cover {
            position: absolute;
            width: 150px;
            height: 150px;
            top: 3px;
            left: 3px;
            background-position: -230px -380px;
        }
    }
    .info {
        margin-left: 30px;
        .name {
            color: #333;
            font-size: 20px;
            font-family: "Microsoft Yahei",Arial,Helvetica,sans-serif;
            margin: 16px 0 4px;
        }
        .update {
            color: #666;
            margin: 8px 0 40px;
        }
        .btn {
            margin-bottom: 25px;
        }
    }


`