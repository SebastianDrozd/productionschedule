import styles from "../../styles/ui/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;