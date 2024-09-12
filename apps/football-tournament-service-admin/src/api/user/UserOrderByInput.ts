import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  about?: SortOrder;
  accountPhoto?: SortOrder;
  birthDate?: SortOrder;
  blockedDate?: SortOrder;
  createdAt?: SortOrder;
  deletedDate?: SortOrder;
  dominantFoot?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isBlocked?: SortOrder;
  isDeleted?: SortOrder;
  lastLogin?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  physicalInfo?: SortOrder;
  profileType?: SortOrder;
  region?: SortOrder;
  roles?: SortOrder;
  surname?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
