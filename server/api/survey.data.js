// this file contains surveys and their associated questions.
// there are 5 types of questions:
  // 'multiple_choice',   custom responseOptions
  // 'emoji',             no responseOptions
  // 'slider',            custom responseOptions (min, max)
  // 'text',              no responseOptions
  // 'binary',            no responseOptions

// responseOptions are stringified JSON objects





const createSurveyData = (adminID, foundAdminChannelID) => ([
  {
    name: "Yale College Wellbeing Check-in",
    description:  "This survey is a daily mood check-in to see how you're doing, and " +
    "is administered by Yale Mental Health Services. For more information" +
    " please contact 6509467649. Remember, all responses are anonymous.",
    active: true,
    owner_id: adminID,
    admin_id: adminID,
    channel_id: foundAdminChannelID,
    questions: [
      {
        text: "How are you feeling today?",
        type: "emoji",
        responseOptions: null,
      }
    ],
  },

  {
    name: "Yale Faculty Job Satisfaction Survey",
    description:  "This survey is designed to learn more about how faculty feel about job satisfaction. " +
    "All responses are anonymous.",
    active: true,
    owner_id: adminID,
    admin_id: adminID,
    channel_id: foundAdminChannelID,
    questions: [
      {
        text: "Agree/Disagree: You feel satisfied with your job.",
        type: 'multiple_choice',
        responseOptions: [
          'Strongly Disagree',
          'Disagree',
          'Agree',
          'Strongly Agree',
        ],
      },
      {
        text: "Agree/Disagree: You are happy with the way your career is going.",
        type: 'multiple_choice',
        responseOptions: [
          'Strongly Disagree',
          'Disagree',
          'Agree',
          'Strongly Agree',
        ],
      },
    ]
  },

  {
    name: "Highs and Lows",
    description:  "This quick activity allows you to share your highs and lows with the community! " +
    "All responses are anonymous.",
    active: true,
    owner_id: adminID,
    admin_id: adminID,
    channel_id: foundAdminChannelID,
    questions: [
      {
        text: "What went well today?",
        type: 'text',
        responseOptions: null,
      },
      {
        text: "What didn't go so well today?",
        type: 'text',
        responseOptions: null,
      },
    ],
  },


  // you can add your own surveys by following this format:
  // {
  //   name: "Career Survey",
  //   description:  "This survey is administered by the Yale Office of Career Services.",
  //   active: true,
  //   owner_id: adminID,
  //   admin_id: adminID,
  //   channel_id: foundAdminChannelID,
  //   questions: [
  //     {
  //       text: "Did you do an internship over the summer?",
  //       type: "binary",
  //       responseOptions: null,
  //     }
  //   ],
  // },

]);

module.exports = createSurveyData;
