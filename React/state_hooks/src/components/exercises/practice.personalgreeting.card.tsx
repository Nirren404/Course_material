import React, { useState, useEffect, useRef } from "react";

const PracticePersonalGreetingCard: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [mood, setMood] = useState<string>("😀");
  const inputRef = useRef<HTMLInputElement>(null);

  const moods = ["😀", "😤", "😴", "😎"];

  useEffect(() => {
    document.title = name ? `Greeting for ${name}` : "Personal Greeting Card";
  }, [name]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClear = () => {
    setName("");
    setMood("😀");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleMoodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMood(event.target.value);
  };

  const livePreview = () => {
    if (!name) return "Please enter your name.";
    return `Hello, ${name}! You look ${mood} today! Have a great day!`;
  };

  return (
    <div>
      <h1>Personal Greeting Card</h1>
      <h2>{name ? `Greeting for ${name}` : "Personal Greeting Card"}</h2>

      <h3>Live Preview:</h3>
      <p>{livePreview()}</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name please"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <select
        value={mood}
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
        onChange={handleMoodChange}
      >
        {moods.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default PracticePersonalGreetingCard;
