import React from "react";
import { Stack, Typography } from "@mui/material";
import Bbps_One from "./Bbps_One";
import Bbps_Two from "./Bbps_Two";
import { useSnackbar } from "notistack";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate } from "react-router";
import RoleBasedGuard from "src/auth/RoleBasedGuard";
// ----------------------------------------------------------------------

//--------------------------------------------------------------------

export default function BillPayment(props: any) {
  const { enqueueSnackbar } = useSnackbar();

  const [currentTab, setCurrentTab] = React.useState("bbps1");

  const navigate = useNavigate();

  return (
    <>
      {/* <Box sx={{ width: '100%' }}>
        <Tabs
          value={currentTab}
          onChange={(event: React.SyntheticEvent, newValue: string) => setCurrentTab(newValue)}
          aria-label="basic tabs example"
        >
          <Tab value={'bbps1'} label={<Typography>BBPS 1</Typography>} />
          <Tab value={'bbps2'} label={<Typography>BBPS 2</Typography>} />
        </Tabs>
      </Box> */}
      <RoleBasedGuard hasContent roles={["agent"]}>
        <Stack flexDirection="row" alignItems={"center"} gap={1}>
          <ArrowBackIosNewOutlinedIcon
            onClick={() => navigate(-1)}
            sx={{
              height: "25px",
              width: "25px",
              cursor: "pointer",
            }}
          />
          <Typography variant="h4">Bill Payment</Typography>
        </Stack>
        <Bbps_One />
      </RoleBasedGuard>
      {/* {currentTab == 'bbps1' ?  : null} */}
    </>
  );
}

// ----------------------------------------------------------------------
