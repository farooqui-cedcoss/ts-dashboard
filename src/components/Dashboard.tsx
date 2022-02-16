import React from "react";
import { Navigation } from "@shopify/polaris";
import { PackageMajor, ProductsMajor } from "@shopify/polaris-icons";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <Navigation location="/">
          <Navigation.Section
            items={[
              {
                url: "/panel/dashboard",
                label: "Dashboard",
                icon: PackageMajor,
              },
              {
                url: "/panel/grid",
                label: "Grid",
                icon: ProductsMajor,
              },
            ]}
          />
        </Navigation>
      </div>
    </div>
  );
};

export default Dashboard;
