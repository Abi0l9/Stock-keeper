import React from "react";
import { useState } from "react";
import { options } from "../const";
import { sort, TransactionType } from "../types";
import { groupTransactionsByDate } from "../utils";
import HistoryTable from "./MUI/HistoryTable";
import { Box } from "@mui/material"
import {ArrowUpward, ArrowDownward} from '@mui/icons-material';

type Props = {
  transaction: TransactionType[];
};

function Sorter({ transaction }: Props) {
  const [selectedValue, setSelectedValue] = useState<sort>("latest");
  const groupedData = groupTransactionsByDate(transaction);

  const handleFieldSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value as sort);
  };
  const [openHistory, setOPenHistory] = useState(false);
  const style = {display: openHistory ? "": "none"}
  
  const historyIcon = openHistory ? <ArrowUpward /> : <ArrowDownward />
  
  const toggleArrow = () => setOPenHistory(!openHistory)

  return (
    <div>
      <div>
        <form>
          <span>Sort: </span>
          <select name="sort" title="sort" onChange={handleFieldSelectChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div>
        {groupedData.map((data, idx) => (
          <div key={idx}>
            <div>
              <b>{Object.keys(data)}</b>
            </div>
            <div key={idx} /*style={style}*/>
              {Object.values(data).map((trans, idxi) => (
                <Box key={idxi}>
                  <HistoryTable data={trans} selectedValue={selectedValue} />
                
                </Box>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sorter;
