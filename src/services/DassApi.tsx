import axios from "axios";

interface InsertValue {
  title: string;
  urlLink: string;
  description: string;
}

export const getVideoList = async () => {
  try {
    const response = await axios.get(
      "http://35.216.17.150:3003/api/dass/getVideoList"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const putVideoList = async (InsertValue: InsertValue) => {
  try {
    const data = {
      title: InsertValue.title,
      urlLink: InsertValue.urlLink,
      description: InsertValue.description,
    };

    const response = await axios.post(
      "http://35.216.17.150:3003/api/dass/putVideoList",
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteVideoList = async (title: string) => {
  try {
    const response = await axios.get(
      "http://35.216.17.150:3003/api/dass/deleteVideoList?title=" + title
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
