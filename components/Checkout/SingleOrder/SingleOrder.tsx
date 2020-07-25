import React from "react";
import Link from "next/link";
import Moment from "react-moment";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol } from "mdbreact";
import SingleOrderItem from "./SingleOrderItem";
import formatMoney from "../../Utils/formatMoney";
import Styles from "styled-components";
import media from "styled-media-query";
import { useOrderQuery } from "generated/graphql";
import { useRouter } from "next/router";
import Head from "next/head";

const OrderStyles = Styles.div`
overflow-x: hidden;
.font-small {
  ${media.lessThan("small")`
  font-size:18px;
    `}
}

.right{
  float: right;
  ${media.lessThan("medium")`
  float: none;
  font-size:14px;
    `}
}


`;
interface Props {}

const SingleOrder: React.FC<Props> = () => {
  const Router = useRouter();

  const { data, loading, error } = useOrderQuery({
    //@ts-ignore
    variables: { orderId: Router?.query?.id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  //@ts-ignore
  const order = data.Order;

  // const order.status = order.status.map((stat, i) => stat);
  return (
    <OrderStyles>
      <Head>
        <title> Order | {order?.user?.name} </title>
      </Head>
      <MDBCardBody className="container mt-20">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <div className="container">
                <MDBCardTitle
                  className="font-small"
                  style={{ textAlign: "center" }}
                >
                  Order Details For : {order?.user.email.toUpperCase()}
                </MDBCardTitle>
                <hr />
                <MDBCardTitle className="font-small">
                  Order ID : <span className="right">{order?.id}</span>
                  <hr />
                </MDBCardTitle>
                <MDBCardTitle className="font-small">
                  Order Charge Id :{" "}
                  <span className="right">{order?.charge}</span>{" "}
                </MDBCardTitle>
                <hr />
                <MDBCardTitle className="font-small">
                  Order Date :{" "}
                  <span className="right">
                    <Moment format="D MMM YYYY hh    :m   m a">
                      {order?.createdAt}
                    </Moment>
                  </span>
                </MDBCardTitle>
                <hr />
                <MDBCardTitle className="font-small">
                  Order Total :{" "}
                  <span className="right"> {formatMoney(order?.total)}</span>
                </MDBCardTitle>
                <hr />
                <MDBCardTitle className="font-small">
                  Total Items :{" "}
                  <span className="right"> {order?.items.length}</span>
                </MDBCardTitle>
                <hr />
                <MDBCardTitle className="font-small">
                  Delivery Status :{" "}
                  <span className="right"> {order?.status}</span>
                </MDBCardTitle>
                <hr />
              </div>
            </MDBCardBody>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="post">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Until Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order?.items?.map((item: any, i) => (
                          <SingleOrderItem key={i} item={item} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </MDBCard>
          <MDBBtn outline color="danger">
            <Link href="/shop">
              <a>Continue Shopping</a>
            </Link>
          </MDBBtn>
        </MDBCol>
      </MDBCardBody>
    </OrderStyles>
  );
};

export default SingleOrder;
