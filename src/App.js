import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function addItem(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setItems([...items, { id: Date.now(), text: t, done: false }]);
    setText("");
  }

  function toggle(id) {
    setItems(items.map(it => it.id === id ? { ...it, done: !it.done } : it));
  }

  function removeItem(id) {
    setItems(items.filter(it => it.id !== id));
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form onSubmit={addItem} className="row">
        <input
          placeholder="Add a task…"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {items.map(it => (
          <li key={it.id} className={it.done ? "done" : ""}>
            <span onClick={() => toggle(it.id)}>{it.text}</span>
            <button onClick={() => removeItem(it.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
