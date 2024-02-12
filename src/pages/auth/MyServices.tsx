import React, { createContext, useEffect, useState } from "react";

import { Api } from "src/webservices";
import { Recharge } from "src/routes/elements";

export const Category = createContext({});
function MyServices(props: any) {
  const [categoryList, setCategoryList] = useState([]);
  const [superCurrentTab, setSuperCurrentTab] = useState("");
  useEffect(() => {
    setSuperCurrentTab(props.title);
  }, [props.title]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    let token = localStorage.getItem("token");
    Api(`category/get_CategoryList`, "GET", "", token).then((Response: any) => {
      console.log("======getcategory_list====>", Response);
      if (Response.status == 200) {
        if (Response.data.code == 200) {
          const sortedData = Response?.data?.data.filter((item: any) => {
            if (
              item?.category_name.toLowerCase() === "money transfer" ||
              item?.category_name.toLowerCase() === "aeps" ||
              item?.category_name.toLowerCase() === "aadhaar pay" ||
              item?.category_name.toLowerCase() === "recharges" ||
              item?.category_name.toLowerCase() === "bill payment" ||
              item?.category_name.toLowerCase() === "dmt2"
            ) {
              return item;
            }
          });

          setCategoryList(sortedData);
          setSuperCurrentTab(sortedData[0].category_name);
        } else {
        }
      }
    });
  };

  return (
    <>
      {categoryList.map((currentCategory: any) => (
        <Category.Provider value={currentCategory}>
          <Recharge />
        </Category.Provider>
      ))}
    </>
  );
}

export default MyServices;
