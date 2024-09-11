import { client, db } from "."
import { goalCompletions, goals } from "./schema"

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db.insert(goals).values([
    { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
    { title: 'Estudar inglês', desiredWeeklyFrequency: 3 },
    { title: 'Fazer exercícios', desiredWeeklyFrequency: 4 },
  ]).returning()

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: new Date() },
    { goalId: result[1].id, createdAt: new Date() },
  ])
}

seed().finally(() => {
  client.end()
})
