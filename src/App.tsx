import Like from "./components/Like";
function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}
export default App;

//import Button from "./components/Buttons/Button";
//function App() {
//return (
//<div>
//<Button onClick={() => {}}>My button</Button>
//</div>
//);
//}
//export default App;

//import ListGroup from "./components/ListGroup";
//function App() {
//const items = ["New York", "San Francisco", "Tokyo", "London"];
//const handleSelectItem = (item: string) => {
//console.log(item);
//};
//return (
//<div>
//<ListGroup
//items={items}
//heading="cities"
//onSelectItem={handleSelectItem}
///>
//</div>
//);
//}
//export default App;

//import Alert from "./components/Alert";
//import Button from "./components/Button";
//import { useState } from "react";
//function App() {
//const [alertVisibe, setAlertVisibility] = useState(false);
//return (
//  <div>
//  {alertVisibe && (
//  <Alert onClose={() => setAlertVisibility(false)}>my alert</Alert>
//)}
//<Button onClick={() => setAlertVisibility(true)}>my Button</Button>
//</div>
//);
//}
//export default App;
