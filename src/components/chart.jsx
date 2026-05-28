import { useOutletContext } from "react-router";
import { ChartList } from "./products";

export default function Chart() {
  const { products } = useOutletContext();
  const chartItems = ChartList(products);

  return (
    <>
      <h1>This is the chart page</h1>
      {chartItems.length === 0 ? (
        <p>Your chart is empty.</p>
      ) : (
        <ul>
          {chartItems.map((item) => (
            <li key={item.id}>
              {item.title} × {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
