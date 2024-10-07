import axios from "axios";
import { EventI } from "../type/events";

export const fetchAllEvents = async (): Promise<EventI[]> => {
  try {
    const response = await axios.get("/data/calendarfromtoenddate.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
