// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// 1. Then //
//fetch("https://jsonplaceholder.typicode.com/users/1"); //
/* 
.then((response) => {
response.json().then((data) => {
        console.log(data);
        emailRef.innerHTML = data.email;
    })
})

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email;
  })
*/

// 2. Async/Await //
/*
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data);
  emailRef.innerHTML = data.email;
}

main();


// creating a promise //
function getSubscriptionStatus() {
    return new Promise ((resolve, reject) => {
        resolve("VIP")
    })
}
console.log(getSubscriptionStatus())

*/

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(undefined);
    }, 2000);
  });
}

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("Show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("Show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  try {
    console.log(await getVideo(status));
  } catch (e) {
    console.log(e);
    videoRef.innerHTML = e;
  }
}

main();
