import styled from '@emotion/styled';


export const Wrapper = styled.div`
position:fixed;
right:0;
top:7.5rem;
width:1.875rem;
height:6.25rem;
border:0.0625rem solid #ccc;
overflow:hidden; 
.theme{
    height:50%;
    border-bottom:0.0625rem solid #ccc;
    cursor: pointer;
    &:last-of-type{
    border:none;
    }
}
.shadow-theme{
  width:100%;
  height:100%;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  padding:0;
  transition:.4s all;
  position:absolute;
  top:0; 
  transition:.4s all;
  z-index:1000;
  cursor: pointer;
  .fa-paint-roller{
      width:100%;
      color:#fff;
      cursor: pointer;
  }
  .theme-text{
      line-height:11px;
      font-size:12px;
      color:#fff;
  }

}
.brush-down{
    position:absolute;
    top:6.25rem; 
  }
.fa-sort-up{
    left:0.5625rem;
    bottom:-0.75rem;
    cursor: pointer;
    transition:.4s all;
    font-size:1.25rem;
    &:hover{
        color:grey;
    }
}`;