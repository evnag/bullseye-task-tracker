interface AppleProps {
  className: string;
}

function Apple(props: AppleProps) {
  return (
    <div className="logo">
      <div className={`${props.className} square`}></div>
      <div className="title">ВЯБЛОЧКО</div>
    </div>
  );
}

export default Apple;
