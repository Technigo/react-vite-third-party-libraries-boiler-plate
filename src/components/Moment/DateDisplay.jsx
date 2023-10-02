import moment from "moment";

export const DateDisplay = () => {
  const momentLib = moment();

  // Formatting Dates
  const fullDate = momentLib.format("MMMM Do YYYY, h:mm:ss a"); // September 26th 2023, 9:18:27 am
  const dayName = momentLib.format("dddd"); // Tuesday
  const shortDate = momentLib.format("MMM Do YY"); // Sep 26th 23
  const escapedYear = momentLib.format("YYYY [escaped] YYYY"); // 2023 escaped 2023
  const defaultFormat = momentLib.format(); // Default ISO format

  // Calendar Time - Past Dates
  const tenDaysAgo = momentLib.subtract(10, "days").calendar(); // 09/16/2023
  const sixDaysAgo = momentLib.subtract(6, "days").calendar(); // Last Wednesday at 9:21 AM
  const threeDaysAgo = momentLib.subtract(3, "days").calendar(); // Last Saturday at 9:21 AM
  const oneDayAgo = momentLib.subtract(1, "days").calendar(); // Yesterday at 9:21 AM
  // Calendar Time -  Present and Future
  const today = momentLib.calendar(); // Today at 9:21 AM
  const oneDayLater = momentLib.add(1, "days").calendar(); // Tomorrow at 9:21 AM
  const threeDaysLater = momentLib.add(3, "days").calendar(); // Friday at 9:21 AM
  const tenDaysLater = momentLib.add(10, "days").calendar();
  return (
    <div>
      <p>
        <strong>Format Dates</strong>
      </p>
      <p>Full Date and Time: {fullDate}</p>
      <p>Day of the Week: {dayName}</p>
      <p>Short Date: {shortDate}</p>
      <p>Escaped Year: {escapedYear}</p>
      <p>Default Format: {defaultFormat}</p>
      <p>
        <strong>Calendar Time</strong>
      </p>
      <p>Ten Days Ago: {tenDaysAgo}</p>
      <p>Six Days Ago: {sixDaysAgo}</p>
      <p>Three Days Ago: {threeDaysAgo}</p>
      <p>One Day Ago: {oneDayAgo}</p>
      <p>Today: {today}</p>
      <p>One Day Later: {oneDayLater}</p>
      <p>Three Days Later: {threeDaysLater}</p>
      <p>Ten Days Later: {tenDaysLater}</p>
    </div>
  );
};
