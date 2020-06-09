export enum Permission {
  UpdatePermission = "UPDATE_PERMISSION",
  AddItem = "ADD_ITEM",
  EditItem = "EDIT_ITEM",
  DeleteItem = "DELETE_ITEM",
  None = "NONE",
}
export enum OrderStatus {
  Pending = "PENDING",
  Delivered = "DELIVERED",
  Onhold = "ONHOLD",
  Approved = "APPROVED",
  OnTheWay = "ON_THE_WAY",
}

export enum Role {
  Admin = "ADMIN",
  User = "USER",
  Seller = "SELLER",
}
export interface User {}
export interface Seller {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  storeName?: string;
  sellerNationality?: string;
  sellerIdentification?: string;
  confirmPassword?: string;
  EmailIsVerified?: string;
  EmailVarificationHash?: string;
  PasswordResetToken?: string;
  PasswordResetTokenExpiry?: string;
  SellerItemsCout?: number;
}
