const CustomFormValidation = ({ name, value }) => {
  const isNotValid = { [name]: value };
  console.log("isNotValid", isNotValid);
};

export default CustomFormValidation;
