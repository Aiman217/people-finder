"use client";

import { useState } from "react";
import PeopleFinder from "@/components/PeopleFinderAction";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  return (
    <main className="flex flex-col justify-center items-center gap-6">
      <h1 className="text-xl font-bold">
        Get List of Names Appear in Your Text
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 justify-around items-start">
        <div className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="text-lg font-bold">Example text:</h1>
            <p className="italic">
              John Jany and Jane were walking in the park when they saw a group
              of ducks swimming in the pond. They decided to sit on a bench and
              watch the ducks for a while. As they were sitting there, they
              noticed that the ducks were being fed by a man who was throwing
              breadcrumbs into the water. John and Jane started talking to the
              man, and they learned that his name was Peter. Peter told them
              that he came to the park every day to feed the ducks, and that he
              had been doing it for years. John, Jane, and Peter continued to
              chat for a while, and then they said goodbye and went their
              separate ways.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body">
            {!result ? (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Enter your text</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-48"
                    placeholder="Text"
                    onChange={(event) => {
                      event.preventDefault();
                      setInputText(event.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setResult(PeopleFinder(inputText));
                    }}
                  >
                    Find Now!
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-lg font-bold">Names Found:</h1>
                <div className="flex flex-wrap gap-4">
                  {result.map((name, i) => (
                    <span
                      key={name + i}
                      className="badge badge-secondary font-bold"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setInputText("");
                      setResult("");
                    }}
                  >
                    Reset Result
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
