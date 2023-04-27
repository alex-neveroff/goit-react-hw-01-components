import styled from '@emotion/styled';

export const Transactions = styled.table`
  width: 750px;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const TitleCintainer = styled.thead`
  height: 30px;
  background-color: #9400d3;
`;
export const Title = styled.tr`
  text-transform: uppercase;
`;
export const TitleItem = styled.th`
  width: 250px;
`;

export const DataCintainer = styled.tbody``;

export const Data = styled.tr`
  height: 30px;
  text-transform: capitalize;
  background-color: ${({ DataType }) => {
    switch (DataType) {
      case 'deposit':
        return '#87CEFA';
      case 'invoice':
        return '#98FB98';
      case 'withdrawal':
        return '#FFDAB9';
      case 'payment':
        return '#E6E6FA';
      default:
        return 'white';
    }
  }};
`;

export const DataItem = styled.td`
  width: 250px;
  padding-left: 100px;
`;
