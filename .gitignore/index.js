bot.login(process.env.TOKEN)
const Discord = require('discord.js');
var bot = new Discord.Client();

var prefix = ("<")

bot.on('ready', function () {
    bot.user.setGame("Commande <help");
    console.log("Connecté");
});

bot.on('message', message => {
        if(message.content[0] === prefix) {
     if(message.content === "<modo") {
var memberID = message.guild.members.filter(m=>m.roles.has('530003212007374848')).map(m=>m.id) //pour récupérer les membre du rôle
var aUser = message.author.tag 
memberID.map(u => bot.users.get(u).send(`**${aUser}** a besoin d'aide !`));
}}});
bot.on('message', message => {
    if (message.content === prefix + "funball"){
        var embed = new Discord.RichEmbed()
            .setTitle("Le but de FunBall")
            .setDescription("Le but de FunBall est de s'amuser dans une map que Plaxm et Booka ont crée ! Vous aurez une carabine pour essayer d'être le dernier survivant sur la map ! Si vous n'avez pas bien compris, n'hésitez pas à contacter un fondateur ou un modérateur en faisant <modo :) ")
            .setColor("#932DAE")
        message.channel.send(embed);
    }
});
bot.on('message', message => {
    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setTitle("Voici toutes le commandes du discord !")
        .addField("<modo", "Pour demander de l'aide aux modérateurs !")
        .addField("<funball", "Pour comprendre le but du FunBall !")
        .setColor("#5A168B")
    message.channel.send(embed);
    }
});
    
