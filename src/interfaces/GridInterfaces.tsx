export interface ObjectInterface {
  user_id: {
    name: string;
    filter: boolean;
    type: string;
    visible: boolean;
    dropDownSelect: boolean;
    textBoxInput: string;
  };
  Catalog: {
    name: string;
    type: string;
    visible: boolean;
    filter: boolean;
    textBoxInput: string;
  };
  Domain: {
    name: string;
    filter: boolean;
    type: string;
    visible: boolean;
    dropDownSelect: boolean;
    textBoxInput: string;
  };
  Email: {
    name: string;
    filter: boolean;
    type: string;
    visible: boolean;
    dropDownSelect: boolean;
    textBoxInput: string;
  };
  Updated: {
    name: string;
    visible: boolean;
    dropDownSelect: boolean;
    textBoxInput: string;
    filter: boolean;
    type?: string;
  };
  Created: {
    name: string;
    visible: boolean;
    dropDownSelect: boolean;
    textBoxInput: string;
    filter: boolean;
    type?: string;
  };
  Plan: {
    name: string;
    filter: boolean;
    type: string;
    visible: boolean;
    dropDownSelect: boolean;
    textBoxInput: string;
  };
  MyShopifyDomain: {
    name: string;
    filter: boolean;
    type: string;
    visible: boolean;
    dropDownSelect: boolean;
    textBoxInput: string;
  };
  Users: {
    name: string;
    type: string;
    visible: boolean;
    textBoxInput: string;
    filter: boolean;
  };
  Guests: {
    name: string;
    type: string;
    visible: boolean;
    textBoxInput: string;
    filter: boolean;
  };
}

// export interface ObjectInterface {
//   [key: string | number]: {
//     [key: string]: string | number | boolean  | "number";
//   };
// }

    interface RA {
      to: string
    }

export interface ResponseInterface {
  [key: string]: {
    [key: string]: string | number | object[];
  };
}
