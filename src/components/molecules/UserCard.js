import { Card, CardContent } from "@mui/material";
import { STypography } from "../atoms/Typography";

const UserCard = ({ user }) => {
  if (!user) {
    return (
      <Card>
        <CardContent>
          <STypography variant="h5" component="div" gutterBottom>
            There's no one client connected at moment
          </STypography>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardContent>
        <STypography variant="body1" align="right">
          {user.client_id}
        </STypography>
        <STypography variant="h5" gutterBottom>
          {user.first_name}
        </STypography>
        <STypography variant="h6">{user.job}</STypography>
        <STypography variant="body1">{user.job_descriptor}</STypography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
