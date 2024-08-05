import React, { useState } from 'react';
import styled from 'styled-components';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';
import Modal from '../Modal/Modal';

const Card = styled.div`
  background: ${(props) => props.theme.cardBg};
  border-radius: 10px;
  padding: 20px;
  flex: 1 1 calc(20% - 20px); 
  width: 100%; 
  box-sizing: border-box;
  text-align: center;
  transition: background 0.3s;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.cardBgHover}; 
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${(props) => props.lineColor};
    border-radius: 10px 10px 0 0;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin:10px
  }
`;
const Username = styled.div`
  margin: 8px 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.2px;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.mode === 'light' ? 'hsl(230, 17%, 40%)' : 'hsl(227, 47%, 76%)'};
  display: flex;
  align-items: center;
  justify-content: center;

@media (max-width: 480px) {
      font-size: 9px;

  }
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;

const Followers = styled.p`
  font-size: 55px;
  font-weight: bold;
  margin: 0; 


  @media (max-width: 480px) {
    font-size: 35px;
  font-weight: bold; 
  }

`;

const FollowersLabel = styled.p`
  font-size: 10px; 
  letter-spacing: 4px;
  color: ${(props) => props.theme.mode === 'light' ? 'hsl(230, 17%, 50%)' : 'hsl(0, 0%, 70%)'};
  margin: 0; 
  font-weight: 500;

 
  @media (max-width: 480px) {
    font-size: 8px;
      letter-spacing: 3px;
      

  font-weight: bold; 
  }
`;

const Change = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.change > 0 ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
  font-size: 11px; 
  margin-top: 20px; 
  font-weight:600;
`;

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
