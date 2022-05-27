import axios from "axios";

import { makeToast, ToastType } from "./toast";

const ax = axios.create();

ax.interceptors.request.use(config => ({
  ...config, headers: {
    ...config.headers,
    "special-header": "100",
  }
}))

ax.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    makeToast({ type: ToastType.ERROR, title: "Error", message: error.message });
    return error;
  },
);

export default ax;