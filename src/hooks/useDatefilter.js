import React, { useEffect, useState } from "react";
import { DateConstrctor } from "../helper/customFunction";
const useDateFilter = (Data, DateProperty) => {
  const [data, setData] = useState(Data); //* Api data will be saved in this state
  const [UnfilteredData, setUnfilteredData] = useState(Data); //* Api data will be saved in this state
  const [value, setValue] = useState(); // this state consists of new  date
  const [day, setDay] = useState(null);
  useEffect(() => {
    let obj = DateConstrctor(new Date());
    setDay(obj.Day);
    setValue(obj.Date);
  }, []);

  const FilterDate = (date) => {
    let obj = DateConstrctor(date);
    setDay(obj.Day);
    setValue(obj.Date);
    filterData(obj.Date);
  };

  const filterData = (date) => {
    let FilteredArr = UnfilteredData.filter(
      (item) => DateConstrctor(new Date(item[DateProperty])).Date === date
    );
    setData(FilteredArr);
  };

  return { data, value, day, FilterDate };
};

export default useDateFilter;
