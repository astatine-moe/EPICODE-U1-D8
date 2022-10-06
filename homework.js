const log = (exercise, ...messages) => {
    console.log("[EXERCISE " + exercise + "]: ", messages.join(" "), "\n");
};

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
let positiveNumbers = [4, 5, 1, 3, 6];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
const aboutMe = {
    firstName: "Morgan",
    lastName: "Evans",
    email: "morgan@morganevans.dev",
    age: 23,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
aboutMe.hasDrivingLicense = true;

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete aboutMe.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
const aboutSomeone = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@johndoe.com",
    age: 40,
};

log(5, "Different email address:", aboutMe.email !== aboutSomeone.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
const totalShoppingCart = 30;
let shippingCost = totalShoppingCart > 50 ? 0 : 10;
let total = totalShoppingCart + shippingCost;

log(6, "Total cart:", totalShoppingCart, "- Shipping cost:", shippingCost);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
const discount = 0.2;
let totalDiscount = totalShoppingCart * discount;
let totalCart = totalShoppingCart - totalDiscount;
let shippingCostDiscount = totalCart > 50 ? 0 : 10;
let totalCost = totalCart + shippingCostDiscount;

log(
    7,
    "Total cart:",
    totalShoppingCart,
    "- Discount:",
    totalDiscount,
    "- Total cart with discount:",
    totalCart,
    "- Shipping cost:",
    shippingCostDiscount,
    "- Total cost:",
    totalCost
);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
const car = {
    brand: "Tesla",
    model: "Model 3",
    licensePlate: "TEST123",
};

const car2 = { ...car, licensePlate: "TEST456" };
const car3 = { ...car, licensePlate: "TEST789" };
const car4 = { ...car, licensePlate: "TEST101" };
const car5 = { ...car, licensePlate: "TEST112" };
const car6 = { ...car, licensePlate: "TEST131" };

log(
    8,
    "Car 1 plate:",
    car.licensePlate,
    "- Car 2 plate:",
    car2.licensePlate,
    "- Car 3 plate:",
    car3.licensePlate,
    "- Car 4 plate:",
    car4.licensePlate,
    "- Car 5 plate:",
    car5.licensePlate,
    "- Car 6 plate:",
    car6.licensePlate
);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
const carsForRent = [car, car2, car3, car4, car5, car6];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
carsForRent.shift(); // Remove first car
carsForRent.pop(); // Remove last car

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */
log(
    11,
    "Car type:",
    typeof car,
    "- License plate type:",
    typeof car.licensePlate,
    "- Brand type:",
    typeof car.brand
);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */
const carsForSale = [];

carsForSale.push(car, car2, car3);

let totalCars = carsForSale.length + carsForRent.length;

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
log(13, "Cars for sale:");
for (const car of carsForSale) {
    console.log(
        `Car: ${car.brand} ${car.model} - License plate: ${car.licensePlate}`
    );
}
