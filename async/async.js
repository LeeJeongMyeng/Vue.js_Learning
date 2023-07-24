//1. async
async function fetchUser() {
  return "ellie";
}

const user = fetchUser();
user.then((user) => console.log(user));
console.log(user);

//2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  //await delay로 인해 3초를 기다린다.
  await delay(3000);
  return "apple";
}
// function getBanana(){
//     return delay(3000)
//     .then(()=>'banana');
// }
async function getBanana() {
  await delay(3000);
  return "banana";
}

// console.log(getBanana())

// function pickFruits(){
//     return getApple()
//     .then(apple =>{
//         return getBanana()
//         .then(banana => `hhkhkh ${apple}+${banana}`);
//     })
// }

async function pickFruits() {
  try {
    //Promise를 만드는순간 실행되어서
    //병렬처리로 시간을 단축할 수 있다.
    const appleProsise = getApple();
    const bananaProsise = getBanana();
    // 동기화
    const apple = await appleProsise;
    const banana = await bananaProsise;
    return `${banana}+${apple}`;
  } catch {
    console.log(console.error());
  }
}

//3. promise API
// 프로미스들이 전부 병렬적으로 실행하게끔하여 모아준다.
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log)

pickFruits().then(console.log);
