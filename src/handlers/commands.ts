import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import fs from "fs"
import path from "path"

type Command = {
  slash: SlashCommandBuilder
  executer: (interaction: ChatInputCommandInteraction) => Promise<any>
}

export const commands: Command[] = []

const initialPath = path.join(__dirname, "..", "commands")

readFolder(initialPath)

function readFolder(dirPath: string) {
  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    readFile(path.join(dirPath, file))
  }
}

function readFile(filePath: string) {
  const file = fs.lstatSync(filePath)

  if (file.isFile()) {
    commands.push(require(filePath))
  }

  if (file.isDirectory()) {
    readFolder(filePath)
  }
}