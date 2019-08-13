const Discord = require ("discord.js");
const config = require ("./config.json");
const bot = new Discord.Client({DisableEveryone: true});
const fs = require ("fs");
const prefix = "!";

account1 = "./Accounts/1.txt";
account2 = "./Accounts/2.txt";
account3 = "./Accounts/3.txt";
account4 = "./Accounts/4.txt";
account5 = "./Accounts/5.txt";
account6 = "./Accounts/6.txt";
account7 = "./Accounts/7.txt";
account8 = "./Accounts/8.txt";
account9 = "./Accounts/9.txt";
account10 = "./Accounts/10.txt";
account11 = "./Accounts/11.txt";
account12 = "./Accounts/12.txt";
account13 = "./Accounts/13.txt";
account14 = "./Accounts/14.txt";
account15 = "./Accounts/15.txt";
account16 = "./Accounts/16.txt";
account17 = "./Accounts/17.txt";
account18 = "./Accounts/18.txt";
account19 = "./Accounts/19.txt";
account20 = "./Accounts/20.txt";
account21 = "./Accounts/21.txt";
account22 = "./Accounts/22.txt";
account23 = "./Accounts/23.txt";
account24 = "./Accounts/24.txt";
account25 = "./Accounts/25.txt";
account26 = "./Accounts/26.txt";
account27 = "./Accounts/27.txt";
account28 = "./Accounts/28.txt";
account29 = "./Accounts/29.txt";
account30 = "./Accounts/30.txt";
account31 = "./Accounts/31.txt";
account32 = "./Accounts/32.txt";
account33 = "./Accounts/33.txt";
account34 = "./Accounts/34.txt";
account35 = "./Accounts/35.txt";
account36 = "./Accounts/36.txt";
account37 = "./Accounts/37.txt";
account38 = "./Accounts/38.txt";
account39 = "./Accounts/39.txt";
account40 = "./Accounts/40.txt";
account41 = "./Accounts/41.txt";
account42 = "./Accounts/42.txt";
account43 = "./Accounts/43.txt";
account44 = "./Accounts/44.txt";
account45 = "./Accounts/45.txt";
account46 = "./Accounts/46.txt";
account47 = "./Accounts/47.txt";
account48 = "./Accounts/48.txt";
account49 = "./Accounts/49.txt";
account50 = "./Accounts/50.txt";

bot.on('message', function(message){

  if(message.content == `${prefix}gen spotify`) 
  {
    number = 50; 
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.send ({ files: [account1] }); break;
      case 2: message.channel.send ({ files: [account2] }); break;
      case 3: message.channel.send ({ files: [account3] }); break;
      case 4: message.channel.send ({ files: [account4] }); break;
      case 5: message.channel.send ({ files: [account5] }); break;
      case 6: message.channel.send ({ files: [account6] }); break;
      case 7: message.channel.send ({ files: [account7] }); break;
      case 8: message.channel.send ({ files: [account8] }); break;
      case 9: message.channel.send ({ files: [account9] }); break;
      case 10: message.channel.send ({ files: [account10] }); break;
      case 11: message.channel.send ({ files: [account11] }); break;
      case 12: message.channel.send ({ files: [account12] }); break;
      case 13: message.channel.send ({ files: [account13] }); break;
      case 14: message.channel.send ({ files: [account14] }); break;
      case 15: message.channel.send ({ files: [account15] }); break;
      case 16: message.channel.send ({ files: [account16] }); break;
      case 17: message.channel.send ({ files: [account17] }); break;
      case 18: message.channel.send ({ files: [account18] }); break;
      case 19: message.channel.send ({ files: [account19] }); break;
      case 20: message.channel.send ({ files: [account20] }); break;
      case 21: message.channel.send ({ files: [account21] }); break;
      case 22: message.channel.send ({ files: [account22] }); break;
      case 23: message.channel.send ({ files: [account23] }); break;
      case 24: message.channel.send ({ files: [account24] }); break;
      case 25: message.channel.send ({ files: [account25] }); break;
      case 26: message.channel.send ({ files: [account25] }); break;
      case 27: message.channel.send ({ files: [account26] }); break;
      case 28: message.channel.send ({ files: [account27] }); break;
      case 29: message.channel.send ({ files: [account28] }); break;
      case 30: message.channel.send ({ files: [account29] }); break;
      case 31: message.channel.send ({ files: [account30] }); break;
      case 32: message.channel.send ({ files: [account31] }); break;
      case 33: message.channel.send ({ files: [account32] }); break;
      case 34: message.channel.send ({ files: [account33] }); break;
      case 35: message.channel.send ({ files: [account34] }); break;
      case 36: message.channel.send ({ files: [account36] }); break;
      case 37: message.channel.send ({ files: [account37] }); break;
      case 38: message.channel.send ({ files: [account38] }); break;
      case 39: message.channel.send ({ files: [account39] }); break;
      case 40: message.channel.send ({ files: [account40] }); break;
      case 41: message.channel.send ({ files: [account41] }); break;
      case 42: message.channel.send ({ files: [account42] }); break;
      case 43: message.channel.send ({ files: [account43] }); break;
      case 44: message.channel.send ({ files: [account44] }); break;
      case 45: message.channel.send ({ files: [account45] }); break;
      case 46: message.channel.send ({ files: [account46] }); break;
      case 47: message.channel.send ({ files: [account47] }); break;
      case 48: message.channel.send ({ files: [account48] }); break;
      case 49: message.channel.send ({ files: [account49] }); break;
      case 50: message.channel.send ({ files: [account50] }); break;
      
    }
  }

});

bot.commands =  new Discord.Collection();
require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("Purp is watching darth purp! please don't disturb."); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));

fs.readdir("./commands/", (err, files) => {
if (err) console.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
    console.log("no commands where found...");  
    return;
}

module.exports = (client, message) => {
  

  if (message.author.bot) return;

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
};

jsfile.forEach((f, i) => {
    var FileGet = require(`./commands/${f}`);
    console.log(`${f} successfully Loaded!`);

    bot.commands.set(FileGet.help.name, FileGet);

} );

  bot.on('message', message => { 
   if (message.isMemberMentioned(bot.user)) {
     message.delete();
message.author.send("Please do -help instead of tagging me if you want info of some commands!")
   }
});
  
  
bot.on('reconnecting', () => console.log('I am reconnecting now!'));

})
bot.on("ready", async () => {
console.log (`${bot.user.username} is online!`)
bot.user.setActivity ("Test", {type: "STREAMING", url:"https://www.twitch.tv/venom"})
bot.user.setStatus('dnd')

})

bot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") message.reply("Hey! Thanks for DMing me! please use the -help command in the server!")
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
    let messagearray = message.content.split(" ")
    let cmd = messagearray [0];
    let args = messagearray.slice (1);

    var commands = bot.commands.get(cmd.slice(prefix.length));
    if(commands) commands.run(bot, message, args);

})
bot.on ("guildMemberAdd", member => {
   const guild = member.guild;
  var role = member.guild.roles.find('name', 'Member'); // Variable to get channel ID
  member.addRole(role); // Adds the default role to members
 guild.channels.find(channel => channel.name === "Welcome").send("Hey! " + member +"  welcome to Zhun's Underground Bunker! enjoy your stay!")
});
bot.login(config.token);
