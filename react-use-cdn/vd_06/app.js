const root = document.getElementById("root");

function App() {
  const handleClick = (number) => {
    console.log(number);
  }
  const onClick = () => {
    console.log("Xin chao");
  }
  return (
    <div>
      
      <button onClick={handleClick.bind(this, Math.random())}>Click me!</button>
      {/* bind sẽ tạo ra 1 hàm mới khi được gọi.This từ khóa của nó được đặt thành giá trị đã cho.Vd this ở đây sẽ là Math.random()*/}
      <button onClick={() => handleClick(Math.random())}>Click me!</button>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

ReactDOM.render(<App />, root);
