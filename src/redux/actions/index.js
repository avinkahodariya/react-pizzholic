export const usernamelogin = (event) => {
  console.log(event);
  return {
    type: "USERNAMELOGIN",
    payload: event.target.value,
  };
};
export const userpasswordlogin = () => {
  return {
    type: "USERPASSWORDLOGIN",
  };
};
export const usernamesignin = () => {
  return {
    type: "USERNAMESIGNIN",
  };
};
export const userpasswordsignin = () => {
  return {
    type: "USERPASSWORDSIGNIN",
  };
};
export const useremailsignin = () => {
  return {
    type: "USEREMAILSIGNIN",
  };
};
export const register = () => {
  return {
    type: "REGISTER",
  };
};
export const login = () => {
  return {
    type: "LOGIN",
  };
};
export const checkregister = () => {
  return {
    type: "CHECKREGISTER",
  };
};
export const checklogin = () => {
  return {
    type: "CHECKLOGIN",
  };
};
