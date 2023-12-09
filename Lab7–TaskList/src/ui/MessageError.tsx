interface IProps {
  msg: string;
}

const MessageError = ({ msg }: IProps) => {
  return msg ? (
    <span className="text-red-500 text-xs italic">{msg}</span>
  ) : null;
};

export default MessageError;
