import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      {/* <EventComponent /> */}
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
