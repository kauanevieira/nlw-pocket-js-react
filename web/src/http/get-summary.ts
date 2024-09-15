export interface GetSummaryResponse {
  summary: {
    completed: number
    total: number
    goalsPerDay: Record<
      string,
      {
        id: string
        title: string
        createdAt: string
      }[]
    >
  }
}

export async function getSummary(): Promise<GetSummaryResponse> {
  const response = await fetch('https://ominous-goggles-jw7vvq7q7q92qjww-3333.app.github.dev/summary')
  const data = await response.json()

  return data.summary
}