# Anubis Event Management


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Routes](#routes)
- [Technologies Used](#technologies-used)
- [MCQ TEST](#MCQ-TEST)

## Introduction

Welcome to Anubis Event Management, your comprehensive solution for event planning and management. Anubis specializes in delivering top-notch events and unforgettable experiences. This web application is built using React, Firebase, React Router, and other modern technologies to provide you with seamless event management.

## Features

- **Event Types:** Anubis Event Management caters to various esports event types, ensuring a tailored experience.
- **Unique Design:**  A unique and responsive design that captures the essence of Gaming event type.
- **Authentication:** Secure user authentication with email and password, as well as additional login options (e.g., Google).
- **Private Routes:** Protect sensitive information and ensure user authentication with private routes.
- **Event Services:** Explore a variety of event services, each with a relevant name, image, price, and short description.
- **Service Details:** Click on a service to view detailed information, helping you make informed decisions.
- **Local Storage:** Save and retrieve user preferences using local storage.
- **Responsive Design:** Enjoy a responsive layout that adapts to both desktop and mobile devices.
- **AOS Animation:** Implement the AOS (Animate On Scroll) package for smooth and captivating animations on the homepage.
- **404 Page:** Handle invalid routes gracefully with a custom 404 (Not Found) page.

## Demo

You can experience Anubis Event Management live by visiting the [Demo Link](https://esports-event.web.app/).


## Usage

### Authentication

- **Registration:** Create a new user account by providing a valid email and password. Passwords must be at least 6 characters long.

- **Login:** Use your registered email and password to log in. Alternatively, you can log in using your Google, Facebook, or GitHub account.


### Routes

1. Home: The homepage features a navigation bar, banner/slider, services, and additional sections tailored to your chosen event type.

2. Service Details: Click on view details to access detailed information. These routes are protected and require user authentication.

3. Order : Click on order to access the events you add to your order

4. Team : You can see all the team mambers using team .

5. Additional Private Routes: Explore other private routes relevant to event type.

6. 404 Page: Invalid routes will redirect users to the custom 404 (Not Found) page.


## Technologies Used

**React**
**Firebase (Authentication)**
**React Router**
**Local Storage**
**AOS (Animate On Scroll)**
**CSS Libraries(Tailwind)**
**CSS FramWork(daisy)**
**React-Icon**
**Tostify**
**React-Reating**



<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B</b></summary>
<p>

#### Answer: 1

<i>There's a typographical error in the code. It should be let greeting; instead of let greetign;. Since greetign is not defined, it will result in a ReferenceError.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>A</b></summary>
<p>

#### Answer: 2

<i>In JavaScript, when the + operator is used with a string and a non-string value, JavaScript automatically converts the non-string value to a string and then performs concatenation. In the expression 1 + "2", the number 1 is automatically converted to a string, so it becomes "1". Then, JavaScript concatenates the two strings, resulting in the string "12" as the final result. So, the + operator in this context is used for string concatenation, not numeric addition.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A</b></summary>
<p>

#### Answer: 3

<i>The food array remains unchanged in the code. Even though info.favoriteFood is assigned the value "🍝", it doesn't affect the original food array. Therefore, the output will still be ['🍕', '🍫', '🥑', '🍔']</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B</b></summary>
<p>

#### Answer: 4

<i>The sayHi function is designed to receive an argument called name. However, when it's called without providing any arguments, JavaScript automatically assigns the value undefined to name. As a result, the output is "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>B</b></summary>
<p>

#### Answer: 5

<i>The forEach loop goes through the nums array and increases the count variable for each non-zero element. Since there are three non-zero elements (1, 2, and 3), the count ends up as 3, making the output 3.</i>

</p>
</details>