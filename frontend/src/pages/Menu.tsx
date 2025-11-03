import { useEffect, useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  price: number;
};

function Menu() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data.items))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🍛 Curry Shop Menu</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} — ¥{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
