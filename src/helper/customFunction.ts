/**
 * This function generates the intial value for the Controling the toggle
 * function(selectedItem state)
 * as well as assigning the data to userSelec state
 * @param data
 *
 *  */
export const DataRendering = (data:any):any => {  //! <--- Need TO change this later
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
export const DesignRendering = (data : any, template: any) : any[] => { //! <--- Need to change this later
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
export const StringWithDots = (arr : string[], n:number) => {
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
//! Not in use Anymore

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
export const splitName = (str:string):string[] => {
  const arr = str.split(/\s+/);
  return arr;
};

export const GetMonth = (month:string) : number | undefined => {
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
      null
  }
};







//This is a function to create an object that contains date and day of the week based on the input date.

export const DateConstrctor = (date:Date):any => { //! <--- Need to Change this later
  
  //Create a new object with empty properties.
  let ReturnedObj ={
    Date:"",
    Day:"",
    Time:""
  }
  
  //creating the date object which will help us to find the day of the week
  const WeekDay = new Date(date);
  //using switch statement to update the value of 'Day'
  switch (WeekDay.getDay()) {
    case 1:
      ReturnedObj.Day ="Monday"
      break;
    case 2:
      ReturnedObj.Day ="Tuesday"
      break;
    case 3:
      ReturnedObj.Day ="Wednesday"
      break;
    case 4:
      ReturnedObj.Day ="Thursday"
      break;
    case 5:
      ReturnedObj.Day ="Friday"
      break;
    case 6:
      ReturnedObj.Day ="Saturday"
      break;
    case 0:
      ReturnedObj.Day ="Sunday"
      break;
  }

  //getting month, day and year from the input date and adding it into the object.
  const month = String(date).slice(4, 7).toLowerCase();
  const day = String(date).slice(8, 10);
  const year = String(date).slice(11, 15);

  
    var hours = date.getHours();
    var minutes : number | string = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'Am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    ReturnedObj.Time = strTime;
  
  ReturnedObj.Date = `${day} ${month} , ${year}`;
  return ReturnedObj
  
};

/***
 * Capitals the first Character of string
 * @param {String}
 */
export function capitalizeFirstLetter(string:string):string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

