import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../Layout/Header";
import Copyright from "../Layout/Copyright";

const SingNoticPage = () => {
    const { postNum } = useParams();

    const [previousPost, setPreviousPost] = useState(); // 이전게시물
    const [currentPost, setCurrentPost] = useState(); // 현재게시물
    const [nextPost, setNextPost] = useState(); // 다음게시물

    console.log(postNum);

    useEffect(() => {
        fetch(`http://180.70.15.132:9998/NoticeDetail/${postNum}`)
            .then((res) => res.json())
            .then((json) => {
                const singleNoticData = json.noticeDetail;
                console.log(json)

                if (singleNoticData[2]) { // 중간게시물 선택시
                    setPreviousPost(singleNoticData[0]);
                    setCurrentPost(singleNoticData[1]);
                    setNextPost(singleNoticData[2]);
                } else if (singleNoticData[1].num === parseInt(postNum)) { // 첫 게시물 선택시
                    setCurrentPost(singleNoticData[1]);
                    setNextPost(singleNoticData[0]);
                } else if (singleNoticData[0].num === parseInt(postNum)) { // 마지막 게시물 선택시
                    setPreviousPost(singleNoticData[1]);
                    setCurrentPost(singleNoticData[0]);
                } else {
                    return null;
                }

            })
    }, [postNum])

    return (
        <>
            <Header />
            {currentPost ? <div className="bg-blue-200 m-2 px-40 py-20">
                {/* <div id="Top Layout" className="flex justify-center items-center w-full h-[150px] text-3xl bg-gray-200">
                    공지사항
                </div> */}
                {/* <div>게시물번호 - {noticNum}</div> */}
                <div className="text-3xl mb-8">제목 - {currentPost.title}</div>
                <div id="작성시간 + 작성자" className="bg-red-200 flex pb-8 border-b-2 border-black">
                    <div className="pr-2 border-r-2 border-r-black">{currentPost.date}</div>
                    <div className="pl-2">작성자 - {currentPost.writer}</div>
                </div>
                <div className="mt-8">{currentPost.contents}</div>
                <div className="border-t-2 border-t-black mt-8 pt-2">
                    {previousPost ? <div id="이전게시물">이전 {previousPost.title} </div> : <div>첫 번째 게시물입니다</div>}
                    {nextPost ? <div id="다음게시물">다음 {nextPost.title}</div> : <div>마지막 게시물입니다</div>}
                    <div id="뒤로가기" className="mt-3"> 목록으로</div>
                </div>
            </div> : null}

            <Copyright />
        </>
    );
};

export default SingNoticPage;







