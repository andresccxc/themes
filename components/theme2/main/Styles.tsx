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
   padding:4.6875rem 0;
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
`;

export const CardContainer = styled.div`
  width:11.25rem;
  height:18.75rem;
  border-radius:0.625rem;
  box-shadow: 0rem 0rem 0.3125rem 0rem rgba(50, 50, 50, 0.75);
  margin:1.25rem 3.125rem;
  .card-header,.card-body{
    height:50%;
  }
  .card-header{
    background-size:cover;
    background-image:url('https://image.freepik.com/foto-gratis/telefonos-celulares-viejos-obsoletos-sobre-fondo-negro_35378-3090.jpg');
    border-radius:0.625rem 0.625rem 0 0;
    .product-image{
      width:11.25rem;
      bottom:-2.1875rem;
      right:-4.375rem;
      transform:rotate(-45deg);
      transition:.4s all;
      cursor: pointer;
    }
  }
  .card-body{
    padding:0.625rem;
    .add-cart{
      width:4.6875rem;
      border:0.0625rem solid #ccc; 
      font-size:0.875rem;
      .add-item{
        width:33.3%;
        display:inline-block;
        border-right:0.0625rem solid #ccc;
        text-align:center;
        cursor: pointer;
        &:last-of-type{
          border-right:none
        }
      }
    }
    .add-cart-icon{
        top:0.3125rem;
        margin-left:0.5rem;
        cursor: pointer;
        color:green;
    }
    .fa-star{
      color:black;
      font-size:0.875rem;
    }
    .cont-price{
      width:100px;
      background-color:#fff159;
      text-align:center;
      box-shadow: 0rem 0rem 0.3125rem 0rem rgba(50, 50, 50, 0.75);
      font-size:0.875rem;
      padding:0.1875rem;
      color:#7e7e7e;
      cursor: pointer;
      right:-0.9375rem;
      bottom:1.25rem;
    }
  }
`;