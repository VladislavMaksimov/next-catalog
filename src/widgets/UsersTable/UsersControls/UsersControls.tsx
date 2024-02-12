import { Form } from "react-bootstrap";
import { User, UserGender, UserSubscription } from "../../../pages/api/users";
import { Search } from "../../../entities/Search/Search";
import { FC, useState } from "react";
import styles from "./UsersControls.module.css";
import { Table } from "@tanstack/react-table";

interface UsersControlsProps {
  table: Table<User>;

  onFullTextSearch: (value: string) => void;
}

export const UsersControls: FC<UsersControlsProps> = ({
  table,
  onFullTextSearch,
}) => {
  const [fullText, setFullText] = useState<string>("");

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
      <Search
        label="Search users"
        value={fullText}
        onSearch={onFullTextSearch}
        onChange={(value: string) => setFullText(value)}
      />
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
