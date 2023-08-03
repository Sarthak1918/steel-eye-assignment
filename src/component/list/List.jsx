import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows,timestampsArray }) => {
  const newRows =   rows.map((row)=>{
    let stampItem = timestampsArray.find((item)=>{
     return row['&id'] === item['&id']
    })
   row.orderSubmitted = stampItem.timestamps.orderSubmitted;
   return row;
   })
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {
        newRows.map((row) => (
          <ListRow>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.USD}</ListRowCell>
          </ListRow>
        ))
        }
      </tbody>
    </table>
  );
};

export default List;
