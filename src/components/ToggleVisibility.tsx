type Props = {
  children: JSX.Element;
};

function ToggleVisibility(props: Props) {
  return <div>{props.children}</div>;
}

export default ToggleVisibility;
