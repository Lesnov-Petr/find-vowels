import { useSelector } from "react-redux";
import { useEffect } from "react";
import { arrayText } from "../../redux/strings";
import styles from "./TableData.module.scss";

const TableData = () => {
  const listText = useSelector(arrayText);

  useEffect(() => {
    console.log(listText);
  }, [listText]);
  return (
    <ul>
      {listText.map((itemText) => (
        <li>{itemText.text}</li>
      ))}
    </ul>
  );
};

export default TableData;
