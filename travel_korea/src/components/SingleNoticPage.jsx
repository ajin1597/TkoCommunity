import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

const SingNoticPage = () => {
  const navigate = useNavigate();
  const { postNum } = useParams();
  const [previousPost, setPreviousPost] = useState(); // 이전게시물
  const [currentPost, setCurrentPost] = useState(); // 현재게시물
  const [nextPost, setNextPost] = useState(); // 다음게시물
  const [searchPageNum, setSearchPageNum] = useState();
  const [inputValue, setInputValue] = useState(""); // 내용글
  
  const handleFormSubmit = (e) => {
    if(!inputValue) {
      e.preventDefault();

      alert("댓글을 입력")
    }

    const formData = new FormData();
    
    formData.append("contents", inputValue);
    formData.append("token", localStorage.getItem("token"))

    //로그인 안하면 못하게

  }

  const url = process.env.REACT_APP_API_URL

  const noticeDetail = [
    {
      "num": "1",
      "title": "qwe",
      "date": "2023.05.23",
      "writer": "이진우",
      "contents": "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    }
  ];
  console.log(noticeDetail.num);
  useEffect(() => {
    fetch(`${url}/NoticeDetail/${postNum}`)
      .then((res) => res.json())
      .then((json) => {
        const singleNoticData = json.noticeDetail;
        setSearchPageNum(parseInt(singleNoticData[0].page / 10 + 1));

        const now = () => {
          setPreviousPost(singleNoticData[2]);
          setCurrentPost(singleNoticData[1]);
          setNextPost(singleNoticData[0]);
        };

        const first = () => {
          setCurrentPost(singleNoticData[1]);
          setNextPost(singleNoticData[0]);
          setPreviousPost(null);
        };

        const end = () => {
          setPreviousPost(singleNoticData[1]);
          setCurrentPost(singleNoticData[0]);
          setNextPost(null);
        };

        return singleNoticData.length === 4 ? now()
          : singleNoticData[1].num === parseInt(postNum) ? first()
            : singleNoticData[0].num === parseInt(postNum) ? end()
              : null;

        // if (singleNoticData[2]) { // 중간게시물 선택시
        //     setPreviousPost(singleNoticData[0]);
        //     setCurrentPost(singleNoticData[1]);
        //     setNextPost(singleNoticData[2]);
        // } else if (singleNoticData[1].num === parseInt(postNum)) { // 첫 게시물 선택시
        //     setCurrentPost(singleNoticData[1]);
        //     setNextPost(singleNoticData[0]);
        // } else if (singleNoticData[0].num === parseInt(postNum)) { // 마지막 게시물 선택시
        //     setPreviousPost(singleNoticData[1]);
        //     setCurrentPost(singleNoticData[0]);
        // } else {
        //     return null;
        // }

        // return (
        //     singleNoticData[2] ? () => {
        //         setPreviousPost(singleNoticData[0]);
        //         setCurrentPost(singleNoticData[1]);
        //         setNextPost(singleNoticData[2]);
        //     } :
        //         singleNoticData[1].num === parseInt(postNum) ? () => {
        //             setCurrentPost(singleNoticData[1]);
        //             setNextPost(singleNoticData[0]);
        //         }
        //             :
        //             singleNoticData[0].num === parseInt(postNum) ? () => {
        //                 setPreviousPost(singleNoticData[1]);
        //                 setCurrentPost(singleNoticData[0]);
        //             } : null
        // )
      });
  }, [postNum]);

  return (
    <>
      {/* <Layout>
        {currentPost ? (
          <div className=" my-5 ">
            <div className="text-lg border-b-2 border-gray-500 mb-4">공지사항 - {currentPost.num}번 게시물</div>
            <div className="text-3xl mb-8">글 제목 :  {currentPost.title}</div>
            <div id="작성시간 + 작성자" className=" flex pb-2 border-b-2 border-black">
              <div className="pr-2 border-r-2 border-r-black">{currentPost.date}</div>
              <div className="pl-2">작성자 - {currentPost.writer}</div>
            </div>
            <div className="mt-8">{currentPost.contents}</div>
            <div className="  border-t-2 w-full border-t-black mt-8   pt-2 flex">
              <div id="이전게시물" className="  w-full">
                {previousPost ? (<Link to={`/SingleNoticPage/${previousPost.num}`}>이전 글 - {previousPost.title}</Link>)
                  : ("이전 게시물이 없습니다")}
              </div>
              <button id="뒤로가기" className="flex justify-center w-full" onClick={() => { navigate(`/NoticePage/${searchPageNum}`) }}>
                {" "}목록으로
              </button>
              <div id="다음게시물" className="flex justify-end w-full">
                {nextPost ? (<Link to={`/SingleNoticPage/${nextPost.num}`}>다음 글 - {nextPost.title} </Link>)
                  : ("다음 게시물이 없습니다")}
              </div>
            </div>
          </div>
        ) : null}
      </Layout> */}

      <Layout>
        {noticeDetail ? (
          <div className=" my-5 ">
            <div className="text-lg border-b-2 border-gray-500 mb-4">공지사항 - {noticeDetail.num}번 게시물</div>
            <div className="text-3xl mb-8">글 제목 :  {noticeDetail.title}</div>
            <div id="작성시간 + 작성자" className=" flex pb-2 border-b-2 border-black">
              <div className="pr-2 border-r-2 border-r-black">{noticeDetail.date}</div>
              <div className="pl-2">작성자 - {noticeDetail.writer}</div>
            </div>
            <div className="mt-8">{noticeDetail.contents}</div>
            <div className="  border-t-2 w-full border-t-black mt-8 border-b-2 border-gray-300 py-2 flex">
              <div id="이전게시물" className="  w-full">
                {noticeDetail ? (<Link to={`/SingleNoticPage/${noticeDetail.num}`}>이전 글 - {noticeDetail.title}</Link>)
                  : ("이전 게시물이 없습니다")}
              </div>
              <button id="뒤로가기" className="flex justify-center w-full" onClick={() => { navigate(`/NoticePage/${searchPageNum}`) }}>
                {" "}목록으로
              </button>
              <div id="다음게시물" className="flex justify-end w-full">
                {noticeDetail ? (<Link to={`/SingleNoticPage/${noticeDetail.num}`}>다음 글 - {noticeDetail.title} </Link>)
                  : ("다음 게시물이 없습니다")}
              </div>
            </div>
            <div id="댓글 칸">
              {/* 로그인 한 뒤 작성가능, 작성자는 프로필 가져와서 자동으로 넣기,   */}
              <form id="댓글작성form" className="flex justify-center items-center py-10 border border-b-black">
                <div className="flex items-center h-[50px] border border-black">회원 프로필</div>
                <textarea type="text" spellcheck="false" className="mx-5 w-[800px] border border-black"></textarea>
                <button className="h-[50px] border border-black ">등록버튼</button>
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

export default SingNoticPage;
