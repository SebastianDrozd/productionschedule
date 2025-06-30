"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import styles from "../../styles/Calendar.module.css";

function Calendar({ className = "", classNames = {}, showOutsideDays = true, ...props }) {
  const [selected, setSelected] = useState();
    return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}

export { Calendar };
