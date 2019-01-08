const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const giphy = require('giphy-api')();
const fs = require("fs");
const hastebins = require('hastebin-gen');
var Canvas = require('canvas');
var jimp = require('jimp');
const prefix = "#";
const devs = ['521763526436585472' , '' , '' , ''];
const adminprefix = "^";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`star Bot- Script By : n3k4a `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers ' Script By : n3k4a  Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame("^help")
client.user.setStatus("dnd")
 
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
