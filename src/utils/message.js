import { message } from "antd";

export const MESSAGE = {
  required: "Please fill in this field",
  email: "Wrong email format",
  phone: "Wrong phone format",
};

export const notAvaiableMessage = () => {
  message.warning("Feature not available");
};
