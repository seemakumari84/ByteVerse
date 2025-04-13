import React, { useEffect, useState } from "react";

const categories = {
  tech: 18, // Science: Computers
  core: 9,  // General Knowledge
};

const Quiz = () => {
  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(null);

  // Fetch questions when topic is selected
  useEffect(() => {
    if (topic) {
      fetch(`https://opentdb.com/api.php?amount=20&category=${categories[topic]}&type=multiple`)
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.results.map((q) => ({
            question: decodeURIComponent(q.question),
            options: shuffle([...q.incorrect_answers, q.correct_answer].map(decodeURIComponent)),
            answer: decodeURIComponent(q.correct_answer),
          }));
          setQuestions(formatted);
        });
    }
  }, [topic]);

  // Countdown effect after questions are loaded
  useEffect(() => {
    if (questions.length > 0 && countdown === null) {
      setCountdown(5);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [questions]);

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const handleOptionSelect = (questionIndex, selectedOption) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) newScore++;
    });
    setScore(newScore);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setTopic(null);
    setQuestions([]);
    setUserAnswers({});
    setShowResult(false);
    setScore(0);
    setCountdown(null);
  };

  // Topic selection screen
  if (!topic) {
    return (
      <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-[#1b4332] p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">What are you interested in?</h2>
        <div className="space-x-4">
          <button onClick={() => setTopic("tech")} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Tech</button>
          <button onClick={() => setTopic("core")} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Core Subjects</button>
        </div>
      </div>
    );
  }

  // Loading state
  if (questions.length === 0) {
    return <div className="text-center mt-10 text-xl font-semibold animate-pulse">⏳ Loading questions...</div>;
  }

  // Countdown before quiz starts
  if (countdown > 0) {
    return (
      <div className="text-center mt-20 text-4xl font-bold animate-pulse">
        🕐 Starting in: {countdown}
      </div>
    );
  }

  // Quiz view
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white dark:bg-[#1b4332] p-6 rounded-lg shadow-md max-h-[80vh] overflow-y-auto">
      {!showResult ? (
        <>
          {questions.map((q, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="font-semibold mb-2">
                Q{idx + 1}: {q.question}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionSelect(idx, opt)}
                    className={`text-left p-2 rounded border transition-colors ${
                      userAnswers[idx] === opt
                        ? "bg-green-200 dark:bg-green-700"
                        : "bg-gray-100 dark:bg-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={calculateScore}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit Quiz
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 You scored {score} out of {questions.length}</h2>
          <button
            onClick={restartQuiz}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
