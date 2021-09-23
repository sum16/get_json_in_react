import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    //引数resにresultが入り、then以降で関数を実行
    //catch以降はエラーハンドリングを記述
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のユーザー</button>
    </div>
  );
}
