import styles from './styles.module.scss';

function Spinner() {
  return (
    <div className={styles.spinnerContainer} >
      <div className={styles.spinner} />
    </div>
  )
}

export default Spinner;
