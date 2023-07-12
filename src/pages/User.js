import { Container } from "@mui/material";
import { useClientConnection } from "../hooks/useClientConnection";
import UserCard from "../components/molecules/UserCard";

const User = () => {
  const { client: user } = useClientConnection();

  return (
    <Container style={{ paddingTop: "30px" }}>
      <UserCard user={user} />
    </Container>
  );
};

export default User;
