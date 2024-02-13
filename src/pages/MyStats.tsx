import { Helmet } from "react-helmet-async";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  CardContent,
  Box,
  Stack,
  Card,
  Divider,
} from "@mui/material";

// components
// sections
import StatsWebsiteVisits from "../sections/MyStats/StatsWebsiteVisits";
import { Api } from "src/webservices";
import AppCurrentDownload from "../sections/MyStats/AppCurrentDownload";
import Group321 from "../assets/icons/Group 321.svg";
import Group320 from "../assets/icons/Group 320.svg";
import Frame10 from "../assets/icons/Frame 10.svg";
import Frame9 from "../assets/icons/Frame 9.svg";
import isolationMode from "../assets/icons/Isolation_Mode.svg";
import intersect from "../assets/icons/Intersect.png";
import Framegreen from "../assets/icons/Frame green.svg";
import Frameorange from "../assets/icons/Frame orange.svg";
import Graphgreen from "../assets/icons/Graph green.svg";
import Graphorange from "../assets/icons/Graph orange.svg";
import { useEffect, useState } from "react";
import { fCurrency } from "src/utils/formatNumber";
import SvgColor from "src/components/svg-color";
import { useNavigate } from "react-router-dom";
import Recharge from "../assets/services/Recharge.svg";
import MoneyTransfer from "../assets/services/MoneyTransfer.svg";
import DMT1 from "../assets/services/DMT1.svg";
import DMT2 from "../assets/services/DMT2.svg";
import BillPayment from "../assets/services/BillPayment.svg";
import AEPS from "../assets/services/AEPS.svg";
import MATM from "../assets/services/MATM.svg";
import AadharPay from "../assets/services/AadharPay.svg";
import IndoNepal from "../assets/services/IndoNepal.svg";
// ----------------------------------------------------------------------

export default function MyStats(props: any) {
  const theme = useTheme();
  const navigate = useNavigate();

  const logo = [Group321, Group320, Frame10, Frame9, isolationMode, intersect];
  const [categoryList, setCategoryList] = useState([]);
  const [superCurrentTab, setSuperCurrentTab] = useState("");

  const [Success, setSuccess] = useState<any>({
    status: "Success",
    volume: "",
    count: "",
    color: "#1C1C1C",
  });
  const [Pending, setPending] = useState<any>({
    status: "Pending",
    volume: "",
    count: "",
    color: "#1C1C1C",
  });
  const [Failed, setFailed] = useState<any>({
    status: "Failed",
    volume: "",
    count: "",
    color: "#1C1C1C",
  });

  const [Total, setTotal] = useState<any>({
    status: "Transactions",
    volume: "",
    count: "",
    color: "#1C1C1C",
  });

  const Values = [
    {
      data: "Opening Balance ",
      value: "₹ 0",
      color: "#36B37E",
      logo: Group321,
    },
    {
      data: "Wallet Top-up",
      value: "₹ 0",
      color: "#3340A1",
      logo: Group320,
    },
    {
      data: "Today's Transactions",
      value: "₹ 0",
      color: "#00B8D9",
      logo: Frame10,
    },
    {
      data: "Incured Charges",
      value: "₹ 0",
      color: "#E03E87",
      logo: Frame9,
    },
    {
      data: "Commission Earned",
      value: "₹ 0",
      color: "#FFAB00",
      logo: isolationMode,
    },
    {
      data: "Tax Deducted",
      value: "₹ 0",
      color: "#FF5630",
      logo: intersect,
    },
  ];

  useEffect(() => {
    userdata();
  }, []);
  const userdata = async () => {
    let token = localStorage.getItem("token");
    await Api(`user/dashboard/totalSuccessTransaction`, "GET", "", token).then(
      (Response: any) => {
        console.log("====res=========>" + JSON.stringify(Response));
        console.log("=========>Successfull Transactions==========>", Response);
        if (Response.status == 200) {
          if (Response.data.code == 200) {
            setSuccess({
              ...Success,
              count: Response.data.totalTransactions,
              volume: Response.data.volume,
            });
            console.log("==========Success=====>", Response);
          } else {
            let msg = Response.data.message;
            console.log("===404========>", msg);
          }
        }
      }
    );
  };

  useEffect(() => {
    userValue();
  }, []);
  const userValue = async () => {
    let token = localStorage.getItem("token");
    await Api(`user/dashboard/totalPendingTransaction`, "GET", "", token).then(
      (Response: any) => {
        console.log("====res=========>" + JSON.stringify(Response));
        console.log("=========>Peding Transactions==========>", Response);
        if (Response.status == 200) {
          if (Response.data.code == 200) {
            setPending({
              ...Pending,
              count: Response.data.totalTransactions,
              volume: Response.data.volume,
            });
            console.log("==========Pending=====>", Response);
          } else {
            let msg = Response.data.message;
            console.log("===404========>", msg);
          }
        }
      }
    );
  };

  useEffect(() => {
    userCode();
  }, []);
  const userCode = async () => {
    let token = localStorage.getItem("token");
    await Api(`user/dashboard/totalFailedTransaction`, "GET", "", token).then(
      (Response: any) => {
        console.log("====res=========>" + JSON.stringify(Response));
        if (Response.status == 200) {
          if (Response.data.code == 200) {
            setFailed({
              ...Failed,
              count: Response.data.totalTransactions,
              volume: Response.data.volume,
            });
            console.log("==========Failed=====>", Response);
          } else {
            let msg = Response.data.message;
            console.log("===404=======>", msg);
          }
        }
      }
    );
  };

  useEffect(() => {
    userTotal();
  }, []);
  const userTotal = async () => {
    let token = localStorage.getItem("token");
    await Api(`user/dashboard/totalTransactions`, "GET", "", token).then(
      (Response: any) => {
        console.log("====res=========>" + JSON.stringify(Response));
        if (Response.status == 200) {
          if (Response.data.code == 200) {
            setTotal({
              ...Total,
              count: Response.data.totalTransactions,
              volume: Response.data.volume,
            });
            console.log("==========TotalTransaction=====>", Response);
          } else {
            let msg = Response.data.message;
            console.log("===404=========>", msg);
          }
        }
      }
    );
  };

  return (
    <>
      <Helmet>
        <title> My Stats | {process.env.REACT_APP_COMPANY_NAME} </title>
      </Helmet>
      <Grid width={"100%"}>
        <Card
          variant="outlined"
          sx={{
            width: "100%",
          }}
        >
          <Box sx={{ p: 1.5, background: "#CCD5E3" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" ml="3" component="div">
                Services
              </Typography>
            </Stack>
          </Box>
          <Divider />
          <Box
            sx={{
              p: 4,
              display: "flex",
              width: "100%",
              justifyContent: "center",
              // cursor: "pointer",
            }}
            gap={6}
          >
            <Stack sx={{ cursor: "pointer" }}>
              <img
                src={Recharge}
                onClick={() => navigate("/auth/service/recharge")}
              />
            </Stack>
            <Stack sx={{ cursor: "pointer" }}>
              <img
                src={MoneyTransfer}
                onClick={() => navigate("/auth/service/dmt")}
              />
            </Stack>
            <Stack>
              <img src={DMT1} />
            </Stack>
            <Stack sx={{ cursor: "pointer" }}>
              <img src={DMT2} onClick={() => navigate("/auth/service/dmt2")} />
            </Stack>
            <Stack sx={{ cursor: "pointer" }}>
              <img
                src={BillPayment}
                onClick={() => navigate("/auth/service/billpayment")}
              />
            </Stack>
            <Stack sx={{ cursor: "pointer" }}>
              <img src={AEPS} onClick={() => navigate("/auth/service/aeps")} />
            </Stack>
            <Stack>
              <img src={MATM} />
            </Stack>
            <Stack sx={{ cursor: "pointer" }}>
              <img
                src={AadharPay}
                onClick={() => navigate("/auth/service/aadhaarpay")}
              />
            </Stack>
            <Stack>
              <img src={IndoNepal} />
            </Stack>
          </Box>
        </Card>
        <Stack sx={{ flexDirection: "row", gap: 1, marginTop: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#E3F4FF",
              borderRadius: "15px",
              boxShadow: "30px",
              width: "33%",
            }}
          >
            <CardContent>
              <Stack
                sx={{
                  fontFamily: "Public Sans",
                  fontSize: "18px",
                  fontWeight: 600,
                  display: "grid",
                  justifyContent: "left",
                }}
              >
                <Typography style={{ color: Success.color }}>
                  {Success.status}
                </Typography>
                <Typography variant="h3">{Success.count}</Typography>
              </Stack>

              <Typography
                sx={{
                  fontFamily: "Public Sans",
                  fontSize: "15px",
                  fontWeight: 100,
                  display: "grid",
                  justifyContent: "right",
                }}
              >
                <Typography>{"Transaction Value"}</Typography>
                <Typography variant="h6" sx={{ ml: 2 }}>
                  {" "}
                  ₹ {fCurrency(Success?.volume || "0")}
                </Typography>
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              backgroundColor: "#E5ECF6",
              borderRadius: "15px",
              boxShadow: "30px",
              width: "33%",
            }}
          >
            <CardContent>
              <Stack
                sx={{
                  fontFamily: "Public Sans",
                  fontSize: "18px",
                  fontWeight: 600,
                  display: "grid",
                  justifyContent: "left",
                }}
              >
                <Typography style={{ color: Pending.color }}>
                  {Pending.status}
                </Typography>
                <Typography variant="h3">{Pending.count}</Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Public Sans",
                  fontSize: "15px",
                  fontWeight: 100,
                  display: "grid",
                  justifyContent: "right",
                }}
              >
                <Typography>{"Transaction Value"}</Typography>
                <Typography variant="h6" sx={{ ml: 2 }}>
                  {" "}
                  ₹ {fCurrency(Pending?.volume || "0")}
                </Typography>
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              backgroundColor: "#E3F4FF",
              borderRadius: "15px",
              boxShadow: "30px",
              width: "33%",
            }}
          >
            <CardContent>
              <Stack
                sx={{
                  fontFamily: "Public Sans",
                  fontSize: "18px",
                  fontWeight: 600,
                  display: "grid",
                  justifyContent: "left",
                }}
              >
                <Typography style={{ color: Failed.color }}>
                  {Failed.status}
                </Typography>
                <Typography variant="h3">{Failed.count}</Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Public Sans",
                  fontSize: "15px",
                  fontWeight: 100,
                  display: "grid",
                  justifyContent: "right",
                }}
              >
                <Typography>{"Transaction Value"}</Typography>
                <Typography variant="h6" sx={{ ml: 2 }}>
                  {" "}
                  ₹ {fCurrency(Failed?.volume || "0")}
                </Typography>
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              backgroundColor: "#E5ECF6",
              borderRadius: "15px",
              boxShadow: "30px",
              width: "33%",
            }}
          >
            <CardContent>
              <Stack
                sx={{
                  fontFamily: "Public Sans",
                  fontSize: "18px",
                  fontWeight: 600,
                  display: "grid",
                  justifyContent: "left",
                }}
              >
                <Typography style={{ color: Total.color }}>
                  {Total.status}
                </Typography>
                <Typography variant="h3">{Total.count}</Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Public Sans",
                  fontSize: "15px",
                  fontWeight: 100,
                  display: "grid",
                  justifyContent: "right",
                }}
              >
                <Typography>{"Transaction Value"}</Typography>
                <Typography variant="h6" sx={{ ml: 2 }}>
                  {" "}
                  ₹ {fCurrency(Total?.volume || "0")}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
    </>
  );
}
