import moment from "moment";

export const DateDisplay = () => {
  const fullDate = moment().format("MMMM Do YYYY, h:mm:ss a"); // September 26th 2023, 9:18:27 am
  const dayName = moment().format("dddd"); // Tuesday
  const shortDate = moment().format("MMM Do YY"); // Sep 26th 23
  const escapedYear = moment().format("YYYY [escaped] YYYY"); // 2023 escaped 2023
  const defaultFormat = moment().format(); // Default ISO format

  // Calendar Time
  const tenDaysAgo = moment().subtract(10, "days").calendar(); // 09/16/2023
  const sixDaysAgo = moment().subtract(6, "days").calendar(); // Last Wednesday at 9:21 AM
  const threeDaysAgo = moment().subtract(3, "days").calendar(); // Last Saturday at 9:21 AM
  const oneDayAgo = moment().subtract(1, "days").calendar(); // Yesterday at 9:21 AM
  const today = moment().calendar(); // Today at 9:21 AM
  const oneDayLater = moment().add(1, "days").calendar(); // Tomorrow at 9:21 AM
  const threeDaysLater = moment().add(3, "days").calendar(); // Friday at 9:21 AM
  const tenDaysLater = moment().add(10, "days").calendar();
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
