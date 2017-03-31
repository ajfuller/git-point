import React, {PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';

import LabelButton from './LabelButton';

import colors from '../config/colors';
import moment from 'moment';

const IssueListItem = (
  {
    type,
    issue,
  }
) => (
  <ListItem
    title={issue.title}
    subtitle={renderSubtitle(issue)}
    rightIcon={{
      name: type === 'issue' ? 'warning' : 'input',
      color: colors.grey,
    }}
    titleStyle={styles.title}
    underlayColor={colors.greyLight}
  />
);

const renderSubtitle = issue => (
  <View>
    <Text style={styles.subtitle}>
      <Text style={styles.subtitleText}>Opened by {issue.user.login}</Text>
      {'  '}
      <Text style={styles.subtitleDate}>
        {moment(issue.created_at).fromNow()}
      </Text>
    </Text>
    <View style={styles.labelButtonGroup}>
      {renderLabelButtons(issue.labels)}
    </View>
  </View>
);

const renderLabelButtons = labels => {
  return labels
    .slice(0, 3)
    .map((label, i) => <LabelButton key={i} label={label} />);
};

IssueListItem.propTypes = {
  type: PropTypes.string,
  issue: PropTypes.object,
};

const styles = StyleSheet.create({
  title: {
    color: colors.primarydark,
    fontFamily: 'AvenirNext-DemiBold',
  },
  subtitle: {
    marginLeft: 10,
  },
  subtitleText: {
    color: colors.primaryDark,
    fontFamily: 'AvenirNext-Regular',
  },
  subtitleDate: {
    color: colors.greyDark,
    fontFamily: 'AvenirNext-Regular',
  },
  labelButtonGroup: {
    marginLeft: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default IssueListItem;