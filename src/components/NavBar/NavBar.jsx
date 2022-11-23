import { useEffect, useState } from "react";
import { getCategories } from "../../api/categories.js";
import { NavBarItem } from "../NavBarItem";
import { Loader } from "../Loader";
import { ToastOffSet } from "../Toast";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCategories([]);
    setLoading(true);
    getCategories()
      .then((items) => {
        (!items || items.length == 0) &&
          ToastOffSet(
            "No se encontraron categorías en la base de datos",
            "error",
            5000
          );
        items = [{ id: 0, name: "Todos" }, ...items];
        setCategories(items);
        setLoading(false);
      })
      .catch((e) => {
        ToastOffSet(
          `Ocurrió un error al obtener las categorías de la base de datos (${e})`,
          "error",
          5000
        );
      });
  }, []);

  return (
    <div className="header__nav">
      <Loader loading={loading} text="categorías" />
      {categories.map((category) => (
        <NavBarItem key={category.id} category={category} />
      ))}
    </div>
  );
};
