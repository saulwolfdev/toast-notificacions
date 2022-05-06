import styled from "styled-components";

export const Content = styled.div`
  /* padding: 0px 200px 0px 0px; */
  flex: 1;
  padding: 0px;
  text-align: left;
  max-width: 500px;
`;

export const WrapMessage = styled.div`
  padding: 0px 0px 0px 60px;
`;

export const WrapDetail = styled.div`
  padding: 0px 0px 0px 60px;
  color: gray;
`;

export const DismissButton = styled.div`
position: absolute;
top: 0px;
right: 5px;
padding-bottom: 100px;
background: transparent;  
border: none;
color: gray;

&:hover {
    color: red;
  }
`;

export const ContentAvatar = styled.div`
position: absolute;
padding: 6px 0px 50px 0px;
/* top: 25px;
right: 490px; */
padding-bottom: 100px;
background: transparent;  
`;

export const ContentIconCopy = styled.div`
position: absolute;
top: 0px;
right: 50px;
padding-bottom: 100px;
background: transparent;  
border: none;
color: gray;
`;

export const ContentIconEye = styled.div`
position: absolute;
top: 0px;
right: 87px;
padding-bottom: 100px;
background: transparent;  
border: none;
color: gray;
`;

export const ContentButtonText = styled.div`
position: absolute;
top: 0px;
right: 116px;
padding-bottom: 100px;
background: transparent;  
border: none;
color: gray;
`;

export const ContentButtonContained = styled.div`
position: absolute;
top: 0px;
right: 188px;
padding-bottom: 100px;
background: transparent;  
border: none;
color: gray;
`;

export const Box = styled.div`
border: 0.5px  ;
padding: 10px;
box-shadow: 5px 5px 5px10px #888888;
cursor: default;
min-width: 530px;
`;

