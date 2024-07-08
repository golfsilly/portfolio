import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-auto pb-14">
      <h1 className="text-3xl font-medium pt-2">
        Days I <strong className="text-primary">Code</strong>
      </h1>
      <GitHubCalendar
        username="golfsilly"
        loading
        blockSize={13}
        blockMargin={4}
        fontSize={14}
      />
    </div>
  );
}

export default Github;
