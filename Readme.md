# Frontend Mentor - Stay Updated Subscription App solution

This is a solution to the Stay Updated Subscription App challenge on Frontend Mentor.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Subscribe to the newsletter using their email
- Get feedback on the validity of their email
- Get a success message after submitting a valid email address
- Dismiss the success message and reset the form to its initial state


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Styled Components](https://styled-components.com/) - For styles
- [React](https://reactjs.org/) - JS library

### What I learned

This project gave me the opportunity to work on form handling and validation in React, using the useState hook. I have learned how to control inputs, handle form submission, and display validation errors. Here's a code snippet from the project that I found particularly useful:

```jsx
export default function EmailFrom({ setSuccess, emailInput, setEmailInput }) {
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(emailInput)) {
      setError(true);
      return;
    }

    setSuccess(true);
  };

  return (
    <Wrapper noValidate onSubmit={onSubmit}>
      <EmailInput error={error}>
        <LabelGroup>
          <label htmlFor="email">Email adress:</label>
          {error && <span>Valid email required</span>}
        </LabelGroup>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@company.com"
          value={emailInput}
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
          onFocus={() => {
            setError(false);
          }}
        />
      </EmailInput>
      <Button>Subscribe to monthly newsletter</Button>
    </Wrapper>
  );
}


### Continued development
I plan to continue improving my form handling and validation skills in React. I would like to explore more complex form validations and the use of custom hooks for form handling in future projects.
```
