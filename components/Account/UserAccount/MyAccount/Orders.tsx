import React from "react";
import formatMoney from "../../../Utils/formatMoney";
import Moment from "react-moment";
import Link from "next/link";
import { useUsersOrdersQuery } from "generated/graphql";
import Spinner from "components/Utils/Spinner/Spinner";

interface Props {
  Orders: boolean;
  me: any;
}

const UserOrders = ({ Orders }: Props) => {
  const { data, loading } = useUsersOrdersQuery();
  if (loading) return <Spinner />;
  if (!data?.UserOrder) return null;
  //@ts-ignore
  const orders: [] = data?.UserOrder;
  // console.log(data.orders.map(item => parseISO(item.createdAt)));
  return (
    <div
      className={`tab-pane fade show ${Orders ? "active" : ""}`}
      id="orders"
      role="tabpanel"
    >
      <div className="myaccount-content">
        <h3>Orders</h3>
        <div className="myaccount-table table-responsive text-center">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders ? (
                orders.map((order: any, i: any) => (
                  <tr key={i}>
                    <td>{i + 1}</td>

                    <td>
                      {" "}
                      <Moment format="D MMM YYYY ">{order.createdAt}</Moment>
                    </td>
                    <td>{order.status}</td>
                    <td>{formatMoney(order.total)}</td>
                    <td>
                      <Link
                        href={{
                          pathname: "/order",
                          query: { id: order.id },
                        }}
                      >
                        <a className="check-btn sqr-btn ">View</a>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  {" "}
                  <td>No Order Found</td>{" "}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
