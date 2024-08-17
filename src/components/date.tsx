"use client";

import { useEffect, useState } from "react";

function leftPad(input: string, prefix: string, totalLength: number) {
  if (input.length === totalLength) {
    return input;
  }

  let output = input;
  for (let i = 0; i < totalLength - input.length; i++) {
    output = prefix + output;
  }

  return output;
}

function convertHours(hours: number) {
  return hours > 12 ? hours - 12 : hours;
}

function formatDate(date: Date) {
  return (
    leftPad(convertHours(date.getHours()).toString(), "0", 2) +
    ":" +
    leftPad(date.getMinutes().toString(), "0", 2) +
    " " +
    (date.getHours() > 12 ? "PM" : "AM")
  );
}

export function DateComponent() {
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(formatDate(new Date()));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div className="text-4xl">{date}</div>;
}
