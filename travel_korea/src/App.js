import "./App.css";
import Layout from "./Layout/Layout";

function App() {
  const apiKey = process.env.REACT_APP_OPENAI_KEY;
  const organization = process.env.REACT_APP_OPENAI_ORGANIZATION;
  console.log(apiKey);
  console.log(organization);
  return (
    <>
      <Layout>
        <div id="전체 레이이웃">
          <div className="flex justify-center items-center border-black border-2  h-[500px] ">
            main 광고의 위치
          </div>

          <div className=" bg-white h-[30%]">
            <div className="mx-4 top-0 left-0">
              다른 사람들의 여행 경험 이야기를 들어보세요 - 커뮤니티 컴포넌트
            </div>

            <div className="flex justify-center">
              <div id="card" style={{ width: "25rem" }} className="mx-4">
                <img src="images/madongsuk.jpg" id="card-img-top" />
                <div id="card-body">
                  <h5 id="card-title">작성자</h5>
                  <hr />
                  <p id="card-text">
                    작성글제목
                  </p>
                  <hr />
                </div>
                <ul id="list-group list-group-flush">
                  <li id="list-group-item">An item</li>
                </ul>
                <div id="card-body">
                  <a href="#" id="card-link">
                    작성자
                  </a>
                  <hr />
                </div>
              </div>

              <div id="card" style={{ width: "25rem" }} className="mx-4">
                <img src="images/madongsuk.jpg" id="card-img-top" />
                <div id="card-body">
                  <h5 id="card-title">작성자</h5>
                  <hr />
                  <p id="card-text">
                    작성글제목
                  </p>
                  <hr />
                </div>
                <ul id="list-group list-group-flush">
                  <li id="list-group-item">An item</li>
                </ul>
                <div id="card-body">
                  <a href="#" id="card-link">
                    Card link
                  </a>
                  <hr />
                </div>
              </div>

              <div id="card" style={{ width: "25rem" }} className="mx-4">
                <img src="images/madongsuk.jpg" id="card-img-top" />
                <div id="card-body">
                  <h5 id="card-title">작성자</h5>
                  <hr />
                  <p id="card-text">
                    작성글제목
                  </p>
                  <hr />
                </div>
                <ul id="list-group list-group-flush">
                  <li id="list-group-item">An item</li>
                </ul>
                <div id="card-body">
                  <a href="#" id="card-link">
                    Card link
                  </a>
                  <hr />
                </div>
              </div>

              <div id="card" style={{ width: "25rem" }} className="mx-4">
                <img src="images/madongsuk.jpg" id="card-img-top" />
                <div id="card-body">
                  <h5 id="card-title">작성자</h5>
                  <hr />
                  <p id="card-text">
                    작성글제목
                  </p>
                  <hr />
                </div>
                <ul id="list-group list-group-flush">
                  <li id="list-group-item">An item</li>
                </ul>
                <div id="card-body">
                  <a href="#" id="card-link">
                    Card link
                  </a>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center bg-red-400 h-[400px] py-[40px]">
            여행 계시판
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
