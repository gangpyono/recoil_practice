import { atom, useRecoilState } from "recoil";

const listState = atom({
  key: "textState",
  default: "",
});

const App = () => {
  const [text, setText] = useRecoilState(listState);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return <input type="text" onChange={handleChange} value={text} />;
};

export default App;
