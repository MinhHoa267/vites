import MyAvatar from "./src/components/avatar/MyAvatar";
import MyButton, { IconButton} from "./src/components/btn/MyButton";
import Checklogin from "./src/components/condition/Checklogin";
import YourButton from "./src/components/event/YourButton";
import ShoppingList from "./src/components/list/ShoppingList";
import AboutPage from './src/components/page/AboutPage';
import ClickCount from "./src/components/strorage/ClickCount";

export default function App() {
  return(
    // react ko chấp nhận 2 element cùng lúc
    // mà phải swap trong 1 element cha 
  <>
  <ClickCount/>
  <YourButton/>
  <Checklogin/>
  <AboutPage/>
  <MyAvatar/>
  <MyButton/> 
  <IconButton/>
  <ShoppingList/>
  
  </>
)
};
