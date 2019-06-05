import React from 'react';
import { FlatList } from 'react-native';

import QuestionsItem from '../qItem';

const QuestionsList = (props) => {
  const { questions } = props;
  console.log('Check', questions)
  return (
        <FlatList
            style={{width: '100%', marginTop: 25, backgroundColor: '#191970', paddingTop: 35}}
            data={questions.items}
            renderItem={info => (
                <QuestionsItem
                    item = {info.item}
                />
            )}
        />
  );
};

export default QuestionsList;