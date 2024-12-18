import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semi-bold text-slate-400">
          {index}
        </p>
        <h text-3xl sm:text-4xl md:text-5xl>
          {title}
        </h>
      </div>
      <p className="text-sm sm:text-base mx-auto py-2">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const [showModal, setShowModal] = useState(false);
  const {
    poison,
    setPoison,
    muscles,
    setMuscles,
    goal,
    setGoal,
    updateWorkout,
  } = props;

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }
  return (
    <SectionWrapper
      id={"generate"}
      header={"Generate Your Workout"}
      title={["It's ", "Huge", " o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick Your Poison"}
        description={"Select the workout you want"}
      />
      {/* Workouts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-7">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={
                "bg-slate-950 border border-blue-400 duration-200 px-4 hover:border-blue-600 py-3 rounded-lg" +
                (type === poison ? "border-blue-600" : "border-blue-400")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for anhilation"}
      />
      {/** Modal **/}
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col mb-7">
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">
            {muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col p-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-blue-400 duration-200" +
                    (muscles.includes(muscleGroup) ? " text-blue-400" : "")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective"}
      />
      {/* Schemes */}
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-4 mb-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-slate-950 border border-blue-400 duration-200 px-4 hover:border-blue-600 py-3 rounded-lg" +
                (scheme === goal ? "border-blue-600" : "border-blue-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"}></Button>
    </SectionWrapper>
  );
}
// * 2:37
