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
  AllAddress: Array<Address>;
  SingleAddress?: Maybe<Address>;
  item?: Maybe<Item>;
  items: Array<Item>;
  itemCount: Scalars['Int'];
  AllItems: ItemConnection;
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
  /** Users Whish List */
  UserLikes: Item;
  /** Admin Account */
  isAdmin: Scalars['Boolean'];
  AllUsers: UserConnection;
  AllSeller: SellerConnection;
  SearchTermResults: ItemConnection;
  ItemConnections: ItemConnection;
};


export type QueryAllAddressArgs = {
  where?: Maybe<AddressWhereInput>;
  orderBy?: Maybe<AddressOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<AddressWhereUniqueInput>;
};


export type QuerySingleAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryItemArgs = {
  where: ItemWhereUniqueInput;
};


export type QueryItemsArgs = {
  where?: Maybe<ItemWhereInput>;
  orderBy?: Maybe<ItemOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ItemWhereUniqueInput>;
};


export type QueryAllItemsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


export type QueryOrderArgs = {
  orderId: Scalars['String'];
};


export type QueryITemRevivesArgs = {
  itemId: Scalars['String'];
};


export type QueryUserLikesArgs = {
  userId: Scalars['String'];
};


export type QueryAllUsersArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


export type QueryAllSellerArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


export type QuerySearchTermResultsArgs = {
  term: Scalars['String'];
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


export type QueryItemConnectionsArgs = {
  tag?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
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
  itemCount?: Maybe<IntFilter>;
  permissions?: Maybe<Permission>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<SellerWhereInput>>;
  OR?: Maybe<Array<SellerWhereInput>>;
  NOT?: Maybe<Array<SellerWhereInput>>;
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

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Seller = 'SELLER'
}

export type AddressFilter = {
  every?: Maybe<AddressWhereInput>;
  some?: Maybe<AddressWhereInput>;
  none?: Maybe<AddressWhereInput>;
};

export type ItemFilter = {
  every?: Maybe<ItemWhereInput>;
  some?: Maybe<ItemWhereInput>;
  none?: Maybe<ItemWhereInput>;
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
  UpReview?: Maybe<UpReviewFilter>;
  DownReview?: Maybe<DownReviewFilter>;
  AND?: Maybe<Array<ItemWhereInput>>;
  OR?: Maybe<Array<ItemWhereInput>>;
  NOT?: Maybe<Array<ItemWhereInput>>;
  Seller?: Maybe<SellerWhereInput>;
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
  upVote?: Maybe<UpReviewFilter>;
  downVote?: Maybe<DownReviewFilter>;
  upVoteCount?: Maybe<IntFilter>;
  downVoteCount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ReviewWhereInput>>;
  OR?: Maybe<Array<ReviewWhereInput>>;
  NOT?: Maybe<Array<ReviewWhereInput>>;
  item?: Maybe<ItemWhereInput>;
  author?: Maybe<UserWhereInput>;
  OrderItem?: Maybe<OrderItemWhereInput>;
};

export type UpReviewFilter = {
  every?: Maybe<UpReviewWhereInput>;
  some?: Maybe<UpReviewWhereInput>;
  none?: Maybe<UpReviewWhereInput>;
};

export type UpReviewWhereInput = {
  id?: Maybe<StringFilter>;
  voteUp?: Maybe<BooleanFilter>;
  authorId?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  reviewUpId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<UpReviewWhereInput>>;
  OR?: Maybe<Array<UpReviewWhereInput>>;
  NOT?: Maybe<Array<UpReviewWhereInput>>;
  author?: Maybe<UserWhereInput>;
  item?: Maybe<ItemWhereInput>;
  Review?: Maybe<ReviewWhereInput>;
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
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
  UpReview?: Maybe<UpReviewFilter>;
  DownReview?: Maybe<DownReviewFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export enum Permission {
  UpdatePermission = 'UPDATE_PERMISSION',
  AddItem = 'ADD_ITEM',
  EditItem = 'EDIT_ITEM',
  DeleteItem = 'DELETE_ITEM',
  None = 'NONE'
}

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
  quantity?: Maybe<IntFilter>;
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

export enum OrderStatus {
  Pending = 'PENDING',
  Delivered = 'DELIVERED',
  Onhold = 'ONHOLD',
  Approved = 'APPROVED',
  OnTheWay = 'ON_THE_WAY'
}

export type DownReviewFilter = {
  every?: Maybe<DownReviewWhereInput>;
  some?: Maybe<DownReviewWhereInput>;
  none?: Maybe<DownReviewWhereInput>;
};

export type DownReviewWhereInput = {
  id?: Maybe<StringFilter>;
  voteDown?: Maybe<BooleanFilter>;
  authorId?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  reviewDownId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<DownReviewWhereInput>>;
  OR?: Maybe<Array<DownReviewWhereInput>>;
  NOT?: Maybe<Array<DownReviewWhereInput>>;
  author?: Maybe<UserWhereInput>;
  item?: Maybe<ItemWhereInput>;
  Review?: Maybe<ReviewWhereInput>;
};

export type AddressOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  address?: Maybe<OrderByArg>;
  country?: Maybe<OrderByArg>;
  state?: Maybe<OrderByArg>;
  city?: Maybe<OrderByArg>;
  zipCode?: Maybe<OrderByArg>;
  MaincontactNubmer?: Maybe<OrderByArg>;
  streetAddress1?: Maybe<OrderByArg>;
  streetAddress2?: Maybe<OrderByArg>;
  company?: Maybe<OrderByArg>;
  message?: Maybe<OrderByArg>;
  additionalInfo?: Maybe<OrderByArg>;
  isPrimary?: Maybe<OrderByArg>;
  Lat?: Maybe<OrderByArg>;
  Lng?: Maybe<OrderByArg>;
  sellerId?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
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
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<AddressWhereUniqueInput>;
};


export type UserOrderArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
};


export type UserCartArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CartItemWhereUniqueInput>;
};


export type UserLikesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<LikeWhereUniqueInput>;
};


export type UserItemReviewArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ReviewWhereUniqueInput>;
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
  createdAt: Scalars['DateTime'];
};


export type OrderItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderItemWhereUniqueInput>;
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
  quantity: Scalars['Int'];
};


export type OrderItemLikesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<LikeWhereUniqueInput>;
};


export type OrderItemItemReviewArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ReviewWhereUniqueInput>;
};


export type OrderItemCatagoryArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CatagoryWhereUniqueInput>;
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
  CartItem: Array<CartItem>;
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
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<LikeWhereUniqueInput>;
};


export type ItemItemReviewArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ReviewWhereUniqueInput>;
};


export type ItemCatagoryArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CatagoryWhereUniqueInput>;
};


export type ItemTagsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<TagWhereUniqueInput>;
};


export type ItemColorsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ColorWhereUniqueInput>;
};


export type ItemCartItemArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CartItemWhereUniqueInput>;
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
  downVoteCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
  upVote: Array<UpReview>;
  downVote: Array<DownReview>;
};


export type ReviewUpVoteArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UpReviewWhereUniqueInput>;
};


export type ReviewDownVoteArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<DownReviewWhereUniqueInput>;
};

export type UpReviewWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UpReview = {
  __typename?: 'UpReview';
  id: Scalars['String'];
  voteUp: Scalars['Boolean'];
  Review: Review;
  item: Item;
  itemId: Scalars['String'];
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type DownReviewWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DownReview = {
  __typename?: 'DownReview';
  id: Scalars['String'];
  voteDown: Scalars['Boolean'];
  Review: Review;
  item: Item;
  itemId: Scalars['String'];
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
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

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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

export type ItemConnection = {
  __typename?: 'ItemConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<ItemEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ItemEdge = {
  __typename?: 'ItemEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Item;
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars['String']>;
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars['String']>;
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
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<AddressWhereUniqueInput>;
};


export type SellerItemsArgs = {
  where?: Maybe<ItemWhereInput>;
  orderBy?: Maybe<ItemOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ItemWhereUniqueInput>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: User;
};

export type SellerConnection = {
  __typename?: 'SellerConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<SellerEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type SellerEdge = {
  __typename?: 'SellerEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Seller;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create New User */
  CreateUser: AuthPayload;
  UserLogin: AuthPayload;
  /** Log User Out */
  UserLogout: Scalars['String'];
  /** User Request A Password Reset */
  UserForgotPasswordRequest: Scalars['String'];
  /** User Reset Password */
  ResetUserPassword: Scalars['String'];
  /** User Reset Password */
  ResetUsersPasswordFromProfile: Scalars['String'];
  DeleteUserAccount: Scalars['String'];
  /** Create New Seller Account */
  CreateSeller: Scalars['String'];
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
  /** Remove All Items From Wishlist */
  RemoveAllLikes: Scalars['String'];
  /** Create Item Review */
  CreateItemReview: Review;
  /** Toggle Vote Up For Review */
  ToggleReviewUpVote: Scalars['String'];
  /** Toggle Vote Down For Review */
  ToggleReviewDownVote: Scalars['String'];
  /** Add Item To Cart */
  AddItemToTheCart: Scalars['String'];
  DeleteCartItem: CartItem;
  EmptyUserCart: Scalars['String'];
  CreateOrder: Order;
  updateOneAddress?: Maybe<Address>;
  deleteOneAddress?: Maybe<Address>;
  deleteUserAddresses: BatchPayload;
  /** Create Users Address */
  CreateAddress: Address;
  /** Toggle Primary Address */
  TogglePrimaryAddress: Address;
  /** Contact Form */
  ContactUs: Scalars['String'];
  /** Update User Or Seller's Roles */
  UpdateRole: Scalars['String'];
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


export type MutationResetUsersPasswordFromProfileArgs = {
  OldPassword: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationDeleteUserAccountArgs = {
  userId: Scalars['String'];
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
  id: Scalars['String'];
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


export type MutationRemoveAllLikesArgs = {
  userId: Scalars['String'];
};


export type MutationCreateItemReviewArgs = {
  itemId: Scalars['String'];
  text: Scalars['String'];
  rating: Scalars['Float'];
};


export type MutationToggleReviewUpVoteArgs = {
  reviewId: Scalars['String'];
  itemId: Scalars['String'];
};


export type MutationToggleReviewDownVoteArgs = {
  reviewId: Scalars['String'];
  itemId: Scalars['String'];
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


export type MutationUpdateOneAddressArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};


export type MutationDeleteOneAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationDeleteUserAddressesArgs = {
  where?: Maybe<AddressWhereInput>;
};


export type MutationCreateAddressArgs = {
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


export type MutationUpdateRoleArgs = {
  userId?: Maybe<Scalars['String']>;
  sellerId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user?: Maybe<User>;
  seller?: Maybe<Seller>;
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
  itemCount?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
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
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutItemReviewInput;
  upVote?: Maybe<UpReviewCreateManyWithoutReviewInput>;
  downVote?: Maybe<DownReviewCreateManyWithoutReviewInput>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutAuthorInput>;
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

export type SellerWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  sellerIdentification?: Maybe<Scalars['String']>;
  phone?: Maybe<Array<Scalars['String']>>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
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
  itemCount?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutAuthorInput>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutAuthorInput>;
};

export type ReviewCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<ReviewCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutItemReviewInput;
  upVote?: Maybe<UpReviewCreateManyWithoutReviewInput>;
  downVote?: Maybe<DownReviewCreateManyWithoutReviewInput>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutItemReviewInput;
  author: UserCreateOneWithoutItemReviewInput;
  upVote?: Maybe<UpReviewCreateManyWithoutReviewInput>;
  downVote?: Maybe<DownReviewCreateManyWithoutReviewInput>;
};

export type UpReviewCreateManyWithoutReviewInput = {
  create?: Maybe<Array<UpReviewCreateWithoutReviewInput>>;
  connect?: Maybe<Array<UpReviewWhereUniqueInput>>;
};

export type UpReviewCreateWithoutReviewInput = {
  id?: Maybe<Scalars['String']>;
  voteUp?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutUpReviewInput;
  item: ItemCreateOneWithoutUpReviewInput;
};

export type UserCreateOneWithoutUpReviewInput = {
  create?: Maybe<UserCreateWithoutUpReviewInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutUpReviewInput = {
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
  Order?: Maybe<OrderCreateManyWithoutUserInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutAuthorInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutAuthorInput>;
};

export type UpReviewCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<UpReviewCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<UpReviewWhereUniqueInput>>;
};

export type UpReviewCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  voteUp?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutUpReviewInput;
  Review: ReviewCreateOneWithoutUpVoteInput;
};

export type ItemCreateOneWithoutUpReviewInput = {
  create?: Maybe<ItemCreateWithoutUpReviewInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutUpReviewInput = {
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
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutAuthorInput>;
};

export type DownReviewCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<DownReviewCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<DownReviewWhereUniqueInput>>;
};

export type DownReviewCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  voteDown?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutDownReviewInput;
  Review: ReviewCreateOneWithoutDownVoteInput;
};

export type ItemCreateOneWithoutDownReviewInput = {
  create?: Maybe<ItemCreateWithoutDownReviewInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
};

export type ItemCreateWithoutDownReviewInput = {
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
  CartItem?: Maybe<CartItemCreateManyWithoutItemInput>;
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
};

export type UpReviewCreateManyWithoutItemInput = {
  create?: Maybe<Array<UpReviewCreateWithoutItemInput>>;
  connect?: Maybe<Array<UpReviewWhereUniqueInput>>;
};

export type UpReviewCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  voteUp?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutUpReviewInput;
  Review: ReviewCreateOneWithoutUpVoteInput;
};

export type ReviewCreateOneWithoutUpVoteInput = {
  create?: Maybe<ReviewCreateWithoutUpVoteInput>;
  connect?: Maybe<ReviewWhereUniqueInput>;
};

export type ReviewCreateWithoutUpVoteInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutItemReviewInput;
  author: UserCreateOneWithoutItemReviewInput;
  downVote?: Maybe<DownReviewCreateManyWithoutReviewInput>;
  OrderItem?: Maybe<OrderItemCreateOneWithoutItemReviewInput>;
};

export type DownReviewCreateManyWithoutReviewInput = {
  create?: Maybe<Array<DownReviewCreateWithoutReviewInput>>;
  connect?: Maybe<Array<DownReviewWhereUniqueInput>>;
};

export type DownReviewCreateWithoutReviewInput = {
  id?: Maybe<Scalars['String']>;
  voteDown?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutDownReviewInput;
  item: ItemCreateOneWithoutDownReviewInput;
};

export type UserCreateOneWithoutDownReviewInput = {
  create?: Maybe<UserCreateWithoutDownReviewInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutDownReviewInput = {
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
  Order?: Maybe<OrderCreateManyWithoutUserInput>;
  UpReview?: Maybe<UpReviewCreateManyWithoutAuthorInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewCreateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewCreateManyWithoutItemInput>;
};

export type DownReviewCreateManyWithoutItemInput = {
  create?: Maybe<Array<DownReviewCreateWithoutItemInput>>;
  connect?: Maybe<Array<DownReviewWhereUniqueInput>>;
};

export type DownReviewCreateWithoutItemInput = {
  id?: Maybe<Scalars['String']>;
  voteDown?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutDownReviewInput;
  Review: ReviewCreateOneWithoutDownVoteInput;
};

export type ReviewCreateOneWithoutDownVoteInput = {
  create?: Maybe<ReviewCreateWithoutDownVoteInput>;
  connect?: Maybe<ReviewWhereUniqueInput>;
};

export type ReviewCreateWithoutDownVoteInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item: ItemCreateOneWithoutItemReviewInput;
  author: UserCreateOneWithoutItemReviewInput;
  upVote?: Maybe<UpReviewCreateManyWithoutReviewInput>;
  OrderItem?: Maybe<OrderItemCreateOneWithoutItemReviewInput>;
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
  itemCount?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
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
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutItemReviewInput>;
  upVote?: Maybe<UpReviewUpdateManyWithoutReviewInput>;
  downVote?: Maybe<DownReviewUpdateManyWithoutReviewInput>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutAuthorInput>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
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
  itemCount?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutAuthorInput>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutAuthorInput>;
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
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutItemReviewInput>;
  upVote?: Maybe<UpReviewUpdateManyWithoutReviewInput>;
  downVote?: Maybe<DownReviewUpdateManyWithoutReviewInput>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutItemReviewInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutItemReviewInput>;
  upVote?: Maybe<UpReviewUpdateManyWithoutReviewInput>;
  downVote?: Maybe<DownReviewUpdateManyWithoutReviewInput>;
};

export type UpReviewUpdateManyWithoutReviewInput = {
  create?: Maybe<Array<UpReviewCreateWithoutReviewInput>>;
  connect?: Maybe<Array<UpReviewWhereUniqueInput>>;
  set?: Maybe<Array<UpReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<UpReviewWhereUniqueInput>>;
  delete?: Maybe<Array<UpReviewWhereUniqueInput>>;
  update?: Maybe<Array<UpReviewUpdateWithWhereUniqueWithoutReviewInput>>;
  updateMany?: Maybe<Array<UpReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UpReviewScalarWhereInput>>;
  upsert?: Maybe<Array<UpReviewUpsertWithWhereUniqueWithoutReviewInput>>;
};

export type UpReviewUpdateWithWhereUniqueWithoutReviewInput = {
  where: UpReviewWhereUniqueInput;
  data: UpReviewUpdateWithoutReviewDataInput;
};

export type UpReviewUpdateWithoutReviewDataInput = {
  id?: Maybe<Scalars['String']>;
  voteUp?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutUpReviewInput>;
  item?: Maybe<ItemUpdateOneRequiredWithoutUpReviewInput>;
};

export type UserUpdateOneRequiredWithoutUpReviewInput = {
  create?: Maybe<UserCreateWithoutUpReviewInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutUpReviewDataInput>;
  upsert?: Maybe<UserUpsertWithoutUpReviewInput>;
};

export type UserUpdateWithoutUpReviewDataInput = {
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
  Order?: Maybe<OrderUpdateManyWithoutUserInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutAuthorInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutAuthorInput>;
};

export type UpReviewUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<UpReviewCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<UpReviewWhereUniqueInput>>;
  set?: Maybe<Array<UpReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<UpReviewWhereUniqueInput>>;
  delete?: Maybe<Array<UpReviewWhereUniqueInput>>;
  update?: Maybe<Array<UpReviewUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<UpReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UpReviewScalarWhereInput>>;
  upsert?: Maybe<Array<UpReviewUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type UpReviewUpdateWithWhereUniqueWithoutAuthorInput = {
  where: UpReviewWhereUniqueInput;
  data: UpReviewUpdateWithoutAuthorDataInput;
};

export type UpReviewUpdateWithoutAuthorDataInput = {
  id?: Maybe<Scalars['String']>;
  voteUp?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutUpReviewInput>;
  Review?: Maybe<ReviewUpdateOneRequiredWithoutUpVoteInput>;
};

export type ItemUpdateOneRequiredWithoutUpReviewInput = {
  create?: Maybe<ItemCreateWithoutUpReviewInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  update?: Maybe<ItemUpdateWithoutUpReviewDataInput>;
  upsert?: Maybe<ItemUpsertWithoutUpReviewInput>;
};

export type ItemUpdateWithoutUpReviewDataInput = {
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
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutAuthorInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutAuthorInput>;
};

export type DownReviewUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<DownReviewCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<DownReviewWhereUniqueInput>>;
  set?: Maybe<Array<DownReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<DownReviewWhereUniqueInput>>;
  delete?: Maybe<Array<DownReviewWhereUniqueInput>>;
  update?: Maybe<Array<DownReviewUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<DownReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<DownReviewScalarWhereInput>>;
  upsert?: Maybe<Array<DownReviewUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type DownReviewUpdateWithWhereUniqueWithoutAuthorInput = {
  where: DownReviewWhereUniqueInput;
  data: DownReviewUpdateWithoutAuthorDataInput;
};

export type DownReviewUpdateWithoutAuthorDataInput = {
  id?: Maybe<Scalars['String']>;
  voteDown?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutDownReviewInput>;
  Review?: Maybe<ReviewUpdateOneRequiredWithoutDownVoteInput>;
};

export type ItemUpdateOneRequiredWithoutDownReviewInput = {
  create?: Maybe<ItemCreateWithoutDownReviewInput>;
  connect?: Maybe<ItemWhereUniqueInput>;
  update?: Maybe<ItemUpdateWithoutDownReviewDataInput>;
  upsert?: Maybe<ItemUpsertWithoutDownReviewInput>;
};

export type ItemUpdateWithoutDownReviewDataInput = {
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
  CartItem?: Maybe<CartItemUpdateManyWithoutItemInput>;
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
};

export type UpReviewUpdateManyWithoutItemInput = {
  create?: Maybe<Array<UpReviewCreateWithoutItemInput>>;
  connect?: Maybe<Array<UpReviewWhereUniqueInput>>;
  set?: Maybe<Array<UpReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<UpReviewWhereUniqueInput>>;
  delete?: Maybe<Array<UpReviewWhereUniqueInput>>;
  update?: Maybe<Array<UpReviewUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<UpReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UpReviewScalarWhereInput>>;
  upsert?: Maybe<Array<UpReviewUpsertWithWhereUniqueWithoutItemInput>>;
};

export type UpReviewUpdateWithWhereUniqueWithoutItemInput = {
  where: UpReviewWhereUniqueInput;
  data: UpReviewUpdateWithoutItemDataInput;
};

export type UpReviewUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  voteUp?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutUpReviewInput>;
  Review?: Maybe<ReviewUpdateOneRequiredWithoutUpVoteInput>;
};

export type ReviewUpdateOneRequiredWithoutUpVoteInput = {
  create?: Maybe<ReviewCreateWithoutUpVoteInput>;
  connect?: Maybe<ReviewWhereUniqueInput>;
  update?: Maybe<ReviewUpdateWithoutUpVoteDataInput>;
  upsert?: Maybe<ReviewUpsertWithoutUpVoteInput>;
};

export type ReviewUpdateWithoutUpVoteDataInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutItemReviewInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutItemReviewInput>;
  downVote?: Maybe<DownReviewUpdateManyWithoutReviewInput>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutItemReviewInput>;
};

export type DownReviewUpdateManyWithoutReviewInput = {
  create?: Maybe<Array<DownReviewCreateWithoutReviewInput>>;
  connect?: Maybe<Array<DownReviewWhereUniqueInput>>;
  set?: Maybe<Array<DownReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<DownReviewWhereUniqueInput>>;
  delete?: Maybe<Array<DownReviewWhereUniqueInput>>;
  update?: Maybe<Array<DownReviewUpdateWithWhereUniqueWithoutReviewInput>>;
  updateMany?: Maybe<Array<DownReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<DownReviewScalarWhereInput>>;
  upsert?: Maybe<Array<DownReviewUpsertWithWhereUniqueWithoutReviewInput>>;
};

export type DownReviewUpdateWithWhereUniqueWithoutReviewInput = {
  where: DownReviewWhereUniqueInput;
  data: DownReviewUpdateWithoutReviewDataInput;
};

export type DownReviewUpdateWithoutReviewDataInput = {
  id?: Maybe<Scalars['String']>;
  voteDown?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutDownReviewInput>;
  item?: Maybe<ItemUpdateOneRequiredWithoutDownReviewInput>;
};

export type UserUpdateOneRequiredWithoutDownReviewInput = {
  create?: Maybe<UserCreateWithoutDownReviewInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutDownReviewDataInput>;
  upsert?: Maybe<UserUpsertWithoutDownReviewInput>;
};

export type UserUpdateWithoutDownReviewDataInput = {
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
  Order?: Maybe<OrderUpdateManyWithoutUserInput>;
  UpReview?: Maybe<UpReviewUpdateManyWithoutAuthorInput>;
};

export type UserUpsertWithoutDownReviewInput = {
  update: UserUpdateWithoutDownReviewDataInput;
  create: UserCreateWithoutDownReviewInput;
};

export type DownReviewUpdateManyWithWhereNestedInput = {
  where: DownReviewScalarWhereInput;
  data: DownReviewUpdateManyDataInput;
};

export type DownReviewScalarWhereInput = {
  id?: Maybe<StringFilter>;
  voteDown?: Maybe<BooleanFilter>;
  authorId?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  reviewDownId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<DownReviewScalarWhereInput>>;
  OR?: Maybe<Array<DownReviewScalarWhereInput>>;
  NOT?: Maybe<Array<DownReviewScalarWhereInput>>;
};

export type DownReviewUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  voteDown?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DownReviewUpsertWithWhereUniqueWithoutReviewInput = {
  where: DownReviewWhereUniqueInput;
  update: DownReviewUpdateWithoutReviewDataInput;
  create: DownReviewCreateWithoutReviewInput;
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
  quantity?: Maybe<Scalars['Int']>;
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
  UpReview?: Maybe<UpReviewUpdateManyWithoutItemInput>;
  DownReview?: Maybe<DownReviewUpdateManyWithoutItemInput>;
};

export type DownReviewUpdateManyWithoutItemInput = {
  create?: Maybe<Array<DownReviewCreateWithoutItemInput>>;
  connect?: Maybe<Array<DownReviewWhereUniqueInput>>;
  set?: Maybe<Array<DownReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<DownReviewWhereUniqueInput>>;
  delete?: Maybe<Array<DownReviewWhereUniqueInput>>;
  update?: Maybe<Array<DownReviewUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: Maybe<Array<DownReviewUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<DownReviewScalarWhereInput>>;
  upsert?: Maybe<Array<DownReviewUpsertWithWhereUniqueWithoutItemInput>>;
};

export type DownReviewUpdateWithWhereUniqueWithoutItemInput = {
  where: DownReviewWhereUniqueInput;
  data: DownReviewUpdateWithoutItemDataInput;
};

export type DownReviewUpdateWithoutItemDataInput = {
  id?: Maybe<Scalars['String']>;
  voteDown?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutDownReviewInput>;
  Review?: Maybe<ReviewUpdateOneRequiredWithoutDownVoteInput>;
};

export type ReviewUpdateOneRequiredWithoutDownVoteInput = {
  create?: Maybe<ReviewCreateWithoutDownVoteInput>;
  connect?: Maybe<ReviewWhereUniqueInput>;
  update?: Maybe<ReviewUpdateWithoutDownVoteDataInput>;
  upsert?: Maybe<ReviewUpsertWithoutDownVoteInput>;
};

export type ReviewUpdateWithoutDownVoteDataInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  item?: Maybe<ItemUpdateOneRequiredWithoutItemReviewInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutItemReviewInput>;
  upVote?: Maybe<UpReviewUpdateManyWithoutReviewInput>;
  OrderItem?: Maybe<OrderItemUpdateOneWithoutItemReviewInput>;
};

export type ReviewUpsertWithoutDownVoteInput = {
  update: ReviewUpdateWithoutDownVoteDataInput;
  create: ReviewCreateWithoutDownVoteInput;
};

export type DownReviewUpsertWithWhereUniqueWithoutItemInput = {
  where: DownReviewWhereUniqueInput;
  update: DownReviewUpdateWithoutItemDataInput;
  create: DownReviewCreateWithoutItemInput;
};

export type ItemUpsertWithoutOrderInput = {
  update: ItemUpdateWithoutOrderDataInput;
  create: ItemCreateWithoutOrderInput;
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

export type OrderUpsertWithWhereUniqueWithoutItemsInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutItemsDataInput;
  create: OrderCreateWithoutItemsInput;
};

export type OrderItemUpsertWithoutItemReviewInput = {
  update: OrderItemUpdateWithoutItemReviewDataInput;
  create: OrderItemCreateWithoutItemReviewInput;
};

export type ReviewUpsertWithoutUpVoteInput = {
  update: ReviewUpdateWithoutUpVoteDataInput;
  create: ReviewCreateWithoutUpVoteInput;
};

export type UpReviewUpdateManyWithWhereNestedInput = {
  where: UpReviewScalarWhereInput;
  data: UpReviewUpdateManyDataInput;
};

export type UpReviewScalarWhereInput = {
  id?: Maybe<StringFilter>;
  voteUp?: Maybe<BooleanFilter>;
  authorId?: Maybe<StringFilter>;
  itemId?: Maybe<StringFilter>;
  reviewUpId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<UpReviewScalarWhereInput>>;
  OR?: Maybe<Array<UpReviewScalarWhereInput>>;
  NOT?: Maybe<Array<UpReviewScalarWhereInput>>;
};

export type UpReviewUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  voteUp?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpReviewUpsertWithWhereUniqueWithoutItemInput = {
  where: UpReviewWhereUniqueInput;
  update: UpReviewUpdateWithoutItemDataInput;
  create: UpReviewCreateWithoutItemInput;
};

export type ItemUpsertWithoutDownReviewInput = {
  update: ItemUpdateWithoutDownReviewDataInput;
  create: ItemCreateWithoutDownReviewInput;
};

export type DownReviewUpsertWithWhereUniqueWithoutAuthorInput = {
  where: DownReviewWhereUniqueInput;
  update: DownReviewUpdateWithoutAuthorDataInput;
  create: DownReviewCreateWithoutAuthorInput;
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

export type ItemUpsertWithoutUpReviewInput = {
  update: ItemUpdateWithoutUpReviewDataInput;
  create: ItemCreateWithoutUpReviewInput;
};

export type UpReviewUpsertWithWhereUniqueWithoutAuthorInput = {
  where: UpReviewWhereUniqueInput;
  update: UpReviewUpdateWithoutAuthorDataInput;
  create: UpReviewCreateWithoutAuthorInput;
};

export type UserUpsertWithoutOrderInput = {
  update: UserUpdateWithoutOrderDataInput;
  create: UserCreateWithoutOrderInput;
};

export type OrderUpsertWithWhereUniqueWithoutItemInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutItemDataInput;
  create: OrderCreateWithoutItemInput;
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
  quantity?: Maybe<IntFilter>;
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
  quantity?: Maybe<Scalars['Int']>;
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

export type OrderUpsertWithWhereUniqueWithoutUserInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutUserDataInput;
  create: OrderCreateWithoutUserInput;
};

export type UserUpsertWithoutUpReviewInput = {
  update: UserUpdateWithoutUpReviewDataInput;
  create: UserCreateWithoutUpReviewInput;
};

export type UpReviewUpsertWithWhereUniqueWithoutReviewInput = {
  where: UpReviewWhereUniqueInput;
  update: UpReviewUpdateWithoutReviewDataInput;
  create: UpReviewCreateWithoutReviewInput;
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
  upVote?: Maybe<UpReviewFilter>;
  downVote?: Maybe<DownReviewFilter>;
  upVoteCount?: Maybe<IntFilter>;
  downVoteCount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderItemId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ReviewScalarWhereInput>>;
  OR?: Maybe<Array<ReviewScalarWhereInput>>;
  NOT?: Maybe<Array<ReviewScalarWhereInput>>;
};

export type ReviewUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  upVoteCount?: Maybe<Scalars['Int']>;
  downVoteCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReviewUpsertWithWhereUniqueWithoutOrderItemInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutOrderItemDataInput;
  create: ReviewCreateWithoutOrderItemInput;
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
  UpReview?: Maybe<UpReviewFilter>;
  DownReview?: Maybe<DownReviewFilter>;
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

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type SellerAddressesQueryVariables = {
  id: Scalars['String'];
};


export type SellerAddressesQuery = (
  { __typename?: 'Query' }
  & { AllAddress: Array<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'name' | 'address' | 'country' | 'state' | 'city' | 'streetAddress1' | 'streetAddress2' | 'zipCode' | 'company' | 'message' | 'additionalInfo' | 'MaincontactNubmer' | 'OthercontactNubmers' | 'Lat' | 'Lng'>
  )> }
);

export type UserAddressesQueryVariables = {
  id: Scalars['String'];
};


export type UserAddressesQuery = (
  { __typename?: 'Query' }
  & { AllAddress: Array<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'name' | 'address' | 'country' | 'state' | 'city' | 'streetAddress1' | 'streetAddress2' | 'zipCode' | 'company' | 'message' | 'additionalInfo' | 'MaincontactNubmer' | 'OthercontactNubmers' | 'Lat' | 'Lng'>
  )> }
);

export type UpdateAddressMutationVariables = {
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
  OthercontactNubmers?: Maybe<AddressUpdateOthercontactNubmersInput>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
};


export type UpdateAddressMutation = (
  { __typename?: 'Mutation' }
  & { updateOneAddress?: Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  )> }
);

export type CreateAddressMutationVariables = {
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


export type CreateAddressMutation = (
  { __typename?: 'Mutation' }
  & { CreateAddress: (
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  ) }
);

export type DeleteAddressMutationVariables = {
  id: Scalars['String'];
};


export type DeleteAddressMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneAddress?: Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  )> }
);

export type TogglePrimaryAddressMutationVariables = {
  addressId: Scalars['String'];
};


export type TogglePrimaryAddressMutation = (
  { __typename?: 'Mutation' }
  & { TogglePrimaryAddress: (
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  ) }
);

export type SingleAddressQueryVariables = {
  id: Scalars['String'];
};


export type SingleAddressQuery = (
  { __typename?: 'Query' }
  & { SingleAddress?: Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'name' | 'address' | 'country' | 'state' | 'city' | 'streetAddress1' | 'streetAddress2' | 'zipCode' | 'company' | 'message' | 'additionalInfo' | 'MaincontactNubmer' | 'OthercontactNubmers'>
  )> }
);

export type IsAdminQueryVariables = {};


export type IsAdminQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isAdmin'>
);

export type AllUserQueryVariables = {};


export type AllUserQuery = (
  { __typename?: 'Query' }
  & { AllUsers: (
    { __typename?: 'UserConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UserEdge' }
      & Pick<UserEdge, 'cursor'>
      & { node: (
        { __typename: 'User' }
        & Pick<User, 'id' | 'name' | 'email' | 'avatar' | 'role' | 'permissions' | 'likesCount' | 'reviewCount'>
        & { cart: Array<(
          { __typename?: 'CartItem' }
          & Pick<CartItem, 'id' | 'quantity' | 'itemId' | 'userId'>
          & { item: (
            { __typename?: 'Item' }
            & Pick<Item, 'id' | 'title' | 'price' | 'eagerImages'>
          ) }
        )>, likes: Array<(
          { __typename?: 'Like' }
          & Pick<Like, 'userId' | 'itemId'>
          & { item: (
            { __typename?: 'Item' }
            & Pick<Item, 'id' | 'title' | 'likesCount' | 'eagerImages' | 'price' | 'dimensions' | 'description'>
          ) }
        )>, address: Array<(
          { __typename?: 'Address' }
          & Pick<Address, 'id' | 'name' | 'address' | 'isPrimary' | 'country' | 'state' | 'city' | 'streetAddress1' | 'streetAddress2' | 'zipCode' | 'company' | 'message' | 'additionalInfo' | 'MaincontactNubmer' | 'OthercontactNubmers' | 'Lat' | 'Lng'>
        )> }
      ) }
    )>>> }
  ) }
);

export type AllSellerQueryVariables = {};


export type AllSellerQuery = (
  { __typename?: 'Query' }
  & { AllSeller: (
    { __typename?: 'SellerConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'SellerEdge' }
      & Pick<SellerEdge, 'cursor'>
      & { node: (
        { __typename?: 'Seller' }
        & Pick<Seller, 'id' | 'name' | 'email' | 'storeName' | 'sellerNationality' | 'sellerIdentification' | 'EmailIsVerified' | 'SellerItemsCout' | 'role' | 'phone' | 'Brand' | 'permissions'>
        & { PickupLocations: Array<(
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        )>, items: Array<(
          { __typename?: 'Item' }
          & Pick<Item, 'id'>
        )> }
      ) }
    )>>> }
  ) }
);

export type AllItemsQueryVariables = {};


export type AllItemsQuery = (
  { __typename?: 'Query' }
  & { AllItems: (
    { __typename?: 'ItemConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ItemEdge' }
      & Pick<ItemEdge, 'cursor'>
      & { node: (
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'likesCount' | 'reviewCount' | 'images' | 'eagerImages' | 'OtherFeatures' | 'title' | 'description' | 'overview' | 'otherInfo' | 'videoLink' | 'brand' | 'weight' | 'dimensions' | 'materials' | 'price' | 'beforeDiscountPrice' | 'stock'>
        & { likes: Array<(
          { __typename?: 'Like' }
          & Pick<Like, 'id'>
        )>, itemReview: Array<(
          { __typename?: 'Review' }
          & Pick<Review, 'id' | 'rating' | 'text' | 'itemId' | 'authorId' | 'downVoteCount' | 'upVoteCount'>
          & { author: (
            { __typename?: 'User' }
            & Pick<User, 'name' | 'avatar' | 'reviewCount'>
          ), upVote: Array<(
            { __typename?: 'UpReview' }
            & Pick<UpReview, 'id' | 'voteUp' | 'authorId' | 'itemId'>
          )>, downVote: Array<(
            { __typename?: 'DownReview' }
            & Pick<DownReview, 'id' | 'voteDown' | 'authorId' | 'itemId'>
          )> }
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
      ) }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ) }
  ) }
);

export type UpdateRoleMutationVariables = {
  userId?: Maybe<Scalars['String']>;
  sellerId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};


export type UpdateRoleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UpdateRole'>
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { CurrentUser?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'avatar' | 'role' | 'permissions' | 'likesCount' | 'reviewCount'>
    & { cart: Array<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'quantity' | 'itemId' | 'userId'>
      & { item: (
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'title' | 'price' | 'eagerImages'>
      ) }
    )>, likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'userId' | 'itemId'>
      & { item: (
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'title' | 'likesCount' | 'eagerImages' | 'price' | 'dimensions' | 'description'>
      ) }
    )>, address: Array<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'name' | 'address' | 'isPrimary' | 'country' | 'state' | 'city' | 'streetAddress1' | 'streetAddress2' | 'zipCode' | 'company' | 'message' | 'additionalInfo' | 'MaincontactNubmer' | 'OthercontactNubmers' | 'Lat' | 'Lng'>
    )> }
  )> }
);

export type User_Login_MutationMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type User_Login_MutationMutation = (
  { __typename?: 'Mutation' }
  & { UserLogin: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type Register_UserMutationVariables = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type Register_UserMutation = (
  { __typename?: 'Mutation' }
  & { CreateUser: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
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
  & Pick<Mutation, 'CreateSeller'>
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

export type ResetUsersPasswordFromProfileMutationVariables = {
  OldPassword: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type ResetUsersPasswordFromProfileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ResetUsersPasswordFromProfile'>
);

export type ContactUsMutationVariables = {
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
};


export type ContactUsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ContactUs'>
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
  videoLink?: Maybe<Scalars['String']>;
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

export type UpdateItemMutationVariables = {
  id: Scalars['String'];
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


export type UpdateItemMutation = (
  { __typename?: 'Mutation' }
  & { UpdateItem: (
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
      & Pick<Review, 'id' | 'rating' | 'text' | 'itemId' | 'authorId' | 'downVoteCount' | 'upVoteCount'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'name' | 'avatar' | 'reviewCount'>
      ), upVote: Array<(
        { __typename?: 'UpReview' }
        & Pick<UpReview, 'id' | 'voteUp' | 'authorId' | 'itemId'>
      )>, downVote: Array<(
        { __typename?: 'DownReview' }
        & Pick<DownReview, 'id' | 'voteDown' | 'authorId' | 'itemId'>
      )> }
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

export type TotalItemsCountQueryVariables = {};


export type TotalItemsCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'itemCount'>
);

export type ItemsQueryVariables = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ItemWhereUniqueInput>;
  MinPrice?: Maybe<Scalars['Float']>;
  MaxPrice?: Maybe<Scalars['Float']>;
  orderBy?: Maybe<ItemOrderByInput>;
  searchTerm?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  catagory?: Maybe<Scalars['String']>;
};


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
      & Pick<Review, 'id' | 'rating' | 'text' | 'itemId' | 'authorId' | 'downVoteCount' | 'upVoteCount'>
      & { upVote: Array<(
        { __typename?: 'UpReview' }
        & Pick<UpReview, 'id' | 'voteUp' | 'authorId' | 'itemId'>
      )>, downVote: Array<(
        { __typename?: 'DownReview' }
        & Pick<DownReview, 'id' | 'voteDown' | 'authorId' | 'itemId'>
      )> }
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

export type AddItemToCartMutationVariables = {
  itemId: Scalars['String'];
  quantity: Scalars['Int'];
};


export type AddItemToCartMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'AddItemToTheCart'>
);

export type DeleteCartItemMutationVariables = {
  cartItemId: Scalars['String'];
};


export type DeleteCartItemMutation = (
  { __typename?: 'Mutation' }
  & { DeleteCartItem: (
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'itemId'>
  ) }
);

export type EmptyUserCartMutationVariables = {
  userId: Scalars['String'];
};


export type EmptyUserCartMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'EmptyUserCart'>
);

export type ItemReviewsQueryVariables = {
  itemId: Scalars['String'];
};


export type ItemReviewsQuery = (
  { __typename?: 'Query' }
  & { ITemRevives: Array<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'rating' | 'text' | 'itemId' | 'authorId' | 'downVoteCount' | 'upVoteCount'>
    & { upVote: Array<(
      { __typename?: 'UpReview' }
      & Pick<UpReview, 'id' | 'voteUp' | 'authorId' | 'itemId'>
    )>, downVote: Array<(
      { __typename?: 'DownReview' }
      & Pick<DownReview, 'id' | 'voteDown' | 'authorId' | 'itemId'>
    )> }
  )> }
);

export type CreateReviewMutationVariables = {
  itemId: Scalars['String'];
  text: Scalars['String'];
  rating: Scalars['Float'];
};


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { CreateItemReview: (
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'text' | 'rating' | 'itemId' | 'authorId'>
  ) }
);

export type ToggleReviewUpVoteMutationVariables = {
  reviewId: Scalars['String'];
  itemId: Scalars['String'];
};


export type ToggleReviewUpVoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ToggleReviewUpVote'>
);

export type ToggleReviewDownVoteMutationVariables = {
  reviewId: Scalars['String'];
  itemId: Scalars['String'];
};


export type ToggleReviewDownVoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ToggleReviewDownVote'>
);

export type CreateOrderMutationVariables = {
  token: Scalars['String'];
};


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { CreateOrder: (
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'itemId' | 'userId' | 'charge' | 'status' | 'total'>
  ) }
);

export type OrderQueryVariables = {
  orderId: Scalars['String'];
};


export type OrderQuery = (
  { __typename?: 'Query' }
  & { Order: (
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'total' | 'charge' | 'itemId' | 'userId' | 'status' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email' | 'avatar'>
    ), Item?: Maybe<(
      { __typename?: 'Item' }
      & { CartItem: Array<(
        { __typename?: 'CartItem' }
        & Pick<CartItem, 'quantity'>
      )> }
    )>, items: Array<(
      { __typename?: 'OrderItem' }
      & Pick<OrderItem, 'images' | 'OtherFeatures' | 'title' | 'description' | 'overview' | 'otherInfo' | 'videoLink' | 'brand' | 'weight' | 'dimensions' | 'materials' | 'price' | 'beforeDiscountPrice' | 'stock' | 'quantity'>
    )> }
  ) }
);

export type RemoveAllLikesMutationVariables = {
  userId: Scalars['String'];
};


export type RemoveAllLikesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'RemoveAllLikes'>
);

export type ItemsConnectionsQueryVariables = {
  first?: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
};


export type ItemsConnectionsQuery = (
  { __typename?: 'Query' }
  & { ItemConnections: (
    { __typename?: 'ItemConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename: 'ItemEdge' }
      & Pick<ItemEdge, 'cursor'>
      & { node: (
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'likesCount' | 'reviewCount' | 'images' | 'eagerImages' | 'OtherFeatures' | 'title' | 'description' | 'overview' | 'otherInfo' | 'videoLink' | 'brand' | 'weight' | 'dimensions' | 'materials' | 'price' | 'beforeDiscountPrice' | 'stock'>
        & { likes: Array<(
          { __typename?: 'Like' }
          & Pick<Like, 'id'>
        )>, itemReview: Array<(
          { __typename?: 'Review' }
          & Pick<Review, 'id' | 'rating' | 'text' | 'itemId' | 'authorId' | 'downVoteCount' | 'upVoteCount'>
          & { upVote: Array<(
            { __typename?: 'UpReview' }
            & Pick<UpReview, 'id' | 'voteUp' | 'authorId' | 'itemId'>
          )>, downVote: Array<(
            { __typename?: 'DownReview' }
            & Pick<DownReview, 'id' | 'voteDown' | 'authorId' | 'itemId'>
          )> }
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
      ) }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ) }
  ) }
);

export type SearchTermResultQueryVariables = {
  first?: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  term: Scalars['String'];
};


export type SearchTermResultQuery = (
  { __typename?: 'Query' }
  & { SearchTermResults: (
    { __typename?: 'ItemConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename: 'ItemEdge' }
      & Pick<ItemEdge, 'cursor'>
      & { node: (
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'likesCount' | 'reviewCount' | 'images' | 'eagerImages' | 'OtherFeatures' | 'title' | 'description' | 'overview' | 'otherInfo' | 'videoLink' | 'brand' | 'weight' | 'dimensions' | 'materials' | 'price' | 'beforeDiscountPrice' | 'stock'>
        & { likes: Array<(
          { __typename?: 'Like' }
          & Pick<Like, 'id'>
        )>, itemReview: Array<(
          { __typename?: 'Review' }
          & Pick<Review, 'id' | 'rating' | 'text' | 'itemId' | 'authorId' | 'downVoteCount' | 'upVoteCount'>
          & { upVote: Array<(
            { __typename?: 'UpReview' }
            & Pick<UpReview, 'id' | 'voteUp' | 'authorId' | 'itemId'>
          )>, downVote: Array<(
            { __typename?: 'DownReview' }
            & Pick<DownReview, 'id' | 'voteDown' | 'authorId' | 'itemId'>
          )> }
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
      ) }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ) }
  ) }
);

export type SellerItemsQueryVariables = {
  SellerId?: Maybe<Scalars['String']>;
};


export type SellerItemsQuery = (
  { __typename?: 'Query' }
  & { items: Array<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'likesCount' | 'reviewCount' | 'images' | 'eagerImages' | 'OtherFeatures' | 'title' | 'description' | 'overview' | 'otherInfo' | 'videoLink' | 'brand' | 'weight' | 'dimensions' | 'materials' | 'price' | 'beforeDiscountPrice' | 'stock'>
    & { likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'id'>
    )>, itemReview: Array<(
      { __typename?: 'Review' }
      & Pick<Review, 'id' | 'rating' | 'text' | 'itemId' | 'authorId' | 'downVoteCount' | 'upVoteCount'>
      & { upVote: Array<(
        { __typename?: 'UpReview' }
        & Pick<UpReview, 'id' | 'voteUp' | 'authorId' | 'itemId'>
      )>, downVote: Array<(
        { __typename?: 'DownReview' }
        & Pick<DownReview, 'id' | 'voteDown' | 'authorId' | 'itemId'>
      )> }
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


export const SellerAddressesDocument = gql`
    query SellerAddresses($id: String!) {
  AllAddress(where: {sellerId: {equals: $id}}) {
    id
    name
    address
    country
    state
    city
    streetAddress1
    streetAddress2
    zipCode
    company
    message
    additionalInfo
    MaincontactNubmer
    OthercontactNubmers
    Lat
    Lng
  }
}
    `;
export type SellerAddressesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SellerAddressesQuery, SellerAddressesQueryVariables>, 'query'> & ({ variables: SellerAddressesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SellerAddressesComponent = (props: SellerAddressesComponentProps) => (
      <ApolloReactComponents.Query<SellerAddressesQuery, SellerAddressesQueryVariables> query={SellerAddressesDocument} {...props} />
    );
    
export type SellerAddressesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SellerAddressesQuery, SellerAddressesQueryVariables>
    } & TChildProps;
export function withSellerAddresses<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SellerAddressesQuery,
  SellerAddressesQueryVariables,
  SellerAddressesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SellerAddressesQuery, SellerAddressesQueryVariables, SellerAddressesProps<TChildProps, TDataName>>(SellerAddressesDocument, {
      alias: 'sellerAddresses',
      ...operationOptions
    });
};

/**
 * __useSellerAddressesQuery__
 *
 * To run a query within a React component, call `useSellerAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerAddressesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSellerAddressesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SellerAddressesQuery, SellerAddressesQueryVariables>) {
        return ApolloReactHooks.useQuery<SellerAddressesQuery, SellerAddressesQueryVariables>(SellerAddressesDocument, baseOptions);
      }
export function useSellerAddressesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SellerAddressesQuery, SellerAddressesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SellerAddressesQuery, SellerAddressesQueryVariables>(SellerAddressesDocument, baseOptions);
        }
export type SellerAddressesQueryHookResult = ReturnType<typeof useSellerAddressesQuery>;
export type SellerAddressesLazyQueryHookResult = ReturnType<typeof useSellerAddressesLazyQuery>;
export type SellerAddressesQueryResult = ApolloReactCommon.QueryResult<SellerAddressesQuery, SellerAddressesQueryVariables>;
export const UserAddressesDocument = gql`
    query UserAddresses($id: String!) {
  AllAddress(where: {userId: {equals: $id}}) {
    id
    name
    address
    country
    state
    city
    streetAddress1
    streetAddress2
    zipCode
    company
    message
    additionalInfo
    MaincontactNubmer
    OthercontactNubmers
    Lat
    Lng
  }
}
    `;
export type UserAddressesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserAddressesQuery, UserAddressesQueryVariables>, 'query'> & ({ variables: UserAddressesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserAddressesComponent = (props: UserAddressesComponentProps) => (
      <ApolloReactComponents.Query<UserAddressesQuery, UserAddressesQueryVariables> query={UserAddressesDocument} {...props} />
    );
    
export type UserAddressesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserAddressesQuery, UserAddressesQueryVariables>
    } & TChildProps;
export function withUserAddresses<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserAddressesQuery,
  UserAddressesQueryVariables,
  UserAddressesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserAddressesQuery, UserAddressesQueryVariables, UserAddressesProps<TChildProps, TDataName>>(UserAddressesDocument, {
      alias: 'userAddresses',
      ...operationOptions
    });
};

/**
 * __useUserAddressesQuery__
 *
 * To run a query within a React component, call `useUserAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAddressesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserAddressesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserAddressesQuery, UserAddressesQueryVariables>) {
        return ApolloReactHooks.useQuery<UserAddressesQuery, UserAddressesQueryVariables>(UserAddressesDocument, baseOptions);
      }
export function useUserAddressesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserAddressesQuery, UserAddressesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserAddressesQuery, UserAddressesQueryVariables>(UserAddressesDocument, baseOptions);
        }
export type UserAddressesQueryHookResult = ReturnType<typeof useUserAddressesQuery>;
export type UserAddressesLazyQueryHookResult = ReturnType<typeof useUserAddressesLazyQuery>;
export type UserAddressesQueryResult = ApolloReactCommon.QueryResult<UserAddressesQuery, UserAddressesQueryVariables>;
export const UpdateAddressDocument = gql`
    mutation UpdateAddress($id: String!, $name: String!, $address: String!, $country: String!, $state: String!, $city: String!, $streetAddress1: String, $streetAddress2: String, $zipCode: String!, $company: String, $message: String, $additionalInfo: String, $MaincontactNubmer: String!, $OthercontactNubmers: AddressUpdateOthercontactNubmersInput, $Lat: Float, $Lng: Float) {
  updateOneAddress(data: {name: $name, address: $address, country: $country, state: $state, city: $city, streetAddress1: $streetAddress1, streetAddress2: $streetAddress2, zipCode: $zipCode, company: $company, message: $message, additionalInfo: $additionalInfo, MaincontactNubmer: $MaincontactNubmer, OthercontactNubmers: $OthercontactNubmers, Lat: $Lat, Lng: $Lng}, where: {id: $id}) {
    id
  }
}
    `;
export type UpdateAddressMutationFn = ApolloReactCommon.MutationFunction<UpdateAddressMutation, UpdateAddressMutationVariables>;
export type UpdateAddressComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAddressMutation, UpdateAddressMutationVariables>, 'mutation'>;

    export const UpdateAddressComponent = (props: UpdateAddressComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAddressMutation, UpdateAddressMutationVariables> mutation={UpdateAddressDocument} {...props} />
    );
    
export type UpdateAddressProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAddressMutation, UpdateAddressMutationVariables>
    } & TChildProps;
export function withUpdateAddress<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAddressMutation,
  UpdateAddressMutationVariables,
  UpdateAddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAddressMutation, UpdateAddressMutationVariables, UpdateAddressProps<TChildProps, TDataName>>(UpdateAddressDocument, {
      alias: 'updateAddress',
      ...operationOptions
    });
};

/**
 * __useUpdateAddressMutation__
 *
 * To run a mutation, you first call `useUpdateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAddressMutation, { data, loading, error }] = useUpdateAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      country: // value for 'country'
 *      state: // value for 'state'
 *      city: // value for 'city'
 *      streetAddress1: // value for 'streetAddress1'
 *      streetAddress2: // value for 'streetAddress2'
 *      zipCode: // value for 'zipCode'
 *      company: // value for 'company'
 *      message: // value for 'message'
 *      additionalInfo: // value for 'additionalInfo'
 *      MaincontactNubmer: // value for 'MaincontactNubmer'
 *      OthercontactNubmers: // value for 'OthercontactNubmers'
 *      Lat: // value for 'Lat'
 *      Lng: // value for 'Lng'
 *   },
 * });
 */
export function useUpdateAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAddressMutation, UpdateAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAddressMutation, UpdateAddressMutationVariables>(UpdateAddressDocument, baseOptions);
      }
export type UpdateAddressMutationHookResult = ReturnType<typeof useUpdateAddressMutation>;
export type UpdateAddressMutationResult = ApolloReactCommon.MutationResult<UpdateAddressMutation>;
export type UpdateAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAddressMutation, UpdateAddressMutationVariables>;
export const CreateAddressDocument = gql`
    mutation CreateAddress($name: String!, $address: String!, $MaincontactNubmer: String!, $country: String!, $state: String!, $city: String!, $streetAddress1: String, $streetAddress2: String, $zipCode: String, $company: String, $message: String, $additionalInfo: String, $OthercontactNubmers: [String!], $Lat: Float, $Lng: Float) {
  CreateAddress(name: $name, address: $address, MaincontactNubmer: $MaincontactNubmer, country: $country, state: $state, city: $city, streetAddress1: $streetAddress1, streetAddress2: $streetAddress2, zipCode: $zipCode, company: $company, message: $message, additionalInfo: $additionalInfo, OthercontactNubmers: $OthercontactNubmers, Lat: $Lat, Lng: $Lng) {
    id
  }
}
    `;
export type CreateAddressMutationFn = ApolloReactCommon.MutationFunction<CreateAddressMutation, CreateAddressMutationVariables>;
export type CreateAddressComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAddressMutation, CreateAddressMutationVariables>, 'mutation'>;

    export const CreateAddressComponent = (props: CreateAddressComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAddressMutation, CreateAddressMutationVariables> mutation={CreateAddressDocument} {...props} />
    );
    
export type CreateAddressProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateAddressMutation, CreateAddressMutationVariables>
    } & TChildProps;
export function withCreateAddress<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAddressMutation,
  CreateAddressMutationVariables,
  CreateAddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAddressMutation, CreateAddressMutationVariables, CreateAddressProps<TChildProps, TDataName>>(CreateAddressDocument, {
      alias: 'createAddress',
      ...operationOptions
    });
};

/**
 * __useCreateAddressMutation__
 *
 * To run a mutation, you first call `useCreateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAddressMutation, { data, loading, error }] = useCreateAddressMutation({
 *   variables: {
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      MaincontactNubmer: // value for 'MaincontactNubmer'
 *      country: // value for 'country'
 *      state: // value for 'state'
 *      city: // value for 'city'
 *      streetAddress1: // value for 'streetAddress1'
 *      streetAddress2: // value for 'streetAddress2'
 *      zipCode: // value for 'zipCode'
 *      company: // value for 'company'
 *      message: // value for 'message'
 *      additionalInfo: // value for 'additionalInfo'
 *      OthercontactNubmers: // value for 'OthercontactNubmers'
 *      Lat: // value for 'Lat'
 *      Lng: // value for 'Lng'
 *   },
 * });
 */
export function useCreateAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAddressMutation, CreateAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAddressMutation, CreateAddressMutationVariables>(CreateAddressDocument, baseOptions);
      }
export type CreateAddressMutationHookResult = ReturnType<typeof useCreateAddressMutation>;
export type CreateAddressMutationResult = ApolloReactCommon.MutationResult<CreateAddressMutation>;
export type CreateAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAddressMutation, CreateAddressMutationVariables>;
export const DeleteAddressDocument = gql`
    mutation DeleteAddress($id: String!) {
  deleteOneAddress(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteAddressMutationFn = ApolloReactCommon.MutationFunction<DeleteAddressMutation, DeleteAddressMutationVariables>;
export type DeleteAddressComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAddressMutation, DeleteAddressMutationVariables>, 'mutation'>;

    export const DeleteAddressComponent = (props: DeleteAddressComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAddressMutation, DeleteAddressMutationVariables> mutation={DeleteAddressDocument} {...props} />
    );
    
export type DeleteAddressProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteAddressMutation, DeleteAddressMutationVariables>
    } & TChildProps;
export function withDeleteAddress<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAddressMutation,
  DeleteAddressMutationVariables,
  DeleteAddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAddressMutation, DeleteAddressMutationVariables, DeleteAddressProps<TChildProps, TDataName>>(DeleteAddressDocument, {
      alias: 'deleteAddress',
      ...operationOptions
    });
};

/**
 * __useDeleteAddressMutation__
 *
 * To run a mutation, you first call `useDeleteAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAddressMutation, { data, loading, error }] = useDeleteAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAddressMutation, DeleteAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAddressMutation, DeleteAddressMutationVariables>(DeleteAddressDocument, baseOptions);
      }
export type DeleteAddressMutationHookResult = ReturnType<typeof useDeleteAddressMutation>;
export type DeleteAddressMutationResult = ApolloReactCommon.MutationResult<DeleteAddressMutation>;
export type DeleteAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAddressMutation, DeleteAddressMutationVariables>;
export const TogglePrimaryAddressDocument = gql`
    mutation TogglePrimaryAddress($addressId: String!) {
  TogglePrimaryAddress(addressId: $addressId) {
    id
  }
}
    `;
export type TogglePrimaryAddressMutationFn = ApolloReactCommon.MutationFunction<TogglePrimaryAddressMutation, TogglePrimaryAddressMutationVariables>;
export type TogglePrimaryAddressComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TogglePrimaryAddressMutation, TogglePrimaryAddressMutationVariables>, 'mutation'>;

    export const TogglePrimaryAddressComponent = (props: TogglePrimaryAddressComponentProps) => (
      <ApolloReactComponents.Mutation<TogglePrimaryAddressMutation, TogglePrimaryAddressMutationVariables> mutation={TogglePrimaryAddressDocument} {...props} />
    );
    
export type TogglePrimaryAddressProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<TogglePrimaryAddressMutation, TogglePrimaryAddressMutationVariables>
    } & TChildProps;
export function withTogglePrimaryAddress<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TogglePrimaryAddressMutation,
  TogglePrimaryAddressMutationVariables,
  TogglePrimaryAddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TogglePrimaryAddressMutation, TogglePrimaryAddressMutationVariables, TogglePrimaryAddressProps<TChildProps, TDataName>>(TogglePrimaryAddressDocument, {
      alias: 'togglePrimaryAddress',
      ...operationOptions
    });
};

/**
 * __useTogglePrimaryAddressMutation__
 *
 * To run a mutation, you first call `useTogglePrimaryAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTogglePrimaryAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [togglePrimaryAddressMutation, { data, loading, error }] = useTogglePrimaryAddressMutation({
 *   variables: {
 *      addressId: // value for 'addressId'
 *   },
 * });
 */
export function useTogglePrimaryAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TogglePrimaryAddressMutation, TogglePrimaryAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<TogglePrimaryAddressMutation, TogglePrimaryAddressMutationVariables>(TogglePrimaryAddressDocument, baseOptions);
      }
export type TogglePrimaryAddressMutationHookResult = ReturnType<typeof useTogglePrimaryAddressMutation>;
export type TogglePrimaryAddressMutationResult = ApolloReactCommon.MutationResult<TogglePrimaryAddressMutation>;
export type TogglePrimaryAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<TogglePrimaryAddressMutation, TogglePrimaryAddressMutationVariables>;
export const SingleAddressDocument = gql`
    query SingleAddress($id: String!) {
  SingleAddress(where: {id: $id}) {
    id
    name
    address
    country
    state
    city
    streetAddress1
    streetAddress2
    zipCode
    company
    message
    additionalInfo
    MaincontactNubmer
    OthercontactNubmers
  }
}
    `;
export type SingleAddressComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleAddressQuery, SingleAddressQueryVariables>, 'query'> & ({ variables: SingleAddressQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleAddressComponent = (props: SingleAddressComponentProps) => (
      <ApolloReactComponents.Query<SingleAddressQuery, SingleAddressQueryVariables> query={SingleAddressDocument} {...props} />
    );
    
export type SingleAddressProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleAddressQuery, SingleAddressQueryVariables>
    } & TChildProps;
export function withSingleAddress<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleAddressQuery,
  SingleAddressQueryVariables,
  SingleAddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleAddressQuery, SingleAddressQueryVariables, SingleAddressProps<TChildProps, TDataName>>(SingleAddressDocument, {
      alias: 'singleAddress',
      ...operationOptions
    });
};

/**
 * __useSingleAddressQuery__
 *
 * To run a query within a React component, call `useSingleAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleAddressQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SingleAddressQuery, SingleAddressQueryVariables>) {
        return ApolloReactHooks.useQuery<SingleAddressQuery, SingleAddressQueryVariables>(SingleAddressDocument, baseOptions);
      }
export function useSingleAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleAddressQuery, SingleAddressQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SingleAddressQuery, SingleAddressQueryVariables>(SingleAddressDocument, baseOptions);
        }
export type SingleAddressQueryHookResult = ReturnType<typeof useSingleAddressQuery>;
export type SingleAddressLazyQueryHookResult = ReturnType<typeof useSingleAddressLazyQuery>;
export type SingleAddressQueryResult = ApolloReactCommon.QueryResult<SingleAddressQuery, SingleAddressQueryVariables>;
export const IsAdminDocument = gql`
    query isAdmin {
  isAdmin
}
    `;
export type IsAdminComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IsAdminQuery, IsAdminQueryVariables>, 'query'>;

    export const IsAdminComponent = (props: IsAdminComponentProps) => (
      <ApolloReactComponents.Query<IsAdminQuery, IsAdminQueryVariables> query={IsAdminDocument} {...props} />
    );
    
export type IsAdminProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IsAdminQuery, IsAdminQueryVariables>
    } & TChildProps;
export function withIsAdmin<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IsAdminQuery,
  IsAdminQueryVariables,
  IsAdminProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IsAdminQuery, IsAdminQueryVariables, IsAdminProps<TChildProps, TDataName>>(IsAdminDocument, {
      alias: 'isAdmin',
      ...operationOptions
    });
};

/**
 * __useIsAdminQuery__
 *
 * To run a query within a React component, call `useIsAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsAdminQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IsAdminQuery, IsAdminQueryVariables>) {
        return ApolloReactHooks.useQuery<IsAdminQuery, IsAdminQueryVariables>(IsAdminDocument, baseOptions);
      }
export function useIsAdminLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IsAdminQuery, IsAdminQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IsAdminQuery, IsAdminQueryVariables>(IsAdminDocument, baseOptions);
        }
export type IsAdminQueryHookResult = ReturnType<typeof useIsAdminQuery>;
export type IsAdminLazyQueryHookResult = ReturnType<typeof useIsAdminLazyQuery>;
export type IsAdminQueryResult = ApolloReactCommon.QueryResult<IsAdminQuery, IsAdminQueryVariables>;
export const AllUserDocument = gql`
    query AllUser {
  AllUsers(first: 100) {
    edges {
      cursor
      node {
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
          quantity
          itemId
          userId
          item {
            id
            title
            price
            eagerImages
          }
        }
        likes {
          userId
          itemId
          item {
            id
            title
            likesCount
            eagerImages
            price
            dimensions
            description
          }
        }
        address {
          id
          name
          address
          isPrimary
          country
          state
          city
          streetAddress1
          streetAddress2
          zipCode
          company
          message
          additionalInfo
          MaincontactNubmer
          OthercontactNubmers
          Lat
          Lng
        }
        __typename
      }
    }
  }
}
    `;
export type AllUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUserQuery, AllUserQueryVariables>, 'query'>;

    export const AllUserComponent = (props: AllUserComponentProps) => (
      <ApolloReactComponents.Query<AllUserQuery, AllUserQueryVariables> query={AllUserDocument} {...props} />
    );
    
export type AllUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllUserQuery, AllUserQueryVariables>
    } & TChildProps;
export function withAllUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllUserQuery,
  AllUserQueryVariables,
  AllUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllUserQuery, AllUserQueryVariables, AllUserProps<TChildProps, TDataName>>(AllUserDocument, {
      alias: 'allUser',
      ...operationOptions
    });
};

/**
 * __useAllUserQuery__
 *
 * To run a query within a React component, call `useAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUserQuery, AllUserQueryVariables>) {
        return ApolloReactHooks.useQuery<AllUserQuery, AllUserQueryVariables>(AllUserDocument, baseOptions);
      }
export function useAllUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUserQuery, AllUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllUserQuery, AllUserQueryVariables>(AllUserDocument, baseOptions);
        }
export type AllUserQueryHookResult = ReturnType<typeof useAllUserQuery>;
export type AllUserLazyQueryHookResult = ReturnType<typeof useAllUserLazyQuery>;
export type AllUserQueryResult = ApolloReactCommon.QueryResult<AllUserQuery, AllUserQueryVariables>;
export const AllSellerDocument = gql`
    query AllSeller {
  AllSeller(first: 100) {
    edges {
      cursor
      node {
        id
        name
        email
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
  }
}
    `;
export type AllSellerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllSellerQuery, AllSellerQueryVariables>, 'query'>;

    export const AllSellerComponent = (props: AllSellerComponentProps) => (
      <ApolloReactComponents.Query<AllSellerQuery, AllSellerQueryVariables> query={AllSellerDocument} {...props} />
    );
    
export type AllSellerProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllSellerQuery, AllSellerQueryVariables>
    } & TChildProps;
export function withAllSeller<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllSellerQuery,
  AllSellerQueryVariables,
  AllSellerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllSellerQuery, AllSellerQueryVariables, AllSellerProps<TChildProps, TDataName>>(AllSellerDocument, {
      alias: 'allSeller',
      ...operationOptions
    });
};

/**
 * __useAllSellerQuery__
 *
 * To run a query within a React component, call `useAllSellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSellerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSellerQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSellerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllSellerQuery, AllSellerQueryVariables>) {
        return ApolloReactHooks.useQuery<AllSellerQuery, AllSellerQueryVariables>(AllSellerDocument, baseOptions);
      }
export function useAllSellerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllSellerQuery, AllSellerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllSellerQuery, AllSellerQueryVariables>(AllSellerDocument, baseOptions);
        }
export type AllSellerQueryHookResult = ReturnType<typeof useAllSellerQuery>;
export type AllSellerLazyQueryHookResult = ReturnType<typeof useAllSellerLazyQuery>;
export type AllSellerQueryResult = ApolloReactCommon.QueryResult<AllSellerQuery, AllSellerQueryVariables>;
export const AllItemsDocument = gql`
    query AllItems {
  AllItems(first: 100) {
    edges {
      cursor
      node {
        id
        likes {
          id
        }
        likesCount
        itemReview {
          id
          rating
          text
          itemId
          authorId
          author {
            name
            avatar
            reviewCount
          }
          downVoteCount
          upVoteCount
          upVote {
            id
            voteUp
            authorId
            itemId
          }
          downVote {
            id
            voteDown
            authorId
            itemId
          }
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
    pageInfo {
      hasNextPage
    }
  }
}
    `;
export type AllItemsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllItemsQuery, AllItemsQueryVariables>, 'query'>;

    export const AllItemsComponent = (props: AllItemsComponentProps) => (
      <ApolloReactComponents.Query<AllItemsQuery, AllItemsQueryVariables> query={AllItemsDocument} {...props} />
    );
    
export type AllItemsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllItemsQuery, AllItemsQueryVariables>
    } & TChildProps;
export function withAllItems<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllItemsQuery,
  AllItemsQueryVariables,
  AllItemsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllItemsQuery, AllItemsQueryVariables, AllItemsProps<TChildProps, TDataName>>(AllItemsDocument, {
      alias: 'allItems',
      ...operationOptions
    });
};

/**
 * __useAllItemsQuery__
 *
 * To run a query within a React component, call `useAllItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllItemsQuery, AllItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllItemsQuery, AllItemsQueryVariables>(AllItemsDocument, baseOptions);
      }
export function useAllItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllItemsQuery, AllItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllItemsQuery, AllItemsQueryVariables>(AllItemsDocument, baseOptions);
        }
export type AllItemsQueryHookResult = ReturnType<typeof useAllItemsQuery>;
export type AllItemsLazyQueryHookResult = ReturnType<typeof useAllItemsLazyQuery>;
export type AllItemsQueryResult = ApolloReactCommon.QueryResult<AllItemsQuery, AllItemsQueryVariables>;
export const UpdateRoleDocument = gql`
    mutation UpdateRole($userId: String, $sellerId: String, $role: Role) {
  UpdateRole(userId: $userId, sellerId: $sellerId, role: $role)
}
    `;
export type UpdateRoleMutationFn = ApolloReactCommon.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>;
export type UpdateRoleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateRoleMutation, UpdateRoleMutationVariables>, 'mutation'>;

    export const UpdateRoleComponent = (props: UpdateRoleComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateRoleMutation, UpdateRoleMutationVariables> mutation={UpdateRoleDocument} {...props} />
    );
    
export type UpdateRoleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>
    } & TChildProps;
export function withUpdateRole<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateRoleMutation,
  UpdateRoleMutationVariables,
  UpdateRoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateRoleMutation, UpdateRoleMutationVariables, UpdateRoleProps<TChildProps, TDataName>>(UpdateRoleDocument, {
      alias: 'updateRole',
      ...operationOptions
    });
};

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      sellerId: // value for 'sellerId'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useUpdateRoleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRoleMutation, UpdateRoleMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateRoleMutation, UpdateRoleMutationVariables>(UpdateRoleDocument, baseOptions);
      }
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = ApolloReactCommon.MutationResult<UpdateRoleMutation>;
export type UpdateRoleMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
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
      quantity
      itemId
      userId
      item {
        id
        title
        price
        eagerImages
      }
    }
    likes {
      userId
      itemId
      item {
        id
        title
        likesCount
        eagerImages
        price
        dimensions
        description
      }
    }
    address {
      id
      name
      address
      isPrimary
      country
      state
      city
      streetAddress1
      streetAddress2
      zipCode
      company
      message
      additionalInfo
      MaincontactNubmer
      OthercontactNubmers
      Lat
      Lng
    }
    __typename
  }
}
    `;
export type CurrentUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentUserQuery, CurrentUserQueryVariables>, 'query'>;

    export const CurrentUserComponent = (props: CurrentUserComponentProps) => (
      <ApolloReactComponents.Query<CurrentUserQuery, CurrentUserQueryVariables> query={CurrentUserDocument} {...props} />
    );
    
export type CurrentUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentUserQuery, CurrentUserQueryVariables>
    } & TChildProps;
export function withCurrentUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentUserQuery,
  CurrentUserQueryVariables,
  CurrentUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentUserQuery, CurrentUserQueryVariables, CurrentUserProps<TChildProps, TDataName>>(CurrentUserDocument, {
      alias: 'currentUser',
      ...operationOptions
    });
};

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const User_Login_MutationDocument = gql`
    mutation USER_LOGIN_MUTATION($email: String!, $password: String!) {
  UserLogin(email: $email, password: $password) {
    token
  }
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
  CreateUser(name: $name, email: $email, password: $password) {
    token
  }
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
  CreateSeller(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword, storeName: $storeName, sellerNationality: $sellerNationality, sellerIdentification: $sellerIdentification, Brand: $Brand, AddressName: $AddressName, AddressAddress: $AddressAddress, AddressCountry: $AddressCountry, AddressState: $AddressState, AddressCity: $AddressCity, AddressZipCode: $AddressZipCode, AddressMaincontactNubmer: $AddressMaincontactNubmer, AddressStreetAddress1: $AddressStreetAddress1, AddressStreetAddress2: $AddressStreetAddress2, AddressCompany: $AddressCompany)
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
export const ResetUsersPasswordFromProfileDocument = gql`
    mutation ResetUsersPasswordFromProfile($OldPassword: String!, $password: String!, $confirmPassword: String!) {
  ResetUsersPasswordFromProfile(OldPassword: $OldPassword, password: $password, confirmPassword: $confirmPassword)
}
    `;
export type ResetUsersPasswordFromProfileMutationFn = ApolloReactCommon.MutationFunction<ResetUsersPasswordFromProfileMutation, ResetUsersPasswordFromProfileMutationVariables>;
export type ResetUsersPasswordFromProfileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ResetUsersPasswordFromProfileMutation, ResetUsersPasswordFromProfileMutationVariables>, 'mutation'>;

    export const ResetUsersPasswordFromProfileComponent = (props: ResetUsersPasswordFromProfileComponentProps) => (
      <ApolloReactComponents.Mutation<ResetUsersPasswordFromProfileMutation, ResetUsersPasswordFromProfileMutationVariables> mutation={ResetUsersPasswordFromProfileDocument} {...props} />
    );
    
export type ResetUsersPasswordFromProfileProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ResetUsersPasswordFromProfileMutation, ResetUsersPasswordFromProfileMutationVariables>
    } & TChildProps;
export function withResetUsersPasswordFromProfile<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ResetUsersPasswordFromProfileMutation,
  ResetUsersPasswordFromProfileMutationVariables,
  ResetUsersPasswordFromProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ResetUsersPasswordFromProfileMutation, ResetUsersPasswordFromProfileMutationVariables, ResetUsersPasswordFromProfileProps<TChildProps, TDataName>>(ResetUsersPasswordFromProfileDocument, {
      alias: 'resetUsersPasswordFromProfile',
      ...operationOptions
    });
};

/**
 * __useResetUsersPasswordFromProfileMutation__
 *
 * To run a mutation, you first call `useResetUsersPasswordFromProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetUsersPasswordFromProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetUsersPasswordFromProfileMutation, { data, loading, error }] = useResetUsersPasswordFromProfileMutation({
 *   variables: {
 *      OldPassword: // value for 'OldPassword'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useResetUsersPasswordFromProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetUsersPasswordFromProfileMutation, ResetUsersPasswordFromProfileMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetUsersPasswordFromProfileMutation, ResetUsersPasswordFromProfileMutationVariables>(ResetUsersPasswordFromProfileDocument, baseOptions);
      }
export type ResetUsersPasswordFromProfileMutationHookResult = ReturnType<typeof useResetUsersPasswordFromProfileMutation>;
export type ResetUsersPasswordFromProfileMutationResult = ApolloReactCommon.MutationResult<ResetUsersPasswordFromProfileMutation>;
export type ResetUsersPasswordFromProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetUsersPasswordFromProfileMutation, ResetUsersPasswordFromProfileMutationVariables>;
export const ContactUsDocument = gql`
    mutation ContactUs($email: String!, $subject: String!, $message: String!) {
  ContactUs(email: $email, subject: $subject, message: $message)
}
    `;
export type ContactUsMutationFn = ApolloReactCommon.MutationFunction<ContactUsMutation, ContactUsMutationVariables>;
export type ContactUsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ContactUsMutation, ContactUsMutationVariables>, 'mutation'>;

    export const ContactUsComponent = (props: ContactUsComponentProps) => (
      <ApolloReactComponents.Mutation<ContactUsMutation, ContactUsMutationVariables> mutation={ContactUsDocument} {...props} />
    );
    
export type ContactUsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ContactUsMutation, ContactUsMutationVariables>
    } & TChildProps;
export function withContactUs<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ContactUsMutation,
  ContactUsMutationVariables,
  ContactUsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ContactUsMutation, ContactUsMutationVariables, ContactUsProps<TChildProps, TDataName>>(ContactUsDocument, {
      alias: 'contactUs',
      ...operationOptions
    });
};

/**
 * __useContactUsMutation__
 *
 * To run a mutation, you first call `useContactUsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUsMutation, { data, loading, error }] = useContactUsMutation({
 *   variables: {
 *      email: // value for 'email'
 *      subject: // value for 'subject'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useContactUsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ContactUsMutation, ContactUsMutationVariables>) {
        return ApolloReactHooks.useMutation<ContactUsMutation, ContactUsMutationVariables>(ContactUsDocument, baseOptions);
      }
export type ContactUsMutationHookResult = ReturnType<typeof useContactUsMutation>;
export type ContactUsMutationResult = ApolloReactCommon.MutationResult<ContactUsMutation>;
export type ContactUsMutationOptions = ApolloReactCommon.BaseMutationOptions<ContactUsMutation, ContactUsMutationVariables>;
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
    mutation CreateItem($title: String!, $description: String!, $overview: String, $brand: String, $weight: String, $dimensions: String, $materials: String, $otherInfo: String, $videoLink: String, $price: Float!, $beforeDiscountPrice: Float!, $stock: Int, $images: [String!], $eagerImages: [String!], $catagory: [String!], $tags: [String!], $colors: [String!], $otherFeature: [String!]!) {
  CreateItem(title: $title, description: $description, overview: $overview, brand: $brand, weight: $weight, dimensions: $dimensions, materials: $materials, videoLink: $videoLink, otherInfo: $otherInfo, price: $price, beforeDiscountPrice: $beforeDiscountPrice, stock: $stock, images: $images, eagerImages: $eagerImages, catagory: $catagory, tags: $tags, colors: $colors, otherFeature: $otherFeature) {
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
 *      videoLink: // value for 'videoLink'
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
export const UpdateItemDocument = gql`
    mutation UpdateItem($id: String!, $title: String, $description: String, $overview: String, $brand: String, $weight: String, $dimensions: String, $materials: String, $otherInfo: String, $videoLink: String, $price: Float, $beforeDiscountPrice: Float, $stock: Int, $images: [String!], $eagerImages: [String!], $catagory: [String!], $tags: [String!], $colors: [String!], $otherFeature: [String!]) {
  UpdateItem(id: $id, title: $title, description: $description, overview: $overview, brand: $brand, weight: $weight, dimensions: $dimensions, materials: $materials, videoLink: $videoLink, otherInfo: $otherInfo, price: $price, beforeDiscountPrice: $beforeDiscountPrice, stock: $stock, images: $images, eagerImages: $eagerImages, catagory: $catagory, tags: $tags, colors: $colors, otherFeature: $otherFeature) {
    id
  }
}
    `;
export type UpdateItemMutationFn = ApolloReactCommon.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;
export type UpdateItemComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateItemMutation, UpdateItemMutationVariables>, 'mutation'>;

    export const UpdateItemComponent = (props: UpdateItemComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateItemMutation, UpdateItemMutationVariables> mutation={UpdateItemDocument} {...props} />
    );
    
export type UpdateItemProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>
    } & TChildProps;
export function withUpdateItem<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateItemMutation,
  UpdateItemMutationVariables,
  UpdateItemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateItemMutation, UpdateItemMutationVariables, UpdateItemProps<TChildProps, TDataName>>(UpdateItemDocument, {
      alias: 'updateItem',
      ...operationOptions
    });
};

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      overview: // value for 'overview'
 *      brand: // value for 'brand'
 *      weight: // value for 'weight'
 *      dimensions: // value for 'dimensions'
 *      materials: // value for 'materials'
 *      otherInfo: // value for 'otherInfo'
 *      videoLink: // value for 'videoLink'
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
export function useUpdateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, baseOptions);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = ApolloReactCommon.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
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
      rating
      text
      itemId
      authorId
      author {
        name
        avatar
        reviewCount
      }
      downVoteCount
      upVoteCount
      upVote {
        id
        voteUp
        authorId
        itemId
      }
      downVote {
        id
        voteDown
        authorId
        itemId
      }
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
export const TotalItemsCountDocument = gql`
    query TotalItemsCount {
  itemCount
}
    `;
export type TotalItemsCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TotalItemsCountQuery, TotalItemsCountQueryVariables>, 'query'>;

    export const TotalItemsCountComponent = (props: TotalItemsCountComponentProps) => (
      <ApolloReactComponents.Query<TotalItemsCountQuery, TotalItemsCountQueryVariables> query={TotalItemsCountDocument} {...props} />
    );
    
export type TotalItemsCountProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TotalItemsCountQuery, TotalItemsCountQueryVariables>
    } & TChildProps;
export function withTotalItemsCount<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TotalItemsCountQuery,
  TotalItemsCountQueryVariables,
  TotalItemsCountProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TotalItemsCountQuery, TotalItemsCountQueryVariables, TotalItemsCountProps<TChildProps, TDataName>>(TotalItemsCountDocument, {
      alias: 'totalItemsCount',
      ...operationOptions
    });
};

/**
 * __useTotalItemsCountQuery__
 *
 * To run a query within a React component, call `useTotalItemsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalItemsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalItemsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalItemsCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TotalItemsCountQuery, TotalItemsCountQueryVariables>) {
        return ApolloReactHooks.useQuery<TotalItemsCountQuery, TotalItemsCountQueryVariables>(TotalItemsCountDocument, baseOptions);
      }
export function useTotalItemsCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TotalItemsCountQuery, TotalItemsCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TotalItemsCountQuery, TotalItemsCountQueryVariables>(TotalItemsCountDocument, baseOptions);
        }
export type TotalItemsCountQueryHookResult = ReturnType<typeof useTotalItemsCountQuery>;
export type TotalItemsCountLazyQueryHookResult = ReturnType<typeof useTotalItemsCountLazyQuery>;
export type TotalItemsCountQueryResult = ApolloReactCommon.QueryResult<TotalItemsCountQuery, TotalItemsCountQueryVariables>;
export const ItemsDocument = gql`
    query Items($take: Int, $skip: Int, $cursor: ItemWhereUniqueInput, $MinPrice: Float, $MaxPrice: Float, $orderBy: ItemOrderByInput, $searchTerm: String, $tag: String, $catagory: String) {
  items(take: $take, skip: $skip, cursor: $cursor, where: {AND: [{price: {gte: $MinPrice}}, {price: {lte: $MaxPrice}}], OR: [{title: {contains: $searchTerm}}, {tags: {some: {text: {contains: $searchTerm}}}}, {catagory: {some: {text: {contains: $searchTerm}}}}, {description: {contains: $searchTerm}}, {overview: {contains: $searchTerm}}, {brand: {contains: $searchTerm}}, {otherInfo: {contains: $searchTerm}}], tags: {some: {text: {contains: $tag}}}, catagory: {some: {text: {contains: $catagory}}}}, orderBy: $orderBy) {
    id
    likes {
      id
    }
    likesCount
    itemReview {
      id
      rating
      text
      itemId
      authorId
      downVoteCount
      upVoteCount
      upVote {
        id
        voteUp
        authorId
        itemId
      }
      downVote {
        id
        voteDown
        authorId
        itemId
      }
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
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      cursor: // value for 'cursor'
 *      MinPrice: // value for 'MinPrice'
 *      MaxPrice: // value for 'MaxPrice'
 *      orderBy: // value for 'orderBy'
 *      searchTerm: // value for 'searchTerm'
 *      tag: // value for 'tag'
 *      catagory: // value for 'catagory'
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
export const AddItemToCartDocument = gql`
    mutation AddItemToCart($itemId: String!, $quantity: Int!) {
  AddItemToTheCart(itemId: $itemId, quantity: $quantity)
}
    `;
export type AddItemToCartMutationFn = ApolloReactCommon.MutationFunction<AddItemToCartMutation, AddItemToCartMutationVariables>;
export type AddItemToCartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddItemToCartMutation, AddItemToCartMutationVariables>, 'mutation'>;

    export const AddItemToCartComponent = (props: AddItemToCartComponentProps) => (
      <ApolloReactComponents.Mutation<AddItemToCartMutation, AddItemToCartMutationVariables> mutation={AddItemToCartDocument} {...props} />
    );
    
export type AddItemToCartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddItemToCartMutation, AddItemToCartMutationVariables>
    } & TChildProps;
export function withAddItemToCart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddItemToCartMutation,
  AddItemToCartMutationVariables,
  AddItemToCartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddItemToCartMutation, AddItemToCartMutationVariables, AddItemToCartProps<TChildProps, TDataName>>(AddItemToCartDocument, {
      alias: 'addItemToCart',
      ...operationOptions
    });
};

/**
 * __useAddItemToCartMutation__
 *
 * To run a mutation, you first call `useAddItemToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemToCartMutation, { data, loading, error }] = useAddItemToCartMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useAddItemToCartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddItemToCartMutation, AddItemToCartMutationVariables>) {
        return ApolloReactHooks.useMutation<AddItemToCartMutation, AddItemToCartMutationVariables>(AddItemToCartDocument, baseOptions);
      }
export type AddItemToCartMutationHookResult = ReturnType<typeof useAddItemToCartMutation>;
export type AddItemToCartMutationResult = ApolloReactCommon.MutationResult<AddItemToCartMutation>;
export type AddItemToCartMutationOptions = ApolloReactCommon.BaseMutationOptions<AddItemToCartMutation, AddItemToCartMutationVariables>;
export const DeleteCartItemDocument = gql`
    mutation DeleteCartItem($cartItemId: String!) {
  DeleteCartItem(cartItemId: $cartItemId) {
    itemId
  }
}
    `;
export type DeleteCartItemMutationFn = ApolloReactCommon.MutationFunction<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export type DeleteCartItemComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>, 'mutation'>;

    export const DeleteCartItemComponent = (props: DeleteCartItemComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteCartItemMutation, DeleteCartItemMutationVariables> mutation={DeleteCartItemDocument} {...props} />
    );
    
export type DeleteCartItemProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteCartItemMutation, DeleteCartItemMutationVariables>
    } & TChildProps;
export function withDeleteCartItem<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCartItemMutation,
  DeleteCartItemMutationVariables,
  DeleteCartItemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCartItemMutation, DeleteCartItemMutationVariables, DeleteCartItemProps<TChildProps, TDataName>>(DeleteCartItemDocument, {
      alias: 'deleteCartItem',
      ...operationOptions
    });
};

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      cartItemId: // value for 'cartItemId'
 *   },
 * });
 */
export function useDeleteCartItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteCartItemMutation, DeleteCartItemMutationVariables>(DeleteCartItemDocument, baseOptions);
      }
export type DeleteCartItemMutationHookResult = ReturnType<typeof useDeleteCartItemMutation>;
export type DeleteCartItemMutationResult = ApolloReactCommon.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export const EmptyUserCartDocument = gql`
    mutation EmptyUserCart($userId: String!) {
  EmptyUserCart(userId: $userId)
}
    `;
export type EmptyUserCartMutationFn = ApolloReactCommon.MutationFunction<EmptyUserCartMutation, EmptyUserCartMutationVariables>;
export type EmptyUserCartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EmptyUserCartMutation, EmptyUserCartMutationVariables>, 'mutation'>;

    export const EmptyUserCartComponent = (props: EmptyUserCartComponentProps) => (
      <ApolloReactComponents.Mutation<EmptyUserCartMutation, EmptyUserCartMutationVariables> mutation={EmptyUserCartDocument} {...props} />
    );
    
export type EmptyUserCartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<EmptyUserCartMutation, EmptyUserCartMutationVariables>
    } & TChildProps;
export function withEmptyUserCart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EmptyUserCartMutation,
  EmptyUserCartMutationVariables,
  EmptyUserCartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EmptyUserCartMutation, EmptyUserCartMutationVariables, EmptyUserCartProps<TChildProps, TDataName>>(EmptyUserCartDocument, {
      alias: 'emptyUserCart',
      ...operationOptions
    });
};

/**
 * __useEmptyUserCartMutation__
 *
 * To run a mutation, you first call `useEmptyUserCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmptyUserCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emptyUserCartMutation, { data, loading, error }] = useEmptyUserCartMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useEmptyUserCartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EmptyUserCartMutation, EmptyUserCartMutationVariables>) {
        return ApolloReactHooks.useMutation<EmptyUserCartMutation, EmptyUserCartMutationVariables>(EmptyUserCartDocument, baseOptions);
      }
export type EmptyUserCartMutationHookResult = ReturnType<typeof useEmptyUserCartMutation>;
export type EmptyUserCartMutationResult = ApolloReactCommon.MutationResult<EmptyUserCartMutation>;
export type EmptyUserCartMutationOptions = ApolloReactCommon.BaseMutationOptions<EmptyUserCartMutation, EmptyUserCartMutationVariables>;
export const ItemReviewsDocument = gql`
    query ItemReviews($itemId: String!) {
  ITemRevives(itemId: $itemId) {
    id
    rating
    text
    itemId
    authorId
    downVoteCount
    upVoteCount
    upVote {
      id
      voteUp
      authorId
      itemId
    }
    downVote {
      id
      voteDown
      authorId
      itemId
    }
  }
}
    `;
export type ItemReviewsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ItemReviewsQuery, ItemReviewsQueryVariables>, 'query'> & ({ variables: ItemReviewsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ItemReviewsComponent = (props: ItemReviewsComponentProps) => (
      <ApolloReactComponents.Query<ItemReviewsQuery, ItemReviewsQueryVariables> query={ItemReviewsDocument} {...props} />
    );
    
export type ItemReviewsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ItemReviewsQuery, ItemReviewsQueryVariables>
    } & TChildProps;
export function withItemReviews<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemReviewsQuery,
  ItemReviewsQueryVariables,
  ItemReviewsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ItemReviewsQuery, ItemReviewsQueryVariables, ItemReviewsProps<TChildProps, TDataName>>(ItemReviewsDocument, {
      alias: 'itemReviews',
      ...operationOptions
    });
};

/**
 * __useItemReviewsQuery__
 *
 * To run a query within a React component, call `useItemReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemReviewsQuery({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useItemReviewsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemReviewsQuery, ItemReviewsQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemReviewsQuery, ItemReviewsQueryVariables>(ItemReviewsDocument, baseOptions);
      }
export function useItemReviewsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemReviewsQuery, ItemReviewsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemReviewsQuery, ItemReviewsQueryVariables>(ItemReviewsDocument, baseOptions);
        }
export type ItemReviewsQueryHookResult = ReturnType<typeof useItemReviewsQuery>;
export type ItemReviewsLazyQueryHookResult = ReturnType<typeof useItemReviewsLazyQuery>;
export type ItemReviewsQueryResult = ApolloReactCommon.QueryResult<ItemReviewsQuery, ItemReviewsQueryVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($itemId: String!, $text: String!, $rating: Float!) {
  CreateItemReview(itemId: $itemId, text: $text, rating: $rating) {
    id
    text
    rating
    itemId
    authorId
  }
}
    `;
export type CreateReviewMutationFn = ApolloReactCommon.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;
export type CreateReviewComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateReviewMutation, CreateReviewMutationVariables>, 'mutation'>;

    export const CreateReviewComponent = (props: CreateReviewComponentProps) => (
      <ApolloReactComponents.Mutation<CreateReviewMutation, CreateReviewMutationVariables> mutation={CreateReviewDocument} {...props} />
    );
    
export type CreateReviewProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>
    } & TChildProps;
export function withCreateReview<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateReviewMutation,
  CreateReviewMutationVariables,
  CreateReviewProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateReviewMutation, CreateReviewMutationVariables, CreateReviewProps<TChildProps, TDataName>>(CreateReviewDocument, {
      alias: 'createReview',
      ...operationOptions
    });
};

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      text: // value for 'text'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, baseOptions);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = ApolloReactCommon.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const ToggleReviewUpVoteDocument = gql`
    mutation ToggleReviewUpVote($reviewId: String!, $itemId: String!) {
  ToggleReviewUpVote(reviewId: $reviewId, itemId: $itemId)
}
    `;
export type ToggleReviewUpVoteMutationFn = ApolloReactCommon.MutationFunction<ToggleReviewUpVoteMutation, ToggleReviewUpVoteMutationVariables>;
export type ToggleReviewUpVoteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ToggleReviewUpVoteMutation, ToggleReviewUpVoteMutationVariables>, 'mutation'>;

    export const ToggleReviewUpVoteComponent = (props: ToggleReviewUpVoteComponentProps) => (
      <ApolloReactComponents.Mutation<ToggleReviewUpVoteMutation, ToggleReviewUpVoteMutationVariables> mutation={ToggleReviewUpVoteDocument} {...props} />
    );
    
export type ToggleReviewUpVoteProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ToggleReviewUpVoteMutation, ToggleReviewUpVoteMutationVariables>
    } & TChildProps;
export function withToggleReviewUpVote<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToggleReviewUpVoteMutation,
  ToggleReviewUpVoteMutationVariables,
  ToggleReviewUpVoteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ToggleReviewUpVoteMutation, ToggleReviewUpVoteMutationVariables, ToggleReviewUpVoteProps<TChildProps, TDataName>>(ToggleReviewUpVoteDocument, {
      alias: 'toggleReviewUpVote',
      ...operationOptions
    });
};

/**
 * __useToggleReviewUpVoteMutation__
 *
 * To run a mutation, you first call `useToggleReviewUpVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleReviewUpVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleReviewUpVoteMutation, { data, loading, error }] = useToggleReviewUpVoteMutation({
 *   variables: {
 *      reviewId: // value for 'reviewId'
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useToggleReviewUpVoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleReviewUpVoteMutation, ToggleReviewUpVoteMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleReviewUpVoteMutation, ToggleReviewUpVoteMutationVariables>(ToggleReviewUpVoteDocument, baseOptions);
      }
export type ToggleReviewUpVoteMutationHookResult = ReturnType<typeof useToggleReviewUpVoteMutation>;
export type ToggleReviewUpVoteMutationResult = ApolloReactCommon.MutationResult<ToggleReviewUpVoteMutation>;
export type ToggleReviewUpVoteMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleReviewUpVoteMutation, ToggleReviewUpVoteMutationVariables>;
export const ToggleReviewDownVoteDocument = gql`
    mutation ToggleReviewDownVote($reviewId: String!, $itemId: String!) {
  ToggleReviewDownVote(reviewId: $reviewId, itemId: $itemId)
}
    `;
export type ToggleReviewDownVoteMutationFn = ApolloReactCommon.MutationFunction<ToggleReviewDownVoteMutation, ToggleReviewDownVoteMutationVariables>;
export type ToggleReviewDownVoteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ToggleReviewDownVoteMutation, ToggleReviewDownVoteMutationVariables>, 'mutation'>;

    export const ToggleReviewDownVoteComponent = (props: ToggleReviewDownVoteComponentProps) => (
      <ApolloReactComponents.Mutation<ToggleReviewDownVoteMutation, ToggleReviewDownVoteMutationVariables> mutation={ToggleReviewDownVoteDocument} {...props} />
    );
    
export type ToggleReviewDownVoteProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ToggleReviewDownVoteMutation, ToggleReviewDownVoteMutationVariables>
    } & TChildProps;
export function withToggleReviewDownVote<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToggleReviewDownVoteMutation,
  ToggleReviewDownVoteMutationVariables,
  ToggleReviewDownVoteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ToggleReviewDownVoteMutation, ToggleReviewDownVoteMutationVariables, ToggleReviewDownVoteProps<TChildProps, TDataName>>(ToggleReviewDownVoteDocument, {
      alias: 'toggleReviewDownVote',
      ...operationOptions
    });
};

/**
 * __useToggleReviewDownVoteMutation__
 *
 * To run a mutation, you first call `useToggleReviewDownVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleReviewDownVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleReviewDownVoteMutation, { data, loading, error }] = useToggleReviewDownVoteMutation({
 *   variables: {
 *      reviewId: // value for 'reviewId'
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useToggleReviewDownVoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleReviewDownVoteMutation, ToggleReviewDownVoteMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleReviewDownVoteMutation, ToggleReviewDownVoteMutationVariables>(ToggleReviewDownVoteDocument, baseOptions);
      }
export type ToggleReviewDownVoteMutationHookResult = ReturnType<typeof useToggleReviewDownVoteMutation>;
export type ToggleReviewDownVoteMutationResult = ApolloReactCommon.MutationResult<ToggleReviewDownVoteMutation>;
export type ToggleReviewDownVoteMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleReviewDownVoteMutation, ToggleReviewDownVoteMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($token: String!) {
  CreateOrder(token: $token) {
    id
    itemId
    userId
    charge
    status
    total
  }
}
    `;
export type CreateOrderMutationFn = ApolloReactCommon.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;
export type CreateOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOrderMutation, CreateOrderMutationVariables>, 'mutation'>;

    export const CreateOrderComponent = (props: CreateOrderComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOrderMutation, CreateOrderMutationVariables> mutation={CreateOrderDocument} {...props} />
    );
    
export type CreateOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>
    } & TChildProps;
export function withCreateOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  CreateOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOrderMutation, CreateOrderMutationVariables, CreateOrderProps<TChildProps, TDataName>>(CreateOrderDocument, {
      alias: 'createOrder',
      ...operationOptions
    });
};

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = ApolloReactCommon.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const OrderDocument = gql`
    query Order($orderId: String!) {
  Order(orderId: $orderId) {
    id
    total
    charge
    itemId
    userId
    status
    user {
      id
      name
      email
      avatar
    }
    Item {
      CartItem {
        quantity
      }
    }
    items {
      images
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
      quantity
    }
    createdAt
  }
}
    `;
export type OrderComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrderQuery, OrderQueryVariables>, 'query'> & ({ variables: OrderQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrderComponent = (props: OrderComponentProps) => (
      <ApolloReactComponents.Query<OrderQuery, OrderQueryVariables> query={OrderDocument} {...props} />
    );
    
export type OrderProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OrderQuery, OrderQueryVariables>
    } & TChildProps;
export function withOrder<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OrderQuery,
  OrderQueryVariables,
  OrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, OrderQuery, OrderQueryVariables, OrderProps<TChildProps, TDataName>>(OrderDocument, {
      alias: 'order',
      ...operationOptions
    });
};

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useOrderQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        return ApolloReactHooks.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
      }
export function useOrderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = ApolloReactCommon.QueryResult<OrderQuery, OrderQueryVariables>;
export const RemoveAllLikesDocument = gql`
    mutation RemoveAllLikes($userId: String!) {
  RemoveAllLikes(userId: $userId)
}
    `;
export type RemoveAllLikesMutationFn = ApolloReactCommon.MutationFunction<RemoveAllLikesMutation, RemoveAllLikesMutationVariables>;
export type RemoveAllLikesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveAllLikesMutation, RemoveAllLikesMutationVariables>, 'mutation'>;

    export const RemoveAllLikesComponent = (props: RemoveAllLikesComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveAllLikesMutation, RemoveAllLikesMutationVariables> mutation={RemoveAllLikesDocument} {...props} />
    );
    
export type RemoveAllLikesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RemoveAllLikesMutation, RemoveAllLikesMutationVariables>
    } & TChildProps;
export function withRemoveAllLikes<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RemoveAllLikesMutation,
  RemoveAllLikesMutationVariables,
  RemoveAllLikesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RemoveAllLikesMutation, RemoveAllLikesMutationVariables, RemoveAllLikesProps<TChildProps, TDataName>>(RemoveAllLikesDocument, {
      alias: 'removeAllLikes',
      ...operationOptions
    });
};

/**
 * __useRemoveAllLikesMutation__
 *
 * To run a mutation, you first call `useRemoveAllLikesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAllLikesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAllLikesMutation, { data, loading, error }] = useRemoveAllLikesMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveAllLikesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveAllLikesMutation, RemoveAllLikesMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveAllLikesMutation, RemoveAllLikesMutationVariables>(RemoveAllLikesDocument, baseOptions);
      }
export type RemoveAllLikesMutationHookResult = ReturnType<typeof useRemoveAllLikesMutation>;
export type RemoveAllLikesMutationResult = ApolloReactCommon.MutationResult<RemoveAllLikesMutation>;
export type RemoveAllLikesMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveAllLikesMutation, RemoveAllLikesMutationVariables>;
export const ItemsConnectionsDocument = gql`
    query ItemsConnections($first: Int! = 6, $after: String, $tag: String, $category: String) {
  ItemConnections(first: $first, after: $after, tag: $tag, category: $category) {
    edges {
      cursor
      node {
        id
        likes {
          id
        }
        likesCount
        itemReview {
          id
          rating
          text
          itemId
          authorId
          downVoteCount
          upVoteCount
          upVote {
            id
            voteUp
            authorId
            itemId
          }
          downVote {
            id
            voteDown
            authorId
            itemId
          }
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
      __typename
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;
export type ItemsConnectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ItemsConnectionsQuery, ItemsConnectionsQueryVariables>, 'query'> & ({ variables: ItemsConnectionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ItemsConnectionsComponent = (props: ItemsConnectionsComponentProps) => (
      <ApolloReactComponents.Query<ItemsConnectionsQuery, ItemsConnectionsQueryVariables> query={ItemsConnectionsDocument} {...props} />
    );
    
export type ItemsConnectionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ItemsConnectionsQuery, ItemsConnectionsQueryVariables>
    } & TChildProps;
export function withItemsConnections<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemsConnectionsQuery,
  ItemsConnectionsQueryVariables,
  ItemsConnectionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ItemsConnectionsQuery, ItemsConnectionsQueryVariables, ItemsConnectionsProps<TChildProps, TDataName>>(ItemsConnectionsDocument, {
      alias: 'itemsConnections',
      ...operationOptions
    });
};

/**
 * __useItemsConnectionsQuery__
 *
 * To run a query within a React component, call `useItemsConnectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsConnectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsConnectionsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      tag: // value for 'tag'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useItemsConnectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemsConnectionsQuery, ItemsConnectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemsConnectionsQuery, ItemsConnectionsQueryVariables>(ItemsConnectionsDocument, baseOptions);
      }
export function useItemsConnectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemsConnectionsQuery, ItemsConnectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemsConnectionsQuery, ItemsConnectionsQueryVariables>(ItemsConnectionsDocument, baseOptions);
        }
export type ItemsConnectionsQueryHookResult = ReturnType<typeof useItemsConnectionsQuery>;
export type ItemsConnectionsLazyQueryHookResult = ReturnType<typeof useItemsConnectionsLazyQuery>;
export type ItemsConnectionsQueryResult = ApolloReactCommon.QueryResult<ItemsConnectionsQuery, ItemsConnectionsQueryVariables>;
export const SearchTermResultDocument = gql`
    query SearchTermResult($first: Int! = 6, $after: String, $term: String!) {
  SearchTermResults(first: $first, term: $term, after: $after) {
    edges {
      cursor
      node {
        id
        likes {
          id
        }
        likesCount
        itemReview {
          id
          rating
          text
          itemId
          authorId
          downVoteCount
          upVoteCount
          upVote {
            id
            voteUp
            authorId
            itemId
          }
          downVote {
            id
            voteDown
            authorId
            itemId
          }
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
      __typename
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;
export type SearchTermResultComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchTermResultQuery, SearchTermResultQueryVariables>, 'query'> & ({ variables: SearchTermResultQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SearchTermResultComponent = (props: SearchTermResultComponentProps) => (
      <ApolloReactComponents.Query<SearchTermResultQuery, SearchTermResultQueryVariables> query={SearchTermResultDocument} {...props} />
    );
    
export type SearchTermResultProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SearchTermResultQuery, SearchTermResultQueryVariables>
    } & TChildProps;
export function withSearchTermResult<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SearchTermResultQuery,
  SearchTermResultQueryVariables,
  SearchTermResultProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SearchTermResultQuery, SearchTermResultQueryVariables, SearchTermResultProps<TChildProps, TDataName>>(SearchTermResultDocument, {
      alias: 'searchTermResult',
      ...operationOptions
    });
};

/**
 * __useSearchTermResultQuery__
 *
 * To run a query within a React component, call `useSearchTermResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTermResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTermResultQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useSearchTermResultQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchTermResultQuery, SearchTermResultQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchTermResultQuery, SearchTermResultQueryVariables>(SearchTermResultDocument, baseOptions);
      }
export function useSearchTermResultLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchTermResultQuery, SearchTermResultQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchTermResultQuery, SearchTermResultQueryVariables>(SearchTermResultDocument, baseOptions);
        }
export type SearchTermResultQueryHookResult = ReturnType<typeof useSearchTermResultQuery>;
export type SearchTermResultLazyQueryHookResult = ReturnType<typeof useSearchTermResultLazyQuery>;
export type SearchTermResultQueryResult = ApolloReactCommon.QueryResult<SearchTermResultQuery, SearchTermResultQueryVariables>;
export const SellerItemsDocument = gql`
    query SellerItems($SellerId: String) {
  items(where: {sellerId: {equals: $SellerId}}, orderBy: {createdAt: asc}) {
    id
    likes {
      id
    }
    likesCount
    itemReview {
      id
      rating
      text
      itemId
      authorId
      downVoteCount
      upVoteCount
      upVote {
        id
        voteUp
        authorId
        itemId
      }
      downVote {
        id
        voteDown
        authorId
        itemId
      }
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
export type SellerItemsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SellerItemsQuery, SellerItemsQueryVariables>, 'query'>;

    export const SellerItemsComponent = (props: SellerItemsComponentProps) => (
      <ApolloReactComponents.Query<SellerItemsQuery, SellerItemsQueryVariables> query={SellerItemsDocument} {...props} />
    );
    
export type SellerItemsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SellerItemsQuery, SellerItemsQueryVariables>
    } & TChildProps;
export function withSellerItems<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SellerItemsQuery,
  SellerItemsQueryVariables,
  SellerItemsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SellerItemsQuery, SellerItemsQueryVariables, SellerItemsProps<TChildProps, TDataName>>(SellerItemsDocument, {
      alias: 'sellerItems',
      ...operationOptions
    });
};

/**
 * __useSellerItemsQuery__
 *
 * To run a query within a React component, call `useSellerItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerItemsQuery({
 *   variables: {
 *      SellerId: // value for 'SellerId'
 *   },
 * });
 */
export function useSellerItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SellerItemsQuery, SellerItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<SellerItemsQuery, SellerItemsQueryVariables>(SellerItemsDocument, baseOptions);
      }
export function useSellerItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SellerItemsQuery, SellerItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SellerItemsQuery, SellerItemsQueryVariables>(SellerItemsDocument, baseOptions);
        }
export type SellerItemsQueryHookResult = ReturnType<typeof useSellerItemsQuery>;
export type SellerItemsLazyQueryHookResult = ReturnType<typeof useSellerItemsLazyQuery>;
export type SellerItemsQueryResult = ApolloReactCommon.QueryResult<SellerItemsQuery, SellerItemsQueryVariables>;