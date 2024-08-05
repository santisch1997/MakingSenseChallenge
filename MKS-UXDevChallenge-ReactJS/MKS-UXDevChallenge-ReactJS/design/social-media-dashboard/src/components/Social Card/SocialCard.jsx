import React, { useState } from 'react';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';
import Modal from '../Modal/Modal';
import { Card, Username, Icon, Followers, FollowersLabel, Change } from './SocialCard.styles';

const SocialCard = ({ platform, username, followers, change, changeToday, change10Days, label }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const icons = {
    Facebook: facebookIcon,
    Twitter: twitterIcon,
    Instagram: instagramIcon,
    YouTube: youtubeIcon,
  };

  const lineColor = {
    Facebook: 'hsl(195, 100%, 50%)',
    Twitter: 'hsl(203, 89%, 53%)',
    Instagram: 'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
    YouTube: 'hsl(348, 97%, 39%)',
  }[platform];

  return (
    <>
      <Card lineColor={lineColor} onClick={() => setIsModalOpen(true)}>
        <Username>
          <Icon src={icons[platform]} alt={`${platform} icon`} />
          @{username}
        </Username>
        <Followers>{followers}</Followers>
        <FollowersLabel>{label || 'FOLLOWERS'}</FollowersLabel> {/* Condicional */}
        <Change change={change}>
          {change > 0 ? '▲' : '▼'} {Math.abs(change)} Today 
        </Change>
      </Card>
      {isModalOpen && (
        <Modal
          platform={platform}
          username={username}
          followers={followers}
          changeToday={changeToday}
          change10Days={change10Days}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default SocialCard;
