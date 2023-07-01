export const COLORS = {
  tomato: "hsl(4, 100%, 67%)",
  darkStateGrey: "hsl(234, 29%, 20%)",
  charcoalGrey: "hsl(235, 18%, 26%)",
  grey: "hsl(231, 7%, 60%)",
  white: "hsl(0, 0%, 100%)",
};

/**
 * Validates whether a string is a properly formatted email address.
 *
 * @param {string} email - The email address to validate.
 * @return {boolean} True if the email is valid, otherwise false.
 */
export function isValidEmail(email) {
  // This regular expression matches most email patterns
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
