import styled from '@emotion/styled';

export const Logo = styled.p`
  font-weight:700;
  font-size:1.875rem;
`;

export const HeaderContainer: any = styled.header`
    background-color:${(props: any) => props.bgColor ? props.bgColor : 'blue'};
    height:${(props: any) => props.height ? props.height : '12.5rem'} ;
    display:flex;
    padding:1.875rem;
    justify-content:space-between;  
    align-items:center;
    color:#fff;
    position:fixed;
    top:0;
    z-index:1000;
    width:100%;
`;

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    a{
        margin-right:1rem;
        cursor: pointer;
        small{
            font-weight:400;
            margin-left:0.3125rem;
        }
        &:last-of-type{
            margin-right:0rem;
        }
    }
`;