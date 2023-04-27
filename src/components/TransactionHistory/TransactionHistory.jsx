import PropTypes from 'prop-types';
import {
  Transactions,
  TitleCintainer,
  Title,
  TitleItem,
  DataCintainer,
  Data,
  DataItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <TitleCintainer>
        <Title>
          <TitleItem>Type</TitleItem>
          <TitleItem>Amount</TitleItem>
          <TitleItem>Currency</TitleItem>
        </Title>
      </TitleCintainer>
      <DataCintainer>
        {items.map(({ id, type, amount, currency }) => (
          <Data key={id} DataType={type}>
            <DataItem>{type}</DataItem>
            <DataItem>{amount}</DataItem>
            <DataItem>{currency}</DataItem>
          </Data>
        ))}
      </DataCintainer>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
