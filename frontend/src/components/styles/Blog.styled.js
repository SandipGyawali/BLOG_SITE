import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 60px auto;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 40px;
  }
`;

export const Label = styled.label`
  color: #fff;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #61dafb; /* Change focus color as per your preference */
  }
`;

export const TextArea = styled.textarea`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  background-color: #333;
`;

export const CustomEditor = styled.div`
  height: auto;
  min-height: 500px;
`;

export const UploadBtn = styled.button`
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
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
    background-color: initial;
    background-position: 0 0;
    color: #fff;
    transition: 0.7s ease;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Select = styled.select`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Error = styled.div`
  color: lightcoral;
  text-align: center;
  font-size: 20px;
`;
