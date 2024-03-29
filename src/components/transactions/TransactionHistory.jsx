import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export default function TransactionHistory({ items }) {
  
  return (
    <table className={css.container}>
      <thead>
        <tr className={css.headTable}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td className={clsx(css.tableStyle, index % 2 === 1 && css.backgroundColorIsGray)}>
              {item.type}
            </td>
            <td className={clsx(css.tableStyle, index % 2 === 1 && css.backgroundColorIsGray)}>
              {item.amount}
            </td>
            <td className={clsx(css.tableStyle, index % 2 === 1 && css.backgroundColorIsGray)}>
              {item.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
