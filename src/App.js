import { Component, useContext } from "react";
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <UserFinder />
//       </div>
//     );
//   }
// }

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
