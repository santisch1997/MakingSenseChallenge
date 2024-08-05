import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ToggleButton = styled.div`
  position: relative;
  width: 40px;
  height: 25px;
  background: ${({ theme }) => theme.toggle};
  border-radius: 15px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  padding: 0 5px;

  @media (max-width: 768px) {
    width: 40px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 18px;
  }
`;

export const ToggleCircle = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.mode === 'light' ? '3px' : 'calc(100% - 23px)'};
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.mode === 'light' ? 'white' : 'hsl(230, 17%, 14%)'};
  border-radius: 50%;
  transform: translateY(-50%);
  transition: left 0.3s, background 0.3s;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    left: ${({ theme }) => theme.mode === 'light' ? '2px' : 'calc(100% - 18px)'};
  }

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    left: ${({ theme }) => theme.mode === 'light' ? '2px' : 'calc(100% - 15px)'};
  }
`;

export const ToggleText = styled.span`
  margin-right: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.text2};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-right: 6px;
    white-space: nowrap; 
    margin-bottom: 5px;
  }
`;
