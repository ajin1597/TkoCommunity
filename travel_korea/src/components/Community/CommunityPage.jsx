import { Link, json, useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Paging from "../Pagination/Paging";
import { useEffect, useState } from "react";
import * as LoginCheck from "../../util/CheckLogin.jsx";

const CommunityPage = () => {
  const navigate = useNavigate();
  const { page } = useParams(); // 현제 페이지, 파라미터값
  const handlePageChange = (page) => {
    navigate(`/CommunityPage/${page}`);
  }; // 페이지헨들러 함수
  const [commuData, setCommuData] = useState([]); // api에서 받아온 데이터 저장
  const [listCount, setListCount] = useState(); // 보여줄 리스트
  const [pageItemsCountPer] = useState(10); // 페이지 내부 리스트 갯수
  const [pageRangeDisplayed] = useState(5); // paginator에서 보여줄 페이지 범위

  const loginState = LoginCheck.CheckLogin();
  const url = process.env.REACT_APP_API_URL

  useEffect(() => {
    //전체 데이터 갯수
    fetch(`${url}/api/community/count`)
      .then((res) => res.json())
      .then((json) => {
        setListCount(json.count);
      });
  }, []);

  useEffect(() => {
    // 해당 페이지 번호의 데이터 , 페이지가 선택될때마다 랜더링
    fetch(`${url}/api/community/${page}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCommuData(json);
      });
  }, [page]);

  return (
    <>
      <Layout title="커뮤니티" page={page}>
        <div id="커뮤니티 페이지 전체 레이아웃">
          <div
            id="커뮤니티 게시물 리스트"
            className="flex flex-col "
          >
            <div
              id="Top Layout"
              className={`flex justify-start items-end pb-16 mb-5 h-[150px] text-3xl border-b-2 border-gray-300 `}
            >
              커뮤니티
            </div>
            <div className="w-full flex justify-end mb-4">
              <Link to={`/CommuWriting`} className="flex justify-center items-center rounded-lg border-2 text-gray-50 bg-green-400 w-20 h-14 mt-4 hover:bg-green-500">글쓰기</Link>
            </div>

            <div id="커뮤니티 게시물 포멧" className="w-[100%] rounded-2xl bg-gray-50 flex flex-wrap justify-center">
              {commuData.map((commu, idx) => {
                return (
                  <div key={idx} className="m-4 w-[280px]">
                    <nav>
                      <ul>
                        <li className="p-2 h-[260px] shadow-xl bg-white border-gray-300 border-2 rounded-2xl">
                          <Link to={`/SingleCommuPage/${commu.num}`}>
                            <div className="flex justify-around items-center">
                              <div id="작성자" className="flex justify-center text-sm w-[150px]">작성자 - {commu.writer}</div>
                              <div id="작성시간" className="flex justify-center text-sm w-[130px] text-center">{commu.date}</div>
                            </div>
                            <div id="게시글이미지" className={`flex justify-center rounded-2xl mb-1 items-center h-[120px]`}></div>
                            <div id="제목글" className="flex justify-lfet text-lg font-cookie">{commu.title}</div>
                            <div id="게시물내용" className="break-all line-clamp-2">{commu.contents}</div>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                );
              })}
            </div>
            <Paging totalItemsCount={listCount} page={parseInt(page)} itemsCountPer={pageItemsCountPer} pageRangeDisplayed={pageRangeDisplayed} handlePageChange={handlePageChange} />
          </div>
        </div>
      </Layout>
    </>
  );
};


export default CommunityPage;
