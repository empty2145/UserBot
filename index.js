require("dotenv").config();
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const apiID = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const StringSession = new StringSession(process.env.STRING_SESSION || "");

const client = new TelegramClient(StringSession, apiID, apiHash, {
    connectionRetries: 5,
});

