import "./index.scss";
interface IProps {
  title: string;
  msg: string;
}

const Alert = ({ title, msg }: IProps) => {
  return (
    <>
      <div className="alert">
        <h3>{title}</h3>
        <div className="message">{msg}</div>
      </div>
    </>
  );
};

export default Alert;
