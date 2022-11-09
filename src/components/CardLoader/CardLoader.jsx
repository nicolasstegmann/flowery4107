import "./CardLoader.scss"

export const CardLoader = ({ loading, qty = 1 }) => {
  if (loading)  {
  const array = Array.from({ length: qty }, (_, i) => i + 1);
  return array.map((e) => <div className="cardLoader" key={e} />);
  }
};