import { ObjectInterface } from "../interfaces/GridInterfaces";

export const obj: ObjectInterface = {
  user_id: {
    name: "user_id",
    filter: true,
    type: "number",
    visible: true,
    dropDownSelect: true,
    textBoxInput: "",
  },
  Catalog: {
    name: "Catalog Only",
    type: "text",
    visible: true,
    filter: false,
    textBoxInput: "",
  },
  Domain: {
    name: "shops.domain",
    filter: true,
    type: "text",
    visible: true,
    dropDownSelect: true,
    textBoxInput: "",
  },
  Email: {
    name: "shops.email",
    filter: true,
    type: "text",
    visible: true,
    dropDownSelect: true,
    textBoxInput: "",
  },
  Updated: {
    name: "Updated at",
    visible: true,
    dropDownSelect: true,
    textBoxInput: "",
    filter: false,
  },
  Created: {
    name: "Created at",
    visible: true,
    dropDownSelect: true,
    textBoxInput: "",
    filter: false,
  },
  Plan: {
    name: "shops.plan_name",
    filter: true,
    type: "text",
    visible: true,
    dropDownSelect: true,
    textBoxInput: "",
  },
  MyShopifyDomain: {
    name: "shops.myshopify_domain",
    filter: true,
    type: "text",
    visible: true,
    dropDownSelect: true,
    textBoxInput: "",
  },
  Users: {
    name: "Users",
    type: "text",
    visible: true,
    textBoxInput: "",
    filter: false,
  },
  Guests: {
    name: "Guests",
    type: "text",
    visible: true,
    textBoxInput: "",
    filter: false,
  },
};

export const pageCount = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
  { label: "40", value: "40" },
];

export const options = [
  { label: "Equals", value: "1" },
  { label: "Not Equals", value: "2" },
  { label: "Contains", value: "3" },
  { label: "Does not contains", value: "4" },
  { label: "Starts With", value: "5" },
  { label: "Ends With", value: "6" },
];
