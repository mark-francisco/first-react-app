function Backdrop(props) {
  // we are passing a fn value as a prop
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
