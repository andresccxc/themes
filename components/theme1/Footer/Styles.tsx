import styled from '@emotion/styled';

export const FooterContainer: any = styled.footer`
  background-color:${(props: any) => props.bgColor ? props.bgColor : 'blue'};
  padding:1.25rem 0;
  color:#fff;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:14.5625rem;
  @media(max-width:49.125rem){
    margin-top:10rem;
  }
  .fab{
    margin:0 0.3125rem;
  }
`;



