const FormValidation = (obj) => {
  console.log("obj", obj);

  const errors = {};
  for (let key in obj) {
    errors[key] = obj[key].trim() === "" ? true : false;
  }
  const result = Object.values(errors).includes(true);
  return { errors, result };
};
export default FormValidation;
