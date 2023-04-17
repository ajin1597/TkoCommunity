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

  useEffect(() => {
    fetch(`http://172.16.38.6:9998/NoticeDetail/${postNum}`)
      .then((res) => res.json())
      .then((json) => {
        const singleNoticData = json.noticeDetail;
        setSearchPageNum(parseInt(singleNoticData[0].page / 10 + 1));
        console.log(json);
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

        return singleNoticData.length === 3 ? now()
          : singleNoticData[1].num === parseInt(postNum) ? first()
            : singleNoticData[0].num === parseInt(postNum) ? end()
              : null;

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
      <Layout>
        {currentPost ? (
          <div className=" my-5 ">
            <div className="text-lg border-b-2 border-gray-500 mb-4">공지사항 - {currentPost.num}번 게시물</div>
            <div className="text-3xl mb-8">글 제목 :  {currentPost.title}</div>
            <div id="작성시간 + 작성자" className=" flex pb-2 border-b-2 border-black">
              <div className="pr-2 border-r-2 border-r-black">{currentPost.date}</div>
              <div className="pl-2">작성자 - {currentPost.writer}</div>
            </div>
            <div className="mt-8">{currentPost.contents}</div>
            <div className="  border-t-2 w-full border-t-black mt-8 pt-2 flex">
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
      </Layout>
    </>
  );
};

export default SingNoticPage;
