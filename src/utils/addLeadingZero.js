export default function addLeadingZero(time) {
  for (const timeKey in time) {
    if (time === "days") return;
    time[timeKey] = time[timeKey].toString().padStart(2, '0');
  }
}