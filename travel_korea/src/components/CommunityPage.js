import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Copyright from "../Layout/Copyright";

function CommunityPage() {



    const arr = ["게시물그림", "게시물제목글", "회원아이디"];


    return (
        <>
            <Header />
            <div id="전체 레이아웃" className="m-4 px-96">
                <div className="bg-purple-200 flex p-2">
                    {arr.map((ele, idx) => {
                        return (
                            <div className="border-2 border-black m-2">
                                <div className="">{arr[0]}</div>
                                <div className="">{arr[1]}</div>
                                <div className="">{arr[2]}</div>
                            </div>
                        );
                    })}



                    {/* <div id="게시물 이미지" className="bg-red-200 rounded-xl">게시물 그림</div>
                    <div id="게시물 제목글" className="bg-blue-200">커뮤니티 제목글</div>
                    <div id="회원아이디">이진우</div> */}
                </div>
            </div>




            <Copyright />
        </>
    );
}

export default CommunityPage;
