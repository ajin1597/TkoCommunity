import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Paging = ({ page, itemsCountPer, totalItemsCount, pageRangeDisplayed, handlePageChange }) => {

    // const [pages, setPages] = useState(page);

    // useEffect(() => { //전체 데이터 갯수
    // setPages(page);
    // pages = useParams();
    // }, [page])
    // let { page } = useParams();
    // console.log(params)
    // console.log(page)
    // const location = useLocation();
    // console.log(location.search);

    // const pages = location.state.page;
    // page = useParams();
    // console.log(typeof (handlePageChange))
    // const navigate = useNavigate();
    // useEffect(() => {
    //     console.log(navigate);
    //     navigate('/NoticePage', {
    //         state: {
    //             page: page,
    //         }
    //     });
    // }, [page, itemsCountPer, totalItemsCount, pageRangeDisplayed, handlePageChange])


    // const navigate = useNavigate();
    // console.log(navigate);
    //  X    = useParams();
    // console.log(page);

    return (
        <Pagination
            activePage={page} //  선택한 페이지
            itemsCountPerPage={itemsCountPer} //  한 페이지당 보여줄 리스트 아이템의 개수
            totalItemsCount={totalItemsCount ? totalItemsCount : 0} //  총 아이템의 개수
            pageRangeDisplayed={pageRangeDisplayed} //  Paginator 내에서 보여줄 페이지의 범위
            prevPageText={"‹"} //  "이전"을 나타낼 텍스트 (prev, <, ...)
            nextPageText={"›"} //  "다음"을 나타낼 텍스트 (next, >, ...)
            onChange={handlePageChange} //  페이지가 바뀔 때 핸들링해줄 함수
        />
    );
};

export default Paging;







