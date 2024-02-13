import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, Card, Box, Grid, Typography, Stack } from "@mui/material";
import { StyledSection } from "src/layouts/login/styles";
import Image from "src/components/image/Image";
// sections
import { DTH } from ".";
import MobilePrepaid from "./Prepaid";
import RechargeImg from "../../../assets/images/RechargeTopUp.png";
import { CategoryContext } from "../../../pages/Services";
import { Api } from "src/webservices";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate } from "react-router";
// ----------------------------------------------------------------------

export const SubCategoryContext = React.createContext("");

export default function Recharges(props: any) {
  const navigate = useNavigate();
  const categoryContext: any = useContext(CategoryContext);
  const [subcategoryId, setSubcategoryId] = useState("");
  const [currentTab, setCurrentTab] = useState("Mobile Prepaid");
  const [categoryList, setCategoryList] = useState<any>([]);
  const [superCurrentTab, setSuperCurrentTab] = useState("");

  const changeTab = (val: any) => {
    setCurrentTab(val?.sub_category_name);
    setSubcategoryId(val?._id);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    Api(`category/get_CategoryList`, "GET", "", token).then((Response: any) => {
      console.log("======getcategory_list====>", Response);
      if (Response.status == 200) {
        if (Response.data.code == 200) {
          setCategoryList(Response?.data?.data[7]);

          setCurrentTab(
            Response?.data?.data[7]?.sub_category[0].sub_category_name
          );
          setSubcategoryId(Response?.data?.data[7]?.sub_category[0]._id);
        } else {
        }
      }
    });
  }, []);

  // useEffect(() => {
  //   setCurrentTab(categoryList?.sub_category[0].sub_category_name);
  //   setSubcategoryId(categoryList?.sub_category[0]._id);
  // }, []);

  return (
    <>
      <Stack flexDirection="row" gap={1}>
        <ArrowBackIosNewOutlinedIcon
          onClick={() => navigate("/auth/mystats")}
          sx={{
            height: "30px",
            width: "30px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        />
        <Typography variant="h3" component="h1" paragraph>
          RECHARGE
        </Typography>
      </Stack>
      <Grid
        display={"grid"}
        gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
      >
        <Card
          sx={{
            height: "fit-content",
            width: { xs: "100%", sm: "70%" },
          }}
        >
          <Tabs
            value={currentTab}
            aria-label="basic tabs example"
            sx={{ background: "#F4F6F8" }}
          >
            {categoryList?.sub_category?.map((tab: any) => (
              <Tab
                key={tab._id}
                sx={{ mx: 3 }}
                label={tab.sub_category_name}
                value={tab.sub_category_name}
                onClick={() => changeTab(tab)}
              />
            ))}
          </Tabs>
          <SubCategoryContext.Provider value={subcategoryId}>
            {categoryList?.sub_category?.map(
              (tab: any) =>
                tab.sub_category_name == currentTab && (
                  <Box key={tab.sub_category_name} sx={{ m: 3 }}>
                    {currentTab == "Mobile Prepaid" ? (
                      <MobilePrepaid />
                    ) : (
                      <DTH />
                    )}
                  </Box>
                )
            )}
          </SubCategoryContext.Provider>
        </Card>
        <StyledSection>
          <Image
            disabledEffect
            visibleByDefault
            src={RechargeImg}
            alt=""
            sx={{ height: "540px" }}
          />
        </StyledSection>
      </Grid>
    </>
  );
}
