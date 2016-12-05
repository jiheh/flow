//Still working on this

export const generateSurveyBounds = (surveyBounds) => {
  const boundsObject = {}
  surveyBounds.forEach(e => {
    const timeStampedElement = generateTimeStamp(e)
    boundsObject[timeStampedElement.toString()] = {
   		finalValue:[],
  		listOfValues:[]
    }
  })
  
  return boundsObject
}

export const generateTimeStamp = (str) => {
  return Date.parse(str)
}



export const fittingAlgo = (responses, objectBounds) => {
	responses.forEach((e,idx) => {
		let first = responses[idx]
		let firstTimeStamp = generateTimeStamp(first['created_at'])
		const timeBounds = Object.keys(objectBounds).map(e => parseInt(e))
		let added = false
		
		for(var i = 0; i < timeBounds.length - 1; i++){
			if(firstTimeStamp > timeBounds[i] && firstTimeStamp < timeBounds[i + 1]){
				objectBounds[timeBounds[i].toString()].listOfValues.push(first)
				added = true
        break;
			}
			else if(i === timeBounds.length -2 && !added) objectBounds[timeBounds[i].toString()].listOfValues.push(first)
		}
	})

}

export const convertToRealDate = (timestamp) => {
  console.log('timestamp',timestamp)
  let date = new Date(timestamp)	
  return date.toString().split(' ').slice(1).slice(0,3).join(' ')
}

export const generateData = (surveyBounds,responses) => {
  let globalObj = generateSurveyBounds(surveyBounds)
  fittingAlgo(responses,globalObj)
  return globalObj
}

export const doAverage = (objectBounds) => {
   //
} 

export const convertData = (obj) => {
  let data = []
	let keys = Object.keys(obj)
	for(var i in keys){
		let time = keys[i]
		let responses = obj[time].listOfValues[0]
		if(responses) responses = responses.value
		// console.log('time',convertToRealDate(parseInt(time)),' value',responses)
		if(responses) data.push({time:convertToRealDate(parseInt(time)),response:responses})
		else data.push({time:convertToRealDate(parseInt(time))})
	}
	return data.slice(0,data.length-1)
}



// {generateSurveyBounds, generateTimeStamp, regexMagic, convertToTimestamp, fittingAlgo, convertToRealDate, generateData, doAverage }


