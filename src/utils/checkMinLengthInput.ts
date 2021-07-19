import { IUserForm } from "../types/IUserForm";

export const checkMinLengthInput = (userForm: IUserForm) => {
  let result: boolean = true;
  if (
    userForm.fullName.length <= 0 ||
    userForm.email.length <= 0 ||
    userForm.phone.length <= 0 ||
    userForm.message.length <= 0
  ) {
    result = false;
  }

  return result;
};
