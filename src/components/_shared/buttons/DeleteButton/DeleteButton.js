import useDeleteButton from "./useDeleteButton";

const DeleteButton = (props) => {
  const { children, startIcon, ...restProps } = props;
  const { styles } = useDeleteButton(props);

  // console.log(x());

  return (
    <button style={styles.button} {...restProps}>
      <span style={styles.startIcon}>{startIcon}</span>
      {children}
    </button>
  );
};
export default DeleteButton;
