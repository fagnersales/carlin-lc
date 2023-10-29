import type { EventExecuter } from "../types"

export const eventName = "ready"

export const executer: EventExecuter<"ready"> = (client) => {
  console.log(`Client is ready! ${client.user.username}`)
}