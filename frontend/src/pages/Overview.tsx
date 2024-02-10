import { Box } from "@chakra-ui/react";
import { RecentActivities, StatCount } from "../components";

const Overview = () => {
  return (
    <Box>
      <StatCount />
      <RecentActivities />
    </Box>
  );
};

export default Overview;
