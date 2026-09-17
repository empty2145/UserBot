require("dotenv").config();
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const apiID = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const stringSession = new StringSession(process.env.STRING_SESSION || "");

const client = new TelegramClient(stringSession, apiID, apiHash, {
    connectionRetries: 5,
});

(async () => {
    console.log("Authentificating...");

    await client.start({
        phoneNumber: async () => await input.text("Number: "),
        password: async () => await input.text("Password: "),
        phoneCode: async () => await input.text("Code from Telegram: "),
        onError: (err) => console.log(err),
    })

    console.log("Connected!");

    if (!process.env.STRING_SESSION) {
    console.log("\n=== ACTION REQUIRED ===");
    console.log("Copy the string below and paste it as your STRING_SESSION in the .env file:\n");
    console.log(client.session.save());
    console.log("\nThen restart the script.");
    process.exit(0);
  }
  await client.sendMessage("rig_test_01", {
    message: "Hi everyone! I'm offering IELTS and SAT tutoring. DM me for details!",
  });
  
  console.log("Message sent!");
  process.exit(0);
})();

