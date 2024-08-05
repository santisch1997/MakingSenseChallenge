import styled from 'styled-components';

export const Card = styled.div`
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
`;

export const Line1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  color: hsl(230, 17%, 55%);
  font-weight: bold;
`;

export const Line2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  font-weight: bold;
`;

export const Metric = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const MetricValue = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: bold;
`;

export const Change = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.change > 0 ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
  font-size: 11px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
