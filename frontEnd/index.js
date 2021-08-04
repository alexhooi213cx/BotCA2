const Discord = require("discord.js")
const db = require("quick.db")
require('dotenv').config();
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// POST to backend API
function postToBackend(data) {
  fetch('http://localhost:3000', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
}

// GET to backend API
function getFromBackend() {
  fetch('http://localhost:3000/')
  .then(response => {
    console.log('response is', response);
    return response.json()
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.log('Error:', error);
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
    if (greeting().query.some(word => msg.content.slice(prefix.length).trim().split(/ +/).includes(word))) {
      return msg.channel.send(greeting().query3[Math.floor(Math.random() * botGreetEN.length)])
    } else {
      return msg.channel.send("Sorry I don't understand what you are saying");
    }
  } else if (lang == 'chinese') {
    if (greeting().query2.some(word => msg.content.slice(prefix.length).trim().split(/ +/).includes(word))) {
      msg.channel.send(greeting().query4[Math.floor(Math.random() * botGreetCHI.length)])
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
// //test if it will go into the correct if else
// /* else if (cmd == 'test') {
//     let lang = await db.get(`${msg.guild.id}`);
//     if (lang == null) {
//       lang = 'en'
//     } else if (lang == 'chinese') {
//       lang = 'chinese'

//       let word = require(`./lang/${lang}.js`);
//       return msg.channel.send(word.test)

//     }
//   } */
// /* const { Client } = require('pg')

// const pgclient = new Client({
// user: 'eyyyfpsw',
// host: 'john.db.elephantsql.com',
// database: 'eyyyfpsw',
// password: 'TOxwbE9xMxyPv20Rfdzw-vhWJqwroBh6',
// port: 5432,
// })
// pgclient.connect()
// pgclient.query('SELECT * FROM "public"."tab1" LIMIT 100', (err, res) => {
// console.log(err, res)
// pgclient.end()
// }) */
// /* const translate = require("google-translate-api") */
