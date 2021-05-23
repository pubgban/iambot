const {
	MessageEmbed
} = require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "developer",
    category: "INFORMATION COMMANDS",
	aliases: ["dev", "mp"],
	description: "Shows Information about the Developer",
	useage: "developer",
	run: async (client, message, args) => {
			message.channel.send(new MessageEmbed()
				.setColor(config.colors.yes)
				.setFooter("GAANA | by: MP GAMING", client.user.displayAvatarURL())
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/17ccf170d62e5e0040660d003b075528.webp")
				.setTitle("| Dev of 3 Orgs | Developer of 2+ BOTS")
				.setImage("https://cdn.discordapp.com/attachments/844140919459807244/845627476930592838/programming.gif")
				.setDescription(`
			> Hello I am **MP GAMING** <@722828967945568296> *(\`😎MP GAMING😉❣#5146\`)*, and i made more then 2 different Discord Bots)

			> Yeah i hope you like my stuff :v: <3`)
			)
	}
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
