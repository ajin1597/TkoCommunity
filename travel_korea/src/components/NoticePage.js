import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Copyright from "../Layout/Copyright";
import { useEffect, useState } from "react";

const NoticePage = () => {

    // const a = [1, 2, 3, 4, 5];


    // const [numNoticPost, setNumNoticPost] = useState([]);
    // const [titleNoticPost, setTitleNoticPost] = useState([]);
    // const [contentsNoticPost, setContentsNoticPost] = useState([]);
    // const [userNoticPost, setUserNoticPost] = useState([]);
    // const [dateNoticPost, setDateNoticPost] = useState([]);
    const [noticData, setNoticData] = useState([]);


    // const arr = [numNoticPost
    //     , titleNoticPost
    //     , contentsNoticPost
    //     , userNoticPost
    //     , dateNoticPost]

    // "http://180.70.15.132:9999/noticepage"
    // "http://172.16.37.191:9999/noticepage"
    console.log("3213123")
    useEffect(() => {
        fetch("http://172.16.38.135:9999/noticepage")
            .then((res) => res.json())
            .then((json) => {
                // console.log(json);
                setNoticData(json);
            });
    }, []);
    console.log(noticData);

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
                    <div id="공지사항 게시물 포멧" className="w-[100%] bg-blue-300">
                        {noticData.map((ele) => {
                            return (
                                <div className="flex "
                                // onClick={qwe}
                                >
                                    {console.log(ele)}
                                    <div id="게시물번호" className=" bg-red-50 w-[10%] flex justify-center">{ele.num}</div>
                                    <div id="제목글" className=" bg-red-100 w-[60%] flex justify-center">{ele.title}</div>
                                    <div id="작성자" className=" bg-red-200 w-[15%] flex justify-center">{ele.writer}</div>
                                    <div id="작성시간" className=" bg-red-300 w-[15%] flex justify-center">{ele.date}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Copyright />
        </>
    );
}

export default NoticePage;
