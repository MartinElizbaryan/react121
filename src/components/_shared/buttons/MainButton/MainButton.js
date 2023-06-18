import useMainButton from "./useMainButton";

const MainButton = (props) => {
  const { children, startIcon, endIcon, ...restProps } = props;
  const { styles, x } = useMainButton(props);

  // console.log(x());

  return (
    <button style={styles.button} {...restProps}>
      <span style={styles.startIcon}>{startIcon}</span>
      {children}
      {endIcon}
    </button>
  );
};
export default MainButton;
