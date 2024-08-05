// src/components/Modal.jsx
import React from 'react';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';
import Chart from '../Chart/Chart';
import { ModalOverlay, ModalContent, ContentSection, GraphSection, Header, Username, Icon, DataRow, DataItem, DataNumber, DataLabel, DataNumber1,
   DataLabel1, CloseButton, Change, ChangeArrow, ChangeNumber } from './Modal.styles';


const Modal = ({ platform, username, followers, changeToday, change10Days, onClose }) => {
  const icons = {
    Facebook: facebookIcon,
    Twitter: twitterIcon,
    Instagram: instagramIcon,
    YouTube: youtubeIcon,
  };

  const data = [
    { name: '4', name2: '0', uv: 4000, "New Followers": 4, amt: 2400 },
    { name: '5', name2: '1', uv: 3000, "New Followers": 3, amt: 2210 },
    { name: '6', name2: '2', uv: 2000, "New Followers": 2, amt: 2290 },
    { name: '7', name2: '3', uv: 2780, "New Followers": 6, amt: 2000 },
    { name: '8', name2: '4', uv: 1890, "New Followers": 8, amt: 2181 },
    { name: '9', name2: '5', uv: 2390, "New Followers": 9, amt: 2500 },
    { name: '10', name2: '6', uv: 3490, "New Followers": 10, amt: 2100 },
    { name: '11', name2: '7', uv: 3490, "New Followers": 9, amt: 2100 },
    { name: '12', name2: '8', uv: 3490, "New Followers": 10, amt: 2100 },
    { name: '13', name2: '9', uv: 3490, "New Followers": 12, amt: 2100 },
  ];

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ContentSection>
          <Header>{platform} followers</Header>
          <Username>
            <Icon src={icons[platform]} alt={`${platform} icon`} />
            @{username}
          </Username>
          <DataRow>
            <DataItem>
              <DataNumber1>
                {followers}
                <DataLabel1>Total <br /> Followers</DataLabel1>
              </DataNumber1>
            </DataItem>
            <DataItem>
              <DataNumber>
                <Change change={change10Days}>
                  <ChangeArrow>{change10Days > 0 ? '▲' : '▼'}</ChangeArrow>
                  <ChangeNumber>{Math.abs(change10Days)}</ChangeNumber>
                </Change>
                <DataLabel>New followers in <br /> the past 10 days</DataLabel>
              </DataNumber>
            </DataItem>
            <DataItem>
              <DataNumber>
                <Change change={changeToday}>
                  <ChangeArrow>{changeToday > 0 ? '▲' : '▼'}</ChangeArrow>
                  <ChangeNumber>{Math.abs(changeToday)}</ChangeNumber>
                </Change>
                <DataLabel>New followers <br /> TODAY</DataLabel>
              </DataNumber>
            </DataItem>
          </DataRow>
        </ContentSection>
        <GraphSection>
          <Chart data={data} /> 
        </GraphSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
