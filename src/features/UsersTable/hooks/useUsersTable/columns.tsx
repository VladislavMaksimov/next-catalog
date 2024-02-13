import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";
import { Image } from "react-bootstrap";

import { User } from "../../../../pages/api/users";
import styles from "./columns.module.css";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("avatar", {
    header: () => "Avatar",
    cell: (info) => (
      <Image
        className={styles.avatar}
        alt="avatar"
        src={info.getValue()}
        rounded
      />
    ),
    enableGlobalFilter: false,
    enableSorting: false,
  }),
  columnHelper.accessor("firstName", {
    header: "First name",
    cell: (info) => info.renderValue(),
    enableSorting: false,
  }),
  columnHelper.accessor("lastName", {
    header: "Last name",
    cell: (info) => info.renderValue(),
    enableSorting: false,
  }),
  columnHelper.accessor("age", {
    header: "Age",
    cell: (info) => info.renderValue(),
    sortingFn: "basic",
  }),
  columnHelper.accessor("birthdate", {
    header: "Date of birth",
    cell: (info) => <time>{dayjs(info.getValue()).format("DD.MM.YYYY")}</time>,
    enableGlobalFilter: false,
    sortingFn: "datetime",
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
    cell: (info) => info.renderValue(),
    filterFn: "equalsString",
    enableSorting: false,
  }),
  columnHelper.accessor("subscription", {
    header: "Subscription",
    cell: (info) => <span className="text-capitalize">{info.getValue()}</span>,
    filterFn: "equalsString",
    enableSorting: false,
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => {
      const email = info.getValue();
      return <a href={`mailto:${email}`}>{email}</a>;
    },
    enableSorting: false,
  }),
  columnHelper.accessor("createdAt", {
    header: "Created at",
    cell: (info) => (
      <time>{dayjs(info.getValue()).format("DD.MM.YYYY [at] HH:mm:ss")}</time>
    ),
    enableGlobalFilter: false,
    sortingFn: "datetime",
  }),
];
