import Layout from "../Layout/Layout";
import React, { useState } from "react";

function ChatGptPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) return;

    // 사용자가 작성한 질문
    setMessages((Messages) => [
      ...Messages,
      { content: [inputValue], isUser: true },
    ]);

    // 질문 답변
    fetch("http://localhost:3001/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const str = json.message.split("\n");
        setMessages((Messages) => [
          ...Messages,
          { content: str, isUser: false },
        ]);
      });

    // const response = await getBotResponse(inputValue);
    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   { content: response, isUser: false },
    // ]);

    setInputValue("");
  };

  return (
    <>
      <Layout>
        <div className="bg-gray-100 min-h-screen">
          <header className="bg-teal-500 text-white py-4">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl font-bold">My Chatbot</h1>
            </div>
          </header>
          {/* 챗봇 */}
          <main className="flex items-center justify-center h-[700px]">
            <div className="chatbot rounded-lg shadow-lg w-full h-[500px]">
              <div className="chatbot-header py-3 px-4 bg-teal-500 text-white rounded-t-lg ">
                <h2 className="text-lg font-bold">Chatbot</h2>
              </div>
              <div className="chatbot-messages py-4 px-4 h-[400px] overflow-y-auto">
                {/* {console.log(messages)} */}
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${message.isUser ? "text-right" : "text-left"
                      } mb-4`}
                  >
                    <div
                      className={`${message.isUser ? "bg-teal-500" : "bg-gray-500"
                        } inline-block py-2 px-4 rounded-lg text-white max-w-[70%]`}
                    >
                      {/* {console.log(message.content)} */}
                      {message.content.map((ele, idx) => (
                        <div key={idx}>{ele}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-3 px-4 bg-gray-100 rounded-b-lg">
                <form className="flex" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    className="flex-1 mr-2 py-2 px-4 rounded-full bg-white"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}

export default ChatGptPage;
