import { FilterFn, Row, createColumnHelper } from "@tanstack/react-table";
import { Image } from "react-bootstrap";
import { User, UserGender } from "../../../../pages/api/users";
import styles from "./columns.module.css";
import dayjs from "dayjs";

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
  }),
  columnHelper.accessor("firstName", {
    header: "First name",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "Last name",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("age", {
    header: "Age",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("birthdate", {
    header: "Date of birth",
    cell: (info) => <time>{dayjs(info.getValue()).format("DD.MM.YYYY")}</time>,
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
    cell: (info) => info.renderValue(),
    filterFn: "equalsString",
  }),
  columnHelper.accessor("subscription", {
    header: "Subscription",
    cell: (info) => <span className="text-capitalize">{info.getValue()}</span>,
    filterFn: "equalsString",
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => {
      const email = info.getValue();
      return <a href={`mailto:${email}`}>{email}</a>;
    },
  }),
  columnHelper.accessor("createdAt", {
    header: "Created at",
    cell: (info) => (
      <time>{dayjs(info.getValue()).format("DD.MM.YYYY [at] HH:mm:ss")}</time>
    ),
    enableGlobalFilter: false,
  }),
];
