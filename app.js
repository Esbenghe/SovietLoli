//================================================== SLUSHIE BOT
const tokenfile = require("./tokenfile.json");
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const ownerID = "474942581747351552"
const api = "rfgkSEHOY5IHBcX3DrIFaZ11Z9OJtmPV"
const got = require(`got`)
const ytdl = require(`ytdl-core`);
let mRole = "485453347848192006"
//================================================== READY EVENT
bot.on('ready', async () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity("Justice", { type: "STREAMING" });
});
//================================================== WELCOMER EVENT
bot.on(`guildMemberAdd`, async member =>{
  let channel = member.guild.channels.find(`name`, `general`)
  if (!channel) return
    let welcomeembed = new Discord.RichEmbed()
        .setDescription(`Welcome ${member} to Giveaway 15!`)
        .setImage(`https://cdn.dribbble.com/users/1117770/screenshots/2626626/welcome.gif`)
        .setColor(0xADD8E6)
        .setTimestamp()
    channel.send(welcomeembed);
    member.addRole("483950516297269249");
});
//================================================== LEAVE EVENT
//New Member Welcomer Event
bot.on(`guildMemberRemove`, async member =>{
  let channel = member.guild.channels.find(`name`, `general`)
  if (!channel) return;
    let goodbyeembed = new Discord.RichEmbed()
        .setDescription(`Goodbye ${member} <:SadBlob:485338996457734145>`)
        .setImage(`https://i.imgur.com/C5Zvszb.gif`)
        .setColor(0xADD8E6)
        .setTimestamp()
    channel.send(goodbyeembed);
});
//================================================== MESSAGE EVENT
bot.on("message", async message =>{
  if (!message.guild) return;
  if (message.author.bot) return;
  let prefix = "."
  let musicprefix = "m."
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let swearWords = ["nigga","fuck","cunt","vagina","dick","shit","cock","pussy","ass","porn","raid","raiding","wtf", "sexy"];
  if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Message deleted. dont swear");
  message.delete();
  };
  //================================================== A ==================================================\\
  if (message.content.startsWith(`${prefix}ask`)){
  	var Answer = ["Yes", "Positive", "Nope", "Lol no", "I cant tell", "Fuck yea", "Ofc", "Fuck no", "Nuh uh", "Maybe"];
    var rand = Math.floor(Math.random() * Answer.length);
    var RandomAnswer = Answer[rand];
    return message.channel.send(RandomAnswer);
  };
  if (message.content.startsWith(`${prefix}avatar`)){
    let avatarfail = args.slice(1).join(' ');
    let memberavatar = message.mentions.users.first()
    if (!memberavatar) return message.channel.send(`What is ${avatarfail}?? i mean who is it?`)
    let avatarembed = new Discord.RichEmbed()
    .setDescription("Wow such a nice avatar")
    .setImage(memberavatar.avatarURL)
    .setColor(0xADD8E6)
    return message.channel.send(avatarembed)
  };
  //================================================== B ==================================================\\
  //---------- .ban
  if (cmd === `${prefix}ban`){
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channgel.send(`User cannot be found`);
    let reason = args.join(" ").slice(22);
    if (!reason) reason = "no info given";
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Who do you think you are to order me around")
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cannot ban this ally")
    let bEmbed = new Discord.RichEmbed()
    .setColor(0xADD8E6)
    .addField("Ban",`
    **Banned by**: <@${message.author.id}>
    **Banned user**: ${bUser}
    **Reason**: ${reason}
    **Channel**: ${message.channel.name}`)
    .setTimestamp()
    let bChannel = message.guild.channels.find("name", "logs");
    if (!bChannel) return message.channel.send("I could not find the logs channel");
    message.guild.member(bUser).ban(reason);
    return bChannel.send(bEmbed);
  };
  if (cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarURL;
    let botinfoembed = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setColor(0x9400D3)
    .addField("Bot Information",`
    **__Bot Name__**: ${bot.user.username}
    **__Created On__**: ${bot.user.createdAt}`)
    return message.channel.send(botinfoembed);
  }
  if (cmd === `${prefix}update`){
    message.channel.setTopic(`Channel for chatting, we reached ${message.guild.memberCount} members. yay!`)
    .then(updated => console.log(`Channel's new topic is "${updated.topic}"`))
    .catch(console.error);
  };
  //================================================== C ==================================================\\
  if (cmd === `${prefix}cuddle`){
    let cuddlemember = message.mentions.members.first()
    if (!cuddlemember) return message.channel.send("Are you trying to cuddle air owo")
    var images = ["https://pa1.narvii.com/6004/4a589d6cc369ec42110b919cadf579027e7f842b_hq.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJI_yheGwTrAss7QqGzib6WxJBntaymP4b6ux71A-kUfyijPQmhg", "https://i.kym-cdn.com/photos/images/newsfeed/000/883/447/e26.gif", "http://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif", "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif", "https://78.media.tumblr.com/0d75f3afd87a29cd4566598dfa8ff625/tumblr_okrw1cOUfT1w4hkclo1_500.gif", "https://i.pinimg.com/originals/11/83/1b/11831b4efbc681e3a58ea0653740345f.gif", "http://gifimage.net/wp-content/uploads/2017/09/anime-cuddle-gif-7.gif", "https://lynaeina.files.wordpress.com/2010/06/huggychunnie.gif", "https://media1.tenor.com/images/13f3b0ec5bc99c01c3ad40b878c8300b/tenor.gif?itemid=5157576", "https://gifimage.net/wp-content/uploads/2017/09/anime-cuddle-gif-9.gif"];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];
    let cuddleembed = new Discord.RichEmbed()
        .setDescription(`**${message.author}** is cuddling **${cuddlemember}**`)
        .setImage(randomImage)
        .setColor(0xffc0cb)
    return message.channel.send(cuddleembed)
  }
  //================================================== D ==================================================\\
  if (cmd === `${prefix}demote`){
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Who do you think you are to order me around")
    let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let dEmbed = new Discord.RichEmbed()
    .setTitle("Demoted")
    .setColor(0xADD8E6)
    .addField("Demoted User:", `${dUser}`)
    .addField("Demoted By:", `<@${message.author.id}>`)
    .setTimestamp()
    let dChannel = message.guild.channels.find("name", "logs");
    message.channel.send(`You have been demoted.`)
    dChannel.send(dEmbed)
    return dUser.removeRoles([/*mods*/"485680764814622721",/*trialmods*/"483953212177776640",/*srmods*/"483953370105905152"])
  };
  //================================================== E ==================================================\\
  if (cmd === `${prefix}eval`){
    const clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
    if(message.author.id !== ownerID) return message.channel.send("ONLY THE OWNER CAN DO THIS COMMAND FOR SAFETY REASONS");
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  //================================================== F ==================================================\\
  //================================================== G ==================================================\\
  if (cmd === `${prefix}gif`){
    if (args.length < 1) return message.channel.send(`-Text is a required argument`, { code: "py" })
    let res = await got(`https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, {json: true})
    if (!res || !res.body || !res.body.data) return message.channel.send("@Failed to find a GIF that matched your query!", {code: "py"})
    let embed = new Discord.RichEmbed()
    .setImage(res.body.data.image_url)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x100000)
    return message.channel.send({embed: embed});
  }
  //================================================== H ==================================================\\
  //================================================== help
  if (cmd === `${prefix}help`){
    let bicon = bot.user.displayAvatarURL;
    let helpembedtest = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setColor(0x9400D3)
    .addField("**__Fun__**",`
    1: **Ask**: .ask | talk with the bot
    2: **Gif**: .gif | check a random gif
    3: **Say**: .say | make bot say something
    4: **Upload**: .upload | upload a gif that is on my computer
    5: **Uploadlist**: .uploadlist | see what gifs can be uploaded
    6: **Robotzi**: .robotzi | random gif i made
    7: **Nom**: .nom | nom on someone
    8: **Hug**: .hug | hug a nice person
    9: **Kiss**: .kiss | kiss a member
    10: **Cuddle**: .cuddle | cuddle with someone
    
    --------------------------------------------------`)
    .addField("**__Utility__**",`
    1: **Avatar**: .avatar | check someone\`s avatar
    2: **Botinfo**: .botinfo | Info on me
    3: **Help**: .help | See all commands
    4: **Serverinfo**: .serverinfo | Info on the server
    5: **Report**: .report | report a person to the staff
    
    --------------------------------------------------`)
    .addField("**__Staff__**",`
    1: **Ban**: .ban | need "MANAGE_MESSAGES" permission to use
    1: **Kick**: .kick | kick a dum dum
    2: **Demote**: .demote | remove mod from a person
    3: **Eval**: .eval | Only owner
    4: **Mute**: .mute | Mute someone bad
    5: **Unmute**: .unmute | Unmute a good boy
    6: **Purge**: .purge | delete a bunch of messages`)
    return message.channel.send(helpembedtest);
  }
  if (cmd === `${prefix}hug`) {
    let huggedmember = message.mentions.members.first()
    if (!huggedmember) return message.channel.send("I get it, you like english but please hug a person. A LIVING PERSON!")
    var images = ["https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079", "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093"];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];
    let hugembed = new Discord.RichEmbed()
        .setDescription(`**${message.author}** is hugging **${huggedmember}** SO CUTEEE :heart:`)
        .setImage(randomImage)
        .setColor(0xffc0cb)
    return message.channel.send(hugembed)
  }
  //================================================== I ==================================================\\
  //================================================== J ==================================================\\
  //================================================== K ==================================================\\
  if (cmd === `${prefix}kick`){
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channgel.send(`User cannot be found`);
    let reason = args.join(" ").slice(22);
    if (!reason) reason = "no info given";
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Who do you think you are to order me around")
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cannot kick this ally")
    let bEmbed = new Discord.RichEmbed()
    .setColor(0xADD8E6)
    .addField("Kick",`
    **Kicked by**: <@${message.author.id}>
    **Kicked user**: ${bUser}
    **Reason**: ${reason}
    **Channel**: ${message.channel.name}`)
    .setTimestamp()
    let bChannel = message.guild.channels.find("name", "logs");
    if (!bChannel) return message.channel.send("I could not find the logs channel");
    message.guild.member(bUser).kick(reason);
    return bChannel.send(bEmbed);
  };
  if (cmd === `${prefix}kiss`){
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Are you trying to kiss air owo")
    var images = ["https://media1.giphy.com/media/G3va31oEEnIkM/giphy.gif","https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif","https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif","http://gifimage.net/wp-content/uploads/2017/09/anime-gif-kiss-12.gif","https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649","https://i.gifer.com/2uEt.gif","https://media0.giphy.com/media/bGm9FuBCGg4SY/200.gif","https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657","https://i.imgur.com/eisk88U.gif","https://i.pinimg.com/originals/14/04/3a/14043a566bd7faa074b4761875ed3dd4.gif","https://i.gifer.com/9p3w.gif","https://i.kym-cdn.com/photos/images/original/001/108/304/adf.gif"];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];
    let kissembed = new Discord.RichEmbed()
        .setDescription(`**${message.author}** is kissing **${member}**`)
        .setImage(randomImage)
        .setColor(0xffc0cb)
    return message.channel.send(kissembed)
    }
  //================================================== L ==================================================\\
  //================================================== M ==================================================\\
  if (cmd === `${prefix}mute`){
    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!mUser) return message.channgel.send(`Me cant find da user`);
    let reason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cant listen to you")
    let mEmbed = new Discord.RichEmbed()
    .setColor(0xADD8E6)
    .addField("**__Unmute__**", `
    **Muted by**: <@${message.author.id}>
    **Muted User**: ${mUser}
    **Reason**: ${reason}    **Channel**: ${message.channel.name}`)
    .setTimestamp()
    let mChannel = message.guild.channels.find("name", "logs");
    if (!mChannel) return message.channel.send("I could not find the channel")
      message.guild.member(mUser).addRole(mRole)
    return mChannel.send(mEmbed);
  };
  //================================================== N ==================================================\\
  if (cmd === `${prefix}nom`){
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Are you trying to nom air?")
    var images = ["https://78.media.tumblr.com/35a1a39e5832dee49e04f4958b4e9381/tumblr_omss2uGQI21v9ypo0o1_500.gif","https://vignette.wikia.nocookie.net/glee/images/9/97/Anime_nom_gif.gif/revision/latest?cb=20141208230601","https://i.gifer.com/EQn9.gif","https://media.giphy.com/media/QjA5lLSxkrryg/giphy.gif"]
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];
    let nomembed = new Discord.RichEmbed()
        .setDescription(`**${message.author}** is nomming **${member}**`)
        .setImage(randomImage)
        .setColor(0xffc0cb)
    return message.channel.send(nomembed)
  } 
  //================================================== O ==================================================\\
  //================================================== on
  if (cmd === `${prefix}on`){
    return message.channel.send("I am on and on duty.")
  }
  //================================================== P ==================================================\\
  if (cmd === `${prefix}petsim`){
    let messagecontent = 0;
    message.delete().catch();
    let petsim = args.join(" ").slice(0);
    if (petsim === "candy corn") messagecontent = `__\`\`\`fix
NAME: Candy Corn
TIER: 15
PRICE: 2 375 000 Moon Coin\`\`\`__`;
    if (petsim === "green gummy bear") messagecontent = `__\`\`\`fix
NAME: Green Gummy Bear
TIER: 15
PRICE: 2 375 000 Moon Coin\`\`\`__`;
    return message.channel.send(messagecontent,{file: `./petsim/${petsim}.png`});
  };
  if (cmd === `${musicprefix}play`){
    if(!message.member.voiceChannel) return message.channel.send("Please join a voice channel first!");
    //if(message.guild.me.voiceChannel) return message.channel.send("Sorry the bot is already connected to the guild");
    if(!args[0]) return message.channel.send("Sorry, please input a url following the little cute . and command");
    let validate = ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send("Please enter a **valid** url");
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.playStream(ytdl(args[0], {filter: "audioonly" }));
    message.channel.send(`Now Playing: **__\`\`\`${info.title}\`\`\`__**`);
  }
  if (cmd === `${prefix}purge`){
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
    if (!args[0]) return message.reply("no");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
      let pUser = `<@${message.author.id}>`
      let pEmbed = new Discord.RichEmbed()
      .setColor(0xADD8E6)
      .addField("**__Purge__**", `
      **Deleted by**: ${pUser}
      **Messages deleted**:" ${args[0]}
      **Channel**: ${message.channel.name}`)
      .setTimestamp()
      let pChannel = message.guild.channels.find("name", "logs");
      return pChannel.send(pEmbed)
    });
    return;
  }
  //================================================== Q ==================================================\\
  //================================================== R ==================================================\\
  if (cmd === `${prefix}report`){
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Cannot find the user you are looking for");
    let reason = args.join(" ").slice(22);
    let reportembed = new Discord.RichEmbed()
    .setColor(0xADD8E6)
    .addField(`**__Report by ${message.author.tag}__**`,`
    Reported user: ${rUser}

    ${reason}`)
    .setTimestamp()
    let reportschannel = message.guild.channels.find("name", "reports");
    if (!reportschannel) return message.channel.send(`The "reports" channel does not exists`);
    message.delete().catch(O_o=>{});
    reportschannel.send(reportembed);
    return;
  };
  if (cmd === `${prefix}robotzi`){
    var images = ["https://media.giphy.com/media/9JcuQdeRMpMCjsBDP3/giphy.gif","https://media.giphy.com/media/LZ39VPHfvtkAh6dsp6/giphy.gif", "https://media.giphy.com/media/5PhpHrODsb2TdJWB2l/giphy.gif", "https://media.giphy.com/media/1ziTRcPiafMBXqPPz3/giphy.gif","https://media.giphy.com/media/8cT6AYT7SyH5pFMeao/giphy.gif"]
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];
    const robotziembed = new Discord.RichEmbed()
        .setImage(randomImage)
        .setColor(0x100000)
    return message.channel.send(robotziembed)
};
  //================================================== S ==================================================\\
  if (cmd === `${prefix}say`){
    let botreply = args.join(" ");
    message.delete().catch();
    return message.channel.send(botreply);
  };
  if (cmd === `${prefix}serverinfo`){
    let sicon = message.guild.displayAvatarURL;
    let serverinfoembed = new Discord.RichEmbed()
    .setThumbnail(sicon)
    .setColor(0x9400D3)
    .addField("Server Information",`
    **__Server Name__**: ${message.guild.name}
    **__Total Members__**: ${message.guild.memberCount}`);
    return message.channel.send(serverinfoembed)
  };
  //================================================== T ==================================================\\
  //================================================== U ==================================================\\
  if (cmd === `${prefix}unmute`){
    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!mUser) return message.channgel.send(`Me cant find da user`);
    let reason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cant listen to you")
    let mEmbed = new Discord.RichEmbed()
    .setColor(0xADD8E6)
    .addField("**__Mute__**", `
    **Unmuted by**: <@${message.author.id}>
    **Unmuted User**: ${mUser}
    **Reason**: ${reason}
    **Channel**: ${message.channel.name}`)
    .setTimestamp()
    let mChannel = message.guild.channels.find("name", "logs");
    if (!mChannel) return message.channel.send("I could not find the channel")
      message.guild.member(mUser).removeRole(mRole)
    return mChannel.send(mEmbed);
  };
  if (cmd === `${prefix}upload`){
    message.delete().catch();
    let uploadimage = args.join(" ").slice(0);
    return message.channel.send({file: `./gifs/${uploadimage}.gif`});
  };
  if (cmd === `${prefix}uploadlist`){
    return message.channel.send({file: `./Capture.png`});
  };
  //================================================== V ==================================================\\
  //================================================== W ==================================================\\
  //================================================== X ==================================================\\
  //================================================== Y ==================================================\\
  //================================================== Z ==================================================\\
  //==================================================CUSTOM  COMMANDS
  //==================================================The end
 });
//================================================== LOGIN EVENT
bot.login(process.env.BOT_TOKEN);
