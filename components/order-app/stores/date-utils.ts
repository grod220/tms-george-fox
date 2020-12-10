import {
  addDays,
  addMinutes,
  addYears,
  format,
  getHours,
  isAfter,
  isBefore,
  isEqual,
  isSunday,
  isToday,
  parse,
  roundToNearestMinutes,
  setHours,
  startOfToday,
  startOfTomorrow,
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

export const convert24HourTo12Format = (date: Date) => format(date, 'h:mm aa');

export const extendedDateFormat = (htmlDate) => format(parseHTMLDateStr(htmlDate), 'EEEE, MMMM do y');

export const parseHTMLDateStr = (htmlDate) => parse(htmlDate, 'yyyy-MM-dd', startOfToday());

const getDayOfWeekStr = (dateObj) => format(dateObj, 'EEEE');

export const isInPast = (proposedTime: Date): boolean => isBefore(proposedTime, new Date());

export const isOnASunday = (proposedTime: Date): boolean => isSunday(proposedTime);

export const convertToHTMLDateAndTimeStr = (dateObj: Date): string => format(dateObj, "yyyy-MM-dd'T'HH:mm");

export const getNextAvailableFulfillmentDateAndTime = (): Date => {
  const leadTimeMinutes = leadTimesInMinutes[OrderStore.orderType][OrderStore.fulfillment.option];
  const now = new Date();
  const roundedPlusLeadTime = roundToNearestMinutes(addMinutes(now, leadTimeMinutes), { nearestTo: 5 });
  if (withinOpeningHours(roundedPlusLeadTime)) {
    return roundedPlusLeadTime;
  } else if (isBeforeOpeningToday(roundedPlusLeadTime) && !isSunday(now)) {
    const todayStr = getDayOfWeekStr(startOfToday());
    const openingHour = openingHours[todayStr].open;
    return setHours(startOfToday(), openingHour);
  } else if (isSunday(startOfTomorrow())) {
    const dayAfterTomorrow = addDays(startOfTomorrow(), 1);
    const dayAfterTomorrowNameStr = getDayOfWeekStr(dayAfterTomorrow);
    const dayAfterTomorrowOpeningHour = openingHours[dayAfterTomorrowNameStr].open;
    return setHours(dayAfterTomorrow, dayAfterTomorrowOpeningHour);
  } else {
    const tomorrowNameStr = getDayOfWeekStr(startOfTomorrow());
    const tomorrowsOpeningHour = openingHours[tomorrowNameStr].open;
    return setHours(startOfTomorrow(), tomorrowsOpeningHour);
  }
};

export const withinOpeningHours = (dateObj): boolean => {
  const dayProposed = getDayOfWeekStr(dateObj);
  const hour = getHours(dateObj);
  return hour >= openingHours[dayProposed].open && hour < openingHours[dayProposed].close;
};

const isBeforeOpeningToday = (proposedDateObj) => {
  const todayStr = getDayOfWeekStr(startOfToday());
  const proposedHour = getHours(proposedDateObj);
  return isToday(proposedDateObj) && proposedHour < openingHours[todayStr].open;
};

export const getOneYearFromTodayStr = () => convertToHTMLDateAndTimeStr(addYears(startOfToday(), 1));

export const parseHTMLDateAndTime = (proposedDateStr) => parse(proposedDateStr, "yyyy-MM-dd'T'HH:mm", new Date());

export const withinLeadTime = (proposedDateObj: Date): boolean => {
  const nextAvailableTime = getNextAvailableFulfillmentDateAndTime();
  return isAfter(proposedDateObj, nextAvailableTime) || isEqual(proposedDateObj, nextAvailableTime);
};
