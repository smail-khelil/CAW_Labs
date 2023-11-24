import { useState } from "react";
import "./index.scss";
import { Trash2 } from "lucide-react";
interface IProps {
  usersList: IUserData[];
  setLogged: (isLogged: boolean) => void;
  isLogged: boolean;
  setUsers: (users: IUserData[]) => void;
}

interface IUserData {
  user: {
    username: string;

    password: string;
  };
}

const DetileUser = ({ usersList, setLogged, isLogged, setUsers }: IProps) => {
  // const DetileUser = (props: IProps) => {  //
  const [listUsers, setListUsers] = useState(usersList);

  const handelListUser = () => {
    if (!Array.isArray(listUsers)) {
      // Handle the case where usersList is not an array
      console.log(listUsers);
      return <p>Error: usersList is not an array.</p>;
    }

    return (
      <div>
        {listUsers.map((user, index) => (
          <div key={index} className="userInfo">
            <p>Username: {user.user.username}</p>
            <p>Password: {user.user.password}</p>
            {/* button delete */}
            <button
              className=" delete_btn"
              onClick={() => {
                // delete user from list and update the list
                const newList = listUsers.filter((item, i) => i !== index);
                setListUsers(newList);
              }}
            >
              Delete <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="DetileUser">
        <h2>DetileUser</h2>
        {handelListUser()}
        <button
          onClick={() => {
            setLogged(!isLogged);
            setUsers(listUsers);
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default DetileUser;
