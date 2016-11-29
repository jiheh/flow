// this file contains surveys and their associated questions.
// there are 5 types of questions:
  // 'multiple_choice',   custom responseOptions
  // 'emoji',             no responseOptions
  // 'slider',            custom responseOptions (min, max)
  // 'text',              no responseOptions
  // 'binary',            no responseOptions

// responseOptions are stringified JSON objects

const shuffle = (array) => {
  var random = array.map(Math.random);
  array.sort(function(a, b) {
    return random[a] - random[b];
  });
}

const createSurveyData = (numberOfSurveysToCreate, adminID, channelID) => {

  // survey bank
  let allSurveys = [

    {
      name: "Yale College Wellbeing Check-in",
      description: "This survey is a daily mood check-in to see how you're doing, and " +
      "is administered by Yale Mental Health Services. For more information" +
      " please contact 6509467649. Remember, all responses are anonymous.",
      active: true,
      owner_id: adminID,
      admin_id: adminID,
      channel_id: channelID,
      questions: [
        {
          text: "How are you feeling today?",
          type: "emoji",
          responseOptions: [],
        }
      ],
    },

    {
      name: "Fullstack Academy Satisfaction Survey",
      description: "This survey is designed to see how you feel about your experience at Fullstack so far.",
      active: true,
      owner_id: adminID,
      admin_id: adminID,
      channel_id: channelID,
      questions: [
        {
          text: "How proficient are you with React?",
          type: "multiple_choice",
          responseOptions: ['Not at all', 'Somewhat', 'Decent', 'Very proficient', 'Fluent'],
        },
        {
          text: "How proficient are you with Sequelize?",
          type: "multiple_choice",
          responseOptions: ['Not at all', 'Somewhat', 'Decent', 'Very proficient', 'Fluent'],
        },
        {
          text: "How proficient are you with Node.js?",
          type: "multiple_choice",
          responseOptions: ['Not at all', 'Somewhat', 'Decent', 'Very proficient', 'Fluent'],
        },
      ],
    },

    {
      name: "Harambe Check-in",
      description: "This survey is administered by the Yale Record, to see your opinion on Harambe",
      active: true,
      owner_id: adminID,
      admin_id: adminID,
      channel_id: channelID,
      questions: [
        {
          text: "Do you think Harambe deserved its fate?",
          type: "binary",
          responseOptions: [],
        }
      ],
    },

    {
      name: "Yale Faculty Job Satisfaction Survey",
      description: "This survey is designed to learn more about how faculty feel about job satisfaction. " +
      "All responses are anonymous.",
      active: true,
      owner_id: adminID,
      admin_id: adminID,
      channel_id: channelID,
      questions: [
        {
          text: "Agree/Disagree: You feel satisfied with your job.",
          type: 'multiple_choice',
          responseOptions: ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree']
        },
        {
          text: "Agree/Disagree: You are happy with the way your career is going.",
          type: 'multiple_choice',
          responseOptions: ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree']
        },
      ]
    },

    {
      name: "Highs and Lows",
      description: "This quick activity allows you to share your highs and lows with the community! " +
      "All responses are anonymous.",
      active: true,
      owner_id: adminID,
      admin_id: adminID,
      channel_id: channelID,
      questions: [
        {
          text: "What went well today?",
          type: 'text',
          responseOptions: [],

        },
        {
          text: "What didn't go so well today?",
          type: 'text',
          responseOptions: [],
        },
      ]
    },


    // you can add your own surveys by following this format:
    {
      name: "Career Survey",
      description: "This survey is administered by the Yale Office of Career Services.",
      active: false,
      owner_id: adminID,
      admin_id: adminID,
      channel_id: channelID,
      questions: [
        {
          text: "Did you do an internship over the summer?",
          type: "binary",
          responseOptions: [],
        }
      ],
    },

  ]

  shuffle(allSurveys);

  return allSurveys.slice(0, numberOfSurveysToCreate);

}


module.exports = createSurveyData;
