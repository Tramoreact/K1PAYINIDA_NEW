import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// @mui
import {
  Box,
  Typography,
  Stack,
  Drawer,
  Button,
  Card,
  Divider,
} from "@mui/material";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// config
import { NAV } from "../../../config";
// components
import Logo from "../../../components/logo";
import Scrollbar from "../../../components/scrollbar";
import { NavSectionVertical } from "../../../components/nav-section";
//
import NavConfig from "./config";
import NavAccount from "./NavAccount";
import { useAuthContext } from "src/auth/useAuthContext";
import Label from "src/components/label/Label";
import { fIndianCurrency } from "src/utils/formatNumber";
import { CustomAvatar } from "src/components/custom-avatar";
import { sentenceCase } from "change-case";
import { ProfileCover } from "src/sections/profile";

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { pathname } = useLocation();
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const isDesktop = useResponsive("up", "lg");

  const walletStyle = {
    textTransform: "capitalize",
    borderColor: "primary",
    borderRadius: 8,
    borderWidth: "2px",
    borderStyle: "solid",
  };

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isTablet = useResponsive("up", "sm");

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Stack
        spacing={1}
        sx={{
          py: 1,
          px: 2.5,
          flexShrink: 0,
        }}
      >
        <Logo />

        {!isTablet && (
          <>
            <NavAccount />
            <Label variant="soft" color={"primary"} sx={walletStyle}>
              {`main wallet = ${
                fIndianCurrency(user?.main_wallet_amount) || 0
              }`}
            </Label>
            <Label variant="soft" color={"warning"} sx={walletStyle}>
              {`AEPS wallet = ${
                fIndianCurrency(user?.AEPS_wallet_amount) || 0
              }`}
            </Label>
          </>
        )}
      </Stack>

      <Card
        sx={{
          borderRadius: "5px",
          boxShadow: "3",
          m: 0.5,
          bgcolor: "primary",
        }}
      >
        <Stack flexDirection="row" gap={1} p={2}>
          <CustomAvatar
            name={user?.firstName ? user?.lastName : ""}
            alt={user?.firstName}
            src={user?.firstName && user?.selfie[0]}
          />
          <Stack>
            <Typography style={{ fontWeight: "bold" }}>
              {user?.firstName} {user?.lastName}
            </Typography>
            <Typography noWrap variant="body2">
              {sentenceCase(user?.role)}, {user?.userCode}
            </Typography>
          </Stack>
        </Stack>
      </Card>

      <Divider />
      <NavSectionVertical data={NavConfig} />
      <Box sx={{ flexGrow: 1 }} />
      <Button variant="contained" sx={{ m: 2 }} onClick={logout}>
        Logout
      </Button>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
              bgcolor: "transparent",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
