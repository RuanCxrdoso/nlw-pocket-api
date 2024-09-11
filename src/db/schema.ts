import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

// Schema is like a molder for the databases, it defines the tables and columns.

// Colunas da tabela
export const goals = pgTable('goals', {
  id: text('id').primaryKey().$defaultFn(() => createId()), // Generete automatic id
  title: text('title').notNull(),
  desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export const goalCompletions = pgTable('goal_completions', {
  id: text('id').primaryKey().$defaultFn(() => createId()), // Generete automatic id
  goalId: text('goal_id').references(() => goals.id).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
  .notNull()
  .defaultNow(),
})
