let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readMessages = new WeakSet();

readMessages.add(messages[0]); // true


console.log(readMessages.has(messages[0]));

const message1 = messages[0];
const message2 = messages[1];
const message3 = messages[2];

messages.shift();

console.log(readMessages.has(message1)); // true
console.log(readMessages.has(message2)); // false
console.log(readMessages.has(message3)); // false

