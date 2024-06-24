import React from "react";
import GetStartedButton from "../GetStartedButton";

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col items-center text-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-zinc-700">
        The best way to organize your work
      </h1>
      <p className="mb-8">
        Simplifying your job in a stylish and straightforward manner
      </p>
      <div>
        <GetStartedButton />
        <p className="text-sm p-2 font-medium text-zinc-700">
          Free Forever. No Credit Card.
        </p>
      </div>
    </main>
  );
};

export default MainContent;
