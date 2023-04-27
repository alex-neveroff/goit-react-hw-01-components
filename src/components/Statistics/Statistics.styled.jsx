import styled from '@emotion/styled';

export const StatsTable = styled.section`
  margin-bottom: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 100px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 60px;
  height: 100px;
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
`;

export const Label = styled.span`
  font-size: 14px;
  color: #ffffff;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;
