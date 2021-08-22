import { useState } from "react";
import { useDispatch } from "react-redux";
import { queryText } from "../../redux/strings";
import styles from "./FormQuery.module.scss";

const FormQuery = () => {
  const [idText, setIdText] = useState("");
  const dispatch = useDispatch();

  const handleSubmitQuery = (event) => {
    event.preventDefault();
    dispatch(queryText(idText));
  };

  const handleChangeQuery = (event) => {
    let idText = event.target.value;
    setIdText(idText);
  };

  return (
    <form className={styles.formQuery} onSubmit={handleSubmitQuery}>
      <input
        className={styles.formQuery__input}
        type="text"
        name={idText}
        value={idText}
        onChange={handleChangeQuery}
        placeholder="Введите запрос"
        required
      />
      <button>Подсчитать</button>
    </form>
  );
};

export default FormQuery;
