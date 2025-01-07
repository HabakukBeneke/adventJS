function getCompleted(timeWorked, totalTime) {
  const [h, m, s] = timeWorked.split(":").map(Number);
  const timeWorkedSeconds = h * 3600 + m * 60 + s;
  const [th, tm, ts] = totalTime.split(":").map(Number);
  const totalTimeSeconds = th * 3600 + tm * 60 + ts;

  return (
    Math.round((100 * timeWorkedSeconds) / totalTimeSeconds).toString() + "%"
  );
}
