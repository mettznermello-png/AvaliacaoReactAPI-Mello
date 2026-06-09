const BASE_URL = 'https://futuramaapi.com/api'

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/characters`)

  if (!response.ok) {
    throw new Error(`Erro ao buscar personagens: ${response.status}`)
  }

  const data = await response.json()
  return data.items
}