import { IUserForm } from "../types/IUserForm";

export const checkIsSomethingInInput = (userForm: IUserForm) => {
  let result: boolean = false;
  if (
    userForm.fullName.length > 0 ||
    userForm.email.length > 0 ||
    userForm.phone.length > 0 ||
    userForm.message.length > 0
  ) {
    result = true;
  }

  return result;
};