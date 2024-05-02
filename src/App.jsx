import TodoWrapper from "./components/TodoWrapper";

const App = () => {
  let arr = [];

  console.log(arr.push("test1", "test2"));

  return (
    <div>
      <TodoWrapper />
    </div>
  );
};

export default App;
