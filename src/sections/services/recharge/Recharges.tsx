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
import RoleBasedGuard from "src/auth/RoleBasedGuard";
// ----------------------------------------------------------------------

export const SubCategoryContext = React.createContext({
  categoryId: "",
  subcategoryId: "",
});

export default function Recharges() {
  const navigate = useNavigate();
  const [subcategoryId, setSubcategoryId] = useState("");
  const [currentTab, setCurrentTab] = useState("Mobile Prepaid");
  const [categoryList, setCategoryList] = useState({
    category_name: "",
    sub_category: [],
    _id: "",
  });

  const changeTab = (val: any) => {
    setCurrentTab(val?.sub_category_name);
    setSubcategoryId(val?._id);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    Api(`category/get_CategoryList`, "GET", "", token).then((Response: any) => {
      if (Response.status == 200) {
        if (Response.data.code == 200) {
          Response?.data?.data?.map((item: any) => {
            if (item.category_name == "RECHARGES") {
              setCategoryList({
                category_name: item.category_name,
                sub_category: item.sub_category,
                _id: item._id,
              });
              setCurrentTab(item?.sub_category[0]?.sub_category_name);
              setSubcategoryId(item?.sub_category[0]?._id);
            }
          });
        }
      }
    });
  }, []);

  return (
    <>
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
          <Typography variant="h4">Recharge</Typography>
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
            <SubCategoryContext.Provider
              value={{
                categoryId: categoryList._id,
                subcategoryId: subcategoryId,
              }}
            >
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
      </RoleBasedGuard>
    </>
  );
}
