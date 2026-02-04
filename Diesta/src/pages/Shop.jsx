import { useEffect, useState } from "react";
import supabase from "../../supabase"; // adjust path if needed

const Shop = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("id, name");

      if (error) {
        console.error("Error fetching todos:", error);
      } else {
        setTodos(data);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Shop Page</h2>

      {todos.length === 0 ? (
        <p>No todos found</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.id}</strong> — {todo.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Shop;
