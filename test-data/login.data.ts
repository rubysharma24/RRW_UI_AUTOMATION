

export const validUser = {
  email: process.env.VALID_USER_EMAIL || 'valid_user@example.com',
  password: process.env.VALID_USER_PASSWORD || 'ValidPassword123!',
  apiemail: 'raja@g.com',
  apipassword: 'spree122',
};

export const invalidUser = {
  email: 'wrong_user@example.com',
  password: 'WrongPassword123!',
};

export const invalidEmailFormats = [
  'plainaddress',
  'missing@domain',
  '@missingusername.com',
];

export const messages = {
  invalidLogin: 'Invalid email or password',
  emptyEmail: 'Email is required',
  emptyPassword: 'Password is required',
};
