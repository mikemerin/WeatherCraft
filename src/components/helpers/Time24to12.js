export const Time24to12 = (time) => {

  let HH = parseInt(time.slice(0,2))
  let MM = time.slice(2,4)

  if (time === "")
    { return " " }
  else if (HH === 0)
    { return ` 12:${MM} AM` }
  else if (HH === 12)
    { return ` 12:${MM} PM` }
  else if (HH < 12)
    { return ` ${HH}:${MM} AM`}
  else
    { return ` ${HH-12}:${MM} PM` }

}
