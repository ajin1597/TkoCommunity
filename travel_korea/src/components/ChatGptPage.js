import Header from "../Layout/Layout";
import React, { useState } from "react";

function ChatGptPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) return;

    // User question
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: inputValue, isUser: true },
    ]);

    // Fetch chatbot response
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
        const response = json.message;
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: response, isUser: false },
        ]);
      });

    setInputValue("");
  };

  return (
    <>
      <Header>
        <div className="flex justify-center mt-5 sm:mt-20">
          <div className="chatbot-container bg-white rounded-lg shadow-lg w-full max-w-lg">
            <div className="chatbot-header py-3 px-4 bg-green-700 text-white rounded-t-lg">
              <h2 className="text-lg font-bold">챗봇검색</h2>
            </div>
            <div className="chatbot-messages py-4 px-4 h-80 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"
                    } mb-4`}
                >
                  <div
                    className={`${message.isUser ? "bg-gray-400" : "bg-gray-500"
                      } inline-block py-2 px-4 rounded-lg text-white max-w-[70%]`}
                  >
                    {message.content}
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
                  className="bg-green-700 hover:bg-teal-600 text-white py-2 px-4 rounded-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

export default ChatGptPage;