require("dotenv").config();
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const apiID = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const stringSession = new StringSession(process.env.STRING_SESSION);

const client = new TelegramClient(stringSession, apiID, apiHash, {
    connectionRetries: 5,
});

function randomizer() {
  const foods = [IELTS1, IELTSSAT, SAT1]
  const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return `${randomChoice(foods)}`;

}

(async () => {
    console.log("Connecting using saved session...");

    await client.connect({});

    console.log("Connected!");

    const adMessage = randomizer();
    console.log(`Prepared Ad: "${adMessage}"`)

  
  try {
    await client.sendMessage("rig_test_01", {
      message: adMessage,
    });
    console.log("Message sent!");
  } catch (error) {
    console.error("Error sending message:", error);
  }
  process.exit(0);
})();

