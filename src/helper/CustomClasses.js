export class User_Session_notes_pram_object {
  Client_ID;
  Session_ID;
  Client_image;
  appointment;
  constructor(data) {
    this.Client_ID = data.patient_id;
    this.Session_ID = data.id;
    this.Client_image = data.client_image;
    this.appointment = {
      date: data.appointment_date,
      time: data.appointment_time,
    };
  }
}

export class User_Session_Notes_Editor_Pram_object {
  mode;
  content;
  data;
  constructor(mode, content, ClientData) {
    this.mode = mode;
    this.content = content;
    this.ClientData = ClientData;
  }
}



/**
 * @description This class is used to get the date and time in the required format , Used All over the app 
 * @Replaces DateConstrctor function from src/helper/CustomFunctions.js
 * @param {Date} date Object of Date class
 */

export class App_date_Construction_Class {
 dateObject;
  Date;
  Time;
  Day;
  ApiDateQuery;
  constructor(date = new Date()) {
    this.dateObject = date;
    this.Date = this.setDate();
    this.Time = this.setTime();
    this.Day = this.setDay();
    this.ApiDateQuery = this.setApiDateQuery();
  }

  setDate() {
    const month = String(this.dateObject).slice(4, 7).toLowerCase();

    const day = String(this.dateObject).slice(8, 10);
    const year = String(this.dateObject).slice(11, 15);
    return `${day} ${month} , ${year}`;
  }
  setTime() {
    var hours = this.dateObject.getHours();
    var minutes = this.dateObject.getMinutes();
    var ampm = hours >= 12 ? "PM" : "Am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  setDay() {
    //creating the date object which will help us to find the day of the week
    const WeekDay = new Date(this.dateObject);
    //using switch statement to update the value of 'Day'
    switch (WeekDay.getDay()) {
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
        break;
      case 0:
        return "Sunday";
        break;
    }
  }
  setApiDateQuery() {
    return this.dateObject.toISOString().split("T")[0];
  }

}