import { Pagination, Stack, TablePagination } from "@mui/material";

export default function CustomPagination({ ...other }: any) {
  return (
    <Stack
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%)",
        bgcolor: "white",
      }}
    >
      <TablePagination component="div" {...other} />
    </Stack>
  );
}
