import { useState } from "react";
import "./App.css";
import Authentication from "./components/ui/Authentication/Authentication";
import Button from "./components/ui/Button/Button";
import ButtonMain from "./components/ui/ButtonMain/ButtonMain";
import DisplayTab from "./components/ui/DisplayTab/DisplayTab";
import DetileUser from "./components/ui/Authentication/DetileUser";
import Form from "./components/ui/Form/Form";

// import Alert from "./components/ui/Alert/Alert";

interface IUserData {
  user: {
    username: string;
    password: string;
  };
}
function App() {
  const tab = ["hello", "world", "from", "react"];
  const tab2 = ["hello", "world", "from", "typescript"];
  const [users, setUsers] = useState([] as IUserData[]);
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <div className="continer_col">
        <div className="col1">
          <Button />
          <ButtonMain />
        </div>
        <div
          className="col2"
          style={{
            textAlign: "center",
            backgroundColor: "lightblue",
            padding: "5px 15px",
            // font color
            color: "black",
            borderRadius: "10px",
          }}
        >
          <h2>Exo2:</h2>
          Q1/Q2:
          <DisplayTab tab={tab} />
          Q5:
          <DisplayTab tab={tab2} />
        </div>
        <div className="col3">
          Exo3 :
          {/* if is login display the login page else display detileuser */}
          {!isLogged ? (
            <Authentication
              users={users}
              setUsers={setUsers}
              isLogged={isLogged}
              setLogged={setIsLogged}
            />
          ) : (
            <div>
              <DetileUser
                usersList={users}
                setLogged={setIsLogged}
                isLogged={isLogged}
                setUsers={setUsers}
              />
            </div>
          )}
        </div>
        <div className="col4">
          <h2>Exo 4 :</h2>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
