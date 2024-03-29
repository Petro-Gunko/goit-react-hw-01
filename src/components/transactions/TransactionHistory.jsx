import css from './TransactionHistory.module.css'
export default function TransactionHistory({items}) {
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
          {items.map((item) => (
            <tr key={item.id}>
              <td className={css.tableStyle}>{item.type}</td>
              <td className={css.tableStyle}>{item.amount}</td>
              <td className={css.tableStyle}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}