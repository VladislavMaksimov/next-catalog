import { Table } from "@tanstack/react-table";
import { FC } from "react";
import { Form } from "react-bootstrap";

import { Search } from "../../../entities/Search/Search";
import { User, UserGender, UserSubscription } from "../../../pages/api/users";
import styles from "./UsersControls.module.css";

interface UsersControlsProps {
  table: Table<User>;

  onFullTextSearch: (value: string) => void;
}

export const UsersControls: FC<UsersControlsProps> = ({
  table,
  onFullTextSearch,
}) => {
  const genderColumn = table.getColumn("gender")!;
  const genderFilterValue = genderColumn.getFilterValue() as
    | UserGender
    | undefined;

  const subscriptionColumn = table.getColumn("subscription")!;
  const subscriptionFilterValue = subscriptionColumn.getFilterValue() as
    | UserSubscription
    | undefined;

  return (
    <div className="d-flex flex-column gap-3">
      <Search label="Search users" onSearch={onFullTextSearch} />
      <div className="d-flex gap-3">
        <Form.Select
          className={styles.select}
          value={genderFilterValue ?? "any"}
          onChange={(e) => {
            const { value } = e.target;
            if (value === "any") {
              genderColumn.setFilterValue(undefined);
              return;
            }
            genderColumn.setFilterValue(value);
          }}
        >
          <option value="any">Any gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
        <Form.Select
          className={styles.select}
          value={subscriptionFilterValue}
          onChange={(e) => {
            const { value } = e.target;
            if (value === "any") {
              subscriptionColumn.setFilterValue(undefined);
              return;
            }
            subscriptionColumn.setFilterValue(value);
          }}
        >
          <option value="any">Any subscription</option>
          <option value="free">Free</option>
          <option value="basic">Basic</option>
          <option value="business">Business</option>
        </Form.Select>
      </div>
    </div>
  );
};