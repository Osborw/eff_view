import fetch from 'node-fetch'

export const getLeague = async (leagueId: string) => {
  const url = `https://api.sleeper.app/v1/league/${leagueId}`
  const response = await fetch(url)
  const data = await response.json() as any

  return data 
}

export const getRosters = async (leagueId: string) => {
  const url = `https://api.sleeper.app/v1/league/${leagueId}/rosters`
  const response = await fetch(url)
  const data = await response.json() as any

  return data
}

export const getLeagueUsers = async (leagueId: string) => {
  const url = `https://api.sleeper.app/v1/league/${leagueId}/users`
  const response = await fetch(url)
  const data = await response.json() as any

  return data
}