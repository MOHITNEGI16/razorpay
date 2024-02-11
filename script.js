// const form = document.getElementById("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.getElementById("name");
//   const phone = document.getElementById("phone");
//   const amount = document.getElementById("payment");
//   // const name = document.getElementById('name');

//   let obj = {
//     name: name.value,
//     phone: phone.value,
//     amount: amount.value,
//     currency: "INR",
//     notes: {
//       key1: "pyment going ",
//       key2: "payment done",
//     },
//   };
//   name.value = "";
//   phone.value = "";
//   amount.value = "";
// });

const url = "https://api.razorpay.com/v1/orders";
const key_Id = "rzp_test_KwzFxt77N3FJwf";
const key_secret = "dHcfQKtNyghIjGKSMjjLwMjA";

const encodedCredntial = btoa(`${key_Id}`);

const obj = {
  name: "mohit",
  amount: 500,
  currency: "INR",
  notes: {
    notes1: `donation `,
  },
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic${encodedCredntial}`,
  },
  body: JSON.stringify(obj),
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Response from server:", data);
  })
  .catch((error) => {
    console.error("Error during fetch:", error);
  });

// var options = {
//   key: "rzp_test_KwzFxt77N3FJwf", // Enter the Key ID generated from the Dashboard
//   amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//   currency: "INR",
//   name: "Acme Corp", //your business name
//   description: "Test Transaction",
//   image: "https://example.com/your_logo",
//   order_id: "order_NZVy6xBAXCWYHp", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//   handler: function (response) {
//     alert(response.razorpay_payment_id);
//     alert(response.razorpay_order_id);
//     alert(response.razorpay_signature);
//   },
//   prefill: {
//     //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
//     name: "Gaurav Kumar", //your customer's name
//     email: "gaurav.kumar@example.com",
//     contact: "9000090000", //Provide the customer's phone number for better conversion rates
//   },
//   notes: {
//     address: "Razorpay Corporate Office",
//   },
//   theme: {
//     color: "#3399cc",
//   },
// };
// var rzp1 = new Razorpay(options);
// rzp1.on("payment.failed", function (response) {
//   alert(response.error.code);
//   alert(response.error.description);
//   alert(response.error.source);
//   alert(response.error.step);
//   alert(response.error.reason);
//   alert(response.error.metadata.order_id);
//   alert(response.error.metadata.payment_id);
// });
// document.getElementById("rzp-button1").onclick = function (e) {
//   rzp1.open();
//   e.preventDefault();
// };
