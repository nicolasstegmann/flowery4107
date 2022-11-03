import "./CardLoader.scss"

export const CardLoader = ({ qty = 1 }) => {
  const array = Array.from({ length: qty }, (_, i) => i + 1);
  return array.map((e) => <div className="cardLoader" key={e} />);
};