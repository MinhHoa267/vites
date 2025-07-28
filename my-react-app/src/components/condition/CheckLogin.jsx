// 1. if condition
//        if(condition){true}else{false}

import LoginForm from "./Login/LoginForm";

// 2. Ternary condition
// CheckLogin ? <AdminPanel/> : <LoginForm/>

function isLoggedIn(){
    return Math.random() < 0.5 ? AdminPanel : undefined;
}
// true/false

export default function Checklogin() {
    // let content;

    // if(isLoggedIn()){
    //     content = <AdminPanel/>;
    // }
    // else{
    //     content = <LoginForm/>
    // }


//   return (<div>{isLoggedIn() ? <AdminPanel /> : <LoginForm />}</div>)
return <div>{isLoggedIn() ?? <LoginForm/>}</div>
}
