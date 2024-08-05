// src/components/Modal.styles.js
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1000px;
  border-radius: 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ContentSection = styled.div`
  background: ${({ theme }) => theme.mode === 'light' ? 'hsl(225, 100%, 98%)' : 'hsl(232, 19%, 15%)'};
  border-radius: 20px 20px 0 0 ;
  padding: 50px 50px 30px 50px; 
  box-sizing: border-box;
  flex: 1;
`;

export const GraphSection = styled.div`
  background: ${({ theme }) => theme.mode === 'light' ? 'white' : 'hsl(230, 17%, 14%)'};
  border-radius: 0 0 20px 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.h3`
  margin: 0;
  text-align: left;
  font-size: 24px;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Username = styled.div`
  margin: 8px 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.2px;
  font-size: 11px;
  font-weight: bold;
  color: hsl(228, 34%, 70%);
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;

export const DataRow = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DataItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const DataNumber = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;
  margin: 0;
  margin-top: 22px;
`;

export const DataLabel = styled.p`
  font-size: 12px;
  margin: 0;
  text-align: left;
  font-weight: lighter;
  color: ${({ theme }) => theme.mode === 'light' ? 'hsl(230, 17%, 41%)' : 'hsl(0, 0%, 100%)'};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const DataNumber1 = styled.div`
  display: flex;
  align-items: center;
  font-size: 34px;
  margin-top: 20px;
  font-weight: bolder;
  color: ${({ theme }) => theme.mode === 'light' ? 'hsl(230, 17%, 41%)' : 'hsl(0, 0%, 100%)'};
`;

export const DataLabel1 = styled.p`
  font-size: 12px;
  margin: 0;
  margin-left: 8px;
  text-align: left;
  font-weight: lighter;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.mode === 'light' ? 'hsl(228, 34%, 66%)' : 'hsl(0, 0%, 89%)'};
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    color: ${(props) => props.theme.mode === 'light' ? 'hsl(0, 0%, 29%)' : 'hsl(228, 34%, 66%)'};
  }
`;

export const Change = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.change > 0 ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
  font-size: 12px;
  position: relative;
  width: 60px;
  height: 30px;
`;

export const ChangeArrow = styled.span`
  font-size: 12px;
`;

export const ChangeNumber = styled.span`
  font-size: 34px;
  font-weight: bolder;
  margin-left: 15px;
  position: absolute;
  left: 0;
`;
