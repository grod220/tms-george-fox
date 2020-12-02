import {
  addDays,
  addMinutes,
  addYears,
  format,
  getHours,
  setHours,
  isSunday,
  parse,
  roundToNearestMinutes,
  startOfToday,
  isAfter,
  isEqual,
  startOfTomorrow,
  endOfYesterday,
  isToday,
} from 'date-fns';

import OrderStore from './order-store';

const openingHours = {
  Sunday: {
    open: 24,
    close: 0,
  },
  Monday: {
    open: 15,
    close: 21,
  },
  Tuesday: {
    open: 15,
    close: 21,
  },
  Wednesday: {
    open: 15,
    close: 21,
  },
  Thursday: {
    open: 11,
    close: 21,
  },
  Friday: {
    open: 11,
    close: 21,
  },
  Saturday: {
    open: 11,
    close: 21,
  },
};

const leadTimesInMinutes = {
  normal: {
    pickup: 30,
  },
  catering: {
    delivery: 180,
    pickup: 120,
  },
};

/* All time is browser-time. May be a bit tricky if ordering from a different timezone. */

export const convert24HourTo12Format = (militaryTime) => format(parseHTMLTimeStr(militaryTime), 'h:mm aa');

export const parseHTMLTimeStr = (htmlTime) => parse(htmlTime, 'HH:mm', new Date());

export const extendedDateFormat = (htmlDate) => format(parseHTMLDateStr(htmlDate), 'EEEE, MMMM do y');

export const parseHTMLDateStr = (htmlDate) => parse(htmlDate, 'yyyy-MM-dd', startOfToday());

const getDayOfWeekStr = (dateObj) => format(dateObj, 'EEEE');

export const isDateInPast = (proposedStartOfDay) => endOfYesterday() > proposedStartOfDay;

export const getNextAvailableFulfillmentDate = () => {
  const today = new Date();
  const leadTimeHours = leadTimesInMinutes[OrderStore.orderType][OrderStore.fulfillment.option] / 60;
  if (getHours(today) + leadTimeHours < openingHours[getDayOfWeekStr(today)].close) {
    return startOfToday();
  } else if (isSunday(startOfTomorrow())) {
    return addDays(startOfToday(), 2);
  } else {
    return startOfTomorrow();
  }
};

const convertToHTMLDateStr = (dateObj) => format(dateObj, 'yyyy-MM-dd');

export const getNextAvailableFulfillmentDateStr = () => convertToHTMLDateStr(getNextAvailableFulfillmentDate());

export const withinOpeningHours = (dateObj) => {
  const dayProposed = getDayOfWeekStr(dateObj);
  const hour = getHours(dateObj);
  return hour >= openingHours[dayProposed].open && hour < openingHours[dayProposed].close;
};

const isBeforeOpeningToday = (proposedDateObj) => {
  const todayStr = getDayOfWeekStr(startOfToday());
  const proposedHour = getHours(proposedDateObj);
  return isToday(proposedDateObj) && proposedHour < openingHours[todayStr].open;
};

export const getNextAvailableFulfillmentTimeStr = () => {
  const leadTimeMinutes = leadTimesInMinutes[OrderStore.orderType][OrderStore.fulfillment.option];
  const now = new Date();
  const roundedPlusLeadTime = roundToNearestMinutes(addMinutes(now, leadTimeMinutes), { nearestTo: 5 });
  if (withinOpeningHours(roundedPlusLeadTime)) {
    return format(roundedPlusLeadTime, 'HH:mm');
  } else if (isBeforeOpeningToday(roundedPlusLeadTime) && !isSunday(now)) {
    const todayStr = getDayOfWeekStr(startOfToday());
    const openingHour = openingHours[todayStr].open;
    return format(setHours(startOfToday(), openingHour), 'HH:mm');
  } else if (isSunday(startOfTomorrow())) {
    const dayAfterTomorrow = addDays(startOfTomorrow(), 1);
    const dayAfterTomorrowNameStr = getDayOfWeekStr(dayAfterTomorrow);
    const dayAfterTomorrowOpeningHour = openingHours[dayAfterTomorrowNameStr].open;
    return format(setHours(startOfTomorrow(), dayAfterTomorrowOpeningHour), 'HH:mm');
  } else {
    const tomorrowNameStr = getDayOfWeekStr(startOfTomorrow());
    const tomorrowsOpeningHour = openingHours[tomorrowNameStr].open;
    return format(setHours(startOfTomorrow(), tomorrowsOpeningHour), 'HH:mm');
  }
};

export const getOneYearFromTodayStr = () => convertToHTMLDateStr(addYears(startOfToday(), 1));

export const parseHTMLDateAndTime = (proposedDateStr, proposedTimeStr) =>
  parse(`${proposedDateStr} ${proposedTimeStr}`, 'yyyy-MM-dd HH:mm', new Date());

export const withinLeadTime = (proposedDateObj) => {
  const nextAvailableTime = parseHTMLDateAndTime(
    getNextAvailableFulfillmentDateStr(),
    getNextAvailableFulfillmentTimeStr(),
  );
  return isAfter(proposedDateObj, nextAvailableTime) || isEqual(proposedDateObj, nextAvailableTime);
};
