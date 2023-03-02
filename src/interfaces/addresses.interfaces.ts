import {
  addressesSchemas,
  allAddressesSchemas,
  requestAddressesSchemas,
  updateAddressesSchemas,
} from "../schemas";
import { z } from "zod";

export type iCreateAddresses = z.infer<typeof requestAddressesSchemas>;
export type iAddresses = z.infer<typeof addressesSchemas>;
export type iUpdateAddresses = z.infer<typeof updateAddressesSchemas>;
export type iAllAddresses = z.infer<typeof allAddressesSchemas>;
