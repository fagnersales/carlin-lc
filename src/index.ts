import { Client, IntentsBitField } from "discord.js"
import { env } from "./env"
import { commands } from "./handlers/commands"
import { events } from "./handlers/events"
import { reloadCommands } from "./reloadCommands"

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
})

events.forEach(event => client.on(event.eventName, event.executer))

client.on("interactionCreate", interaction => {
  if (interaction.isChatInputCommand()) {
    const command = commands.find(command => command.slash.name === interaction.commandName)
    if (command) return void command.executer(interaction)
  }
})

reloadCommands()

client.login(env.DISCORD_CLIENT_TOKEN)