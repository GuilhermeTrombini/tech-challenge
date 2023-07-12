import { Container } from "@mui/material";
import React, { useState } from "react";
import SearchInput from "../components/atoms/SearchInput";
import { DataTable } from "../components/molecules/DataTable";
import { useClientConnection } from "../hooks/useClientConnection";

const Table = () => {
  const { tableData } = useClientConnection();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = tableData.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Container style={{ paddingTop: "30px" }}>
      <SearchInput
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <DataTable rows={filteredData} />
    </Container>
  );
};

export default Table;
