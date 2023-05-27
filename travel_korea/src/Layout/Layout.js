import { ReactComponent as TkoLogo } from "../assets/images/tkoLogo.svg";
import { useLocation, Link } from "react-router-dom";
import "../assets/fonts/CookieRunRegular.ttf";
import * as LoginCheck from "../util/CheckLogin.jsx";
import { useState } from "react";

const Layout = (props) => {
  const location = useLocation();
  const [loginState, setLoginState] = useState(LoginCheck.CheckLogin());

  const LogOut = () => {
    localStorage.removeItem("token");
    setLoginState(LoginCheck.CheckLogin());
  };

  return (
    <div className="min-w-[1000px] flex flex-col h-screen">
      <div
        id="상단바"
        className="flex justify-between items-center bg-white h-[65px] text-xl border-b-2 border-b-gray-300 fixed w-full"
      >
        <div id="상단바 왼쪽" className="flex justify-around w-[20%] bg-white ">
          <Link to="/">
            <TkoLogo className="w-[168px]" />
          </Link>
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
                  className={`hover:font-cookie ${location.pathname === `/CommunityPage/${props.page}`
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
          className="flex justify-end items-center w-[25%] mr-5"
        >
          {loginState ? (
            <button
              className="flex justify-center hover:font-cookie"
              onClick={LogOut}
            >
              로그아웃
            </button>
          ) : (
            <div id="로그인" className="flex justify-center hover:font-cookie">
              <div
                id="로그인"
                className="flex justify-end  pr-10 hover:font-cookie"
                onClick={() =>
                  sessionStorage.setItem("pathName", location.pathname)
                }
              >
                <Link
                  to={`/Login`}
                  className={`hover:font-cookie ${location.pathname === "/Login"
                    ? "font-cookie border-b-2 border-black"
                    : ""
                    }`}
                >
                  로그인
                </Link>
              </div>

            </div>
          )}
        </div>
      </div>

      <div className="pt-[65px] flex-1">
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

        {/* {props.title ? (
          <div
            id="Top Layout"
            className={`flex justify-center items-end pl-[350px] bg-red-50 w-[55%] h-[150px] text-3xl border-b-2 border-gray-400 `}
          >
            {props.title}
          </div>
        ) : null} */}

        <div className="px-[16%] py-10">{props.children}</div>

      </div>

      <div id="하단 사이트 정보" className="sticky top-[100vh]">
        <div className="bg-gray-100 py-10">
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
  );
};

export default Layout;
