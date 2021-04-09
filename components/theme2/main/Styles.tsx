import styled from '@emotion/styled';


export const MainContainer = styled.div`
   margin:9.5rem auto 0 auto;
   width:90%;
   .products-title{
       font-size:1.5625rem;
       font-weight:700;
   }
`;
export const Filters = styled.div`
   width:30%;
   .container-filters{
       width:28.75rem;
       background-color:#fff159;
       margin: 0 auto 1.25rem auto;
       .btn-filter{
           width:8.125rem;
           background-color:rgba(0,0,0,.7);
           padding:0.25rem;
           margin:0.625rem;
           color:#fff;
           cursor: pointer;
           transition:.4s all;
           &:focus{
               outline:none;
           }
           &:active{
               transform:scale(.97)
           }
       }
   }
   .filters-selected{
    background-color:#117411;
       .btn-filter{
           position:relative;
           .remove-filter{
               font-weight:bold;
               color:darkred;
           }
        background-color:rgba(255,255,255,.2);
       }
   }
`;
export const Products = styled.div`
   width:70%;
   border:0.0625rem solid blue;
`;