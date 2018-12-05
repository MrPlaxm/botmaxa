const Discord = require('discord.js');
var bot = new Discord.Client();

function sendError(message, description) {
    message.channel.send({embed: {
        color: 15158332,
        description: ":x: " + description
    }});
}

var prefix = ("!")

bot.on('ready', function () {
    bot.user.setGame("Commande *help");
    console.log("Connecté");
});

bot.login(process.env.TOKEN)

bot.on('message', message => {
        if(message.content[0] === prefix) {
     if(message.content === "!modo") {
var memberID = message.guild.members.filter(m=>m.roles.has('515996315176534026')).map(m=>m.id) //pour récupérer les membre du rôle
var aUser = message.author.tag 
memberID.map(u => bot.users.get(u).send(`**${aUser}** a besoin d'aide !`));
}}});
bot.on('message', message => {
    if (message.content === prefix + "maxa"){
        var embed = new Discord.RichEmbed()
            .setTitle("Voici la chaîne de MaXa !")
            .setDescription("https://www.youtube.com/channel/UCXFgrsiFjMY9PP9k9dUyaBg")
            .setColor("#8A0808")
            .setFooter("N'hésite pas à t'abonner !")
        message.channel.send(embed);
    }
});
bot.on('message', message => {
    if(message.content === "*help") {
        var embed = new Discord.RichEmbed()
        .setTitle("Voici toutes le commandes du discord !")
        .addField("!maxa", "Pour savoir la chaine YouTube MaXa !")
        .addField("!modo", "Pour demander de l'aide aux modérateurs !")
        .setColor("#86FF49")
    message.channel.sendEmbed(embed);
}});
    
