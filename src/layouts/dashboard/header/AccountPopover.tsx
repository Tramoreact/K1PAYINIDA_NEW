import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, Divider, Typography, Stack, MenuItem } from "@mui/material";
// routes
import { PATH_AUTH } from "../../../routes/paths";
// auth
import { useAuthContext } from "../../../auth/useAuthContext";
// components
import { CustomAvatar } from "../../../components/custom-avatar";
import { useSnackbar } from "../../../components/snackbar";
import MenuPopover from "../../../components/menu-popover";
import { IconButtonAnimate } from "../../../components/animate";
import { AwsDocSign } from "src/components/customFunctions/AwsDocSign";
import { sentenceCase } from "change-case";
import { fDateTime } from "src/utils/formatTime";

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: "Profile",
    linkTo: "/auth/userprofilepage",
  },
  {
    label: "Settings",
    linkTo: "/auth/setting",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();

  const { user, logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleLogout = async () => {
    try {
      logout();
      navigate(PATH_AUTH.login, { replace: true });
      handleClosePopover();
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Unable to logout!", { variant: "error" });
    }
  };

  const handleClickItem = (path: string) => {
    handleClosePopover();
    navigate(path);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          ...(openPopover && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <CustomAvatar
          src={user?.selfie[0]}
          alt={user?.firstName}
          name={user?.firstName}
        />
      </IconButtonAnimate>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        sx={{ width: 230, p: 0 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap textOverflow={"ellipsis"}>
            {user?.firstName + " " + user?.lastName}
          </Typography>
          <Typography variant="subtitle2" noWrap textOverflow={"ellipsis"}>
            {sentenceCase(user?.role)}{" "}
            <Typography
              component={"span"}
              variant="body2"
              style={{ color: "text.secondary" }}
            >
              ({user?.userCode})
            </Typography>
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            Reffered By{" "}
            <Typography component={"span"} variant="body2">
              {user?.referralCode}
            </Typography>
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => handleClickItem(option.linkTo)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
