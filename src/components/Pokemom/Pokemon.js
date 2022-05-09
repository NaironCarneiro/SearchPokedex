import styled from "styled-components";

export const Pokemon = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span{
        
        font-weight: bold;
        font-size: 120%;
        text-align: center;
        margin-bottom: 1rem;
    }

    h4{
        color:#00BFFF	;
        margin-bottom: 0.4rem;
    }

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);

    }
`;
