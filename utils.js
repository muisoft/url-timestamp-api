const isNumber = (value) => {
  return Number.isInteger(value)
}
const isValidDate = (date) => {
  return (date instanceof Date && !(isNaN(date.valueOf())))
}
const isValidUnix = (value) => {
  let unix = value * 1000
  return  new Date(Number(unix)) != "Invalid Date"
}

const toNaturalDate = (date) => {
	let options = {month: 'long', day: 'numeric', year: 'numeric'}
	return Intl.DateTimeFormat('en-US', options).format(new Date(date))
}
const toUnixDate = (date) => {
	return Math.round(new Date(date).getTime() / 1000)
}

module.exports = (date) => {
   let unix = null, natural = null;
   if(isNumber(Number(date)) && isValidUnix(date)){
       unix = Number(date)
       natural = toNaturalDate(date * 1000)
   } else {
    if (isValidDate(new Date(date))) {
       unix = toUnixDate(date)
       natural = toNaturalDate(date)
	}
   }
   return {
    "unix": unix,
    "natural": natural
  }
}
