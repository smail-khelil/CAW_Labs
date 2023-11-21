import { useState } from "react";

interface IProps {
  tab: string[];
}

const DisplayTab = ({ tab }: IProps) => {
  const [firstList, setFirstList] = useState(tab);
  const ListC = firstList.map((item, index) => (
    <ul key={index}>
      <li
        style={{ cursor: "pointer" }}
        onClick={() => {
          // delete item from tab by id
          const newList = firstList.filter((item, i) => i !== index);
          setFirstList(newList);
        }}
      >
        Element {index + 1} : {item}
      </li>
    </ul>
  ));

  return <>{ListC}</>;
};

export default DisplayTab;
