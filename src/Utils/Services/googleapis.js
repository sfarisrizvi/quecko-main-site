import axios from "axios";
import { Sendsheetdb_API } from "../Enviroment";

export const Sendsheetdb = async (body) => {
  try {
    const response = await axios.post(
      Sendsheetdb_API,
      {
        data: {
          Name: body.name,
          Email: body.email,
          Telegram: body.telegram,
          Message: body.message,
          Timestamp: new Date().toLocaleTimeString("en-GB", {
            timeZone: "Asia/Karachi",
          }),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log("SheetDB success:", response.data);
    return response.data;
  } catch (error) {
    console.error("SheetDB error:", error.response?.data || error.message);
    throw error;
  }
};
