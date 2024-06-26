import {
  differenceInMilliseconds,
  format,
  formatDuration,
  intervalToDuration,
} from "date-fns";

export const useFormattedDate = (
  creationDateMillis: number,
  deliveryDateMillis: number,
) => {
  const durationObject = intervalToDuration({
    start: new Date().getTime(),
    end: deliveryDateMillis,
  });
  let timeDifference;
  if (deliveryDateMillis - new Date().getTime() > 0) {
    timeDifference = formatDuration(durationObject, {
      format: ["days", "hours"],
    });
  }
  const creationDate = format(creationDateMillis, "d MMMM yyyy");
  const deliveryDate = format(deliveryDateMillis, "d MMMM yyyy");
  return {
    creationDate,
    deliveryDate,
    timeDifference,
  };
};
