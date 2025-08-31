"use client";
import { useState } from "react";

export default function Page() {
  const [responses, setResponses] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const inc = () => setCount(c => c + 1);

  async function sendData() {
    const res = await fetch("/api/users/test/t2", {
      method: "POST",
      body: JSON.stringify({ name: "test", age: count }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();

    // Push new response into the array
    setResponses(prev => [...prev, JSON.stringify(data, null, 2)]);
  }

  return (
    <div className="p-4">
      <button 
        onClick={() => { sendData(); inc(); }} 
        className="border border-black px-4 py-2 bg-blue-200"
      >
        Send Data
      </button>

      {responses.length > 0 && (
        <pre className="mt-4 p-2 border border-gray-400 bg-gray-100">
          {responses.map((r, idx) => (
            <li key={idx} className="list-none">{r}</li>
          ))}
        </pre>
      )}
    </div>
  );
}
