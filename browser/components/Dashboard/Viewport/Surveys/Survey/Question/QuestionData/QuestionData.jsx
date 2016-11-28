import React, { PropTypes } from 'react';
import EmojiData from './EmojiData/EmojiData.jsx';

const QuestionData = ({ type, responses }) => (
  <div>
    {responses.length === 0 && 'No responses.'}
    {responses .length > 0 && type==='emoji' && <EmojiData responses={responses} />}
  </div>
);

QuestionData.propTypes = {
  type: PropTypes.string.isRequired,
  responses: PropTypes.array.isRequired,
};

export default QuestionData;
