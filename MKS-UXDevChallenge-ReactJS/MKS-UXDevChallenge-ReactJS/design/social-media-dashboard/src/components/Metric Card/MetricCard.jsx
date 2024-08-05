import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';

const Card = styled.div`
  background: ${(props) => props.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  flex: 1 1 calc(20% - 20px);
  width: 250px;
  box-sizing: border-box;
  text-align: center;
  transition: background 0.3s;
  position: relative;
  height: 115px; 

  &:hover {
    background: ${(props) => props.theme.cardBgHover};
  }

  &::before {   //puse una pseudo elemento para ubicar la linea de color arriba de las cards,
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${(props) => props.lineColor};
    border-radius: 10px 10px 0 0;

    
  }
`;

const Line1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  color: hsl(230, 17%, 55%);
  font-weight: bold;
`;

const Line2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  font-weight: bold;
`;

const Metric = styled.p`
  margin: 0;
  font-size: 14px;
`;

const MetricValue = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: bold;
`;

const Change = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.change > 0 ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
  font-size: 11px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

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
