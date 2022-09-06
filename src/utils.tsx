import { SqueezeType } from "./types/app"

const filterByValue = (array: SqueezeType[], string: string) => {
  const tmpString = string.toLowerCase()
  const filtered = array.filter(item => {
    return item.id.toString().toLowerCase().includes(tmpString)
      || item.short.toLowerCase().includes(tmpString)
      || item.target.toLowerCase().includes(tmpString)
      || item.counter.toString().includes(tmpString)
  })
  return filtered
}

export { filterByValue }
