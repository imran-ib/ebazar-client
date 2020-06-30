import React from "react";
import Link from "next/link";
import Spinner from "components/Utils/Spinner/Spinner";
import { useTotalItemsCountQuery } from "generated/graphql";
import { PaginationStyles } from "./PaginationStyles";
import ErrorMessage from "../Utils/ErrorMessage";
import { MDBIcon } from "mdbreact";

interface Props {
  page: number;
  routeName: string;
}

const PaginationFooter: React.FC<Props> = ({ page, routeName }) => {
  const {
    loading: itemCountLoading,
    error: ItemCountError,
    data,
  } = useTotalItemsCountQuery();
  if (itemCountLoading) return <Spinner />;
  if (ItemCountError) return <ErrorMessage error={ItemCountError} />;

  const TotalItems = data?.itemCount;
  //@ts-ignore
  const TotalPages = Math.ceil(TotalItems / 6);

  return (
    <PaginationStyles>
      <div className="pro-pagination-style text-center mt-30">
        <ul>
          <li>
            <Link
              href={{
                pathname: `/${routeName}`,
                query: { page: 1 },
              }}
            >
              <a aria-disabled={page <= 1} className="next">
                <MDBIcon icon="angle-double-left" />
              </a>
            </Link>
          </li>

          <li>
            <Link
              href={{
                pathname: `/${routeName}`,
                query: { page: page - 1 },
              }}
            >
              <a aria-disabled={page <= 1} className="prev">
                <MDBIcon icon="angle-left" />
              </a>
            </Link>
          </li>

          <li>
            <Link
              href={{
                pathname: `/${routeName}`,
                query: { page: page },
              }}
            >
              <a className="active">{page}</a>
            </Link>
          </li>
          {TotalPages && page < TotalPages ? (
            <li>
              <Link
                href={{
                  pathname: `/${routeName}`,
                  query: { page: page + 1 },
                }}
              >
                <a> {page + 1}</a>
              </Link>
            </li>
          ) : (
            <li>
              <a aria-disabled={true} className="active">
                {" "}
                Last
              </a>
            </li>
          )}
          <li>
            <Link
              href={{
                pathname: `/${routeName}`,
                query: { page: page + 1 },
              }}
            >
              <a aria-disabled={page >= TotalPages} className="next">
                <MDBIcon icon="angle-right" />
              </a>
            </Link>
          </li>

          <li>
            <Link
              href={{
                pathname: `/${routeName}`,
                query: { page: TotalPages },
              }}
            >
              <a aria-disabled={page >= TotalPages} className="next">
                <MDBIcon icon="angle-double-right" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </PaginationStyles>
  );
};

export default PaginationFooter;
