import React, { useState } from "react";
import { Question } from "./types";


const questions: Question[] = [
  {
    category: "Depressed mood",
    description:
      "Gloomy attitude, pessimism about the future, feeling of sadness, tendency to weep",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Sadness", score: 1 },
      { label: "Occasional weeping", score: 2 },
      { label: "Frequent weeping", score: 3 },
      { label: "Extreme symptoms", score: 4 },
    ],
  },
  {
    category: "Feelings of guilt",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Self-reproach, feels he/she has let people down", score: 1 },
      { label: "Ideas of guilt", score: 2 },
      {
        label: "Present illness is a punishment, delusions of guilt",
        score: 3,
      },
      { label: "Hallucinations of guilt", score: 4 },
    ],
  },
  {
    category: "Suicide",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Feels life is not worth living", score: 1 },
      { label: "Ideas of guilt", score: 2 },
      {
        label: "Present illness is a punishment, delusions of guilt",
        score: 3,
      },
      { label: "Hallucinations of guilt", score: 4 },
    ],
  },
  {
    category: "Initial insomnia",
    description: "Difficulty falling asleep",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Occasional", score: 1 },
      { label: "Frequent", score: 2 },
    ],
  },
  {
    category: "Insomnia during the night",
    description: "Restless, disturbed, waking at night",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Occasional", score: 1 },
      { label: "Frequent", score: 2 },
    ],
  },
  {
    category: "Delayed insomnia",
    description:
      "Waking in early hours of the morning and unable to fall asleep again",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Occasional", score: 1 },
      { label: "Frequent", score: 2 },
    ],
  },
  {
    category: "Work and interests",
    description: "Absence from work after treatment or recovery may rate <4",
    ratings: [
      { label: "No difficulty", score: 0 },
      {
        label:
          "Feelings of incapacity, listlessness, indecision, and vacillation",
        score: 1,
      },
      {
        label: "Loss of interest in hobbies, decreased social activities",
        score: 2,
      },
      { label: "Productivity decreased", score: 3 },
      {
        label:
          "Unable to work, stopped working because of present illness only (if absent from work after treatment or recovery may rate a lower score)",
        score: 4,
      },
    ],
  },
  {
    category: "Retardation",
    description: "Slowness of thought, speech, and activity; apathy; stupor",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Slight retardation at interview", score: 1 },
      { label: "Obvious retardation at interview", score: 2 },
      { label: "Interview difficult", score: 3 },
      { label: "Complete stupor", score: 4 },
    ],
  },
  {
    category: "Agitation",
    description: "Restlessness associated with anxiety",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Mild", score: 1 },
      { label: "Severe", score: 2 },
    ],
  },
  {
    category: "Psychiatric anxiety",
    description: "Restlessness associated with anxiety",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Tension and irritability", score: 1 },
      { label: "Worrying about minor matters", score: 2 },
      { label: "Apprehensive attitude", score: 3 },
      { label: "Fears", score: 4 },
    ],
  },
  {
    category: "Somatic anxiety",
    description:
      "Gastrointestinal, indigestion, cardiovascular, palpitations, headaches, respiratory, genitourinary, etc.",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Mild", score: 1 },
      { label: "Moderate", score: 2 },
      { label: "Severe", score: 3 },
      { label: "Incapacitating", score: 4 },
    ],
  },
  {
    category: "Gastrointestinal somatic symptoms",
    description: "Loss of appetite, heavy feeling in abdomen, constipation",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Mild", score: 1 },
      { label: "Severe", score: 2 },
    ],
  },
  {
    category: "General somatic symptoms",
    description:
      "Heaviness in limbs, back, or head; diffuse backache; loss of energy and fatigability",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Mild", score: 1 },
      { label: "Severe", score: 2 },
    ],
  },
  {
    category: "Genital symptoms",
    description: "Loss of libido, menstrual disturbances",
    ratings: [
      { label: "Absent", score: 0 },
      { label: "Mild", score: 1 },
      { label: "Severe", score: 2 },
    ],
  },
  {
    category: "Hypochondriasis",
    ratings: [
      { label: "Not present", score: 0 },
      { label: "Bodily self-absorption", score: 1 },
      { label: "Preoccupation with health", score: 2 },
      { label: "Querulous attitude", score: 3 },
      { label: "Hypochondriacal delusions", score: 4 },
    ],
  },
  {
    category: "Weight loss",
    ratings: [
      { label: "None", score: 0 },
      { label: "Slight", score: 1 },
      { label: "Obvious or Severe", score: 2 },
    ],
  },
  {
    category: "Insights",
    description:
      "Must be interpreted in terms of patient’s understanding and background",
    ratings: [
      { label: "No Loss", score: 0 },
      { label: "Partial or doubtful loss", score: 1 },
      { label: "Loss of insight", score: 2 },
    ],
  },
];

const severityLevels = [
  {
    min: 0,
    max: 7,
    severity: "Normal",
    advice: "Maintain a healthy routine.",
  },
  {
    min: 8,
    max: 13,
    severity: "Mild Depression",
    advice: "consider lifestyle changes like regular exercise, a healthy diet, and sufficient sleep, along with seeking support from friends and family, and potentially talking to a mental health professional or your doctor",
  },
  {
    min: 14,
    max: 18,
    severity: "Moderate depression",
    advice: "Relaxation techniques and yoga. There is some evidence that relaxation techniques can help relieve mild to moderate depression. These include approaches such as progressive muscle relaxation, autogenic training, music therapy and yoga.",
  },
  {
    min: 19,
    max: 22,
    severity: "Severe Depression",
    advice: "Based on changes in HAM-D scores over time, adjust treatments (e.g., medications, psychotherapy) to optimize outcomes.",
  },
  {
    min: 23,
    max: 50,
    severity: "Very Severe Depression",
    advice: "Seek immediate professional help. Prioritize connecting with a psychiatrist or therapist, and consider hospitalization if necessary. In the meantime, focus on self-care and support from loved ones.",
  },
];


const Home: React.FC = () => {
  const [selectedScores, setSelectedScores] = useState<{
    [key: string]: number;
  }>({});

  const handleSelect = (category: string, score: number) => {
    setSelectedScores((prev) => ({ ...prev, [category]: score }));
  };

  const totalScore = Object.values(selectedScores).reduce(
    (acc, score) => acc + score,0 );

  const severityInfo =
    severityLevels.find(
      (level) => totalScore >= level.min && totalScore <= level.max
    ) || severityLevels[severityLevels.length - 1];

  return (
    <div className=" relative w-full h-full flex py-[1px] gap-[10px] poppins-light">
      <div className="w-full h-screen overflow-y-auto mx-auto p-6 bg-white rounded-[10px]">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Hamilton Depression Rating Scale (HAM-D)
        </h1>
        <h2 className="text-center text-black py-[10px]">By: Christian Barbosa</h2>
        <div className="space-y-6 poppins-light">
          {questions.map((q, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">
                {q.category}
              </h3>
              {q.description && (
                <p className="text-gray-600 text-sm">{q.description}</p>
              )}
              <div className="mt-3 border border-gray-200 rounded-lg overflow-hidden">
                {q.ratings.map((rating, idx) => (
                  <button
                    key={idx}
                    className={`flex justify-between w-full px-4 py-2 text-black text-sm ${
                      selectedScores[q.category] === rating.score
                        ? "bg-teal-500 text-white"
                        : "bg-gray-100"
                    } hover:bg-teal-400 hover:text-white transition`}
                    onClick={() => handleSelect(q.category, rating.score)}
                  >
                    <span>{rating.label}</span>
                    <span className="font-semibold">+{rating.score}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full border rounded-[10px] bg-white text-black poppins-light relative">
          <div className=" w-full h-screen rounded-[10px] shadow-md p-[10px]">
          <div className="w-full h-full text-center py-[20px] p-[10px] gap-[10px]">
            <div className="w-full h-fit p-3 gap-[10px]">
              <h1 className="poppins-light text-xl">Results</h1>
              <div className="flex p-[10px] shadow-md rounded-[10px] py-[10px]">
                <div className="w-full">
                  <h1>
                    Score:{" "}
                    <span className="poppins-bold text-red-700 text-2xl">
                      {totalScore}
                    </span>{" "}
                    points
                  </h1>
                </div>
                <div className="w-full">
                  <h1>Status:
                    <span className="text-xl poppins-bold text-red-700 pl-[10px]">
                      {severityInfo.severity}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full h-fit rounded-[10px] shadow-md py-[10px]">
              <div className="gap-[10px] p-[10px] rounded-[10px]">
                <div className="w-full h-fit p-3 gap-[10px]">
                  <h1 className="poppins-light text-xl mt-4">Advise</h1>
                  <div className="w-full h-fit p-[10px] gap-[10px] rounded-[10px] border">
                    <p className="text-gray-700">{severityInfo.advice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
