import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<Item>;
  items: Array<Item>;
  seller?: Maybe<Seller>;
  sellers: Array<Seller>;
  user?: Maybe<User>;
  addresses: Array<Address>;
  users: Array<User>;
  /** Currently Logged in User */
  CurrentUser?: Maybe<User>;
  /** Currently Logged in Seller */
  CurrentSeller?: Maybe<Seller>;
  /** Users Orders */
  UserOrder?: Maybe<Array<Order>>;
  /** Get One Orders */
  Order: Order;
  /** Item Reviews */
  ITemRevives: Array<Review>;
};


export type QueryItemArgs = {
  where: ItemWhereUniqueInput;
};


export type QueryItemsArgs = {
  where?: Maybe<ItemWhereInput>;
  orderBy?: Maybe<ItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ItemWhereUniqueInput>;
  before?: Maybe<ItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySellerArgs = {
  where: SellerWhereUniqueInput;
};


export type QuerySellersArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<SellerWhereUniqueInput>;
  before?: Maybe<SellerWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryAddressesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<AddressWhereUniqueInput>;
  before?: Maybe<AddressWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  orderId: Scalars['String'];
};


export type QueryITemRevivesArgs = {
  itemId: Scalars['String'];
};

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['String'];
  likes: Array<Like>;
  likesCount?: Maybe<Scalars['Int']>;
  itemReview: Array<Review>;
  reviewCount?: Maybe<Scalars['Int']>;
  images: Array<Scalars['String']>;
  eagerImages: Array<Scalars['String']>;
  OtherFeatures: Array<Scalars['String']>;
  catagory: Array<Catagory>;
  tags: Array<Tag>;
  colors: Array<Color>;
  title: Scalars['String'];
  description: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
};


export type ItemLikesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LikeWhereUniqueInput>;
  before?: Maybe<LikeWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ItemItemReviewArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ReviewWhereUniqueInput>;
  before?: Maybe<ReviewWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ItemCatagoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<CatagoryWhereUniqueInput>;
  before?: Maybe<CatagoryWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ItemTagsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<TagWhereUniqueInput>;
  before?: Maybe<TagWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ItemColorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ColorWhereUniqueInput>;
  before?: Maybe<ColorWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type LikeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['String'];
  user: User;
  userId: Scalars['String'];
  item: Item;
  itemId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role?: Maybe<Role>;
  address: Array<Address>;
  Order: Array<Order>;
  permissions?: Maybe<Permission>;
  cart: Array<CartItem>;
  likes: Array<Like>;
  likesCount?: Maybe<Scalars['Int']>;
  itemReview: Array<Review>;
  reviewCount?: Maybe<Scalars['Int']>;
};


export type UserAddressArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<AddressWhereUniqueInput>;
  before?: Maybe<AddressWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserOrderArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<OrderWhereUniqueInput>;
  before?: Maybe<OrderWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserCartArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<CartItemWhereUniqueInput>;
  before?: Maybe<CartItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserLikesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LikeWhereUniqueInput>;
  before?: Maybe<LikeWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserItemReviewArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ReviewWhereUniqueInput>;
  before?: Maybe<ReviewWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Seller = 'SELLER'
}

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
  MaincontactNubmer: Scalars['String'];
  OthercontactNubmers: Array<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
  User?: Maybe<User>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['String'];
  items: Array<OrderItem>;
  Item?: Maybe<Item>;
  itemId?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
  user: User;
  userId: Scalars['String'];
  charge: Scalars['String'];
  status: OrderStatus;
};


export type OrderItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<OrderItemWhereUniqueInput>;
  before?: Maybe<OrderItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrderItemWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['String'];
  likes: Array<Like>;
  itemReview: Array<Review>;
  images: Array<Scalars['String']>;
  eagerImages: Array<Scalars['String']>;
  OtherFeatures: Array<Scalars['String']>;
  catagory: Array<Catagory>;
  title: Scalars['String'];
  description: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
};


export type OrderItemLikesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LikeWhereUniqueInput>;
  before?: Maybe<LikeWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrderItemItemReviewArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ReviewWhereUniqueInput>;
  before?: Maybe<ReviewWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrderItemCatagoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<CatagoryWhereUniqueInput>;
  before?: Maybe<CatagoryWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['String'];
  item: Item;
  itemId: Scalars['String'];
  author: User;
  authorId: Scalars['String'];
  rating: Scalars['Float'];
  text: Scalars['String'];
};

export type CatagoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Catagory = {
  __typename?: 'Catagory';
  id: Scalars['String'];
  text: Scalars['String'];
  item: Item;
  itemId: Scalars['String'];
};

export enum OrderStatus {
  Pending = 'PENDING',
  Delivered = 'DELIVERED',
  Onhold = 'ONHOLD',
  Approved = 'APPROVED',
  OnTheWay = 'ON_THE_WAY'
}

export enum Permission {
  UpdatePermission = 'UPDATE_PERMISSION',
  AddItem = 'ADD_ITEM',
  EditItem = 'EDIT_ITEM',
  DeleteItem = 'DELETE_ITEM',
  None = 'NONE'
}

export type CartItemWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['String'];
  quantity: Scalars['Int'];
  item: Item;
  itemId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  text: Scalars['String'];
  item: Item;
  itemId: Scalars['String'];
};

export type ColorWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Color = {
  __typename?: 'Color';
  id: Scalars['String'];
  text: Scalars['String'];
  item: Item;
  itemId: Scalars['String'];
};

export type ItemWhereInput = {
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  overview?: Maybe<NullableStringFilter>;
  brand?: Maybe<NullableStringFilter>;
  weight?: Maybe<NullableStringFilter>;
  dimensions?: Maybe<NullableStringFilter>;
  materials?: Maybe<NullableStringFilter>;
  otherInfo?: Maybe<NullableStringFilter>;
  videoLink?: Maybe<NullableStringFilter>;
  sellerId?: Maybe<NullableStringFilter>;
  price?: Maybe<FloatFilter>;
  beforeDiscountPrice?: Maybe<FloatFilter>;
  stock?: Maybe<NullableIntFilter>;
  likesCount?: Maybe<NullableIntFilter>;
  reviewCount?: Maybe<NullableIntFilter>;
  itemReview?: Maybe<ReviewFilter>;
  catagory?: Maybe<CatagoryFilter>;
  tags?: Maybe<TagFilter>;
  colors?: Maybe<ColorFilter>;
  likes?: Maybe<LikeFilter>;
  Order?: Maybe<OrderFilter>;
  CartItem?: Maybe<CartItemFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<ItemWhereInput>>;
  OR?: Maybe<Array<ItemWhereInput>>;
  NOT?: Maybe<Array<ItemWhereInput>>;
  Seller?: Maybe<SellerWhereInput>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type ReviewFilter = {
  every?: Maybe<ReviewWhereInput>;
  some?: Maybe<ReviewWhereInput>;
  none?: Maybe<ReviewWhereInput>;
};

export type ReviewWhereInput = {
  id?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  rating?: Maybe<FloatFilter>;
  text?: Maybe<StringFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<ReviewWhereInput>>;
  OR?: Maybe<Array<ReviewWhereInput>>;
  NOT?: Maybe<Array<ReviewWhereInput>>;
  item?: Maybe<ItemWhereInput>;
  author?: Maybe<UserWhereInput>;
  OrderItem?: Maybe<OrderItemWhereInput>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};


export type UserWhereInput = {
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<Role>;
  address?: Maybe<AddressFilter>;
  permissions?: Maybe<Permission>;
  cart?: Maybe<CartItemFilter>;
  likes?: Maybe<LikeFilter>;
  itemReview?: Maybe<ReviewFilter>;
  PasswordResetTokenExpiry?: Maybe<NullableFloatFilter>;
  reviewCount?: Maybe<NullableIntFilter>;
  likesCount?: Maybe<NullableIntFilter>;
  PasswordResetToken?: Maybe<NullableStringFilter>;
  Order?: Maybe<OrderFilter>;
  avatar?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type AddressFilter = {
  every?: Maybe<AddressWhereInput>;
  some?: Maybe<AddressWhereInput>;
  none?: Maybe<AddressWhereInput>;
};

export type AddressWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  address?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  state?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  zipCode?: Maybe<StringFilter>;
  MaincontactNubmer?: Maybe<StringFilter>;
  streetAddress1?: Maybe<NullableStringFilter>;
  streetAddress2?: Maybe<NullableStringFilter>;
  company?: Maybe<NullableStringFilter>;
  message?: Maybe<NullableStringFilter>;
  additionalInfo?: Maybe<NullableStringFilter>;
  isPrimary?: Maybe<NullableBooleanFilter>;
  Lat?: Maybe<NullableFloatFilter>;
  Lng?: Maybe<NullableFloatFilter>;
  sellerId?: Maybe<NullableStringFilter>;
  userId?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<AddressWhereInput>>;
  OR?: Maybe<Array<AddressWhereInput>>;
  NOT?: Maybe<Array<AddressWhereInput>>;
  Seller?: Maybe<SellerWhereInput>;
  User?: Maybe<UserWhereInput>;
};

export type NullableBooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type NullableFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
};

export type SellerWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  storeName?: Maybe<StringFilter>;
  sellerNationality?: Maybe<StringFilter>;
  sellerIdentification?: Maybe<StringFilter>;
  confirmPassword?: Maybe<NullableStringFilter>;
  EmailIsVerified?: Maybe<NullableBooleanFilter>;
  EmailVarificationHash?: Maybe<NullableStringFilter>;
  PasswordResetToken?: Maybe<NullableStringFilter>;
  PasswordResetTokenExpiry?: Maybe<NullableFloatFilter>;
  SellerItemsCout?: Maybe<NullableIntFilter>;
  role?: Maybe<Role>;
  PickupLocations?: Maybe<AddressFilter>;
  items?: Maybe<ItemFilter>;
  permissions?: Maybe<Permission>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<SellerWhereInput>>;
  OR?: Maybe<Array<SellerWhereInput>>;
  NOT?: Maybe<Array<SellerWhereInput>>;
};

export type ItemFilter = {
  every?: Maybe<ItemWhereInput>;
  some?: Maybe<ItemWhereInput>;
  none?: Maybe<ItemWhereInput>;
};

export type CartItemFilter = {
  every?: Maybe<CartItemWhereInput>;
  some?: Maybe<CartItemWhereInput>;
  none?: Maybe<CartItemWhereInput>;
};

export type CartItemWhereInput = {
  id?: Maybe<StringFilter>;
  quantity?: Maybe<IntFilter>;
  itemId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<CartItemWhereInput>>;
  OR?: Maybe<Array<CartItemWhereInput>>;
  NOT?: Maybe<Array<CartItemWhereInput>>;
  item?: Maybe<ItemWhereInput>;
  user?: Maybe<UserWhereInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type LikeFilter = {
  every?: Maybe<LikeWhereInput>;
  some?: Maybe<LikeWhereInput>;
  none?: Maybe<LikeWhereInput>;
};

export type LikeWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<LikeWhereInput>>;
  OR?: Maybe<Array<LikeWhereInput>>;
  NOT?: Maybe<Array<LikeWhereInput>>;
  user?: Maybe<UserWhereInput>;
  item?: Maybe<ItemWhereInput>;
  OrderItem?: Maybe<OrderItemWhereInput>;
};

export type OrderItemWhereInput = {
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
  beforeDiscountPrice?: Maybe<FloatFilter>;
  overview?: Maybe<NullableStringFilter>;
  otherInfo?: Maybe<NullableStringFilter>;
  videoLink?: Maybe<NullableStringFilter>;
  brand?: Maybe<NullableStringFilter>;
  weight?: Maybe<NullableStringFilter>;
  dimensions?: Maybe<NullableStringFilter>;
  materials?: Maybe<NullableStringFilter>;
  stock?: Maybe<NullableIntFilter>;
  likes?: Maybe<LikeFilter>;
  itemReview?: Maybe<ReviewFilter>;
  catagory?: Maybe<CatagoryFilter>;
  tags?: Maybe<TagFilter>;
  colors?: Maybe<ColorFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Order?: Maybe<OrderFilter>;
  AND?: Maybe<Array<OrderItemWhereInput>>;
  OR?: Maybe<Array<OrderItemWhereInput>>;
  NOT?: Maybe<Array<OrderItemWhereInput>>;
};

export type CatagoryFilter = {
  every?: Maybe<CatagoryWhereInput>;
  some?: Maybe<CatagoryWhereInput>;
  none?: Maybe<CatagoryWhereInput>;
};

export type CatagoryWhereInput = {
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<CatagoryWhereInput>>;
  OR?: Maybe<Array<CatagoryWhereInput>>;
  NOT?: Maybe<Array<CatagoryWhereInput>>;
  item?: Maybe<ItemWhereInput>;
  OrderItem?: Maybe<OrderItemWhereInput>;
};

export type TagFilter = {
  every?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
};

export type TagWhereInput = {
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  item?: Maybe<ItemWhereInput>;
  OrderItem?: Maybe<OrderItemWhereInput>;
};

export type ColorFilter = {
  every?: Maybe<ColorWhereInput>;
  some?: Maybe<ColorWhereInput>;
  none?: Maybe<ColorWhereInput>;
};

export type ColorWhereInput = {
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ColorWhereInput>>;
  OR?: Maybe<Array<ColorWhereInput>>;
  NOT?: Maybe<Array<ColorWhereInput>>;
  item?: Maybe<ItemWhereInput>;
  OrderItem?: Maybe<OrderItemWhereInput>;
};

export type OrderFilter = {
  every?: Maybe<OrderWhereInput>;
  some?: Maybe<OrderWhereInput>;
  none?: Maybe<OrderWhereInput>;
};

export type OrderWhereInput = {
  id?: Maybe<StringFilter>;
  items?: Maybe<OrderItemFilter>;
  total?: Maybe<IntFilter>;
  userId?: Maybe<StringFilter>;
  charge?: Maybe<StringFilter>;
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  itemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<OrderWhereInput>>;
  OR?: Maybe<Array<OrderWhereInput>>;
  NOT?: Maybe<Array<OrderWhereInput>>;
  user?: Maybe<UserWhereInput>;
  Item?: Maybe<ItemWhereInput>;
};

export type OrderItemFilter = {
  every?: Maybe<OrderItemWhereInput>;
  some?: Maybe<OrderItemWhereInput>;
  none?: Maybe<OrderItemWhereInput>;
};

export type ItemOrderByInput = {
  id?: Maybe<OrderByArg>;
  title?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  overview?: Maybe<OrderByArg>;
  brand?: Maybe<OrderByArg>;
  weight?: Maybe<OrderByArg>;
  dimensions?: Maybe<OrderByArg>;
  materials?: Maybe<OrderByArg>;
  otherInfo?: Maybe<OrderByArg>;
  videoLink?: Maybe<OrderByArg>;
  sellerId?: Maybe<OrderByArg>;
  price?: Maybe<OrderByArg>;
  beforeDiscountPrice?: Maybe<OrderByArg>;
  stock?: Maybe<OrderByArg>;
  likesCount?: Maybe<OrderByArg>;
  reviewCount?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type SellerWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  sellerIdentification?: Maybe<Scalars['String']>;
  phone?: Maybe<Array<Scalars['String']>>;
};

export type Seller = {
  __typename?: 'Seller';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  storeName: Scalars['String'];
  sellerNationality: Scalars['String'];
  sellerIdentification: Scalars['String'];
  EmailIsVerified?: Maybe<Scalars['Boolean']>;
  SellerItemsCout?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  phone: Array<Scalars['String']>;
  PickupLocations: Array<Address>;
  Brand: Array<Scalars['String']>;
  items: Array<Item>;
  permissions?: Maybe<Permission>;
};


export type SellerPickupLocationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<AddressWhereUniqueInput>;
  before?: Maybe<AddressWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SellerItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ItemWhereUniqueInput>;
  before?: Maybe<ItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create New User */
  CreateUser: Scalars['String'];
  UserLogin: Scalars['String'];
  /** Log User Out */
  UserLogout: Scalars['String'];
  /** User Request A Password Reset */
  UserForgotPasswordRequest: Scalars['String'];
  /** User Reset Password */
  ResetUserPassword: Scalars['String'];
  DeleteUserAccount: Scalars['String'];
  updateOneAddress?: Maybe<Address>;
  deleteOneAddress?: Maybe<Address>;
  /** Create Users Address */
  CreateUsersAddress: Address;
  /** Toggle Primary Address */
  TogglePrimaryAddress: Address;
  /** Contact Form */
  ContactUs: Scalars['String'];
  /** Create New Seller Account */
  CreateSeller: Seller;
  /** Verify Seller Account */
  VerifySeller: Scalars['String'];
  /** Seller Request Email verification */
  RequestEmailVerificationToken: Scalars['String'];
  /** Seller Login */
  SellerLogin: Scalars['String'];
  /** Request A Password Reset */
  SellerForgotPasswordRequest: Scalars['String'];
  /** Reset Password */
  ResetSellerPassword: Scalars['String'];
  DeleteSellersAccount: Scalars['String'];
  /** Create New Item */
  CreateItem: Item;
  /** Update Item */
  UpdateItem: Item;
  /** Delete Item */
  DeleteItem: Scalars['String'];
  /** Like Or Remove Like From Item */
  ToggleLikeItem: Scalars['String'];
  /** Create Item Review */
  CreateItemReview: Review;
  /** Add Item To Cart */
  AddItemToTheCart: Scalars['String'];
  DeleteCartItem: Scalars['String'];
  EmptyUserCart: Scalars['String'];
  CreateOrder: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationUserLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserForgotPasswordRequestArgs = {
  email: Scalars['String'];
};


export type MutationResetUserPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationDeleteUserAccountArgs = {
  userId: Scalars['String'];
};


export type MutationUpdateOneAddressArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};


export type MutationDeleteOneAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationCreateUsersAddressArgs = {
  name: Scalars['String'];
  address: Scalars['String'];
  MaincontactNubmer: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
  OthercontactNubmers?: Maybe<Array<Scalars['String']>>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
};


export type MutationTogglePrimaryAddressArgs = {
  addressId: Scalars['String'];
};


export type MutationContactUsArgs = {
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
};


export type MutationCreateSellerArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  storeName: Scalars['String'];
  sellerNationality: Scalars['String'];
  sellerIdentification: Scalars['String'];
  Brand?: Maybe<Array<Scalars['String']>>;
  AddressName: Scalars['String'];
  AddressAddress: Scalars['String'];
  AddressCountry?: Maybe<Scalars['String']>;
  AddressState?: Maybe<Scalars['String']>;
  AddressCity?: Maybe<Scalars['String']>;
  AddressZipCode?: Maybe<Scalars['String']>;
  AddressMaincontactNubmer: Scalars['String'];
  AddressStreetAddress1?: Maybe<Scalars['String']>;
  AddressStreetAddress2?: Maybe<Scalars['String']>;
  AddressCompany?: Maybe<Scalars['String']>;
};


export type MutationVerifySellerArgs = {
  SellerVerificationToken: Scalars['String'];
};


export type MutationRequestEmailVerificationTokenArgs = {
  email: Scalars['String'];
};


export type MutationSellerLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSellerForgotPasswordRequestArgs = {
  email: Scalars['String'];
};


export type MutationResetSellerPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationDeleteSellersAccountArgs = {
  sellerId: Scalars['String'];
};


export type MutationCreateItemArgs = {
  title: Scalars['String'];
  description: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Scalars['String']>>;
  eagerImages?: Maybe<Array<Scalars['String']>>;
  catagory?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  colors?: Maybe<Array<Scalars['String']>>;
  otherFeature?: Maybe<Array<Scalars['String']>>;
};


export type MutationUpdateItemArgs = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Scalars['String']>>;
  eagerImages?: Maybe<Array<Scalars['String']>>;
  catagory?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  colors?: Maybe<Array<Scalars['String']>>;
  otherFeature?: Maybe<Array<Scalars['String']>>;
};


export type MutationDeleteItemArgs = {
  itemId: Scalars['String'];
};


export type MutationToggleLikeItemArgs = {
  itemId: Scalars['String'];
};


export type MutationCreateItemReviewArgs = {
  itemId: Scalars['String'];
  text: Scalars['String'];
  rating: Scalars['Float'];
};


export type MutationAddItemToTheCartArgs = {
  itemId: Scalars['String'];
  quantity: Scalars['Int'];
};


export type MutationDeleteCartItemArgs = {
  cartItemId: Scalars['String'];
};


export type MutationEmptyUserCartArgs = {
  userId: Scalars['String'];
};


export type MutationCreateOrderArgs = {
  token: Scalars['String'];
};

export type AddressUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  MaincontactNubmer?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  OthercontactNubmers?: Maybe<AddressUpdateOthercontactNubmersInput>;
  Seller?: Maybe<SellerUpdateOneWithoutPickupLocationsInput>;
  User?: Maybe<UserUpdateOneWithoutAddressInput>;
};

export type AddressUpdateOthercontactNubmersInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type SellerUpdateOneWithoutPickupLocationsInput = {
  create?: Maybe<SellerCreateWithoutPickupLocationsInput>;
  connect?: Maybe<SellerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SellerUpdateWithoutPickupLocationsDataInput>;
  upsert?: Maybe<SellerUpsertWithoutPickupLocationsInput>;
};

export type SellerCreateWithoutPickupLocationsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  storeName: Scalars['String'];
  sellerNationality: Scalars['String'];
  sellerIdentification: Scalars['String'];
  confirmPassword?: Maybe<Scalars['String']>;
  EmailIsVerified?: Maybe<Scalars['Boolean']>;
  EmailVarificationHash?: Maybe<Scalars['String']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  SellerItemsCout?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  phone?: Maybe<SellerCreatephoneInput>;
  Brand?: Maybe<SellerCreateBrandInput>;
  items?: Maybe<ItemCreateManyWithoutSellerInput>;
};

export type SellerCreatephoneInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type SellerCreateBrandInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ItemCreateManyWithoutSellerInput = {
  create?: Maybe<Array<ItemCreateWithoutSellerInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
};

export type ItemCreateWithoutSellerInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemCreateimagesInput>;
  eagerImages?: Maybe<ItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemCreateOtherFeaturesInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutItemInput>;
  tags?: Maybe<TagCreateManyWithoutItemInput>;
  colors?: Maybe<ColorCreateManyWithoutItemInput>;
  likes?: Maybe<LikeCreateManyWithoutItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
};

export type ItemCreateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ItemCreateeagerImagesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ItemCreateOtherFeaturesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ReviewCreateManyWithoutItemInput = {
  create?: Maybe<Array<ReviewCreateWithoutItemInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutItemReviewInput;
  OrderItem?: Maybe<OrderItemCreateOneWithoutItemReviewInput>;
};

export type UserCreateOneWithoutItemReviewInput = {
  create?: Maybe<UserCreateWithoutItemReviewInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutItemReviewInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<AddressCreateManyWithoutUserInput>;
  cart?: Maybe<CartItemCreateManyWithoutUserInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  Order?: Maybe<OrderCreateManyWithoutUserInput>;
};

export type AddressCreateManyWithoutUserInput = {
  create?: Maybe<Array<AddressCreateWithoutUserInput>>;
  connect?: Maybe<Array<AddressWhereUniqueInput>>;
};

export type AddressCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  address: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  MaincontactNubmer: Scalars['String'];
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  OthercontactNubmers?: Maybe<AddressCreateOthercontactNubmersInput>;
  Seller?: Maybe<SellerCreateOneWithoutPickupLocationsInput>;
};

export type AddressCreateOthercontactNubmersInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type SellerCreateOneWithoutPickupLocationsInput = {
  create?: Maybe<SellerCreateWithoutPickupLocationsInput>;
  connect?: Maybe<SellerWhereUniqueInput>;
};

export type CartItemCreateManyWithoutUserInput = {
  create?: Maybe<Array<CartItemCreateWithoutUserInput>>;
  connect?: Maybe<Array<CartItemWhereUniqueInput>>;
};

export type CartItemCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutCartItemInput;
};

export type ItemCreateOneWithoutCartItemInput = {
  create?: Maybe<ItemCreateWithoutCartItemInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutCartItemInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemCreateimagesInput>;
  eagerImages?: Maybe<ItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemCreateOtherFeaturesInput>;
  Seller?: Maybe<SellerCreateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutItemInput>;
  tags?: Maybe<TagCreateManyWithoutItemInput>;
  colors?: Maybe<ColorCreateManyWithoutItemInput>;
  likes?: Maybe<LikeCreateManyWithoutItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemInput>;
};

export type SellerCreateOneWithoutItemsInput = {
  create?: Maybe<SellerCreateWithoutItemsInput>;
  connect?: Maybe<SellerWhereUniqueInput>;
};

export type SellerCreateWithoutItemsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  storeName: Scalars['String'];
  sellerNationality: Scalars['String'];
  sellerIdentification: Scalars['String'];
  confirmPassword?: Maybe<Scalars['String']>;
  EmailIsVerified?: Maybe<Scalars['Boolean']>;
  EmailVarificationHash?: Maybe<Scalars['String']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  SellerItemsCout?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  phone?: Maybe<SellerCreatephoneInput>;
  Brand?: Maybe<SellerCreateBrandInput>;
  PickupLocations?: Maybe<AddressCreateManyWithoutSellerInput>;
};

export type AddressCreateManyWithoutSellerInput = {
  create?: Maybe<Array<AddressCreateWithoutSellerInput>>;
  connect?: Maybe<Array<AddressWhereUniqueInput>>;
};

export type AddressCreateWithoutSellerInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  address: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  MaincontactNubmer: Scalars['String'];
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  OthercontactNubmers?: Maybe<AddressCreateOthercontactNubmersInput>;
  User?: Maybe<UserCreateOneWithoutAddressInput>;
};

export type UserCreateOneWithoutAddressInput = {
  create?: Maybe<UserCreateWithoutAddressInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutAddressInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  cart?: Maybe<CartItemCreateManyWithoutUserInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  Order?: Maybe<OrderCreateManyWithoutUserInput>;
};

export type LikeCreateManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutLikesInput;
  OrderItem?: Maybe<OrderItemCreateOneWithoutLikesInput>;
};

export type ItemCreateOneWithoutLikesInput = {
  create?: Maybe<ItemCreateWithoutLikesInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemCreateimagesInput>;
  eagerImages?: Maybe<ItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemCreateOtherFeaturesInput>;
  Seller?: Maybe<SellerCreateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutItemInput>;
  tags?: Maybe<TagCreateManyWithoutItemInput>;
  colors?: Maybe<ColorCreateManyWithoutItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
};

export type CatagoryCreateManyWithoutItemInput = {
  create?: Maybe<Array<CatagoryCreateWithoutItemInput>>;
  connect?: Maybe<Array<CatagoryWhereUniqueInput>>;
};

export type CatagoryCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  OrderItem?: Maybe<OrderItemCreateOneWithoutCatagoryInput>;
};

export type OrderItemCreateOneWithoutCatagoryInput = {
  create?: Maybe<OrderItemCreateWithoutCatagoryInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
};

export type OrderItemCreateWithoutCatagoryInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemCreateimagesInput>;
  eagerImages?: Maybe<OrderItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemCreateOtherFeaturesInput>;
  likes?: Maybe<LikeCreateManyWithoutOrderItemInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutOrderItemInput>;
  tags?: Maybe<TagCreateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorCreateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemsInput>;
};

export type OrderItemCreateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type OrderItemCreateeagerImagesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type OrderItemCreateOtherFeaturesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type LikeCreateManyWithoutOrderItemInput = {
  create?: Maybe<Array<LikeCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateWithoutOrderItemInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutLikesInput;
  item: ItemCreateOneWithoutLikesInput;
};

export type UserCreateOneWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<AddressCreateManyWithoutUserInput>;
  cart?: Maybe<CartItemCreateManyWithoutUserInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  Order?: Maybe<OrderCreateManyWithoutUserInput>;
};

export type ReviewCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<ReviewCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutItemReviewInput;
  OrderItem?: Maybe<OrderItemCreateOneWithoutItemReviewInput>;
};

export type ItemCreateOneWithoutItemReviewInput = {
  create?: Maybe<ItemCreateWithoutItemReviewInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutItemReviewInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemCreateimagesInput>;
  eagerImages?: Maybe<ItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemCreateOtherFeaturesInput>;
  Seller?: Maybe<SellerCreateOneWithoutItemsInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutItemInput>;
  tags?: Maybe<TagCreateManyWithoutItemInput>;
  colors?: Maybe<ColorCreateManyWithoutItemInput>;
  likes?: Maybe<LikeCreateManyWithoutItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
};

export type TagCreateManyWithoutItemInput = {
  create?: Maybe<Array<TagCreateWithoutItemInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  OrderItem?: Maybe<OrderItemCreateOneWithoutTagsInput>;
};

export type OrderItemCreateOneWithoutTagsInput = {
  create?: Maybe<OrderItemCreateWithoutTagsInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
};

export type OrderItemCreateWithoutTagsInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemCreateimagesInput>;
  eagerImages?: Maybe<OrderItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemCreateOtherFeaturesInput>;
  likes?: Maybe<LikeCreateManyWithoutOrderItemInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorCreateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemsInput>;
};

export type ReviewCreateManyWithoutOrderItemInput = {
  create?: Maybe<Array<ReviewCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewCreateWithoutOrderItemInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutItemReviewInput;
  author: UserCreateOneWithoutItemReviewInput;
};

export type CatagoryCreateManyWithoutOrderItemInput = {
  create?: Maybe<Array<CatagoryCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<CatagoryWhereUniqueInput>>;
};

export type CatagoryCreateWithoutOrderItemInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutCatagoryInput;
};

export type ItemCreateOneWithoutCatagoryInput = {
  create?: Maybe<ItemCreateWithoutCatagoryInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutCatagoryInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemCreateimagesInput>;
  eagerImages?: Maybe<ItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemCreateOtherFeaturesInput>;
  Seller?: Maybe<SellerCreateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutItemInput>;
  tags?: Maybe<TagCreateManyWithoutItemInput>;
  colors?: Maybe<ColorCreateManyWithoutItemInput>;
  likes?: Maybe<LikeCreateManyWithoutItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
};

export type ColorCreateManyWithoutItemInput = {
  create?: Maybe<Array<ColorCreateWithoutItemInput>>;
  connect?: Maybe<Array<ColorWhereUniqueInput>>;
};

export type ColorCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  OrderItem?: Maybe<OrderItemCreateOneWithoutColorsInput>;
};

export type OrderItemCreateOneWithoutColorsInput = {
  create?: Maybe<OrderItemCreateWithoutColorsInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
};

export type OrderItemCreateWithoutColorsInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemCreateimagesInput>;
  eagerImages?: Maybe<OrderItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemCreateOtherFeaturesInput>;
  likes?: Maybe<LikeCreateManyWithoutOrderItemInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutOrderItemInput>;
  tags?: Maybe<TagCreateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemsInput>;
};

export type TagCreateManyWithoutOrderItemInput = {
  create?: Maybe<Array<TagCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateWithoutOrderItemInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutTagsInput;
};

export type ItemCreateOneWithoutTagsInput = {
  create?: Maybe<ItemCreateWithoutTagsInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutTagsInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemCreateimagesInput>;
  eagerImages?: Maybe<ItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemCreateOtherFeaturesInput>;
  Seller?: Maybe<SellerCreateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutItemInput>;
  colors?: Maybe<ColorCreateManyWithoutItemInput>;
  likes?: Maybe<LikeCreateManyWithoutItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
};

export type LikeCreateManyWithoutItemInput = {
  create?: Maybe<Array<LikeCreateWithoutItemInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutLikesInput;
  OrderItem?: Maybe<OrderItemCreateOneWithoutLikesInput>;
};

export type OrderItemCreateOneWithoutLikesInput = {
  create?: Maybe<OrderItemCreateWithoutLikesInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
};

export type OrderItemCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemCreateimagesInput>;
  eagerImages?: Maybe<OrderItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemCreateOtherFeaturesInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutOrderItemInput>;
  tags?: Maybe<TagCreateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorCreateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemsInput>;
};

export type ColorCreateManyWithoutOrderItemInput = {
  create?: Maybe<Array<ColorCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<ColorWhereUniqueInput>>;
};

export type ColorCreateWithoutOrderItemInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutColorsInput;
};

export type ItemCreateOneWithoutColorsInput = {
  create?: Maybe<ItemCreateWithoutColorsInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutColorsInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemCreateimagesInput>;
  eagerImages?: Maybe<ItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemCreateOtherFeaturesInput>;
  Seller?: Maybe<SellerCreateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutItemInput>;
  tags?: Maybe<TagCreateManyWithoutItemInput>;
  likes?: Maybe<LikeCreateManyWithoutItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
};

export type OrderCreateManyWithoutItemInput = {
  create?: Maybe<Array<OrderCreateWithoutItemInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
  charge: Scalars['String'];
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  user: UserCreateOneWithoutOrderInput;
};

export type OrderItemCreateManyWithoutOrderInput = {
  create?: Maybe<Array<OrderItemCreateWithoutOrderInput>>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemCreateWithoutOrderInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemCreateimagesInput>;
  eagerImages?: Maybe<OrderItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemCreateOtherFeaturesInput>;
  likes?: Maybe<LikeCreateManyWithoutOrderItemInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutOrderItemInput>;
  tags?: Maybe<TagCreateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorCreateManyWithoutOrderItemInput>;
};

export type UserCreateOneWithoutOrderInput = {
  create?: Maybe<UserCreateWithoutOrderInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutOrderInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<AddressCreateManyWithoutUserInput>;
  cart?: Maybe<CartItemCreateManyWithoutUserInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutAuthorInput>;
};

export type CartItemCreateManyWithoutItemInput = {
  create?: Maybe<Array<CartItemCreateWithoutItemInput>>;
  connect?: Maybe<Array<CartItemWhereUniqueInput>>;
};

export type CartItemCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutCartInput;
};

export type UserCreateOneWithoutCartInput = {
  create?: Maybe<UserCreateWithoutCartInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutCartInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<AddressCreateManyWithoutUserInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  Order?: Maybe<OrderCreateManyWithoutUserInput>;
};

export type OrderCreateManyWithoutUserInput = {
  create?: Maybe<Array<OrderCreateWithoutUserInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
  charge: Scalars['String'];
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  Item?: Maybe<ItemCreateOneWithoutOrderInput>;
};

export type ItemCreateOneWithoutOrderInput = {
  create?: Maybe<ItemCreateWithoutOrderInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutOrderInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemCreateimagesInput>;
  eagerImages?: Maybe<ItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemCreateOtherFeaturesInput>;
  Seller?: Maybe<SellerCreateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewCreateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutItemInput>;
  tags?: Maybe<TagCreateManyWithoutItemInput>;
  colors?: Maybe<ColorCreateManyWithoutItemInput>;
  likes?: Maybe<LikeCreateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
};

export type OrderCreateManyWithoutItemsInput = {
  create?: Maybe<Array<OrderCreateWithoutItemsInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateWithoutItemsInput = {
  id?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
  charge: Scalars['String'];
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutOrderInput;
  Item?: Maybe<ItemCreateOneWithoutOrderInput>;
};

export type OrderItemCreateOneWithoutItemReviewInput = {
  create?: Maybe<OrderItemCreateWithoutItemReviewInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
};

export type OrderItemCreateWithoutItemReviewInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemCreateimagesInput>;
  eagerImages?: Maybe<OrderItemCreateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemCreateOtherFeaturesInput>;
  likes?: Maybe<LikeCreateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryCreateManyWithoutOrderItemInput>;
  tags?: Maybe<TagCreateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorCreateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderCreateManyWithoutItemsInput>;
};

export type SellerUpdateWithoutPickupLocationsDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  sellerNationality?: Maybe<Scalars['String']>;
  sellerIdentification?: Maybe<Scalars['String']>;
  confirmPassword?: Maybe<Scalars['String']>;
  EmailIsVerified?: Maybe<Scalars['Boolean']>;
  EmailVarificationHash?: Maybe<Scalars['String']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  SellerItemsCout?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  phone?: Maybe<SellerUpdatephoneInput>;
  Brand?: Maybe<SellerUpdateBrandInput>;
  items?: Maybe<ItemUpdateManyWithoutSellerInput>;
};

export type SellerUpdatephoneInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type SellerUpdateBrandInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ItemUpdateManyWithoutSellerInput = {
  create?: Maybe<Array<ItemCreateWithoutSellerInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
  set?: Maybe<Array<ItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>;
  delete?: Maybe<Array<ItemWhereUniqueInput>>;
  update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutSellerInput>>;
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>;
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutSellerInput>>;
};

export type ItemUpdateWithWhereUniqueWithoutSellerInput = {
  where: ItemWhereUniqueInput;
  data: ItemUpdateWithoutSellerDataInput;
};

export type ItemUpdateWithoutSellerDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutItemInput>;
  tags?: Maybe<TagUpdateManyWithoutItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutItemInput>;
  likes?: Maybe<LikeUpdateManyWithoutItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
};

export type ItemUpdateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ItemUpdateeagerImagesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ItemUpdateOtherFeaturesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ReviewUpdateManyWithoutItemInput = {
  create?: Maybe<Array<ReviewCreateWithoutItemInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutItemInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutItemInput = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutItemDataInput;
};

export type ReviewUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutItemReviewInput>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutItemReviewInput>;
};

export type UserUpdateOneRequiredWithoutItemReviewInput = {
  create?: Maybe<UserCreateWithoutItemReviewInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutItemReviewDataInput>;
  upsert?: Maybe<UserUpsertWithoutItemReviewInput>;
};

export type UserUpdateWithoutItemReviewDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<AddressUpdateManyWithoutUserInput>;
  cart?: Maybe<CartItemUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  Order?: Maybe<OrderUpdateManyWithoutUserInput>;
};

export type AddressUpdateManyWithoutUserInput = {
  create?: Maybe<Array<AddressCreateWithoutUserInput>>;
  connect?: Maybe<Array<AddressWhereUniqueInput>>;
  set?: Maybe<Array<AddressWhereUniqueInput>>;
  disconnect?: Maybe<Array<AddressWhereUniqueInput>>;
  delete?: Maybe<Array<AddressWhereUniqueInput>>;
  update?: Maybe<Array<AddressUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AddressUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<AddressScalarWhereInput>>;
  upsert?: Maybe<Array<AddressUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AddressUpdateWithWhereUniqueWithoutUserInput = {
  where: AddressWhereUniqueInput;
  data: AddressUpdateWithoutUserDataInput;
};

export type AddressUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  MaincontactNubmer?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  OthercontactNubmers?: Maybe<AddressUpdateOthercontactNubmersInput>;
  Seller?: Maybe<SellerUpdateOneWithoutPickupLocationsInput>;
};

export type AddressUpdateManyWithWhereNestedInput = {
  where: AddressScalarWhereInput;
  data: AddressUpdateManyDataInput;
};

export type AddressScalarWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  address?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  state?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  zipCode?: Maybe<StringFilter>;
  MaincontactNubmer?: Maybe<StringFilter>;
  streetAddress1?: Maybe<NullableStringFilter>;
  streetAddress2?: Maybe<NullableStringFilter>;
  company?: Maybe<NullableStringFilter>;
  message?: Maybe<NullableStringFilter>;
  additionalInfo?: Maybe<NullableStringFilter>;
  isPrimary?: Maybe<NullableBooleanFilter>;
  Lat?: Maybe<NullableFloatFilter>;
  Lng?: Maybe<NullableFloatFilter>;
  sellerId?: Maybe<NullableStringFilter>;
  userId?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<AddressScalarWhereInput>>;
  OR?: Maybe<Array<AddressScalarWhereInput>>;
  NOT?: Maybe<Array<AddressScalarWhereInput>>;
};

export type AddressUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  MaincontactNubmer?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  OthercontactNubmers?: Maybe<AddressUpdateOthercontactNubmersInput>;
};

export type AddressUpsertWithWhereUniqueWithoutUserInput = {
  where: AddressWhereUniqueInput;
  update: AddressUpdateWithoutUserDataInput;
  create: AddressCreateWithoutUserInput;
};

export type CartItemUpdateManyWithoutUserInput = {
  create?: Maybe<Array<CartItemCreateWithoutUserInput>>;
  connect?: Maybe<Array<CartItemWhereUniqueInput>>;
  set?: Maybe<Array<CartItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<CartItemWhereUniqueInput>>;
  delete?: Maybe<Array<CartItemWhereUniqueInput>>;
  update?: Maybe<Array<CartItemUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CartItemUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CartItemScalarWhereInput>>;
  upsert?: Maybe<Array<CartItemUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CartItemUpdateWithWhereUniqueWithoutUserInput = {
  where: CartItemWhereUniqueInput;
  data: CartItemUpdateWithoutUserDataInput;
};

export type CartItemUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutCartItemInput>;
};

export type ItemUpdateOneRequiredWithoutCartItemInput = {
  create?: Maybe<ItemCreateWithoutCartItemInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  update?: Maybe<ItemUpdateWithoutCartItemDataInput>;
  upsert?: Maybe<ItemUpsertWithoutCartItemInput>;
};

export type ItemUpdateWithoutCartItemDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
  Seller?: Maybe<SellerUpdateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutItemInput>;
  tags?: Maybe<TagUpdateManyWithoutItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutItemInput>;
  likes?: Maybe<LikeUpdateManyWithoutItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemInput>;
};

export type SellerUpdateOneWithoutItemsInput = {
  create?: Maybe<SellerCreateWithoutItemsInput>;
  connect?: Maybe<SellerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SellerUpdateWithoutItemsDataInput>;
  upsert?: Maybe<SellerUpsertWithoutItemsInput>;
};

export type SellerUpdateWithoutItemsDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  sellerNationality?: Maybe<Scalars['String']>;
  sellerIdentification?: Maybe<Scalars['String']>;
  confirmPassword?: Maybe<Scalars['String']>;
  EmailIsVerified?: Maybe<Scalars['Boolean']>;
  EmailVarificationHash?: Maybe<Scalars['String']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  SellerItemsCout?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  phone?: Maybe<SellerUpdatephoneInput>;
  Brand?: Maybe<SellerUpdateBrandInput>;
  PickupLocations?: Maybe<AddressUpdateManyWithoutSellerInput>;
};

export type AddressUpdateManyWithoutSellerInput = {
  create?: Maybe<Array<AddressCreateWithoutSellerInput>>;
  connect?: Maybe<Array<AddressWhereUniqueInput>>;
  set?: Maybe<Array<AddressWhereUniqueInput>>;
  disconnect?: Maybe<Array<AddressWhereUniqueInput>>;
  delete?: Maybe<Array<AddressWhereUniqueInput>>;
  update?: Maybe<Array<AddressUpdateWithWhereUniqueWithoutSellerInput>>;
  updateMany?: Maybe<Array<AddressUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<AddressScalarWhereInput>>;
  upsert?: Maybe<Array<AddressUpsertWithWhereUniqueWithoutSellerInput>>;
};

export type AddressUpdateWithWhereUniqueWithoutSellerInput = {
  where: AddressWhereUniqueInput;
  data: AddressUpdateWithoutSellerDataInput;
};

export type AddressUpdateWithoutSellerDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  MaincontactNubmer?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  OthercontactNubmers?: Maybe<AddressUpdateOthercontactNubmersInput>;
  User?: Maybe<UserUpdateOneWithoutAddressInput>;
};

export type UserUpdateOneWithoutAddressInput = {
  create?: Maybe<UserCreateWithoutAddressInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutAddressDataInput>;
  upsert?: Maybe<UserUpsertWithoutAddressInput>;
};

export type UserUpdateWithoutAddressDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  cart?: Maybe<CartItemUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  Order?: Maybe<OrderUpdateManyWithoutUserInput>;
};

export type LikeUpdateManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutUserDataInput;
};

export type LikeUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutLikesInput>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutLikesInput>;
};

export type ItemUpdateOneRequiredWithoutLikesInput = {
  create?: Maybe<ItemCreateWithoutLikesInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  update?: Maybe<ItemUpdateWithoutLikesDataInput>;
  upsert?: Maybe<ItemUpsertWithoutLikesInput>;
};

export type ItemUpdateWithoutLikesDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
  Seller?: Maybe<SellerUpdateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutItemInput>;
  tags?: Maybe<TagUpdateManyWithoutItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
};

export type CatagoryUpdateManyWithoutItemInput = {
  create?: Maybe<Array<CatagoryCreateWithoutItemInput>>;
  connect?: Maybe<Array<CatagoryWhereUniqueInput>>;
  set?: Maybe<Array<CatagoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CatagoryWhereUniqueInput>>;
  delete?: Maybe<Array<CatagoryWhereUniqueInput>>;
  update?: Maybe<Array<CatagoryUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<CatagoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CatagoryScalarWhereInput>>;
  upsert?: Maybe<Array<CatagoryUpsertWithWhereUniqueWithoutItemInput>>;
};

export type CatagoryUpdateWithWhereUniqueWithoutItemInput = {
  where: CatagoryWhereUniqueInput;
  data: CatagoryUpdateWithoutItemDataInput;
};

export type CatagoryUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutCatagoryInput>;
};

export type OrderItemUpdateOneWithoutCatagoryInput = {
  create?: Maybe<OrderItemCreateWithoutCatagoryInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrderItemUpdateWithoutCatagoryDataInput>;
  upsert?: Maybe<OrderItemUpsertWithoutCatagoryInput>;
};

export type OrderItemUpdateWithoutCatagoryDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemUpdateimagesInput>;
  eagerImages?: Maybe<OrderItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemUpdateOtherFeaturesInput>;
  likes?: Maybe<LikeUpdateManyWithoutOrderItemInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutOrderItemInput>;
  tags?: Maybe<TagUpdateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemsInput>;
};

export type OrderItemUpdateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type OrderItemUpdateeagerImagesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type OrderItemUpdateOtherFeaturesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type LikeUpdateManyWithoutOrderItemInput = {
  create?: Maybe<Array<LikeCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutOrderItemInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutOrderItemInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutOrderItemInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutOrderItemDataInput;
};

export type LikeUpdateWithoutOrderItemDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutLikesInput>;
  item?: Maybe<ItemUpdateOneRequiredWithoutLikesInput>;
};

export type UserUpdateOneRequiredWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutLikesDataInput>;
  upsert?: Maybe<UserUpsertWithoutLikesInput>;
};

export type UserUpdateWithoutLikesDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<AddressUpdateManyWithoutUserInput>;
  cart?: Maybe<CartItemUpdateManyWithoutUserInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  Order?: Maybe<OrderUpdateManyWithoutUserInput>;
};

export type ReviewUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<ReviewCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutAuthorInput = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutAuthorDataInput;
};

export type ReviewUpdateWithoutAuthorDataInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutItemReviewInput>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutItemReviewInput>;
};

export type ItemUpdateOneRequiredWithoutItemReviewInput = {
  create?: Maybe<ItemCreateWithoutItemReviewInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  update?: Maybe<ItemUpdateWithoutItemReviewDataInput>;
  upsert?: Maybe<ItemUpsertWithoutItemReviewInput>;
};

export type ItemUpdateWithoutItemReviewDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
  Seller?: Maybe<SellerUpdateOneWithoutItemsInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutItemInput>;
  tags?: Maybe<TagUpdateManyWithoutItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutItemInput>;
  likes?: Maybe<LikeUpdateManyWithoutItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
};

export type TagUpdateManyWithoutItemInput = {
  create?: Maybe<Array<TagCreateWithoutItemInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutItemInput>>;
};

export type TagUpdateWithWhereUniqueWithoutItemInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutItemDataInput;
};

export type TagUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutTagsInput>;
};

export type OrderItemUpdateOneWithoutTagsInput = {
  create?: Maybe<OrderItemCreateWithoutTagsInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrderItemUpdateWithoutTagsDataInput>;
  upsert?: Maybe<OrderItemUpsertWithoutTagsInput>;
};

export type OrderItemUpdateWithoutTagsDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemUpdateimagesInput>;
  eagerImages?: Maybe<OrderItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemUpdateOtherFeaturesInput>;
  likes?: Maybe<LikeUpdateManyWithoutOrderItemInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemsInput>;
};

export type ReviewUpdateManyWithoutOrderItemInput = {
  create?: Maybe<Array<ReviewCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutOrderItemInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutOrderItemInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutOrderItemInput = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutOrderItemDataInput;
};

export type ReviewUpdateWithoutOrderItemDataInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutItemReviewInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutItemReviewInput>;
};

export type ReviewUpdateManyWithWhereNestedInput = {
  where: ReviewScalarWhereInput;
  data: ReviewUpdateManyDataInput;
};

export type ReviewScalarWhereInput = {
  id?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  rating?: Maybe<FloatFilter>;
  text?: Maybe<StringFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<ReviewScalarWhereInput>>;
  OR?: Maybe<Array<ReviewScalarWhereInput>>;
  NOT?: Maybe<Array<ReviewScalarWhereInput>>;
};

export type ReviewUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReviewUpsertWithWhereUniqueWithoutOrderItemInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutOrderItemDataInput;
  create: ReviewCreateWithoutOrderItemInput;
};

export type CatagoryUpdateManyWithoutOrderItemInput = {
  create?: Maybe<Array<CatagoryCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<CatagoryWhereUniqueInput>>;
  set?: Maybe<Array<CatagoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CatagoryWhereUniqueInput>>;
  delete?: Maybe<Array<CatagoryWhereUniqueInput>>;
  update?: Maybe<Array<CatagoryUpdateWithWhereUniqueWithoutOrderItemInput>>;
  updateMany?: Maybe<Array<CatagoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CatagoryScalarWhereInput>>;
  upsert?: Maybe<Array<CatagoryUpsertWithWhereUniqueWithoutOrderItemInput>>;
};

export type CatagoryUpdateWithWhereUniqueWithoutOrderItemInput = {
  where: CatagoryWhereUniqueInput;
  data: CatagoryUpdateWithoutOrderItemDataInput;
};

export type CatagoryUpdateWithoutOrderItemDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutCatagoryInput>;
};

export type ItemUpdateOneRequiredWithoutCatagoryInput = {
  create?: Maybe<ItemCreateWithoutCatagoryInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  update?: Maybe<ItemUpdateWithoutCatagoryDataInput>;
  upsert?: Maybe<ItemUpsertWithoutCatagoryInput>;
};

export type ItemUpdateWithoutCatagoryDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
  Seller?: Maybe<SellerUpdateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutItemInput>;
  tags?: Maybe<TagUpdateManyWithoutItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutItemInput>;
  likes?: Maybe<LikeUpdateManyWithoutItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
};

export type ColorUpdateManyWithoutItemInput = {
  create?: Maybe<Array<ColorCreateWithoutItemInput>>;
  connect?: Maybe<Array<ColorWhereUniqueInput>>;
  set?: Maybe<Array<ColorWhereUniqueInput>>;
  disconnect?: Maybe<Array<ColorWhereUniqueInput>>;
  delete?: Maybe<Array<ColorWhereUniqueInput>>;
  update?: Maybe<Array<ColorUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<ColorUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ColorScalarWhereInput>>;
  upsert?: Maybe<Array<ColorUpsertWithWhereUniqueWithoutItemInput>>;
};

export type ColorUpdateWithWhereUniqueWithoutItemInput = {
  where: ColorWhereUniqueInput;
  data: ColorUpdateWithoutItemDataInput;
};

export type ColorUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutColorsInput>;
};

export type OrderItemUpdateOneWithoutColorsInput = {
  create?: Maybe<OrderItemCreateWithoutColorsInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrderItemUpdateWithoutColorsDataInput>;
  upsert?: Maybe<OrderItemUpsertWithoutColorsInput>;
};

export type OrderItemUpdateWithoutColorsDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemUpdateimagesInput>;
  eagerImages?: Maybe<OrderItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemUpdateOtherFeaturesInput>;
  likes?: Maybe<LikeUpdateManyWithoutOrderItemInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutOrderItemInput>;
  tags?: Maybe<TagUpdateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemsInput>;
};

export type TagUpdateManyWithoutOrderItemInput = {
  create?: Maybe<Array<TagCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutOrderItemInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutOrderItemInput>>;
};

export type TagUpdateWithWhereUniqueWithoutOrderItemInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutOrderItemDataInput;
};

export type TagUpdateWithoutOrderItemDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutTagsInput>;
};

export type ItemUpdateOneRequiredWithoutTagsInput = {
  create?: Maybe<ItemCreateWithoutTagsInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  update?: Maybe<ItemUpdateWithoutTagsDataInput>;
  upsert?: Maybe<ItemUpsertWithoutTagsInput>;
};

export type ItemUpdateWithoutTagsDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
  Seller?: Maybe<SellerUpdateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutItemInput>;
  likes?: Maybe<LikeUpdateManyWithoutItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
};

export type LikeUpdateManyWithoutItemInput = {
  create?: Maybe<Array<LikeCreateWithoutItemInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutItemInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutItemInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutItemDataInput;
};

export type LikeUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutLikesInput>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutLikesInput>;
};

export type OrderItemUpdateOneWithoutLikesInput = {
  create?: Maybe<OrderItemCreateWithoutLikesInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrderItemUpdateWithoutLikesDataInput>;
  upsert?: Maybe<OrderItemUpsertWithoutLikesInput>;
};

export type OrderItemUpdateWithoutLikesDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemUpdateimagesInput>;
  eagerImages?: Maybe<OrderItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemUpdateOtherFeaturesInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutOrderItemInput>;
  tags?: Maybe<TagUpdateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemsInput>;
};

export type ColorUpdateManyWithoutOrderItemInput = {
  create?: Maybe<Array<ColorCreateWithoutOrderItemInput>>;
  connect?: Maybe<Array<ColorWhereUniqueInput>>;
  set?: Maybe<Array<ColorWhereUniqueInput>>;
  disconnect?: Maybe<Array<ColorWhereUniqueInput>>;
  delete?: Maybe<Array<ColorWhereUniqueInput>>;
  update?: Maybe<Array<ColorUpdateWithWhereUniqueWithoutOrderItemInput>>;
  updateMany?: Maybe<Array<ColorUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ColorScalarWhereInput>>;
  upsert?: Maybe<Array<ColorUpsertWithWhereUniqueWithoutOrderItemInput>>;
};

export type ColorUpdateWithWhereUniqueWithoutOrderItemInput = {
  where: ColorWhereUniqueInput;
  data: ColorUpdateWithoutOrderItemDataInput;
};

export type ColorUpdateWithoutOrderItemDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutColorsInput>;
};

export type ItemUpdateOneRequiredWithoutColorsInput = {
  create?: Maybe<ItemCreateWithoutColorsInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  update?: Maybe<ItemUpdateWithoutColorsDataInput>;
  upsert?: Maybe<ItemUpsertWithoutColorsInput>;
};

export type ItemUpdateWithoutColorsDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
  Seller?: Maybe<SellerUpdateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutItemInput>;
  tags?: Maybe<TagUpdateManyWithoutItemInput>;
  likes?: Maybe<LikeUpdateManyWithoutItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
};

export type OrderUpdateManyWithoutItemInput = {
  create?: Maybe<Array<OrderCreateWithoutItemInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutItemInput>>;
};

export type OrderUpdateWithWhereUniqueWithoutItemInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutItemDataInput;
};

export type OrderUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  charge?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrderInput>;
};

export type OrderItemUpdateManyWithoutOrderInput = {
  create?: Maybe<Array<OrderItemCreateWithoutOrderInput>>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  delete?: Maybe<Array<OrderItemWhereUniqueInput>>;
  update?: Maybe<Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<OrderItemUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<OrderItemScalarWhereInput>>;
  upsert?: Maybe<Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateWithoutOrderDataInput;
};

export type OrderItemUpdateWithoutOrderDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemUpdateimagesInput>;
  eagerImages?: Maybe<OrderItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemUpdateOtherFeaturesInput>;
  likes?: Maybe<LikeUpdateManyWithoutOrderItemInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutOrderItemInput>;
  tags?: Maybe<TagUpdateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutOrderItemInput>;
};

export type OrderItemUpdateManyWithWhereNestedInput = {
  where: OrderItemScalarWhereInput;
  data: OrderItemUpdateManyDataInput;
};

export type OrderItemScalarWhereInput = {
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
  beforeDiscountPrice?: Maybe<FloatFilter>;
  overview?: Maybe<NullableStringFilter>;
  otherInfo?: Maybe<NullableStringFilter>;
  videoLink?: Maybe<NullableStringFilter>;
  brand?: Maybe<NullableStringFilter>;
  weight?: Maybe<NullableStringFilter>;
  dimensions?: Maybe<NullableStringFilter>;
  materials?: Maybe<NullableStringFilter>;
  stock?: Maybe<NullableIntFilter>;
  likes?: Maybe<LikeFilter>;
  itemReview?: Maybe<ReviewFilter>;
  catagory?: Maybe<CatagoryFilter>;
  tags?: Maybe<TagFilter>;
  colors?: Maybe<ColorFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Order?: Maybe<OrderFilter>;
  AND?: Maybe<Array<OrderItemScalarWhereInput>>;
  OR?: Maybe<Array<OrderItemScalarWhereInput>>;
  NOT?: Maybe<Array<OrderItemScalarWhereInput>>;
};

export type OrderItemUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemUpdateimagesInput>;
  eagerImages?: Maybe<OrderItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemUpdateOtherFeaturesInput>;
};

export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
  where: OrderItemWhereUniqueInput;
  update: OrderItemUpdateWithoutOrderDataInput;
  create: OrderItemCreateWithoutOrderInput;
};

export type UserUpdateOneRequiredWithoutOrderInput = {
  create?: Maybe<UserCreateWithoutOrderInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutOrderDataInput>;
  upsert?: Maybe<UserUpsertWithoutOrderInput>;
};

export type UserUpdateWithoutOrderDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<AddressUpdateManyWithoutUserInput>;
  cart?: Maybe<CartItemUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
};

export type UserUpsertWithoutOrderInput = {
  update: UserUpdateWithoutOrderDataInput;
  create: UserCreateWithoutOrderInput;
};

export type OrderUpdateManyWithWhereNestedInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyDataInput;
};

export type OrderScalarWhereInput = {
  id?: Maybe<StringFilter>;
  items?: Maybe<OrderItemFilter>;
  total?: Maybe<IntFilter>;
  userId?: Maybe<StringFilter>;
  charge?: Maybe<StringFilter>;
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  itemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<OrderScalarWhereInput>>;
  OR?: Maybe<Array<OrderScalarWhereInput>>;
  NOT?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  charge?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderUpsertWithWhereUniqueWithoutItemInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutItemDataInput;
  create: OrderCreateWithoutItemInput;
};

export type CartItemUpdateManyWithoutItemInput = {
  create?: Maybe<Array<CartItemCreateWithoutItemInput>>;
  connect?: Maybe<Array<CartItemWhereUniqueInput>>;
  set?: Maybe<Array<CartItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<CartItemWhereUniqueInput>>;
  delete?: Maybe<Array<CartItemWhereUniqueInput>>;
  update?: Maybe<Array<CartItemUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<CartItemUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CartItemScalarWhereInput>>;
  upsert?: Maybe<Array<CartItemUpsertWithWhereUniqueWithoutItemInput>>;
};

export type CartItemUpdateWithWhereUniqueWithoutItemInput = {
  where: CartItemWhereUniqueInput;
  data: CartItemUpdateWithoutItemDataInput;
};

export type CartItemUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutCartInput>;
};

export type UserUpdateOneRequiredWithoutCartInput = {
  create?: Maybe<UserCreateWithoutCartInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCartDataInput>;
  upsert?: Maybe<UserUpsertWithoutCartInput>;
};

export type UserUpdateWithoutCartDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Permission>;
  PasswordResetTokenExpiry?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  PasswordResetToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<AddressUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  Order?: Maybe<OrderUpdateManyWithoutUserInput>;
};

export type OrderUpdateManyWithoutUserInput = {
  create?: Maybe<Array<OrderCreateWithoutUserInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutUserInput>>;
};

export type OrderUpdateWithWhereUniqueWithoutUserInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutUserDataInput;
};

export type OrderUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  charge?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  Item?: Maybe<ItemUpdateOneWithoutOrderInput>;
};

export type ItemUpdateOneWithoutOrderInput = {
  create?: Maybe<ItemCreateWithoutOrderInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ItemUpdateWithoutOrderDataInput>;
  upsert?: Maybe<ItemUpsertWithoutOrderInput>;
};

export type ItemUpdateWithoutOrderDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
  Seller?: Maybe<SellerUpdateOneWithoutItemsInput>;
  itemReview?: Maybe<ReviewUpdateManyWithoutItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutItemInput>;
  tags?: Maybe<TagUpdateManyWithoutItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutItemInput>;
  likes?: Maybe<LikeUpdateManyWithoutItemInput>;
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
};

export type ItemUpsertWithoutOrderInput = {
  update: ItemUpdateWithoutOrderDataInput;
  create: ItemCreateWithoutOrderInput;
};

export type OrderUpsertWithWhereUniqueWithoutUserInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutUserDataInput;
  create: OrderCreateWithoutUserInput;
};

export type UserUpsertWithoutCartInput = {
  update: UserUpdateWithoutCartDataInput;
  create: UserCreateWithoutCartInput;
};

export type CartItemUpdateManyWithWhereNestedInput = {
  where: CartItemScalarWhereInput;
  data: CartItemUpdateManyDataInput;
};

export type CartItemScalarWhereInput = {
  id?: Maybe<StringFilter>;
  quantity?: Maybe<IntFilter>;
  itemId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<CartItemScalarWhereInput>>;
  OR?: Maybe<Array<CartItemScalarWhereInput>>;
  NOT?: Maybe<Array<CartItemScalarWhereInput>>;
};

export type CartItemUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CartItemUpsertWithWhereUniqueWithoutItemInput = {
  where: CartItemWhereUniqueInput;
  update: CartItemUpdateWithoutItemDataInput;
  create: CartItemCreateWithoutItemInput;
};

export type ItemUpsertWithoutColorsInput = {
  update: ItemUpdateWithoutColorsDataInput;
  create: ItemCreateWithoutColorsInput;
};

export type ColorUpdateManyWithWhereNestedInput = {
  where: ColorScalarWhereInput;
  data: ColorUpdateManyDataInput;
};

export type ColorScalarWhereInput = {
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ColorScalarWhereInput>>;
  OR?: Maybe<Array<ColorScalarWhereInput>>;
  NOT?: Maybe<Array<ColorScalarWhereInput>>;
};

export type ColorUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorUpsertWithWhereUniqueWithoutOrderItemInput = {
  where: ColorWhereUniqueInput;
  update: ColorUpdateWithoutOrderItemDataInput;
  create: ColorCreateWithoutOrderItemInput;
};

export type OrderUpdateManyWithoutItemsInput = {
  create?: Maybe<Array<OrderCreateWithoutItemsInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutItemsInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutItemsInput>>;
};

export type OrderUpdateWithWhereUniqueWithoutItemsInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutItemsDataInput;
};

export type OrderUpdateWithoutItemsDataInput = {
  id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  charge?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrderInput>;
  Item?: Maybe<ItemUpdateOneWithoutOrderInput>;
};

export type OrderUpsertWithWhereUniqueWithoutItemsInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutItemsDataInput;
  create: OrderCreateWithoutItemsInput;
};

export type OrderItemUpsertWithoutLikesInput = {
  update: OrderItemUpdateWithoutLikesDataInput;
  create: OrderItemCreateWithoutLikesInput;
};

export type LikeUpdateManyWithWhereNestedInput = {
  where: LikeScalarWhereInput;
  data: LikeUpdateManyDataInput;
};

export type LikeScalarWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<LikeScalarWhereInput>>;
  OR?: Maybe<Array<LikeScalarWhereInput>>;
  NOT?: Maybe<Array<LikeScalarWhereInput>>;
};

export type LikeUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LikeUpsertWithWhereUniqueWithoutItemInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutItemDataInput;
  create: LikeCreateWithoutItemInput;
};

export type ItemUpsertWithoutTagsInput = {
  update: ItemUpdateWithoutTagsDataInput;
  create: ItemCreateWithoutTagsInput;
};

export type TagUpdateManyWithWhereNestedInput = {
  where: TagScalarWhereInput;
  data: TagUpdateManyDataInput;
};

export type TagScalarWhereInput = {
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
};

export type TagUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagUpsertWithWhereUniqueWithoutOrderItemInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutOrderItemDataInput;
  create: TagCreateWithoutOrderItemInput;
};

export type OrderItemUpsertWithoutColorsInput = {
  update: OrderItemUpdateWithoutColorsDataInput;
  create: OrderItemCreateWithoutColorsInput;
};

export type ColorUpsertWithWhereUniqueWithoutItemInput = {
  where: ColorWhereUniqueInput;
  update: ColorUpdateWithoutItemDataInput;
  create: ColorCreateWithoutItemInput;
};

export type ItemUpsertWithoutCatagoryInput = {
  update: ItemUpdateWithoutCatagoryDataInput;
  create: ItemCreateWithoutCatagoryInput;
};

export type CatagoryUpdateManyWithWhereNestedInput = {
  where: CatagoryScalarWhereInput;
  data: CatagoryUpdateManyDataInput;
};

export type CatagoryScalarWhereInput = {
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<CatagoryScalarWhereInput>>;
  OR?: Maybe<Array<CatagoryScalarWhereInput>>;
  NOT?: Maybe<Array<CatagoryScalarWhereInput>>;
};

export type CatagoryUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CatagoryUpsertWithWhereUniqueWithoutOrderItemInput = {
  where: CatagoryWhereUniqueInput;
  update: CatagoryUpdateWithoutOrderItemDataInput;
  create: CatagoryCreateWithoutOrderItemInput;
};

export type OrderItemUpsertWithoutTagsInput = {
  update: OrderItemUpdateWithoutTagsDataInput;
  create: OrderItemCreateWithoutTagsInput;
};

export type TagUpsertWithWhereUniqueWithoutItemInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutItemDataInput;
  create: TagCreateWithoutItemInput;
};

export type ItemUpsertWithoutItemReviewInput = {
  update: ItemUpdateWithoutItemReviewDataInput;
  create: ItemCreateWithoutItemReviewInput;
};

export type OrderItemUpdateOneWithoutItemReviewInput = {
  create?: Maybe<OrderItemCreateWithoutItemReviewInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrderItemUpdateWithoutItemReviewDataInput>;
  upsert?: Maybe<OrderItemUpsertWithoutItemReviewInput>;
};

export type OrderItemUpdateWithoutItemReviewDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<OrderItemUpdateimagesInput>;
  eagerImages?: Maybe<OrderItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<OrderItemUpdateOtherFeaturesInput>;
  likes?: Maybe<LikeUpdateManyWithoutOrderItemInput>;
  catagory?: Maybe<CatagoryUpdateManyWithoutOrderItemInput>;
  tags?: Maybe<TagUpdateManyWithoutOrderItemInput>;
  colors?: Maybe<ColorUpdateManyWithoutOrderItemInput>;
  Order?: Maybe<OrderUpdateManyWithoutItemsInput>;
};

export type OrderItemUpsertWithoutItemReviewInput = {
  update: OrderItemUpdateWithoutItemReviewDataInput;
  create: OrderItemCreateWithoutItemReviewInput;
};

export type ReviewUpsertWithWhereUniqueWithoutAuthorInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutAuthorDataInput;
  create: ReviewCreateWithoutAuthorInput;
};

export type UserUpsertWithoutLikesInput = {
  update: UserUpdateWithoutLikesDataInput;
  create: UserCreateWithoutLikesInput;
};

export type LikeUpsertWithWhereUniqueWithoutOrderItemInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutOrderItemDataInput;
  create: LikeCreateWithoutOrderItemInput;
};

export type OrderItemUpsertWithoutCatagoryInput = {
  update: OrderItemUpdateWithoutCatagoryDataInput;
  create: OrderItemCreateWithoutCatagoryInput;
};

export type CatagoryUpsertWithWhereUniqueWithoutItemInput = {
  where: CatagoryWhereUniqueInput;
  update: CatagoryUpdateWithoutItemDataInput;
  create: CatagoryCreateWithoutItemInput;
};

export type ItemUpsertWithoutLikesInput = {
  update: ItemUpdateWithoutLikesDataInput;
  create: ItemCreateWithoutLikesInput;
};

export type LikeUpsertWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutUserDataInput;
  create: LikeCreateWithoutUserInput;
};

export type UserUpsertWithoutAddressInput = {
  update: UserUpdateWithoutAddressDataInput;
  create: UserCreateWithoutAddressInput;
};

export type AddressUpsertWithWhereUniqueWithoutSellerInput = {
  where: AddressWhereUniqueInput;
  update: AddressUpdateWithoutSellerDataInput;
  create: AddressCreateWithoutSellerInput;
};

export type SellerUpsertWithoutItemsInput = {
  update: SellerUpdateWithoutItemsDataInput;
  create: SellerCreateWithoutItemsInput;
};

export type ItemUpsertWithoutCartItemInput = {
  update: ItemUpdateWithoutCartItemDataInput;
  create: ItemCreateWithoutCartItemInput;
};

export type CartItemUpsertWithWhereUniqueWithoutUserInput = {
  where: CartItemWhereUniqueInput;
  update: CartItemUpdateWithoutUserDataInput;
  create: CartItemCreateWithoutUserInput;
};

export type UserUpsertWithoutItemReviewInput = {
  update: UserUpdateWithoutItemReviewDataInput;
  create: UserCreateWithoutItemReviewInput;
};

export type ReviewUpsertWithWhereUniqueWithoutItemInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutItemDataInput;
  create: ReviewCreateWithoutItemInput;
};

export type ItemUpdateManyWithWhereNestedInput = {
  where: ItemScalarWhereInput;
  data: ItemUpdateManyDataInput;
};

export type ItemScalarWhereInput = {
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  overview?: Maybe<NullableStringFilter>;
  brand?: Maybe<NullableStringFilter>;
  weight?: Maybe<NullableStringFilter>;
  dimensions?: Maybe<NullableStringFilter>;
  materials?: Maybe<NullableStringFilter>;
  otherInfo?: Maybe<NullableStringFilter>;
  videoLink?: Maybe<NullableStringFilter>;
  sellerId?: Maybe<NullableStringFilter>;
  price?: Maybe<FloatFilter>;
  beforeDiscountPrice?: Maybe<FloatFilter>;
  stock?: Maybe<NullableIntFilter>;
  likesCount?: Maybe<NullableIntFilter>;
  reviewCount?: Maybe<NullableIntFilter>;
  itemReview?: Maybe<ReviewFilter>;
  catagory?: Maybe<CatagoryFilter>;
  tags?: Maybe<TagFilter>;
  colors?: Maybe<ColorFilter>;
  likes?: Maybe<LikeFilter>;
  Order?: Maybe<OrderFilter>;
  CartItem?: Maybe<CartItemFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<ItemScalarWhereInput>>;
  OR?: Maybe<Array<ItemScalarWhereInput>>;
  NOT?: Maybe<Array<ItemScalarWhereInput>>;
};

export type ItemUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  beforeDiscountPrice?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ItemUpdateimagesInput>;
  eagerImages?: Maybe<ItemUpdateeagerImagesInput>;
  OtherFeatures?: Maybe<ItemUpdateOtherFeaturesInput>;
};

export type ItemUpsertWithWhereUniqueWithoutSellerInput = {
  where: ItemWhereUniqueInput;
  update: ItemUpdateWithoutSellerDataInput;
  create: ItemCreateWithoutSellerInput;
};

export type SellerUpsertWithoutPickupLocationsInput = {
  update: SellerUpdateWithoutPickupLocationsDataInput;
  create: SellerCreateWithoutPickupLocationsInput;
};

export type AddressQueryVariables = {};


export type AddressQuery = (
  { __typename?: 'Query' }
  & { addresses: Array<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'name' | 'address' | 'country' | 'state' | 'city' | 'streetAddress1' | 'streetAddress2' | 'isPrimary' | 'Lat' | 'Lng'>
  )> }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { CurrentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'avatar' | 'role' | 'permissions' | 'likesCount' | 'reviewCount'>
    & { cart: Array<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'itemId'>
    )>, likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'id' | 'itemId'>
    )>, address: Array<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'name' | 'address' | 'country' | 'state' | 'city' | 'streetAddress1' | 'streetAddress2' | 'isPrimary' | 'Lat' | 'Lng'>
    )> }
  )> }
);

export type User_Login_MutationMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type User_Login_MutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UserLogin'>
);

export type Register_UserMutationVariables = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type Register_UserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'CreateUser'>
);

export type UserLogoutMutationVariables = {};


export type UserLogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UserLogout'>
);

export type DeleteUserAccountMutationVariables = {
  userId: Scalars['String'];
};


export type DeleteUserAccountMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteUserAccount'>
);

export type UserForgotPasswordMutationVariables = {
  email: Scalars['String'];
};


export type UserForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UserForgotPasswordRequest'>
);

export type UserResetPasswordMutationVariables = {
  token: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type UserResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ResetUserPassword'>
);

export type SellerLoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type SellerLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'SellerLogin'>
);

export type CurrentSellerQueryVariables = {};


export type CurrentSellerQuery = (
  { __typename?: 'Query' }
  & { CurrentSeller?: Maybe<(
    { __typename?: 'Seller' }
    & Pick<Seller, 'id' | 'name' | 'storeName' | 'sellerNationality' | 'sellerIdentification' | 'EmailIsVerified' | 'SellerItemsCout' | 'role' | 'phone' | 'Brand' | 'permissions'>
    & { PickupLocations: Array<(
      { __typename?: 'Address' }
      & Pick<Address, 'address'>
    )>, items: Array<(
      { __typename?: 'Item' }
      & Pick<Item, 'id'>
    )> }
  )> }
);

export type CreateSellerMutationVariables = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  storeName: Scalars['String'];
  sellerNationality: Scalars['String'];
  sellerIdentification: Scalars['String'];
  Brand?: Maybe<Array<Scalars['String']>>;
  AddressName: Scalars['String'];
  AddressAddress: Scalars['String'];
  AddressCountry?: Maybe<Scalars['String']>;
  AddressState?: Maybe<Scalars['String']>;
  AddressCity?: Maybe<Scalars['String']>;
  AddressZipCode?: Maybe<Scalars['String']>;
  AddressMaincontactNubmer: Scalars['String'];
  AddressStreetAddress1?: Maybe<Scalars['String']>;
  AddressStreetAddress2?: Maybe<Scalars['String']>;
  AddressCompany?: Maybe<Scalars['String']>;
};


export type CreateSellerMutation = (
  { __typename?: 'Mutation' }
  & { CreateSeller: (
    { __typename?: 'Seller' }
    & Pick<Seller, 'id' | 'name' | 'email' | 'storeName' | 'sellerNationality' | 'EmailIsVerified' | 'SellerItemsCout' | 'role' | 'phone' | 'Brand' | 'permissions'>
    & { items: Array<(
      { __typename?: 'Item' }
      & Pick<Item, 'title' | 'images'>
    )>, PickupLocations: Array<(
      { __typename?: 'Address' }
      & Pick<Address, 'name' | 'address'>
    )> }
  ) }
);

export type VerifySellerMutationVariables = {
  SellerVerificationToken: Scalars['String'];
};


export type VerifySellerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'VerifySeller'>
);

export type RequestVerificationTokenMutationVariables = {
  email: Scalars['String'];
};


export type RequestVerificationTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'RequestEmailVerificationToken'>
);

export type SellerRequestPasswordResetMutationVariables = {
  email: Scalars['String'];
};


export type SellerRequestPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'SellerForgotPasswordRequest'>
);

export type SellerResetPasswordMutationVariables = {
  token: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type SellerResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ResetSellerPassword'>
);

export type UsersOrdersQueryVariables = {};


export type UsersOrdersQuery = (
  { __typename?: 'Query' }
  & { UserOrder?: Maybe<Array<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'total' | 'charge' | 'status'>
  )>> }
);

export type CreateItemMutationVariables = {
  title: Scalars['String'];
  description: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  beforeDiscountPrice: Scalars['Float'];
  stock?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Scalars['String']>>;
  eagerImages?: Maybe<Array<Scalars['String']>>;
  catagory?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  colors?: Maybe<Array<Scalars['String']>>;
  otherFeature: Array<Scalars['String']>;
};


export type CreateItemMutation = (
  { __typename?: 'Mutation' }
  & { CreateItem: (
    { __typename?: 'Item' }
    & Pick<Item, 'id'>
  ) }
);

export type ItemQueryVariables = {
  id: Scalars['String'];
};


export type ItemQuery = (
  { __typename?: 'Query' }
  & { item?: Maybe<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'likesCount' | 'reviewCount' | 'images' | 'eagerImages' | 'OtherFeatures' | 'title' | 'description' | 'overview' | 'otherInfo' | 'videoLink' | 'brand' | 'weight' | 'dimensions' | 'materials' | 'price' | 'beforeDiscountPrice' | 'stock'>
    & { likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'id'>
    )>, itemReview: Array<(
      { __typename?: 'Review' }
      & Pick<Review, 'id'>
    )>, catagory: Array<(
      { __typename?: 'Catagory' }
      & Pick<Catagory, 'id' | 'text'>
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'text'>
    )>, colors: Array<(
      { __typename?: 'Color' }
      & Pick<Color, 'id' | 'text'>
    )> }
  )> }
);

export type ItemsQueryVariables = {};


export type ItemsQuery = (
  { __typename?: 'Query' }
  & { items: Array<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'likesCount' | 'reviewCount' | 'images' | 'eagerImages' | 'OtherFeatures' | 'title' | 'description' | 'overview' | 'otherInfo' | 'videoLink' | 'brand' | 'weight' | 'dimensions' | 'materials' | 'price' | 'beforeDiscountPrice' | 'stock'>
    & { likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'id'>
    )>, itemReview: Array<(
      { __typename?: 'Review' }
      & Pick<Review, 'text'>
    )>, catagory: Array<(
      { __typename?: 'Catagory' }
      & Pick<Catagory, 'text'>
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'text'>
    )>, colors: Array<(
      { __typename?: 'Color' }
      & Pick<Color, 'text'>
    )> }
  )> }
);

export type DeleteItemMutationVariables = {
  itemId: Scalars['String'];
};


export type DeleteItemMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteItem'>
);

export type ToggleLikeMutationVariables = {
  itemId: Scalars['String'];
};


export type ToggleLikeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ToggleLikeItem'>
);


export const AddressDocument = gql`
    query Address {
  addresses {
    id
    name
    address
    country
    state
    city
    streetAddress1
    streetAddress2
    isPrimary
    Lat
    Lng
  }
}
    `;
export type AddressComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AddressQuery, AddressQueryVariables>, 'query'>;

    export const AddressComponent = (props: AddressComponentProps) => (
      <ApolloReactComponents.Query<AddressQuery, AddressQueryVariables> query={AddressDocument} {...props} />
    );
    
export type AddressProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AddressQuery, AddressQueryVariables>
    } & TChildProps;
export function withAddress<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddressQuery,
  AddressQueryVariables,
  AddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AddressQuery, AddressQueryVariables, AddressProps<TChildProps, TDataName>>(AddressDocument, {
      alias: 'address',
      ...operationOptions
    });
};

/**
 * __useAddressQuery__
 *
 * To run a query within a React component, call `useAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddressQuery, AddressQueryVariables>) {
        return ApolloReactHooks.useQuery<AddressQuery, AddressQueryVariables>(AddressDocument, baseOptions);
      }
export function useAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddressQuery, AddressQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddressQuery, AddressQueryVariables>(AddressDocument, baseOptions);
        }
export type AddressQueryHookResult = ReturnType<typeof useAddressQuery>;
export type AddressLazyQueryHookResult = ReturnType<typeof useAddressLazyQuery>;
export type AddressQueryResult = ApolloReactCommon.QueryResult<AddressQuery, AddressQueryVariables>;
export const MeDocument = gql`
    query Me {
  CurrentUser {
    id
    name
    email
    avatar
    role
    permissions
    likesCount
    reviewCount
    cart {
      id
      itemId
    }
    likes {
      id
      itemId
    }
    address {
      id
      name
      address
      country
      state
      city
      streetAddress1
      streetAddress2
      isPrimary
      Lat
      Lng
    }
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    
export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
    } & TChildProps;
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const User_Login_MutationDocument = gql`
    mutation USER_LOGIN_MUTATION($email: String!, $password: String!) {
  UserLogin(email: $email, password: $password)
}
    `;
export type User_Login_MutationMutationFn = ApolloReactCommon.MutationFunction<User_Login_MutationMutation, User_Login_MutationMutationVariables>;
export type User_Login_MutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<User_Login_MutationMutation, User_Login_MutationMutationVariables>, 'mutation'>;

    export const User_Login_MutationComponent = (props: User_Login_MutationComponentProps) => (
      <ApolloReactComponents.Mutation<User_Login_MutationMutation, User_Login_MutationMutationVariables> mutation={User_Login_MutationDocument} {...props} />
    );
    
export type User_Login_MutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<User_Login_MutationMutation, User_Login_MutationMutationVariables>
    } & TChildProps;
export function withUser_Login_Mutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  User_Login_MutationMutation,
  User_Login_MutationMutationVariables,
  User_Login_MutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, User_Login_MutationMutation, User_Login_MutationMutationVariables, User_Login_MutationProps<TChildProps, TDataName>>(User_Login_MutationDocument, {
      alias: 'userLoginMutation',
      ...operationOptions
    });
};

/**
 * __useUser_Login_MutationMutation__
 *
 * To run a mutation, you first call `useUser_Login_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_Login_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutationMutation, { data, loading, error }] = useUser_Login_MutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUser_Login_MutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<User_Login_MutationMutation, User_Login_MutationMutationVariables>) {
        return ApolloReactHooks.useMutation<User_Login_MutationMutation, User_Login_MutationMutationVariables>(User_Login_MutationDocument, baseOptions);
      }
export type User_Login_MutationMutationHookResult = ReturnType<typeof useUser_Login_MutationMutation>;
export type User_Login_MutationMutationResult = ApolloReactCommon.MutationResult<User_Login_MutationMutation>;
export type User_Login_MutationMutationOptions = ApolloReactCommon.BaseMutationOptions<User_Login_MutationMutation, User_Login_MutationMutationVariables>;
export const Register_UserDocument = gql`
    mutation REGISTER_USER($name: String!, $email: String!, $password: String!) {
  CreateUser(name: $name, email: $email, password: $password)
}
    `;
export type Register_UserMutationFn = ApolloReactCommon.MutationFunction<Register_UserMutation, Register_UserMutationVariables>;
export type Register_UserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Register_UserMutation, Register_UserMutationVariables>, 'mutation'>;

    export const Register_UserComponent = (props: Register_UserComponentProps) => (
      <ApolloReactComponents.Mutation<Register_UserMutation, Register_UserMutationVariables> mutation={Register_UserDocument} {...props} />
    );
    
export type Register_UserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Register_UserMutation, Register_UserMutationVariables>
    } & TChildProps;
export function withRegister_User<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Register_UserMutation,
  Register_UserMutationVariables,
  Register_UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Register_UserMutation, Register_UserMutationVariables, Register_UserProps<TChildProps, TDataName>>(Register_UserDocument, {
      alias: 'registerUser',
      ...operationOptions
    });
};

/**
 * __useRegister_UserMutation__
 *
 * To run a mutation, you first call `useRegister_UserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegister_UserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegister_UserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegister_UserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Register_UserMutation, Register_UserMutationVariables>) {
        return ApolloReactHooks.useMutation<Register_UserMutation, Register_UserMutationVariables>(Register_UserDocument, baseOptions);
      }
export type Register_UserMutationHookResult = ReturnType<typeof useRegister_UserMutation>;
export type Register_UserMutationResult = ApolloReactCommon.MutationResult<Register_UserMutation>;
export type Register_UserMutationOptions = ApolloReactCommon.BaseMutationOptions<Register_UserMutation, Register_UserMutationVariables>;
export const UserLogoutDocument = gql`
    mutation UserLogout {
  UserLogout
}
    `;
export type UserLogoutMutationFn = ApolloReactCommon.MutationFunction<UserLogoutMutation, UserLogoutMutationVariables>;
export type UserLogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UserLogoutMutation, UserLogoutMutationVariables>, 'mutation'>;

    export const UserLogoutComponent = (props: UserLogoutComponentProps) => (
      <ApolloReactComponents.Mutation<UserLogoutMutation, UserLogoutMutationVariables> mutation={UserLogoutDocument} {...props} />
    );
    
export type UserLogoutProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UserLogoutMutation, UserLogoutMutationVariables>
    } & TChildProps;
export function withUserLogout<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserLogoutMutation,
  UserLogoutMutationVariables,
  UserLogoutProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UserLogoutMutation, UserLogoutMutationVariables, UserLogoutProps<TChildProps, TDataName>>(UserLogoutDocument, {
      alias: 'userLogout',
      ...operationOptions
    });
};

/**
 * __useUserLogoutMutation__
 *
 * To run a mutation, you first call `useUserLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLogoutMutation, { data, loading, error }] = useUserLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useUserLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserLogoutMutation, UserLogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<UserLogoutMutation, UserLogoutMutationVariables>(UserLogoutDocument, baseOptions);
      }
export type UserLogoutMutationHookResult = ReturnType<typeof useUserLogoutMutation>;
export type UserLogoutMutationResult = ApolloReactCommon.MutationResult<UserLogoutMutation>;
export type UserLogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<UserLogoutMutation, UserLogoutMutationVariables>;
export const DeleteUserAccountDocument = gql`
    mutation DeleteUserAccount($userId: String!) {
  DeleteUserAccount(userId: $userId)
}
    `;
export type DeleteUserAccountMutationFn = ApolloReactCommon.MutationFunction<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>;
export type DeleteUserAccountComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>, 'mutation'>;

    export const DeleteUserAccountComponent = (props: DeleteUserAccountComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteUserAccountMutation, DeleteUserAccountMutationVariables> mutation={DeleteUserAccountDocument} {...props} />
    );
    
export type DeleteUserAccountProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>
    } & TChildProps;
export function withDeleteUserAccount<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserAccountMutation,
  DeleteUserAccountMutationVariables,
  DeleteUserAccountProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserAccountMutation, DeleteUserAccountMutationVariables, DeleteUserAccountProps<TChildProps, TDataName>>(DeleteUserAccountDocument, {
      alias: 'deleteUserAccount',
      ...operationOptions
    });
};

/**
 * __useDeleteUserAccountMutation__
 *
 * To run a mutation, you first call `useDeleteUserAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAccountMutation, { data, loading, error }] = useDeleteUserAccountMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>(DeleteUserAccountDocument, baseOptions);
      }
export type DeleteUserAccountMutationHookResult = ReturnType<typeof useDeleteUserAccountMutation>;
export type DeleteUserAccountMutationResult = ApolloReactCommon.MutationResult<DeleteUserAccountMutation>;
export type DeleteUserAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>;
export const UserForgotPasswordDocument = gql`
    mutation UserForgotPassword($email: String!) {
  UserForgotPasswordRequest(email: $email)
}
    `;
export type UserForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<UserForgotPasswordMutation, UserForgotPasswordMutationVariables>;
export type UserForgotPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UserForgotPasswordMutation, UserForgotPasswordMutationVariables>, 'mutation'>;

    export const UserForgotPasswordComponent = (props: UserForgotPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<UserForgotPasswordMutation, UserForgotPasswordMutationVariables> mutation={UserForgotPasswordDocument} {...props} />
    );
    
export type UserForgotPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UserForgotPasswordMutation, UserForgotPasswordMutationVariables>
    } & TChildProps;
export function withUserForgotPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserForgotPasswordMutation,
  UserForgotPasswordMutationVariables,
  UserForgotPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UserForgotPasswordMutation, UserForgotPasswordMutationVariables, UserForgotPasswordProps<TChildProps, TDataName>>(UserForgotPasswordDocument, {
      alias: 'userForgotPassword',
      ...operationOptions
    });
};

/**
 * __useUserForgotPasswordMutation__
 *
 * To run a mutation, you first call `useUserForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userForgotPasswordMutation, { data, loading, error }] = useUserForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUserForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserForgotPasswordMutation, UserForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<UserForgotPasswordMutation, UserForgotPasswordMutationVariables>(UserForgotPasswordDocument, baseOptions);
      }
export type UserForgotPasswordMutationHookResult = ReturnType<typeof useUserForgotPasswordMutation>;
export type UserForgotPasswordMutationResult = ApolloReactCommon.MutationResult<UserForgotPasswordMutation>;
export type UserForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<UserForgotPasswordMutation, UserForgotPasswordMutationVariables>;
export const UserResetPasswordDocument = gql`
    mutation UserResetPassword($token: String!, $password: String!, $confirmPassword: String!) {
  ResetUserPassword(token: $token, password: $password, confirmPassword: $confirmPassword)
}
    `;
export type UserResetPasswordMutationFn = ApolloReactCommon.MutationFunction<UserResetPasswordMutation, UserResetPasswordMutationVariables>;
export type UserResetPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UserResetPasswordMutation, UserResetPasswordMutationVariables>, 'mutation'>;

    export const UserResetPasswordComponent = (props: UserResetPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<UserResetPasswordMutation, UserResetPasswordMutationVariables> mutation={UserResetPasswordDocument} {...props} />
    );
    
export type UserResetPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UserResetPasswordMutation, UserResetPasswordMutationVariables>
    } & TChildProps;
export function withUserResetPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserResetPasswordMutation,
  UserResetPasswordMutationVariables,
  UserResetPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UserResetPasswordMutation, UserResetPasswordMutationVariables, UserResetPasswordProps<TChildProps, TDataName>>(UserResetPasswordDocument, {
      alias: 'userResetPassword',
      ...operationOptions
    });
};

/**
 * __useUserResetPasswordMutation__
 *
 * To run a mutation, you first call `useUserResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userResetPasswordMutation, { data, loading, error }] = useUserResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useUserResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserResetPasswordMutation, UserResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<UserResetPasswordMutation, UserResetPasswordMutationVariables>(UserResetPasswordDocument, baseOptions);
      }
export type UserResetPasswordMutationHookResult = ReturnType<typeof useUserResetPasswordMutation>;
export type UserResetPasswordMutationResult = ApolloReactCommon.MutationResult<UserResetPasswordMutation>;
export type UserResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<UserResetPasswordMutation, UserResetPasswordMutationVariables>;
export const SellerLoginDocument = gql`
    mutation SellerLogin($email: String!, $password: String!) {
  SellerLogin(email: $email, password: $password)
}
    `;
export type SellerLoginMutationFn = ApolloReactCommon.MutationFunction<SellerLoginMutation, SellerLoginMutationVariables>;
export type SellerLoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SellerLoginMutation, SellerLoginMutationVariables>, 'mutation'>;

    export const SellerLoginComponent = (props: SellerLoginComponentProps) => (
      <ApolloReactComponents.Mutation<SellerLoginMutation, SellerLoginMutationVariables> mutation={SellerLoginDocument} {...props} />
    );
    
export type SellerLoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SellerLoginMutation, SellerLoginMutationVariables>
    } & TChildProps;
export function withSellerLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SellerLoginMutation,
  SellerLoginMutationVariables,
  SellerLoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SellerLoginMutation, SellerLoginMutationVariables, SellerLoginProps<TChildProps, TDataName>>(SellerLoginDocument, {
      alias: 'sellerLogin',
      ...operationOptions
    });
};

/**
 * __useSellerLoginMutation__
 *
 * To run a mutation, you first call `useSellerLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSellerLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sellerLoginMutation, { data, loading, error }] = useSellerLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSellerLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SellerLoginMutation, SellerLoginMutationVariables>) {
        return ApolloReactHooks.useMutation<SellerLoginMutation, SellerLoginMutationVariables>(SellerLoginDocument, baseOptions);
      }
export type SellerLoginMutationHookResult = ReturnType<typeof useSellerLoginMutation>;
export type SellerLoginMutationResult = ApolloReactCommon.MutationResult<SellerLoginMutation>;
export type SellerLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<SellerLoginMutation, SellerLoginMutationVariables>;
export const CurrentSellerDocument = gql`
    query CurrentSeller {
  CurrentSeller {
    id
    name
    storeName
    sellerNationality
    sellerIdentification
    EmailIsVerified
    SellerItemsCout
    role
    phone
    PickupLocations {
      address
    }
    Brand
    permissions
    items {
      id
    }
  }
}
    `;
export type CurrentSellerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentSellerQuery, CurrentSellerQueryVariables>, 'query'>;

    export const CurrentSellerComponent = (props: CurrentSellerComponentProps) => (
      <ApolloReactComponents.Query<CurrentSellerQuery, CurrentSellerQueryVariables> query={CurrentSellerDocument} {...props} />
    );
    
export type CurrentSellerProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentSellerQuery, CurrentSellerQueryVariables>
    } & TChildProps;
export function withCurrentSeller<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentSellerQuery,
  CurrentSellerQueryVariables,
  CurrentSellerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentSellerQuery, CurrentSellerQueryVariables, CurrentSellerProps<TChildProps, TDataName>>(CurrentSellerDocument, {
      alias: 'currentSeller',
      ...operationOptions
    });
};

/**
 * __useCurrentSellerQuery__
 *
 * To run a query within a React component, call `useCurrentSellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentSellerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentSellerQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentSellerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentSellerQuery, CurrentSellerQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentSellerQuery, CurrentSellerQueryVariables>(CurrentSellerDocument, baseOptions);
      }
export function useCurrentSellerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentSellerQuery, CurrentSellerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentSellerQuery, CurrentSellerQueryVariables>(CurrentSellerDocument, baseOptions);
        }
export type CurrentSellerQueryHookResult = ReturnType<typeof useCurrentSellerQuery>;
export type CurrentSellerLazyQueryHookResult = ReturnType<typeof useCurrentSellerLazyQuery>;
export type CurrentSellerQueryResult = ApolloReactCommon.QueryResult<CurrentSellerQuery, CurrentSellerQueryVariables>;
export const CreateSellerDocument = gql`
    mutation CreateSeller($name: String!, $email: String!, $password: String!, $confirmPassword: String!, $storeName: String!, $sellerNationality: String!, $sellerIdentification: String!, $Brand: [String!], $AddressName: String!, $AddressAddress: String!, $AddressCountry: String, $AddressState: String, $AddressCity: String, $AddressZipCode: String, $AddressMaincontactNubmer: String!, $AddressStreetAddress1: String, $AddressStreetAddress2: String, $AddressCompany: String) {
  CreateSeller(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword, storeName: $storeName, sellerNationality: $sellerNationality, sellerIdentification: $sellerIdentification, Brand: $Brand, AddressName: $AddressName, AddressAddress: $AddressAddress, AddressCountry: $AddressCountry, AddressState: $AddressState, AddressCity: $AddressCity, AddressZipCode: $AddressZipCode, AddressMaincontactNubmer: $AddressMaincontactNubmer, AddressStreetAddress1: $AddressStreetAddress1, AddressStreetAddress2: $AddressStreetAddress2, AddressCompany: $AddressCompany) {
    id
    name
    email
    storeName
    sellerNationality
    EmailIsVerified
    SellerItemsCout
    role
    phone
    Brand
    items {
      title
      images
    }
    PickupLocations {
      name
      address
    }
    permissions
  }
}
    `;
export type CreateSellerMutationFn = ApolloReactCommon.MutationFunction<CreateSellerMutation, CreateSellerMutationVariables>;
export type CreateSellerComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSellerMutation, CreateSellerMutationVariables>, 'mutation'>;

    export const CreateSellerComponent = (props: CreateSellerComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSellerMutation, CreateSellerMutationVariables> mutation={CreateSellerDocument} {...props} />
    );
    
export type CreateSellerProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateSellerMutation, CreateSellerMutationVariables>
    } & TChildProps;
export function withCreateSeller<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSellerMutation,
  CreateSellerMutationVariables,
  CreateSellerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSellerMutation, CreateSellerMutationVariables, CreateSellerProps<TChildProps, TDataName>>(CreateSellerDocument, {
      alias: 'createSeller',
      ...operationOptions
    });
};

/**
 * __useCreateSellerMutation__
 *
 * To run a mutation, you first call `useCreateSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSellerMutation, { data, loading, error }] = useCreateSellerMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *      storeName: // value for 'storeName'
 *      sellerNationality: // value for 'sellerNationality'
 *      sellerIdentification: // value for 'sellerIdentification'
 *      Brand: // value for 'Brand'
 *      AddressName: // value for 'AddressName'
 *      AddressAddress: // value for 'AddressAddress'
 *      AddressCountry: // value for 'AddressCountry'
 *      AddressState: // value for 'AddressState'
 *      AddressCity: // value for 'AddressCity'
 *      AddressZipCode: // value for 'AddressZipCode'
 *      AddressMaincontactNubmer: // value for 'AddressMaincontactNubmer'
 *      AddressStreetAddress1: // value for 'AddressStreetAddress1'
 *      AddressStreetAddress2: // value for 'AddressStreetAddress2'
 *      AddressCompany: // value for 'AddressCompany'
 *   },
 * });
 */
export function useCreateSellerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSellerMutation, CreateSellerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSellerMutation, CreateSellerMutationVariables>(CreateSellerDocument, baseOptions);
      }
export type CreateSellerMutationHookResult = ReturnType<typeof useCreateSellerMutation>;
export type CreateSellerMutationResult = ApolloReactCommon.MutationResult<CreateSellerMutation>;
export type CreateSellerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSellerMutation, CreateSellerMutationVariables>;
export const VerifySellerDocument = gql`
    mutation VerifySeller($SellerVerificationToken: String!) {
  VerifySeller(SellerVerificationToken: $SellerVerificationToken)
}
    `;
export type VerifySellerMutationFn = ApolloReactCommon.MutationFunction<VerifySellerMutation, VerifySellerMutationVariables>;
export type VerifySellerComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VerifySellerMutation, VerifySellerMutationVariables>, 'mutation'>;

    export const VerifySellerComponent = (props: VerifySellerComponentProps) => (
      <ApolloReactComponents.Mutation<VerifySellerMutation, VerifySellerMutationVariables> mutation={VerifySellerDocument} {...props} />
    );
    
export type VerifySellerProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VerifySellerMutation, VerifySellerMutationVariables>
    } & TChildProps;
export function withVerifySeller<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VerifySellerMutation,
  VerifySellerMutationVariables,
  VerifySellerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VerifySellerMutation, VerifySellerMutationVariables, VerifySellerProps<TChildProps, TDataName>>(VerifySellerDocument, {
      alias: 'verifySeller',
      ...operationOptions
    });
};

/**
 * __useVerifySellerMutation__
 *
 * To run a mutation, you first call `useVerifySellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifySellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifySellerMutation, { data, loading, error }] = useVerifySellerMutation({
 *   variables: {
 *      SellerVerificationToken: // value for 'SellerVerificationToken'
 *   },
 * });
 */
export function useVerifySellerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifySellerMutation, VerifySellerMutationVariables>) {
        return ApolloReactHooks.useMutation<VerifySellerMutation, VerifySellerMutationVariables>(VerifySellerDocument, baseOptions);
      }
export type VerifySellerMutationHookResult = ReturnType<typeof useVerifySellerMutation>;
export type VerifySellerMutationResult = ApolloReactCommon.MutationResult<VerifySellerMutation>;
export type VerifySellerMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifySellerMutation, VerifySellerMutationVariables>;
export const RequestVerificationTokenDocument = gql`
    mutation RequestVerificationToken($email: String!) {
  RequestEmailVerificationToken(email: $email)
}
    `;
export type RequestVerificationTokenMutationFn = ApolloReactCommon.MutationFunction<RequestVerificationTokenMutation, RequestVerificationTokenMutationVariables>;
export type RequestVerificationTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RequestVerificationTokenMutation, RequestVerificationTokenMutationVariables>, 'mutation'>;

    export const RequestVerificationTokenComponent = (props: RequestVerificationTokenComponentProps) => (
      <ApolloReactComponents.Mutation<RequestVerificationTokenMutation, RequestVerificationTokenMutationVariables> mutation={RequestVerificationTokenDocument} {...props} />
    );
    
export type RequestVerificationTokenProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RequestVerificationTokenMutation, RequestVerificationTokenMutationVariables>
    } & TChildProps;
export function withRequestVerificationToken<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RequestVerificationTokenMutation,
  RequestVerificationTokenMutationVariables,
  RequestVerificationTokenProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RequestVerificationTokenMutation, RequestVerificationTokenMutationVariables, RequestVerificationTokenProps<TChildProps, TDataName>>(RequestVerificationTokenDocument, {
      alias: 'requestVerificationToken',
      ...operationOptions
    });
};

/**
 * __useRequestVerificationTokenMutation__
 *
 * To run a mutation, you first call `useRequestVerificationTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestVerificationTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestVerificationTokenMutation, { data, loading, error }] = useRequestVerificationTokenMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestVerificationTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestVerificationTokenMutation, RequestVerificationTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<RequestVerificationTokenMutation, RequestVerificationTokenMutationVariables>(RequestVerificationTokenDocument, baseOptions);
      }
export type RequestVerificationTokenMutationHookResult = ReturnType<typeof useRequestVerificationTokenMutation>;
export type RequestVerificationTokenMutationResult = ApolloReactCommon.MutationResult<RequestVerificationTokenMutation>;
export type RequestVerificationTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestVerificationTokenMutation, RequestVerificationTokenMutationVariables>;
export const SellerRequestPasswordResetDocument = gql`
    mutation SellerRequestPasswordReset($email: String!) {
  SellerForgotPasswordRequest(email: $email)
}
    `;
export type SellerRequestPasswordResetMutationFn = ApolloReactCommon.MutationFunction<SellerRequestPasswordResetMutation, SellerRequestPasswordResetMutationVariables>;
export type SellerRequestPasswordResetComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SellerRequestPasswordResetMutation, SellerRequestPasswordResetMutationVariables>, 'mutation'>;

    export const SellerRequestPasswordResetComponent = (props: SellerRequestPasswordResetComponentProps) => (
      <ApolloReactComponents.Mutation<SellerRequestPasswordResetMutation, SellerRequestPasswordResetMutationVariables> mutation={SellerRequestPasswordResetDocument} {...props} />
    );
    
export type SellerRequestPasswordResetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SellerRequestPasswordResetMutation, SellerRequestPasswordResetMutationVariables>
    } & TChildProps;
export function withSellerRequestPasswordReset<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SellerRequestPasswordResetMutation,
  SellerRequestPasswordResetMutationVariables,
  SellerRequestPasswordResetProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SellerRequestPasswordResetMutation, SellerRequestPasswordResetMutationVariables, SellerRequestPasswordResetProps<TChildProps, TDataName>>(SellerRequestPasswordResetDocument, {
      alias: 'sellerRequestPasswordReset',
      ...operationOptions
    });
};

/**
 * __useSellerRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useSellerRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSellerRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sellerRequestPasswordResetMutation, { data, loading, error }] = useSellerRequestPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSellerRequestPasswordResetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SellerRequestPasswordResetMutation, SellerRequestPasswordResetMutationVariables>) {
        return ApolloReactHooks.useMutation<SellerRequestPasswordResetMutation, SellerRequestPasswordResetMutationVariables>(SellerRequestPasswordResetDocument, baseOptions);
      }
export type SellerRequestPasswordResetMutationHookResult = ReturnType<typeof useSellerRequestPasswordResetMutation>;
export type SellerRequestPasswordResetMutationResult = ApolloReactCommon.MutationResult<SellerRequestPasswordResetMutation>;
export type SellerRequestPasswordResetMutationOptions = ApolloReactCommon.BaseMutationOptions<SellerRequestPasswordResetMutation, SellerRequestPasswordResetMutationVariables>;
export const SellerResetPasswordDocument = gql`
    mutation SellerResetPassword($token: String!, $password: String!, $confirmPassword: String!) {
  ResetSellerPassword(token: $token, password: $password, confirmPassword: $confirmPassword)
}
    `;
export type SellerResetPasswordMutationFn = ApolloReactCommon.MutationFunction<SellerResetPasswordMutation, SellerResetPasswordMutationVariables>;
export type SellerResetPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SellerResetPasswordMutation, SellerResetPasswordMutationVariables>, 'mutation'>;

    export const SellerResetPasswordComponent = (props: SellerResetPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<SellerResetPasswordMutation, SellerResetPasswordMutationVariables> mutation={SellerResetPasswordDocument} {...props} />
    );
    
export type SellerResetPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SellerResetPasswordMutation, SellerResetPasswordMutationVariables>
    } & TChildProps;
export function withSellerResetPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SellerResetPasswordMutation,
  SellerResetPasswordMutationVariables,
  SellerResetPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SellerResetPasswordMutation, SellerResetPasswordMutationVariables, SellerResetPasswordProps<TChildProps, TDataName>>(SellerResetPasswordDocument, {
      alias: 'sellerResetPassword',
      ...operationOptions
    });
};

/**
 * __useSellerResetPasswordMutation__
 *
 * To run a mutation, you first call `useSellerResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSellerResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sellerResetPasswordMutation, { data, loading, error }] = useSellerResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useSellerResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SellerResetPasswordMutation, SellerResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<SellerResetPasswordMutation, SellerResetPasswordMutationVariables>(SellerResetPasswordDocument, baseOptions);
      }
export type SellerResetPasswordMutationHookResult = ReturnType<typeof useSellerResetPasswordMutation>;
export type SellerResetPasswordMutationResult = ApolloReactCommon.MutationResult<SellerResetPasswordMutation>;
export type SellerResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<SellerResetPasswordMutation, SellerResetPasswordMutationVariables>;
export const UsersOrdersDocument = gql`
    query UsersOrders {
  UserOrder {
    id
    total
    charge
    status
  }
}
    `;
export type UsersOrdersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersOrdersQuery, UsersOrdersQueryVariables>, 'query'>;

    export const UsersOrdersComponent = (props: UsersOrdersComponentProps) => (
      <ApolloReactComponents.Query<UsersOrdersQuery, UsersOrdersQueryVariables> query={UsersOrdersDocument} {...props} />
    );
    
export type UsersOrdersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UsersOrdersQuery, UsersOrdersQueryVariables>
    } & TChildProps;
export function withUsersOrders<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UsersOrdersQuery,
  UsersOrdersQueryVariables,
  UsersOrdersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UsersOrdersQuery, UsersOrdersQueryVariables, UsersOrdersProps<TChildProps, TDataName>>(UsersOrdersDocument, {
      alias: 'usersOrders',
      ...operationOptions
    });
};

/**
 * __useUsersOrdersQuery__
 *
 * To run a query within a React component, call `useUsersOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersOrdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersOrdersQuery, UsersOrdersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersOrdersQuery, UsersOrdersQueryVariables>(UsersOrdersDocument, baseOptions);
      }
export function useUsersOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersOrdersQuery, UsersOrdersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersOrdersQuery, UsersOrdersQueryVariables>(UsersOrdersDocument, baseOptions);
        }
export type UsersOrdersQueryHookResult = ReturnType<typeof useUsersOrdersQuery>;
export type UsersOrdersLazyQueryHookResult = ReturnType<typeof useUsersOrdersLazyQuery>;
export type UsersOrdersQueryResult = ApolloReactCommon.QueryResult<UsersOrdersQuery, UsersOrdersQueryVariables>;
export const CreateItemDocument = gql`
    mutation CreateItem($title: String!, $description: String!, $overview: String, $brand: String, $weight: String, $dimensions: String, $materials: String, $otherInfo: String, $price: Float!, $beforeDiscountPrice: Float!, $stock: Int, $images: [String!], $eagerImages: [String!], $catagory: [String!], $tags: [String!], $colors: [String!], $otherFeature: [String!]!) {
  CreateItem(title: $title, description: $description, overview: $overview, brand: $brand, weight: $weight, dimensions: $dimensions, materials: $materials, otherInfo: $otherInfo, price: $price, beforeDiscountPrice: $beforeDiscountPrice, stock: $stock, images: $images, eagerImages: $eagerImages, catagory: $catagory, tags: $tags, colors: $colors, otherFeature: $otherFeature) {
    id
  }
}
    `;
export type CreateItemMutationFn = ApolloReactCommon.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;
export type CreateItemComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateItemMutation, CreateItemMutationVariables>, 'mutation'>;

    export const CreateItemComponent = (props: CreateItemComponentProps) => (
      <ApolloReactComponents.Mutation<CreateItemMutation, CreateItemMutationVariables> mutation={CreateItemDocument} {...props} />
    );
    
export type CreateItemProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateItemMutation, CreateItemMutationVariables>
    } & TChildProps;
export function withCreateItem<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateItemMutation,
  CreateItemMutationVariables,
  CreateItemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateItemMutation, CreateItemMutationVariables, CreateItemProps<TChildProps, TDataName>>(CreateItemDocument, {
      alias: 'createItem',
      ...operationOptions
    });
};

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      overview: // value for 'overview'
 *      brand: // value for 'brand'
 *      weight: // value for 'weight'
 *      dimensions: // value for 'dimensions'
 *      materials: // value for 'materials'
 *      otherInfo: // value for 'otherInfo'
 *      price: // value for 'price'
 *      beforeDiscountPrice: // value for 'beforeDiscountPrice'
 *      stock: // value for 'stock'
 *      images: // value for 'images'
 *      eagerImages: // value for 'eagerImages'
 *      catagory: // value for 'catagory'
 *      tags: // value for 'tags'
 *      colors: // value for 'colors'
 *      otherFeature: // value for 'otherFeature'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, baseOptions);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = ApolloReactCommon.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const ItemDocument = gql`
    query item($id: String!) {
  item(where: {id: $id}) {
    id
    likes {
      id
    }
    likesCount
    itemReview {
      id
    }
    reviewCount
    images
    eagerImages
    catagory {
      id
      text
    }
    tags {
      id
      text
    }
    colors {
      id
      text
    }
    OtherFeatures
    title
    description
    overview
    otherInfo
    videoLink
    brand
    weight
    dimensions
    materials
    price
    beforeDiscountPrice
    stock
  }
}
    `;
export type ItemComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ItemQuery, ItemQueryVariables>, 'query'> & ({ variables: ItemQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ItemComponent = (props: ItemComponentProps) => (
      <ApolloReactComponents.Query<ItemQuery, ItemQueryVariables> query={ItemDocument} {...props} />
    );
    
export type ItemProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ItemQuery, ItemQueryVariables>
    } & TChildProps;
export function withItem<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemQuery,
  ItemQueryVariables,
  ItemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ItemQuery, ItemQueryVariables, ItemProps<TChildProps, TDataName>>(ItemDocument, {
      alias: 'item',
      ...operationOptions
    });
};

/**
 * __useItemQuery__
 *
 * To run a query within a React component, call `useItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemQuery, ItemQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemQuery, ItemQueryVariables>(ItemDocument, baseOptions);
      }
export function useItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemQuery, ItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemQuery, ItemQueryVariables>(ItemDocument, baseOptions);
        }
export type ItemQueryHookResult = ReturnType<typeof useItemQuery>;
export type ItemLazyQueryHookResult = ReturnType<typeof useItemLazyQuery>;
export type ItemQueryResult = ApolloReactCommon.QueryResult<ItemQuery, ItemQueryVariables>;
export const ItemsDocument = gql`
    query Items {
  items {
    id
    likes {
      id
    }
    likesCount
    itemReview {
      text
    }
    reviewCount
    images
    eagerImages
    catagory {
      text
    }
    tags {
      text
    }
    colors {
      text
    }
    OtherFeatures
    title
    description
    overview
    otherInfo
    videoLink
    brand
    weight
    dimensions
    materials
    price
    beforeDiscountPrice
    stock
  }
}
    `;
export type ItemsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ItemsQuery, ItemsQueryVariables>, 'query'>;

    export const ItemsComponent = (props: ItemsComponentProps) => (
      <ApolloReactComponents.Query<ItemsQuery, ItemsQueryVariables> query={ItemsDocument} {...props} />
    );
    
export type ItemsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ItemsQuery, ItemsQueryVariables>
    } & TChildProps;
export function withItems<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemsQuery,
  ItemsQueryVariables,
  ItemsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ItemsQuery, ItemsQueryVariables, ItemsProps<TChildProps, TDataName>>(ItemsDocument, {
      alias: 'items',
      ...operationOptions
    });
};

/**
 * __useItemsQuery__
 *
 * To run a query within a React component, call `useItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, baseOptions);
      }
export function useItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, baseOptions);
        }
export type ItemsQueryHookResult = ReturnType<typeof useItemsQuery>;
export type ItemsLazyQueryHookResult = ReturnType<typeof useItemsLazyQuery>;
export type ItemsQueryResult = ApolloReactCommon.QueryResult<ItemsQuery, ItemsQueryVariables>;
export const DeleteItemDocument = gql`
    mutation DeleteItem($itemId: String!) {
  DeleteItem(itemId: $itemId)
}
    `;
export type DeleteItemMutationFn = ApolloReactCommon.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;
export type DeleteItemComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteItemMutation, DeleteItemMutationVariables>, 'mutation'>;

    export const DeleteItemComponent = (props: DeleteItemComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteItemMutation, DeleteItemMutationVariables> mutation={DeleteItemDocument} {...props} />
    );
    
export type DeleteItemProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>
    } & TChildProps;
export function withDeleteItem<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteItemMutation,
  DeleteItemMutationVariables,
  DeleteItemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteItemMutation, DeleteItemMutationVariables, DeleteItemProps<TChildProps, TDataName>>(DeleteItemDocument, {
      alias: 'deleteItem',
      ...operationOptions
    });
};

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, baseOptions);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = ApolloReactCommon.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const ToggleLikeDocument = gql`
    mutation ToggleLike($itemId: String!) {
  ToggleLikeItem(itemId: $itemId)
}
    `;
export type ToggleLikeMutationFn = ApolloReactCommon.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>;
export type ToggleLikeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ToggleLikeMutation, ToggleLikeMutationVariables>, 'mutation'>;

    export const ToggleLikeComponent = (props: ToggleLikeComponentProps) => (
      <ApolloReactComponents.Mutation<ToggleLikeMutation, ToggleLikeMutationVariables> mutation={ToggleLikeDocument} {...props} />
    );
    
export type ToggleLikeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>
    } & TChildProps;
export function withToggleLike<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToggleLikeMutation,
  ToggleLikeMutationVariables,
  ToggleLikeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ToggleLikeMutation, ToggleLikeMutationVariables, ToggleLikeProps<TChildProps, TDataName>>(ToggleLikeDocument, {
      alias: 'toggleLike',
      ...operationOptions
    });
};

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, baseOptions);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = ApolloReactCommon.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;