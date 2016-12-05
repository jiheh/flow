//Still working on this

const generateSurveyBounds = (surveyBounds) => {
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

const generateTimeStamp = (str) => {
	return convertToTimestamp(regexMagic(str))
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

const responses = [{
    created_at: "2016-12-04T23:50:05.291Z",
    id: 26,
    question_id: 4,
    updated_at: "2016-12-04T23:50:06.465Z",
    user_id: 10,
    value: "Very Proficient"
  },{
    created_at: "2016-12-04T23:00:05.291Z",
    id: 26,
    question_id: 4,
    updated_at: "2016-12-04T23:50:06.465Z",
    user_id: 10,
    value: "Very Proficient"
}]

const fittingAlgo = (responses, objectBounds) => {
	responses.forEach((e,idx) => {
		let first = responses[idx]
		let firstTimeStamp = generateTimeStamp(first['created_at'])
		const timeBounds = Object.keys(objectBounds).map(e => parseInt(e))
		let added = false
		
		for(var i = 0; i < timeBounds.length - 1; i++){
			if(firstTimeStamp > timeBounds[i] && firstTimeStamp < timeBounds[i + 1]){
				objectBounds[timeBounds[i].toString()].listOfValues.push(first)
				added = true
			}
			else if(i === timeBounds.length -2 && !added) objectBounds[timeBounds[i].toString()].listOfValues.push(first)
		}
	})

}
