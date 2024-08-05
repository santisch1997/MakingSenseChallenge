import React from 'react';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';
import { Card, Line1, Line2, Metric, MetricValue, Change, Icon } from './MetricCard.styles';

const MetricCard = ({ platform, metricLabel, metricValue, change }) => {
  const icons = {
    Facebook: facebookIcon,
    Twitter: twitterIcon,
    Instagram: instagramIcon,
    YouTube: youtubeIcon,
  };

  return (
    <Card>
      <Line1>
        <Metric>{metricLabel}</Metric>
        <Icon src={icons[platform]} alt={`${platform} icon`} />
      </Line1>
      <Line2>
        <MetricValue>{metricValue}</MetricValue>
        <Change change={change}>
          {change > 0 ? '▲' : '▼'} {Math.abs(change)}%
        </Change>
      </Line2>
    </Card>
  );
};

export default MetricCard;
