import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import { useMemo, useState } from "react";
import { stableSort } from "../../utils/stableSort";

export const DataTable = ({ rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, rows]
  );
  return (
    <TableContainer style={{ marginTop: "20px" }} component={Paper}>
      <Table
        stickyHeader
        sx={{ maxHeight: 440 }}
        size="small"
        aria-label="data table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Account Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Currency Name</TableCell>
            <TableCell>Transaction Type</TableCell>
            <TableCell>Transaction Description</TableCell>
            <TableCell>Credit Card Number</TableCell>
            <TableCell>Credit Card Issuer</TableCell>
            <TableCell>Credit Card Cvv</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows?.map((row) => (
            <TableRow
              key={`${row.name}-${row.account_name}-${row.amount}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.account_name}
              </TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.currency_name}</TableCell>
              <TableCell>{row.transaction_type}</TableCell>
              <TableCell>{row.transaction_description}</TableCell>
              <TableCell>{row.credit_card_number}</TableCell>
              <TableCell>{row.credit_card_issuer}</TableCell>
              <TableCell>{row.credit_card_cvv}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow
              style={{
                height: 53 * emptyRows,
              }}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
