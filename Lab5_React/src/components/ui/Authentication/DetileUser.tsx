import "./index.scss";
interface IProps {
  usersList: IUserData[];
  setLogged: (isLogged: boolean) => void;
  isLogged: boolean;
}

interface IUserData {
  user: {
    username: string;

    password: string;
  };
}

const DetileUser = (props: IProps) => {
  const handelListUser = () => {
    if (!Array.isArray(props.usersList)) {
      // Handle the case where usersList is not an array
      console.log(props.usersList);
      return <p>Error: usersList is not an array.</p>;
    }

    return (
      <div>
        {props.usersList.map((user, index) => (
          <div key={index}>
            <p>Username: {user.user.username}</p>
            <p>Password: {user.user.password}</p>
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
            props.setLogged(!props.isLogged);
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default DetileUser;
