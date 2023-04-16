import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useState } from "react";

const Writing = () => {
  const [inputTitle, setInputTitle] = useState(""); // 제목
  const [inputValue, setInputValue] = useState(""); // 내용
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    console.log(inputTitle);
    console.log(inputValue);

    // const data = { title: inputTitle, contents: inputValue };

    fetch("http://180.70.15.132:9998/Writing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: inputTitle, contents: inputValue }),
    });
  };

  return (
    <Layout>
      <div className="py-16 h-full w-full flex-1">
        <form
          id="writingForm"
          className="space-y-3"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            className="py-2 px-4 rounded-xl bg-green-200 w-full"
            placeholder="제목을 입력해주세요."
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />

          <textarea
            type="text"
            className="py-2 px-4 rounded-xl bg-blue-200 w-full h-[500px]"
            // placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full flex justify-end"
            >
              작성하기
            </button>
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white ml-4 py-2 px-4 rounded-full flex justify-end"
              onClick={() => { navigate(`/NoticePage/1`) }}
            >
              목록으로
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Writing;
