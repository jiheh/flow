export const convertSurveyDates = (surveys) => {
  return surveys
}


export const fitSurveyDates = (responses) => {
  return surveys
}

export const generateSurveyBounds = (surveyBounds) => {
  const boundsObject = {}
  surveyBounds.forEach(e => {
    const timeStampedElement = convertToTimestamp(regexMagic(e))
    boundsObject[timeStampedElement.toString()] = []
  })
  
  return boundsObject
}

const regexMagic = (str) => {
  str = str.replace("T",',')
	str = str.replace("Z",'')
	return str.split(/[\s,:,-]+/)
}

const convertToTimestamp = (arr) => {
  arr = arr.map(e => parseInt(e))
  const timeStamp = Date.parse(new Date(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]))
  return timeStamp
}