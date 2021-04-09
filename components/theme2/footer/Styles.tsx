import styled from '@emotion/styled';

export const FooterContainer: any = styled.div`
background-color:${(props: any) => props.bgColor ? props.bgColor : 'blue'};
margin-top:14.5625rem;
padding:1.25rem;
  @media(max-width:49.125rem){
    margin-top:10rem;
  }
  .columns-container{
    width:90%;
    margin:auto;
    .footer-col{
      margin:0 0.625rem;
      padding:0.3125rem 0;
      img{
        width:4.375rem;
      }
      .description{
        color:#7a7979;
      }
    }
  }
  .column-text{
    width:19rem;
  }
`;