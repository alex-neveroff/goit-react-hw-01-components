import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  padding-top: 30px;
  width: 250px;
  margin: 30px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  gap: 10px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  width: 120px;
  height: 120px;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #000000;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #000000;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #000000;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 250px;
  height: 80px;

  background-color: aquamarine;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #000000;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
