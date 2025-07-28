import { useState } from "react";

export default function UseState() {
   const [count, setCount] = useState(0); // count = 0
// Top(level) of Func
// khi khai báo 1 hooks bất kì thì luôn đặt ở Top
// let count = 0;
// // tạo vùng nhớ chứa value = 0;


function increaseCountValue(){
    setCount(count + 1);
}
// vấn đề: Mỗi khi có tương tác với web,
// React.DOM sẽ Re-render & Reset count về lại 0
// => sử dụng mothod useState để tỏe value


// Bottom of Func (component)
    // render area (XML)
  return <button onClick={increaseCountValue}>{count}</button>);
}
