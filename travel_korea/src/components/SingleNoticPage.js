import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Layout/Header";
import Copyright from "../Layout/Copyright";

const SingNoticPage = () => {

    const location = useLocation();
    const noticProperties = location.state.noticData;

    const noticNum = noticProperties.num
    const noticTitle = noticProperties.title
    const noticWriter = noticProperties.writer
    const noticDate = noticProperties.date
    // const noticContent = noticProperties.

    console.log(noticProperties);
    // console.log(location);

    return (
        <>
            <Header />
            <div className="bg-blue-200 m-2 px-40 py-20">
                {/* <div id="Top Layout" className="flex justify-center items-center w-full h-[150px] text-3xl bg-gray-200">
                    공지사항
                </div> */}
                {/* <div>게시물번호 - {noticNum}</div> */}
                <div className="text-3xl mb-8">제목 - {noticTitle}</div>
                <div id="작성시간 + 작성자" className="bg-red-200 flex pb-8 border-b-2 border-black">
                    <div className="pr-2 border-r-2 border-r-black">{noticDate}</div>
                    <div className="pl-2">작성자 - {noticWriter}</div>
                </div>
                <div className="mt-8">게시물내용들어갈자리</div>
            </div>
            <Copyright />
        </>
    );
};

export default SingNoticPage;







