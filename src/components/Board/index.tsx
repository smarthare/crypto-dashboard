import { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  useTheme,
} from "@mui/material";

import { PriceContext } from "contexts/PriceContext";
import { OrderByEnum, OrderDirType } from "types/crypto";
import BoardRow from "./BoardRow";

import { StyledBoard } from "./styles";

const boardCells = [
  { label: "#", key: OrderByEnum.RANK, width: "10%", disable: false },
  { label: "Coin", key: OrderByEnum.ID, width: "", disable: false },
  { label: "Price", key: OrderByEnum.PRICE, width: "15%", disable: false },
  {
    label: "24h Volume",
    key: OrderByEnum.VOLUME,
    width: "15%",
    disable: false,
  },
  { label: "Mkt Cap", key: OrderByEnum.CAP, width: "15%", disable: false },
  { label: "Last 7 days", key: "price_chart", width: "15%", disable: true },
];

const Board = () => {
  const { prices, setParams } = useContext(PriceContext);
  const theme = useTheme();

  const [orderBy, setOrderBy] = useState<string>(OrderByEnum.CAP);
  const [orderDir, setOrderDir] = useState<OrderDirType>("desc");
  const [perPage, setPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setParams({ orderBy, orderDir, perPage, page });
  }, [setParams, orderBy, orderDir, perPage, page]);

  const handleOrder =
    (key: string): React.MouseEventHandler<HTMLAnchorElement> =>
    () => {
      key === orderBy && setOrderDir(orderDir === "desc" ? "asc" : "desc");
      setOrderBy(key);
    };

  const handlePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handlePerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={13400}
        rowsPerPage={perPage}
        page={page}
        onPageChange={handlePage}
        onRowsPerPageChange={handlePerPage}
      />
      <StyledBoard theme={theme}>
        <Table aria-label="Cryptocurrenies Price Table">
          <TableHead>
            <TableRow>
              {boardCells.map((boardCell) => (
                <TableCell
                  key={boardCell.key}
                  width={boardCell.width}
                  sortDirection={orderBy === boardCell.key ? "asc" : false}
                >
                  <TableSortLabel
                    active={orderBy === boardCell.key}
                    direction={
                      orderBy === OrderByEnum.RANK
                        ? orderDir === "asc"
                          ? "desc"
                          : "asc"
                        : orderBy === boardCell.key
                        ? orderDir
                        : "asc"
                    }
                    onClick={handleOrder(boardCell.key)}
                    disabled={boardCell.disable}
                  >
                    {boardCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {prices &&
              prices.map((price) => (
                <BoardRow price={price} key={`key-cypto-${price.id}-price`} />
              ))}
          </TableBody>
        </Table>
      </StyledBoard>
    </>
  );
};

export default Board;
