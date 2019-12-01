import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  const STARTING_TIME = 10;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(
        () => {
          setTimeRemaining(time => time - 1);
        },

        1000
      );
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <Layout>
      <SEO title="Test how fast you" />
      <h1 className="uppercase ">How fast can you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        className="p-4 mt-12 text-sm outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
      />{" "}
      <h4 className="mt-2">Time remaining: {timeRemaining}</h4>
      <button
        onClick={startGame}
        disabled={isTimeRunning}
        className="mt-12 disabled:cursor-not-allowed"
      >
        {" "}
        Start{" "}
      </button>{" "}
      <h2 className="mt-8">Word count: {wordCount}</h2>
    </Layout>
  );
}

export default IndexPage;
