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

    // const 

    // const noticContent = noticProperties.

    console.log(noticProperties);
    console.log(location);

    useEffect(() => {
        fetch(`http://172.16.38.121:9998/NoticeDetail/${noticProperties}`)
            .then((res) => res.json())
            .then((json) => {
                const singleNoticData = json.noticeDetail;
                console.log(singleNoticData);
                setData(json.noticeDetail);

                // { singleNoticData[0] ? { setPreviousPost() } : null }

                // const now = (json) => {
                // setPreviousPost(json.noticeDetail[0]);
                // setCurrentPost(json.noticeDetail[1]);
                // setNextPost(json.noticeDetail[2]);
                // }
                // 
                // const first = (json) => {
                // setCurrentPost(json.noticeDetail[0]);
                // setNextPost(json.noticeDetail[1]);
                // }
                // 
                // const end = (json) => {
                // setPreviousPost(json.noticeDetail[0]);
                // setCurrentPost(json.noticeDetail[1]);
                // }
                // 

                // 
                // a();
            })
    }, [noticProperties])


    // const SingleData = () => {
    // return (
    // data[2].num ? (
    // setPreviousPost(data[0]),
    // setCurrentPost(data[1]),
    // setNextPost(data[2])
    // ) : data[1].num === 1 ? end 
    // : data[0].num + data[1].num > 3 ? first
    // : null
    // )
    // };

    SingleData();
    // console.log(data[0])

    // data.map((ele, idx) => {
    //     console.log(ele)
    // });

    // data.map((ele, idx) => {

    // console.log(ele);
    // singleNoticData[2].num ? now
    //     : (singleNoticData[1].num === 1) ? end
    //         : (singleNoticData[0].num + singleNoticData[1].num > 3) ? first
    //             : null

    // });

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
                    {previousPost ? <div id="이전게시물">이전{previousPost.date} </div> : <div>첫 번째 게시물입니다</div>}
                    {nextPost ? <div id="다음게시물">다음{nextPost.date}</div> : <div>마지막 게시물입니다</div>}
                    <div id="뒤로가기" className="mt-3"> 목록으로</div>
                </div>
            </div> : null}

            <Copyright />
        </>
    );
};

export default SingNoticPage;







