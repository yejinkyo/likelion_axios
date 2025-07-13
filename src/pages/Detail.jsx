import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as D from "../styles/styledDetail";
import Modal from "./DelModal"; // 모달 컴포넌트 import

const Detail = () => {
  const [modal, setModal] = useState(false); // 모달 상태 추가

  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <D.Container>
      <D.BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="back"
          width="35px"
        />
      </D.BackBtn>
      <D.Title>x</D.Title>
      <D.ContentBox>x</D.ContentBox>
      <D.DeleteBtn onClick={() => setModal(true)}>삭제하기</D.DeleteBtn>
      {modal ? <Modal isClose={setModal} /> : null}
    </D.Container>
  );
};

export default Detail;
