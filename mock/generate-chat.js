let faker = require('faker/locale/pt_BR');

// function randFromArr(arr) {
//   let min = 0;
//   let max = arr.length - 1;
//   let idx = Math.floor(Math.random()*(max-min+1)+min);
//   return arr[idx];
// }

let chat = {
  users: [],
  messages: []
};

let adminName = faker.name.findName();
chat.users.push({
  id: faker.finance.account(),
  tag: '@' + faker.helpers.slugify(adminName).toLowerCase(),
  fullname: adminName,
  role: 'admin'
});

for (let u = 1; u < 10; u++) {
  let name = faker.name.findName();
  chat.users.push({
    id: faker.finance.account(),
    tag: '@' + faker.helpers.slugify(name).toLowerCase(),
    fullname: name,
    role: faker.helpers.shuffle(['common', 'staff'])[0]
  });
}

let floor = faker.random.number();
let total = floor + 50;
for (let i = floor; i <= total; i++) {
  let t = faker.helpers.shuffle(['normal', 'response', 'question'])[0];
  let message = {
    id: i,
    sender: faker.helpers.shuffle(chat.users)[0],
    content: faker.hacker.phrase(),
    type: t
  };

  switch (t) {
    case 'response':
      message.message_quoted = faker.helpers.shuffle(chat.messages)[0];
      break;
    case 'question':
      message.score = Math.floor(Math.random()*(100-1+1)+1);
      break;
    default:
      break;
  }
  chat.messages.push(message);
}

console.log(JSON.stringify(chat, null, 2));
