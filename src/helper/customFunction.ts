/**
 * Custom Function Written by Muaaz Bin Sarfraz
 * -> {1.0.0} -
 */





/**
 * This function generates the intial value for the Controling the toggle
 * function(selectedItem state)
 * as well as assigning the data to userSelec state
 * @param data
 *
 *  */
export const DataRendering = (data: any): any => {
  //! <--- Need TO change this later
  let DataRender = [];

  for (var i = 0; i < data.length; i++) {
    DataRender.push({
      value: data[i],
      isSelected: false,
    });
  }
  return DataRender;
};
/**
 * This function generated the intaial design of the unselected
 * buttons according to length of the data recived
 * for the design useState
 * @param data
 * @param template
 *  */
export const DesignRendering = (data: any, template: any): any[] => {
  //! <--- Need to change this later
  let designTemp = [];
  for (var i = 0; i < data.length; i++) {
    designTemp.push(template);
  }
  return designTemp;
};

/**
 * This function generates a an object that consist of array of elements that are shown and no of elements that are hidden
 * for setting the strings according to width of screens 

 * @param array that is is total array that is going to be broken
 * @param n is the no of element that to be broke Down
 *  */
export const StringWithDots = (arr: string[], n: number) => {
  if (arr.toString().length > n) {
    let ShownArr = arr.filter((element, index) => index < n);
    let RemainElements = arr.filter((element, index) => index >= n);
    return {
      shownElements: ShownArr,
      remainElements: RemainElements,
      noOfRemainElements: RemainElements.length,
    };
  } else {
    return {
      shownElements: arr,
      remainElements: [],
      noOfRemainElements: 0,
    };
  }
};

/**
 * This function returns array with the flag info
 * for setting the flag picture , country and code

 * @param arr that is is total array of objecting consisting of all countries data
 * @param code is the code of country like "AE"
 * for code like AE
 *  */

// export const FlagDetail = (arr = [], code) => {
//   return arr.filter((innerFlag) => innerFlag.code === code);
// };

// /**
//  * for name like United States
//  */
// export const FlagDetail2 = (arr = [], name) => {
//   return arr.filter((innerFlag) => innerFlag.name === name);
// };
//! Not in use Anymore

/**
 * this function slips the name and return it in a arrat consisiting of names in part
 * @param str is the name or String that will be split into parts
 */
export const splitName = (str: string): string[] => {
  const arr = str.split(/\s+/);
  return arr;
};

export const GetMonth = (month: string): number | undefined => {
  switch (month) {
    case "jan":
      return 1;
      break;
    case "feb":
      return 2;
      break;
    case "mar":
      return 3;
      break;
    case "apr":
      return 4;
      break;
    case "may":
      return 5;
      break;
    case "jun":
      return 6;
      break;
    case "jul":
      return 7;
      break;
    case "aug":
      return 8;
      break;
    case "sep":
      return 9;
      break;
    case "oct":
      return 10;
      break;
    case "nov":
      return 11;
      break;
    case "dec":
      return 12;
    default:
      null;
  }
};

//This is a function to create an object that contains date and day of the week based on the input date.

export const DateConstrctor = (date: Date): any => {
  //! <--- Need to Change this later

  //Create a new object with empty properties.
  let ReturnedObj = {
    Date: "",
    Day: "",
    Time: "",
    ApiDateQuery:""
  };

  //creating the date object which will help us to find the day of the week
  const WeekDay = new Date(date);
  //using switch statement to update the value of 'Day'
  switch (WeekDay.getDay()) {
    case 1:
      ReturnedObj.Day = "Monday";
      break;
    case 2:
      ReturnedObj.Day = "Tuesday";
      break;
    case 3:
      ReturnedObj.Day = "Wednesday";
      break;
    case 4:
      ReturnedObj.Day = "Thursday";
      break;
    case 5:
      ReturnedObj.Day = "Friday";
      break;
    case 6:
      ReturnedObj.Day = "Saturday";
      break;
    case 0:
      ReturnedObj.Day = "Sunday";
      break;
  }

  //getting month, day and year from the input date and adding it into the object.
  const month = String(date).slice(4, 7).toLowerCase();
  
  const day = String(date).slice(8, 10);
  const year = String(date).slice(13, 15); // change this to 11 , 15 for 2023 date

  var hours = date.getHours();
  var minutes: number | string = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  ReturnedObj.Time = strTime;

  ReturnedObj.Date = `${day} ${month} , ${year}`;
  ReturnedObj.ApiDateQuery = date.toISOString().split('T')[0] // Returns the date in YYYY-MM-DD format
  return ReturnedObj;
};

/***
 * Capitals the first Character of string
 * @param {String}
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * 
 * @param {hex} : string  , Which  is HEX string value 
 * @param {opacity}:number , Which is Number Value which is used for telling opacity , should Range from 0 - 1 
 * @returns : string value of HEX with Opacity that was given As Argument 
 * @description function that returns the Hex value of color with Opacity
 * {1.0.0} written by Muaaz bin Sarfraz
 * 
 * Used in Drawic Library
 */

export const ColorWithopacity = (hex : string, opacity : number):string => {
  if (
    typeof hex !== "string" ||
    !/^#([A-Fa-f0-9]{3}){1,2}($|[A-Fa-f0-9]{2})$/.test(hex)
  )
    throw new Error("Invalid hexadecimal color value");
  if (typeof opacity !== "number" || opacity > 1 || opacity < 0)
    throw new Error("Opacity should be float between 0 - 1");
  let color = hex.substring(1);
  if (color.length === 5 || color.length === 8)
    color = color.substring(0, color.length - 2);
  if (color.length === 3)
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  color += Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");
  return `#${color}`.toUpperCase();
};

export function isValidDateFormat(dateString:string) : boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}


export function isValidEmail(email:string) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailPattern.test(email);
}
