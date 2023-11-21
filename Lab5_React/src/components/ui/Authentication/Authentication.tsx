import { ChangeEvent, useState } from "react";
import "./index.scss";

interface IProps {
  users: IUserData[];
  setUsers: (users: IUserData[]) => void;
  isLogged: boolean;
  setLogged: (isLogged: boolean) => void;
}

interface IUserData {
  user: {
    username: string;
    password: string;
  };
}

const Authentication = ({ users, setUsers, isLogged, setLogged }: IProps) => {
  const [newuser, setNewuser] = useState({
    user: {
      username: "",
      password: "",
    },
  });
  // const handelLoginbutton = () => {
  //   console.log("login button clicked");
  // };

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewuser({
      ...newuser,
      user: {
        ...newuser.user,
        [name]: value,
      },
    });

    // setUsers(
  };

  const onSave = () => {
    setLogged(!isLogged);
    setUsers([
      ...users,
      {
        user: {
          username: newuser.user.username,
          password: newuser.user.password,
        },
      },
    ]);
  };

  return (
    <>
      <div className="LoginForm">
        <h2>Authentication</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("form submitted");
          }}
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={onchange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={onchange}
          />
          <button type="submit" onClick={onSave}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Authentication;
