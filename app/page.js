"use client";

import { useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.result);
      setLoading(false);
    } catch (error) {
      setResponse("Error sending message.");
    }
  };

  return (
    <>
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4 ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <h2 className="text-2xl font-bold">Smart Task Assistant 🤖</h2>
        <textarea
          rows={10}
          cols={60}
          placeholder=" Ask something..."
          className="border-2 p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button className=" rounded text-white p-2 text-0.5xl cursor-pointer" style={{backgroundColor: '#EB3C88', border: '2px solid  #EB3C89'}} onClick={handleSend}>{loading ? "Loading...." : "Send"}</button>
        <p>
          <strong>Response:</strong> {loading ? "Loading...." : `${response}`}
        </p>
      </div>
    </main>
    {/* <p className="bg-gray-100 flex">
      <h2>REsponse</h2>
    </p> */}
    </>
  );
}
