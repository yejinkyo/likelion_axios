import React from "react";
import { useNavigate, useParams } from "react-router-dom"; // useParams import
import { useState, useEffect } from "react"; // useEffect import
import * as D from "../styles/styledDetail";
import Modal from "./DelModal"; // 모달 컴포넌트 import
import axios from "axios";

const Detail = () => {
  const [modal, setModal] = useState(false); // 모달 상태 추가

  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/`);
  };

  // 추가
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/posts/${postId}`).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, [postId]);

  return (
    <D.Container>
      <D.BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="back"
          width="35px"
        />
      </D.BackBtn>
      <D.Title>{post && post.title}</D.Title>
      <D.ContentBox>{post && post.content}</D.ContentBox>
      <D.DeleteBtn onClick={() => setModal(true)}>삭제하기</D.DeleteBtn>
      {/* proprs로 post도 전달 */}
      {modal ? <Modal isClose={setModal} post={post} /> : null}
    </D.Container>
  );
};

export default Detail;