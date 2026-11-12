"use client";

import React, { useState, useEffect } from "react";

type HealthResponse = {
  status: string;
};

type ReverseResponse = {
  reversed: string;
};

export default function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reverseInput, setReverseInput] = useState<string>("");
  const [reverseResult, setReverseResult] = useState<ReverseResponse | null>(null);
  const [reverseError, setReverseError] = useState<string | null>(null);

  // Fetch health on mount
  useEffect(() => {
    fetch("/health")
      .then((res) => res.json())
      .then(setHealth)
      .catch((e) => setError(e.message));
  }, []);

  // Function to call reverse endpoint
  const handleReverse = async () => {
    setReverseError(null);
    try {
      const res = await fetch(`/reverse?text=${encodeURIComponent(reverseInput)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setReverseResult(data);
    } catch (e) {
      setReverseError((e as Error).message);
    }
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>signal-pilot-144</h1>
      <p>Reverse engineer anything with agents.</p>
      {health && (
        <p>
          Health status: <strong>{health.status}</strong>
        </p>
      )}
      {error && (
        <p style={{ color: "red" }}>
          Error: {error}
        </p>
      )}
      {/* Reverse text section */}
      <section style={{ marginTop: "1rem" }}>
        <h2>Basic Reverse</h2>
        <input
          type="text"
          value={reverseInput}
          onChange={(e) => setReverseInput(e.target.value)}
          placeholder="Enter text to reverse"
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button onClick={handleReverse} style={{ padding: "0.5rem 1rem" }}>
          Reverse
        </button>
        {reverseResult && (
          <p style={{ marginTop: "0.5rem" }}>
            Reversed: <strong>{reverseResult.reversed}</strong>
          </p>
        )}
        {reverseError && (
          <p style={{ color: "red", marginTop: "0.5rem" }}>
            Error: {reverseError}
          </p>
        )}
      </section>
    </div>
  );
}
