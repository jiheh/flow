import React, { PropTypes } from 'react';
import { TagCloud } from 'react-tagcloud';

import _ from 'lodash';

const responsesToData = (responses) => {
  const words = _.flatten(responses.map((response) => response.value.split(' ')));

  const result = {};

  words.forEach((word) => {
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  });

  console.log(result);
  return Object.keys(result).map((word) => ({
    value: word,
    count: result[word],
  }));
};

const TextData = ({ responses }) => (
  <TagCloud
    minSize={12}
    maxSize={35}
    tags={responsesToData(responses)}
  />
);

TextData.propTypes = {
  responses: PropTypes.array.isRequired,
};

export default TextData;
