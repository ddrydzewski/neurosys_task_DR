export const isGoodEmail = (email: string) => {
  let result: boolean = true;

  if (!email.includes("@") || !email.includes(".") || email.length < 6) {
    result = false;
  }
  return result;
};

export const isGoodFullName = (fullName: string) => {
  let result: boolean = true;
  if (!/^[a-zA-Z\s]*$/.test(fullName) || fullName.length < 3) {
    result = false;
  }
  return result;
};

export const isGoodPhoneNumber = (phone: string) => {
  let result: boolean = true;

  if (!/^\d+$/.test(phone) || phone.length < 4) {
    result = false;
  }
  return result;
};
