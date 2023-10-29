import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"

export const slash = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Pings me")

export const executer = async (interaction: ChatInputCommandInteraction) => {
  interaction.reply({
    content: "Pong! 👍"
  })
}