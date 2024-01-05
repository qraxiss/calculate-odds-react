import axios, { AxiosResponse } from 'axios';

 interface Result {
  success: boolean;
  data?: any;
  message?: string;
 
}

const API_URL = "http://127.0.0.1:5000";

const createResult = ({ success, data, message }: Result): Result => ({
  success,
  data,
  message,
});

class Request {
  static get = async (url: string, params: any = {}, headers: any = {}, authToken?: string): Promise<Result> => {
    try {
      url = API_URL + url;
      const response: AxiosResponse = await axios.get(url, {
        headers,
        params,
      });
      return response.data;
    } catch (error : Error | any) {
      return createResult({
        success: false,
        message: error.message,
      });
    }
  };

  static post = async (url: string, body: any, headers: any = {}): Promise<Result> => {
    try {
      url = API_URL + url;
      const response: AxiosResponse = await axios.post(url, body, {
        headers,
      });
      return response.data;
    } catch (error : Error | any) {
      return createResult({
        success: false,
        message: error.message,
      });
    }
  };

  static put = async (url: string, body: any, headers: any = {}): Promise<Result> => {
    try {
      url = API_URL + url;
      const response: AxiosResponse = await axios.put(url, body, {
        headers,
      });
      return response.data;
    } catch (error : Error | any) {
      return createResult({
        success: false,
        message: error.message,
      });
    }
  };

  static delete = async (url: string, headers: any = {}): Promise<Result> => {
    try {
      url = API_URL + url;
      const response: AxiosResponse = await axios.delete(url, {
        headers,
      });
      return response.data;
    } catch (error : Error | any) {
      return createResult({
        success: false,
        message: error.message,
      });
    }
  };
}

export { Request };    
export type { Result };

