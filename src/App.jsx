import { CakeView } from "./features/cake/CakeView";
import { IceCreamView } from "./features/icecream/IceCreamView";
import { UserView } from "./features/user/UserView";
import "./App.css";

function App() {

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
