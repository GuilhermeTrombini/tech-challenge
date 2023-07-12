import { useEffect, useState } from "react";
import io from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

export const useClientConnection = () => {
  const [client, setClient] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.on("client-connected", (client) => client && setClient(client));

    socket.on("market-data", (data) =>
      setTableData((prev) => [...prev, { ...data }])
    );

    return () => socket.disconnect();
  }, []);

  return { client, tableData };
};
