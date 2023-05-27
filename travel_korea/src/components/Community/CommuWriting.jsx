import { useLocation } from "react-router-dom";
import Header from "../../Layout/Layout";
import { useEffect, useRef, useState } from "react";
import CheckLogin from "../../util/CheckLogin";
// import q1 from "../assets/images/q1.jpg"
// import q2 from "../assets/images/q2.jpg"
// import q3 from "../assets/images/q3.jpg"
// import q4 from "../assets/images/q3.jpg"
// import q5 from "../assets/images/q3.jpg"

const CommuWriting = () => {
  let location = useLocation();
  const imageInput = useRef();

  // const img = [q1, q2, q3, q4, q5];
  // const randomIndex = Math.floor(Math.random() * img.length);
  // const randomImg = img[randomIndex];
  // console.log(randomImg)
  const url = process.env.REACT_APP_API_URL;

  // console.log(CheckLogin());
  // 로그인 상태 확인
  useEffect(() => {
    if (!CheckLogin()) {
      alert("로그인 후 글 작성이 가능합니다.");
      localStorage.setItem("pathName", location.pathname);
      window.location.replace("/login");
    }
  }, []);

  const [inputTitle, setInputTitle] = useState(""); // 제목
  const [inputValue, setInputValue] = useState(""); // 내용
  const [inputImage, setInputImage] = useState(); // 사진
  // const [postNum, setPostNum] = useState();
  const [imageSrc, setImageSrc] = useState("");
  let inputImage1 = null;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!inputImage1) {
      alert("이미지를 넣어주세요");
      return;
    } else if (!inputTitle) {
      alert("제목을 입력해주세요");
      return;
    } else if (!inputValue) {
      alert("내용을 입력해주세요");
      return;
    }

    // if (!inputTitle) {
    //   alert("제목을 입력해주세요");
    //   return;
    // } else if (!inputValue) {
    //   alert("내용을 입력해주세요");
    //   return;
    // } else if (!inputImage1) {
    //   // inputImage1=randomImg;
    //   alert("이미지를 넣어주세요");
    //   return;
    // }

    console.log(inputImage);

    const formData = new FormData();

    formData.append("title", inputTitle);
    formData.append("contents", inputValue);
    formData.append("image", inputImage1);
    formData.append("token", localStorage.getItem("token"));

    fetch(`${url}/api/writing`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => window.location.replace(`/SingleNoticPage/${json}`));
  };

  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  const encodeFileToBase64 = (fileBlob) => {
    if (!fileBlob)       
      return

      inputImage1=fileBlob;
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);

        resolve();
      };
    });
  };

  return (
    <div>
      <Header>
        <div className="py-16 h-full w-full flex-1">
          <form
            id="writingForm"
            className="space-y-3"
            onSubmit={handleFormSubmit}
          >
            {/* 이미지 불러오기 */}
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              style={{ display: "none" }}
              ref={imageInput}
              onChange={(e) => encodeFileToBase64(e.target.files[0])}
            />
            <div
              className={`flex justify-center items-center  h-[350px] w-full ${
                imageSrc ? "border-2 border-gray-200" : "border-2 border-black"
              }`}
              onClick={onCickImageUpload}
            >
              {imageSrc ? (
                <img className="h-full" src={imageSrc} alt="preview-img" />
              ) : (
                "이미지를 선택해주세요"
              )}
            </div>

            {/* 제목 */}
            <input
              type="text"
              className="py-2 px-4 rounded-xl bg-green-200 w-full"
              placeholder="제목을 입력해주세요."
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />

            {/* 본문 */}
            <textarea
              type="text"
              className="py-2 px-4 rounded-xl bg-blue-200 w-full h-[500px]"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {/* 작성 버튼 */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full flex justify-end"
              >
                작성하기
              </button>
            </div>
          </form>
        </div>
      </Header>
    </div>
  );
};

export default CommuWriting;