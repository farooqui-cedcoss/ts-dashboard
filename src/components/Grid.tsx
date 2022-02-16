import {
  Button,
  Card,
  DataTable,
  Navigation,
  Page,
  Spinner,
  Loading,
  Frame,
  Checkbox,
  Pagination,
  Select,
  TextField,
  Form,
  FormLayout,
} from "@shopify/polaris";
import { PackageMajor, ProductsMajor } from "@shopify/polaris-icons";
import React, { useEffect, useState } from "react";
import { obj, pageCount } from "../data";
import {
  ObjectInterface,
  ResponseInterface,
} from "../interfaces/GridInterfaces";

const Grid = () => {
  const authToken = localStorage.getItem("Token");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<ResponseInterface[]>([]);
  const [selected, setSelected] = useState("10");
  const [activePage, setActivePage] = useState(1);
  const [object, setObject] = useState<ObjectInterface>(obj);

  const staticUrl = `https://fbapi.sellernext.com/frontend/admin/getAllUsers?activePage=${activePage}&count=${selected}`;
  const dynamicUrl = `https://fbapi.sellernext.com/frontend/admin/getAllUsers?activePage=${activePage}&count=${selected}+&filter[${object.user_id.name}][3]=${object.user_id.textBoxInput}+&filter[${object.Domain.name}][3]=${object.Domain.textBoxInput}+&filter[${object.Email.name}][3]=${object.Email.textBoxInput}+&filter[${object.Plan.name}][3]=${object.Plan.textBoxInput}+&filter[${object.MyShopifyDomain.name}][3]=${object.MyShopifyDomain.textBoxInput}`;

  const fetchData = async (url: string) => {
    setIsLoading(true);
    const response = await fetch(url, {
      headers: new Headers({ Authorization: authToken as string }),
    });
    const data = await response.json();
    console.log(data?.data.rows);
    Object.keys(data?.data.rows).map((key) => console.log(key));
    setResponseData(data?.data.rows);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(staticUrl);
  }, [staticUrl]);

  const printColumns = (columns: ObjectInterface) =>
    (Object.keys(columns) as Array<keyof typeof columns>)?.map((key) => [
      columns[key].visible && `${columns[key].name}`,
    ]);

  const printRow = (datas: ResponseInterface[]) =>
    datas?.map((data: any) => [
      object.user_id.visible && `${data.id}`,
      object.Catalog.visible && `${data.catalog}`,
      object.Domain.visible && `${data.shopify.domain}`,
      object.Email.visible && `${data.shopify.email}`,
      object.Updated.visible && `${data.updated_at}`,
      object.Created.visible && `${data.created_at}`,
      object.Plan.visible && `${data.shopify_plan}`,
      object.MyShopifyDomain.visible && `${data.shop_url}`,
      object.Users.visible && <Button primary>User</Button>,
      object.Guests.visible && <Button primary>Guests</Button>,
    ]);

  const handleSubmit = () => {
    fetchData(dynamicUrl);
  };

  const printFilters = (column: ObjectInterface) =>
    (Object.keys(column) as Array<keyof typeof column>).map(
      (key, i) =>
        column[key].visible &&
        column[key].filter && (
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                type="text"
                placeholder={key}
                label=""
                autoComplete="off"
                value={column[key].textBoxInput}
                onChange={(e) =>
                  setObject((prevState) => {
                    prevState[key].textBoxInput = e;
                    return { ...prevState };
                  })
                }
              />
            </FormLayout>
          </Form>
        )
    );

  var filteredRows = printRow(responseData);
  filteredRows && filteredRows.unshift(printFilters(object));

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
      <Page title="Sales by product">
        <Card>
          <Pagination
            hasPrevious={activePage === 1 ? false : true}
            onPrevious={() =>
              activePage > 1 && setActivePage((prevState) => prevState - 1)
            }
            hasNext
            onNext={() => setActivePage((prevState) => prevState + 1)}
          />
          <Select
            label="Page Count"
            options={pageCount}
            onChange={(value) => setSelected(value)}
            value={selected}
          />
        </Card>
        <Card>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {(Object.keys(object) as Array<keyof typeof object>).map((key) => (
              <div key={key} style={{ margin: "10px 20px" }}>
                <Checkbox
                  label={object[key].name}
                  checked={object[key].visible}
                  onChange={() =>
                    setObject((prevState) => {
                      // console.log(prevState);
                      prevState[key].visible = !prevState[key].visible;
                      return { ...prevState };
                    })
                  }
                />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          {!responseData && (
            <Spinner accessibilityLabel="Loading..." size="small" />
          )}
          {responseData && (
            <DataTable
              columnContentTypes={["text", "text", "text", "text", "text"]}
              headings={printColumns(object)}
              rows={filteredRows}
            />
          )}
          {responseData && isLoading && (
            <Frame>
              <Loading />
            </Frame>
          )}
        </Card>
      </Page>
    </div>
  );
};

export default Grid;
