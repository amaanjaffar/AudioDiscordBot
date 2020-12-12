const { SSL_OP_EPHEMERAL_RSA } = require('constants')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("the boys succeed in life", {type: "WATCHING"})

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
            

        })
        
    })
})

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '!omg') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('audio/OHMYGODTHATWASINSANE.mp3');
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }

    if (message.content === '!omgleave') {
      
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const leave = connection.disconnect();
      }
      
    }
  });


client.login("Nzg0MjM3MDEzODc2MzQyODA2.X8mXog.7rW5gL-DYCjupkcS5LGOGUhfEQA")


