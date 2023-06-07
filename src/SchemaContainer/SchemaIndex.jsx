import * as yup from "yup";

// schema
export const schemaIndex = yup.object().shape({
  firstname: yup.string().required('Please! Enter your firstname'),
  lastname: yup.string().required('Please! Enter your lastname'),
  middlename: yup.string().required('Please! Enter your Your middle name'),
  email: yup.string().email("Please enter a valid email").required("Reqiured"),
  phoneNumber: yup.number().positive().integer().required("Enter your Phone number"),
  memorableWord: yup.string().required("Enter a memorable word you can remember"),
  deliverymethod: yup.string().required("Enter a delivery method e.g. sms etc."),
}) 

