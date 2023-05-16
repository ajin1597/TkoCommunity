import { ReactComponent as TkoLogo } from "../assets/images/tkoLogo.svg";
import { useLocation, Link } from "react-router-dom";
import "../assets/fonts/CookieRunRegular.ttf";

const Layout = (props) => {
  let location = useLocation();
  console.log(location)
  console.log(props)
  return (
    <>
      <div
        id="상단바"
        className="flex justify-between items-center bg-white h-[65px] text-xl border-b-2 border-b-gray-300 fixed w-full"
      >
        <div id="상단바 왼쪽" className="flex justify-around w-[20%] bg-white ">
          <nav><ul><li>
            <Link to="/" className={`hover:font-cookie ${location.pathname === "/"
              ? "font-cookie border-b-2 border-black" : ""}`}>
              <TkoLogo className="w-[168px]" />
            </Link>
          </li></ul></nav>
        </div>

        <div id="상단바 가운데" className="w-[55%]">
          <nav>
            <ul className="flex justify-around">
              <li>
                <Link
                  to="/NoticePage/1"
                  className={`hover:font-cookie ${location.pathname === `/NoticePage/${props.page}`
                    ? "font-cookie border-b-2 border-black" : ""}`}>공지사항
                </Link>
              </li>
              <li>
                <Link
                  to="/CommunityPage/1"
                  className={`hover:font-cookie ${location.pathname === "/CommunityPage/1"
                    ? "font-cookie border-b-2 border-black"
                    : ""
                    }`}
                >
                  커뮤니티
                </Link>
              </li>
              <li>
                <Link
                  to="/ChatGptPage"
                  className={`hover:font-cookie ${location.pathname === "/ChatGptPage"
                    ? "font-cookie border-b-2 border-black"
                    : ""
                    }`}
                >
                  챗봇검색
                </Link>
              </li>

              <li>
                <Link
                  to="/PostSearch"
                  className={`hover:font-cookie ${location.pathname === "/PostSearch"
                    ? "font-cookie border-b-2 border-black"
                    : ""
                    }`}
                >
                  게시물검색
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          id="상단바 오른쪽"
          className="flex justify-end items-center w-[25%]"
        >
          <div
            id="로그인"
            className="flex justify-end  border-r-2 border-r-black pr-2 hover:font-cookie"
          >
            <Link
              to="/Login"
              className={`hover:font-cookie ${location.pathname === "/Login"
                ? "font-cookie border-b-2 border-black"
                : ""
                }`}
            >
              로그인
            </Link>
          </div>
          <div id="회원가입" className="pl-2 hover:font-cookie w-[100px]">
            회원가입
          </div>
        </div>
      </div>

      <div className="pt-[65px]">
        {/* {props.title === "공지사항" ? (
          <div
            id="Top Layout"
            className="flex justify-center items-center w-full h-[150px] text-3xl bg-gray-200"
          >
            공지사항
          </div>
        ) : props.title === "커뮤니티" ? (
          <div
            id="Top Layout"
            className="flex justify-center items-center w-full h-[150px] text-3xl bg-green-200"
          >
            커뮤니티
          </div>
        ) : null} */}

        {props.title ? (
          <div
            id="Top Layout"
            className={`flex justify-center items-center w-full h-[150px] text-3xl ${props.title === "공지사항" ? "bg-gray-200" : "bg-green-200"}`}
          >
            {props.title}
          </div>
        ) : null}

        <div className="px-[16%]">{props.children}</div>

        <div id="하단 사이트 정보">
          <div className="bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex flex-wrap justify-center flex justify-between">
              <div className="p-5">
                <div className="text-xs uppercase text-gray-500 font-medium">
                  Home
                </div>
                <div className="my-3 block" href="/#">
                  Services <span className="text-teal-600 text-xs p-1"></span>
                </div>
                <div className="my-3 block" href="/#">
                  Products <span className="text-teal-600 text-xs p-1"></span>
                </div>
                <div className="my-3 block" href="/#">
                  About Us <span className="text-teal-600 text-xs p-1"></span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase text-gray-500 font-medium">
                  연락처
                </div>

                <div className="my-3 block" href="/#">
                  010-8593-3821 <span className="text-teal-600 text-xs p-1"></span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase text-gray-500 font-medium">
                  구성원
                </div>

                <div className="my-3 block" href="/#">
                  김건진 <span className="text-teal-600 text-xs p-1"></span>
                </div>
                <div className="my-3 block" href="/#">
                  강석원 <span className="text-teal-600 text-xs p-1"></span>
                </div>
                <div className="my-3 block" href="/#">
                  박종훈 <span className="text-teal-600 text-xs p-1"></span>
                </div>
                <div className="my-3 block" href="/#">
                  이진우 <span className="text-teal-600 text-xs p-1"></span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase text-gray-500 font-medium">
                  Contact us
                </div>

                <div className="my-3 block" href="/#">
                  선문대학교 인문관, 4층 , 436호
                  <span className="text-teal-600 text-xs p-1"></span>
                </div>

                <div className="my-3 block" href="/#">
                  ca990125a@naver.com
                  <span className="text-teal-600 text-xs p-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
