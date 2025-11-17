import { useState } from "react";

const ListComponent = () => {
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (!input.trim()) return;

    // create new array

    setList([...list, input]);
    setInput("");
  };

  const removeTask = (index: number) => {
    const filtered = list.filter((_, i) => i !== index);
    setList(filtered);
  };

  return (
    <div>
      <h2>Example arrays in useState - todo list </h2>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo..."
      />
      {/* Add Task Button */}
      <button onClick={addTask}>Add Task</button>
      {list.length && (
        <ul>
          {list.map((task, i) => (
            <li key={i}>
              {task} <button onClick={() => removeTask(i)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListComponent;
