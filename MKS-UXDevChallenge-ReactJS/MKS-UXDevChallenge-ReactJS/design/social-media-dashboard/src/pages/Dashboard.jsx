import React, { useState } from 'react';
import styled from 'styled-components';
import SocialCard from '../components/Social Card/SocialCard';
import MetricCard from '../components/Metric Card/MetricCard';
import Modal from '../components/Modal/Modal';
import Toggle from '../components/Toggle Button/ToggleButton';

const DashboardContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 100px;
  box-sizing: border-box;
  background: ${({ theme }) =>
    theme.mode === 'light'
      ? 'linear-gradient(to bottom, hsl(225, 100%, 98%) 30%, hsl(0, 0%, 100%) 30%)'
      : 'linear-gradient(to bottom, hsl(232, 19%, 15%) 30%, hsl(230, 17%, 14%) 30%)'};
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 25px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0 10px; // Agrega un poco de padding para evitar que el contenido toque los bordes
  }
`;


const Title = styled.h1`
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;

  @media (max-width: 480px) {
    font-size: 22px;
    text-align: left;
    margin-bottom: 0;
  }
`;


const Title2 = styled.h3`
  margin: 0;
  font-size: 24px;
  color: ${(props) => props.theme.mode === 'light' ? 'hsl(230, 17%, 40%)' : 'hsl(0, 0%, 89%)'};

  @media (max-width: 480px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const StyledTotalFollowers = styled.p`
  margin: 5px 0 0 0;
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: bold;
  color: hsl(0, 0%, 50%);

  @media (max-width: 480px) {
    width: 100%;
    text-align: left;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const MetricCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center; // Centra horizontalmente
    gap: 20px;
  }
`;
const Dashboard = ({ toggleTheme, theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedUsername, setSelectedUsername] = useState('');
  const [selectedFollowers, setSelectedFollowers] = useState(0);
  const [changeToday, setChangeToday] = useState(0);
  const [change10Days, setChange10Days] = useState(0);

  const handleCardClick = (platform, username, followers, changeToday, change10Days) => {
    setSelectedPlatform(platform);
    setSelectedUsername(username);
    setSelectedFollowers(followers);
    setChangeToday(changeToday);
    setChange10Days(change10Days);
    setIsModalOpen(true);
  };

  return (
    <DashboardContainer>
      <Header>
        <div>
          <Title>Social Media Dashboard</Title>
          <StyledTotalFollowers>Total Followers: 23,004</StyledTotalFollowers>
        </div>
        <Toggle onClick={toggleTheme} theme={theme} />
      </Header>
      <CardsContainer>
        <SocialCard 
          platform="Facebook" 
          username="nathanf" 
          followers={1987} 
          change={12}
          changeToday={12} 
          change10Days={81} 
          onClick={() => handleCardClick('Facebook', 'nathanf', 1987, 81, -5)} 
          label="FOLLOWERS"
        />
        <SocialCard 
          platform="Twitter" 
          username="nathanf" 
          followers={1044} 
          change={99}
          changeToday={80} 
          change10Days={-10} 
          onClick={() => handleCardClick('Twitter', 'nathanf', 1044, 99, -10)} 
          label="FOLLOWERS"
        />
        <SocialCard 
          platform="Instagram" 
          username="realnathanf" 
          followers={"11K"}
          change={1099} 
          changeToday={73} 
          change10Days={3} 
          onClick={() => handleCardClick('Instagram', 'realnathanf', '11K', 1099, -200)} 
          label="FOLLOWERS"
        />
        <SocialCard 
          platform="YouTube" 
          username="Nathan F." 
          followers={8239} 
          change={-144} 
          changeToday={-14} 
          change10Days={25} 
          onClick={() => handleCardClick('YouTube', 'Nathan F.', 8239, -144, -25)} 
          label="SUBSCRIBERS"
        />
      </CardsContainer>
      <Header>
        <div>
          <Title2>Overview - Today</Title2>
        </div>
      </Header>
      <MetricCardsContainer>
        <MetricCard platform="Facebook" metricLabel="Page Views" metricValue="87" change={3} />
        <MetricCard platform="Facebook" metricLabel="Likes" metricValue="52" change={-2} />
        <MetricCard platform="Instagram" metricLabel="Likes" metricValue="5462" change={2257} />
        <MetricCard platform="Instagram" metricLabel="Profile Views" metricValue="52k" change={1375} />
        <MetricCard platform="Twitter" metricLabel="Retweets" metricValue="117" change={303} />
        <MetricCard platform="Twitter" metricLabel="Likes" metricValue="507" change={553} />
        <MetricCard platform="YouTube" metricLabel="Likes" metricValue="107" change={-19} />
        <MetricCard platform="YouTube" metricLabel="Total Views" metricValue="1407" change={-12} />
      </MetricCardsContainer>
      {isModalOpen && (
        <Modal
          platform={selectedPlatform}
          username={selectedUsername}
          followers={selectedFollowers}
          changeToday={changeToday}
          change10Days={change10Days}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
