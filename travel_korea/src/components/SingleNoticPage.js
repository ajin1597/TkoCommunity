import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Layout/Header";
import Copyright from "../Layout/Copyright";

const SingNoticPage = () => {

    const location = useLocation();
    const noticProperties = location.state.noticData;

    const [data, setData] = useState();

    const [previousPost, setPreviousPost] = useState(); // 이전게시물
    const [currentPost, setCurrentPost] = useState(); // 현재게시물
    const [nextPost, setNextPost] = useState(); // 다음게시물

    // const noticContent = noticProperties.

    console.log(noticProperties);
    console.log(location);

    useEffect(() => {
        fetch(`http://172.16.36.62:9998/NoticeDetail/${noticProperties}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json.noticeDetail);

                // setData(json.noticeDetail[0]);
                setPreviousPost(json.noticeDetail[0]);
                setCurrentPost(json.noticeDetail[1]);
                setNextPost(json.noticeDetail[2]);

                // setListCount(json.count[0].count)
            })
    }, [noticProperties])





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
                    <div id="이전게시물">이전{previousPost.contents} </div>
                    <div id="다음게시물">다음{nextPost.contents}</div>
                    <div id="뒤로가기" className="mt-3"> 목록으로</div>
                </div>
            </div> : null}

            <Copyright />
        </>
    );
};

export default SingNoticPage;







