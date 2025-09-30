import * as readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counter = 1;

const question = async (name: string) => {
  return new Promise((resolve, reject) => {
    rl.question(name, resolve);
  });
};

async function main() {
   
}

main();
