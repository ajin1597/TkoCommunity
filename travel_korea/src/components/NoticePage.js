import { json, Link } from "react-router-dom";
import Header from "../Layout/Header";
import Copyright from "../Layout/Copyright";
import Paging from "./Paging";
import { useEffect, useState } from "react";

const NoticePage = () => {

    const [noticData, setNoticData] = useState([]); // api에서 받아온 데이터 저장
    const [listCount, setListCount] = useState([]); // 보여줄 리스트
    const [page, setPage] = useState(1); // 현제 페이지 (초기값 1)
    const handlePageChange = (page) => { setPage(page) } // 페이지헨들러 함수
    const [pageItemsCountPer] = useState(10); // 페이지 내부 리스트 갯수
    const [pageRangeDisplayed] = useState(5); // paginator에서 보여줄 페이지 범위
    // const indexOfLastList = page * pageItemsCountPer; // 이전페이지
    // const indexOfFirstList = indexOfLastList - pageItemsCountPer; // 다음페이지

    // "http://180.70.15.132:9999/noticepage" //{종훈이집}
    // "http://172.16.37.191:9999/noticepage" 
    // "http://172.16.38.135:9999/noticepage" //436

    useEffect(() => {
        fetch(`http://180.70.15.132:9999/count`)
            .then((res) => res.json())
            .then((json) => {
                setListCount(json.count[0].count)
                // console.log(json.count[0].count)
            })
    }, [])

    useEffect(() => {
        fetch(`http://180.70.15.132:9999/test/${page}`)
            .then((res) => res.json())
            .then((json) => {

                // console.log(json)
                setNoticData(json.mainResult)
            });
    }, [page]);

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
                        {noticData.map((ele, idx) => {
                            return (
                                <div key={idx} className="flex"
                                // onClick={qwe}
                                >
                                    {/* {console.log(ele)} */}
                                    <div id="게시물번호" className=" bg-red-50 w-[10%] flex justify-center">{ele.num}</div>
                                    <div id="제목글" className=" bg-red-100 w-[60%] flex justify-center">{ele.title}</div>
                                    <div id="작성자" className=" bg-red-200 w-[15%] flex justify-center">{ele.writer}</div>
                                    <div id="작성시간" className=" bg-red-300 w-[15%] flex justify-center">{ele.date}</div>
                                </div>
                            );
                        })}
                    </div>
                    {/* {console.log(typeof (listCount))} */}
                    <Paging totalItemsCount={listCount} page={page} itemsCountPer={pageItemsCountPer} pageRangeDisplayed={pageRangeDisplayed} handlePageChange={handlePageChange} />
                </div>
            </div>
            <Copyright />
        </>
    );
}

export default NoticePage;
