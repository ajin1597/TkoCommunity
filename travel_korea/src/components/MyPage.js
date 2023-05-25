import Layout from "../Layout/Layout";
import * as LoginCheck from "../util/CheckLogin.jsx";

function MyPage() {
  const loginState = LoginCheck.CheckLogin();

  return (
    <>
      <Layout>
        <div className="p-4 h-[800px] mx-[16%]">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-4 py-8">
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <div className="font-bold text-lg">John Doe</div>
                <div className="text-gray-500">johndoe@example.com</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold mb-2">작성 목록</div>
              <ul className="list-disc pl-4">
                <li>게시물 1</li>
                <li>게시물 2</li>
                <li>게시물 3</li>
              </ul>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                수정
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                취소
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MyPage;
