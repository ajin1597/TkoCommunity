import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Copyright from "../Layout/Copyright";
import { useState } from "react";

const NoticePage = () => {

    const [titleNotic, setTitleNotic] = useState([]);
    const [userNotic, setUserNotic] = useState([]);
    const [dateNotic, setDateNotic] = useState([]);
    const [numNotic, setNumNotic] = useState([]);

    return (
        <>
            <Header />
            <div id="공지사항 페이지 전체 레이아웃">
                <div id="Top Layout" className="flex justify-center items-center w-full h-[150px] text-3xl bg-gray-200">
                    공지사항
                </div>
                <div id="공지사항 게시물 리스트" className="flex flex-col bg-red-200 m-5 p-5">
                    <div id="리스트 타이틀" className="bg-gray-200 flex justify-between w-[100%] border-t-2 border-t-gray-400">
                        <div className="w-[10%] flex justify-center">No.</div>
                        <div className="w-[60%] flex justify-center">제목</div>
                        <div className="w-[15%] flex justify-center">작성자</div>
                        <div className="w-[15%] flex justify-center">작성날짜</div>
                    </div>
                    <div id="공지사항 게시물 포멧" className="flex justify-between w-[100%] bg-blue-300">
                        {/* 밑에 포멧형식으로 map돌리기 */}
                        <div id="게시물번호" className="w-[10%] flex justify-center ">1.</div>
                        <div id="제목글" className="w-[60%] flex justify-start pr-[500px] bg-purple-200 ">집가고싶다</div>
                        <div id="작성자" className="w-[15%] flex justify-center ">이진우</div>
                        <div id="작성시간" className="w-[15%] flex justify-center ">2023.03.23</div>
                    </div>
                </div>

            </div>
            <Copyright />
        </>
    );
}

export default NoticePage;
