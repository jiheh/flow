const User = require('../user/user.model');
const Chance = require('chance');
const chance = new Chance();
const Promise = require('bluebird');
const Response = require('../response/response.model');

const createResponses = () =>{

  console.log(`Generating responses for all user questions`);

  return User.findAll()
    .then(allUsers => { // find all users
      return Promise.map(allUsers, (singleUser => { // for each user
        return singleUser.getSurveys() // get all the user's surveys
          .then(allSurveysFromThisSingleUser => {
            return Promise.map(allSurveysFromThisSingleUser, (singleSurvey => { // look at each survey
              if (singleSurvey.id !== 1) {
                return singleSurvey.getQuestions() // and get its questions
                  .then(allQuestionsFromSingleSurvey => {
                    return Promise.map(allQuestionsFromSingleSurvey, (question => {
                      // and now iterate through every user's question, and come up with
                      // a randomly generated response to each question
                      // this response needs to be associated with both a user and a question
                      const questionType = question.type;
                      let randomlyGeneratedResponse;
                      let possibleResponseArray;

                      switch (questionType) {

                        case 'multiple_choice':
                          // what are the possible response options for this MC question?
                          possibleResponseArray = question.responseOptions;
                          // randomly pick one of those
                          randomlyGeneratedResponse = chance.pickone(possibleResponseArray);

                          return Response.create({value: randomlyGeneratedResponse})
                            .then(newlyCreatedResponse => {
                              return Promise.all([  newlyCreatedResponse.setUser(singleUser),
                                newlyCreatedResponse.setQuestion(question)])
                            })
                          break;
                        case 'emoji':
                          // what are the possible response options for this MC question?
                          possibleResponseArray = ['happy','neutral','sad'];
                          // randomly pick one of those
                          randomlyGeneratedResponse = chance.pickone(possibleResponseArray);

                          return Response.create({value: randomlyGeneratedResponse})
                            .then(newlyCreatedResponse => {
                              return Promise.all([  newlyCreatedResponse.setUser(singleUser),
                                newlyCreatedResponse.setQuestion(question)])
                            })
                          break;


                        case 'slider':
                          let min = question.responseOptions[0],
                              max = question.responseOptions[1];

                          randomlyGeneratedResponse = chance.integer({min, max});

                          return Response.create({value: randomlyGeneratedResponse})
                            .then(newlyCreatedResponse => {
                              return Promise.all([  newlyCreatedResponse.setUser(singleUser),
                                newlyCreatedResponse.setQuestion(question)])
                            })

                          break;


                        case 'text':
                          possibleResponseArray = ['Free Harambe', 'The Quick Brown Fox', 'Che Gelida Manina'];
                          randomlyGeneratedResponse = chance.pickone(possibleResponseArray);

                          return Response.create({value: randomlyGeneratedResponse})
                            .then(newlyCreatedResponse => {
                              return Promise.all([  newlyCreatedResponse.setUser(singleUser),
                                newlyCreatedResponse.setQuestion(question)])
                            })

                          break;


                        case 'binary':
                          possibleResponseArray = ['yes', 'no'];
                          randomlyGeneratedResponse = chance.pickone(possibleResponseArray);

                          return Response.create({value: randomlyGeneratedResponse})
                            .then(newlyCreatedResponse => {
                              return Promise.all([  newlyCreatedResponse.setUser(singleUser),
                                newlyCreatedResponse.setQuestion(question)])
                            })

                          break;
                      }

                    }))
                  })
              }
            }))
          })
      }))
    })
    .then(r => {
    })


}

module.exports = createResponses;
