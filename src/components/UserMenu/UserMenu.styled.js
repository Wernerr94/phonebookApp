import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  font-family: 'Red Hat Display', sans-serif;
  color: #fff;
  font-weight: 700;
  & span {
    margin-right: 10px;
    max-width: 200px;
  }
`;
export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  background: linear-gradient(to bottom, #b6ccfe 5%, #80b5ea 100%);
  background-color: #b6ccfe;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  height: 24px;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  width: 100px;
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  padding: 0 15px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
  &:hover {
    background: linear-gradient(to bottom, #80b5ea 5%, #b6ccfe 100%);
    background-color: #80b5ea;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
