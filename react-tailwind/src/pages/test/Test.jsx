import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Test = () => {
  // Initial state setup
  const [currentSlide, setCurrentSlide] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const questions = [
    {
      question: t("What is the capital of France?"),
      options: [t("Paris"), t("London"), t("Berlin")],
      correctAnswer: t("Paris"),
    },
    {
      question: t("Which planet is known as the Red Planet?"),
      options: [t("Earth"), t("Mars"), t("Jupiter")],
      correctAnswer: t("Mars"),
    },
    {
      question: t("What is 2 + 2?"),
      options: ["3", "4", "5"],
      correctAnswer: "4",
    },
    {
      question: t("What is 3 + 2?"),
      options: ["3", "4", "5"],
      correctAnswer: "5",
    },
    {
      question: t("What is the alternative word of help?"),
      options: [t("interrupt"), t("contemporary"), t("assist")],
      correctAnswer: t("assist"),
    },
    {
      question: t("Who is the founder of Space X company?"),
      options: [t("Elon Musk"), t("Djeff Bezzoz"), t("Donald Trumph")],
      correctAnswer: t("Elon Musk"),
    },
    {
      question: t("When is a door not a door?"),
      options: [
        t("When it is broken"),
        t("When it is ajar"),
        t("When it is not produced"),
      ],
      correctAnswer: t("When it is ajar"),
    },
    {
      question: t("How many ballon doors does Lionel Messi have?"),
      options: ["3", "8", "5"],
      correctAnswer: "8",
    },
    {
      question: t("How many times the Brazil won the world cup?"),
      options: ["3", "4", "5"],
      correctAnswer: "5",
    },
    {
      question: t("What is the parent of react?"),
      options: ["javascript", "java", "python"],
      correctAnswer: "javascript",
    },
  ];

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleNext = () => {
    if (currentSlide < questions.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const renderResult = () => {
    const score = Object.keys(answers).reduce((acc, questionIndex) => {
      const isCorrect =
        answers[questionIndex] === questions[questionIndex].correctAnswer;
      return acc + (isCorrect ? 1 : 0);
    }, 0);

    return (
      <div>
        <h2>
          {t("Your Score:")} {score} / {questions.length}
        </h2>
      </div>
    );
  };

  return (
    <div className="w-full h-screen  dark:bg-emerald-950 dark:text-white flex flex-col gap-10 items-center py-20">
      <h1 className="text-5xl font-semibold">{t("Test")}</h1>

      {!isSubmitted ? (
        <div className=" w-1/3 flex flex-col items-start gap-10 p-10 rounded-md border border-emerald-950 dark:border-white">
          <div>
            <h2>
              {currentSlide + 1} / {questions.length}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p>{questions[currentSlide].question}</p>
            <div className="flex items-center justify-center gap-5">
              {questions[currentSlide].options.map((option) => (
                <label
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  key={option}
                >
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name={`question-${currentSlide}`}
                    value={option}
                    checked={answers[currentSlide] === option}
                    onChange={() => handleAnswerChange(currentSlide, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            {currentSlide > 0 && (
              <button
                className="py-1 px-3 rounded-md bg-emerald-700 text-white hover:opacity-80 duration-200"
                onClick={handlePrevious}
              >
                {t("Previous")}
              </button>
            )}
            {currentSlide < questions.length - 1 ? (
              <button
                className="py-1 px-3 rounded-md bg-emerald-700 text-white hover:opacity-80 duration-200"
                onClick={handleNext}
              >
                {t("Next")}
              </button>
            ) : (
              <button
                className="py-1 px-3 rounded-md bg-emerald-700 text-white hover:opacity-80 duration-200"
                onClick={handleSubmit}
              >
                {t("Submit")}
              </button>
            )}
          </div>
        </div>
      ) : (
        renderResult()
      )}
    </div>
  );
};

export default Test;
