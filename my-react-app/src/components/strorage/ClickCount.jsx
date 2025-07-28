import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";

export default function ClickCount() {
   const [count, setCount] = useState()
   //useState chứa 2 giá trị ( biên lưu trữ & func cập nhật biến đó)
   // ngoài ra useState có thể khởi tạo giá trị ban đầu trong ()

   function handleClick(){
    setCount(count + 1);
   }
  return (
    <button className="btn btn-danger" onClick={handleClick}>
      click {count} times.
    </button>
  );
}
