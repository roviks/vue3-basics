import { HOURS_IN_DAY } from '../constants/main'

export function generateTimeline() {
  const result = []
  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    result.push({ hour })
  }

  return result
}
