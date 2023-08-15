import {
  ResetSessionData,
  SetSessionData,
} from "@app/features/SessionReducer/SessionReducer";
import { ApiServices } from "@app/services/Apiservice";
import { SessionData } from "@app/types/Modules/Session";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
  data: SessionData[] | undefined;
  setApiQueryDate: (date: string) => void;
  ApiQueryDate: string;
}

const useSessionNotes = (): IProps => {
  const [data, setData] = useState();
  const Dispatch = useDispatch(); // Dispatch function from redux
  const { Data } = useSelector((state: any) => state.Session); // States from the store
  const [ApiQueryDate, setApiQueryDate] = useState(""); // Consists of Date in YYYY-MM-DD format
  useEffect(() => {
    if (ApiQueryDate !== "" || null || undefined) {
      ApiServices.Get_User_Session_by_Date(
        SetSessionData,
        ResetSessionData,
        Dispatch,
        ApiQueryDate
      );
    }
  }, [ApiQueryDate]); // To get Session Data from the API
  useEffect(() => {
    setData(Data);
  }, [Data]); // To assign the data from the API to the data State to be used in the FlatList

  return { data, setApiQueryDate, ApiQueryDate };
};

export default useSessionNotes;
