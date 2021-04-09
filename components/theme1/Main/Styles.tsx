import styled from '@emotion/styled';

export const Title = styled.h1`
  font-weight:700;
  font-size:1.875rem;
  text-align:center;
  margin-bottom:2.5rem;
`;
export const MainContainer = styled.div`
   margin:7.5rem auto 0 auto;
   width:90%;
`;
export const ProductsContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  width:100%;

`;
export const CardContainer: any = styled.div`
    width:12.5rem;
    height:18.75rem;
    position: relative;
    cursor: pointer;
    overflow:hidden;
    border-radius:0.5rem;
    margin:1.25rem;
    &:hover>.card-shadow{
        bottom:0;
    }
    .card-header{
        height:75%;
        background-size:cover;
        background-image:url(${(props: any) => props.img ? props.img : ''});
    }
    .card-body{
        height:25%;
    }
    .card-shadow{
        position: absolute;
        width:100%;
        height:40%;
        background:rgba(0,0,0,.6);
        bottom:-40%;
        transition:.4s all;
        .add-cart{
            background:linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
            color:#fff;
            padding:0.3125rem 0;
            span{
                display:inline-block;
                margin:0 0.25rem;
            }
        }
        .fa-cart-plus{
            position:relative;
            right:0.125rem;
            transition:.4s all;
        }
        .up-cart{
            transform:rotateZ(-20deg);
            color:green;
        }
        .down-cart{
            transform:translateZ(0deg);
        }
    }
`;


export const Select = styled.select`
 width:250px;
 padding:6px 0;
 background:transparent;
 cursor: pointer;
 border-radius:3px;
 border:1px solid #ccc;
 &:focus{
     outline:none;
 }
`;