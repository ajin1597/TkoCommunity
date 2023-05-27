import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";

const SingleCommuPage = () => {
  const navigate = useNavigate();
  const { postNum } = useParams();
  const [currentPost, setCurrentPost] = useState(); // 현재게시물
  const [searchPageNum, setSearchPageNum] = useState();
  const [inputValue, setInputValue] = useState(""); // 내용

  const url = process.env.REACT_APP_API_URL;

  const handleFormSubmit = (e) => {
    if (!inputValue) {
      alert("내용을 입력해주세요");
      return;
    }

    const formData = new FormData();

    formData.append("contents", inputValue);
    formData.append("postNum", postNum);
    formData.append("token", localStorage.getItem("token"));

    fetch(`${url}/api/community/comment/writing`, {
      method: "POST",
      body: formData,
    });
  };

  useEffect(() => {
    fetch(`${url}/api/communityDetail/${postNum}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setSearchPageNum(parseInt(json[0].page / 12 + 1));
        setCurrentPost(...json);
      });
  }, [postNum]);

  return (
    <>
      <Layout>
        {currentPost ? (
          <div className="">
            <div
              id="Top Layout"
              className={`flex justify-start items-end pb-16 mb-5 h-[150px] text-3xl border-b-2 border-gray-300 `}
            >
              커뮤니티
            </div>
            <div className="flex justify-between items-center border-b-2 border-black">
              <div className="text-3xl mb-8 ">{currentPost.title}</div>
              <div id="작성시간 + 작성자" className=" flex pb-2 ">
                <div className="pr-2 ">{currentPost.date}</div>
              </div>
            </div>
            <div className="mt-8 break-all">{currentPost.contents}</div>
            <div className="  border-t-2 w-full border-t-black my-8   pt-2 flex">
              <div id="이전게시물" className="  w-full">
                {currentPost.nextNum ? (
                  <Link to={`/SingleCommuPage/${currentPost.nextNum}`}>
                    이전 글 - {currentPost.nextTitle}
                  </Link>
                ) : (
                  "이전 게시물이 없습니다"
                )}
              </div>
              <button
                id="뒤로가기"
                className="flex justify-center w-full"
                onClick={() => {
                  navigate(`/communityPage/${searchPageNum}`);
                }}
              >
                {" "}
                목록으로
              </button>
              <div id="다음게시물" className="flex justify-end w-full">
                {currentPost.beforeNum ? (
                  <Link to={`/SingleCommuPage/${currentPost.beforeNum}`}>
                    다음 글 - {currentPost.beforeTitle}{" "}
                  </Link>
                ) : (
                  "다음 게시물이 없습니다"
                )}
              </div>
            </div>

            <div id="댓글 칸">
              {/* 로그인 한 뒤 작성가능, 작성자는 프로필 가져와서 자동으로 넣기,   */}
              <form  id="writingForm" className="flex justify-center items-center" onSubmit={handleFormSubmit}>
                <div className="flex items-center h-[50px] border border-black">회원 프로필</div>
                <textarea type="text" className="mx-5 w-[800px] border border-black" 
                value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit" className="h-[50px] border border-black">
                작성하기
                </button> 
              </form>
              <div id="작성된댓글 list" className="flex justify-center items-center py-10">
                <div className="flex items-center h-[50px] border border-black">회원 프로필</div>
                <div className="h-[50px] mx-5 w-[800px] border border-black roun"></div>
                {/* <button className="h-[50px] border border-black ">등록버튼</button> */}
              </div>
            </div>

          </div>
        ) : null}
      </Layout>
    </>
  );
};

export default SingleCommuPage;