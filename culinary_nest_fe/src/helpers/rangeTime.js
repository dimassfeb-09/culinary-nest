export default function RangeTime(start, end) {
  const startTime = new Date(`2000-01-01T${start}`);
  const endTime = new Date(`2000-01-01T${end}`);

  let timeDiff = endTime.getTime() - startTime.getTime();

  if (timeDiff < 0) {
    timeDiff += 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  }

  const hours = Math.floor(timeDiff / (60 * 60 * 1000));
  return hours;
}
