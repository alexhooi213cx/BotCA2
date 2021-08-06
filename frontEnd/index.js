const Discord = require("discord.js")
const db = require("quick.db")
require('dotenv').config();
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// GET to backend API

function getFromBackend(url) {
//  var url = 1
  fetch(`http://localhost:3000/${url}`)
  .then(response => {
    console.log('response is', response);
    return response.json()
  })
  .then(function (json) {
    if (json == 0) {
      alert("Error!");
    } else {
      console.log(json);
    }
  }); 
}





client.on('message', async (msg) => {
  // for command such as if prefix = "/" then i want to type to reply from bot, i need to type /hi or /hey
  const prefix = "";
  // response botGreetEN if msg.content include some of the words in var greetEN
  //slice(prefix.length).trim().split(/ +/)  is to set the format for the msg.content
  //msg.guild.id means id of the Bot test server      
  const lang = await db.get(`${msg.guild.id}`);

  if (lang == null) {
    if (getFromBackend(1).some(word => msg.content.slice(prefix.length).trim().split(/ +/).includes(word))) {
      return msg.channel.send(getFromBackend(3)[Math.floor(Math.random() * getFromBackend(3).length)])
    } else {
      return msg.channel.send("Sorry I don't understand what you are saying");
    }
  } else if (lang == 'chinese') {
    if (getFromBackend(2).query2.some(word => msg.content.slice(prefix.length).trim().split(/ +/).includes(word))) {
      msg.channel.send(getFromBackend(4)[Math.floor(Math.random() * getFromBackend(4).length)])
    } else {
      return console.log("不好意思");
    }
  } else {
    return msg.channel.send("Error");
  }


  const prefix2 = ".";
  const args = msg.content.slice(prefix2.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();
  if (cmd == 'set') {
    if (args[0] === 'english') {
      //delete the msg.guild.id, so when go to 'test' it will become null
      db.delete(`${msg.guild.id}`)

      return msg.channel.send(`English language selected`)


    } else if (args[0] === 'chinese') {
      //set msg.guild.id to become chinese
      db.set(`${msg.guild.id}`, "chinese")

      return msg.channel.send(`Chinese language selected`)
    } else {
      return msg.channel.send("Sorry this language is unsupported!");;
    }



  }
});

client.login(process.env.TOKEN)

