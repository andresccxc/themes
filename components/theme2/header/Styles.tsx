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
    position:fixed;
    top:0;
    z-index:1000;
    width:100%;

    .link-cont{
        cursor: pointer;
        >.fa-chevron-down{
            position:relative;
            left:0.375rem;
            top:0.125rem;
            font-size:0.875rem;
            margin-right:0.1875rem;
        }
        &:hover ~ .sub-nav{
            display:flex;
        }
    }
    .sub-nav{
        background-color:${(props: any) => props.bgColor ? props.bgColor : 'blue'};
        width:6.875rem;
        height:9.375rem;
        display:none;
        &:hover{
            display:flex;
        }
        a{
            padding:0.3125rem;
            cursor: pointer;
            width:100%;
            &:hover{
                background-color:#fff;
                color:#000;
            }
        }
    }

    .search-icon{
     right:0.3125rem;
     top:0.5rem;
     font-size:0.875rem;
     color:#8d8d8d;
     cursor: pointer;

    }
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

export const InputSearch = styled.input`
 width:13.75rem;
 color:#000;
 font-size:0.875rem;
 &:focus{
     outline:none;
 }
`;

