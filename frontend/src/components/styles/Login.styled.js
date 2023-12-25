import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  background-color: #090d1f;
  color: #090d1f;
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 500px;
  width: 450px;
  text-align: center;
`;

export const Quote = styled.div`
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
    color: #333;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
  }
`;

export const Form = styled.form`
  label {
    display: block;
    margin-bottom: 15px;
    font-size: 16px;
    color: #333;
    position: relative;
    right: 180px;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    border-radius: 6px;
    color: #333;
    font-size: 16px;
    border-top: none;
    border-left: none;
    border-right: none;
    &:focus {
      outline: none;
      border-color: #3498db;
    }
  }

  button {
    background: #ff4742;
    border: 1px solid #ff4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    min-height: 40px;
    outline: 0;
    padding: 12px 14px;
    text-align: center;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    margin-left: 15px;

    &:hover {
      background-color: #333;
      background-position: 0 0;
      color: #fff;
      transition: 0.7s ease;
    }
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    color: #666;
  }

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const GoogleButton = styled.button`
  margin-bottom: 10px;

  img {
    position: relative;
    top: 3px;
    width: 20px;
    margin-right: 10px;
  }
`;

export const LoginButton = styled.button`
  width: 100px;
`;

export const Error = styled.div`
  p {
    color: lightcoral;
  }
`;
