import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
