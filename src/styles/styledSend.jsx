import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 390px;
  height: 98vh;
  background: #fff2c6;
`;
export const BackBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const TitleWrapper = styled.div`
  width: 16rem;
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  color: #5f5f5f;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
export const TitleInput = styled.input`
  width: 9rem;
  height: 1.5rem;
  background: none;
  border: none;
  border-bottom: 1px solid #000;
  color: #000;
  font-family: Inter;
  font-size: 1rem;
`;
export const ContentBox = styled.textarea`
  margin-top: 30px;
  width: 18rem;
  height: 27rem;
  border-radius: 0px 0px 30px 0px;
  border: 1px solid #5f5f5f;
  background: #fff;
  resize: none;
  color: #5f5f5f;
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;
export const SaveBtn = styled.div`
  margin-top: 20px;
  width: 18rem;
  height: 45px;
  border-radius: 15px;
  border: 1px solid #5f5f5f;
  background: #fffef1;
  text-align: center;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.8;
`;
