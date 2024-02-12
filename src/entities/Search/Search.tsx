import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./Search.module.css";

export interface SearchProps {
  value?: string;
  label?: string;

  onSearch: (value: string) => void;
  onChange?: (value: string) => void;
}

export const Search: FC<SearchProps> = ({
  value,
  label,
  onSearch,
  onChange,
}) => {
  const [innerState, setInnerState] = useState<string>("");

  const searchValue = value ? value : innerState;
  const onSearchChange = onChange ? onChange : setInnerState;

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="d-flex align-items-end gap-3">
        <Form.Group>
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Control
            className={styles.search}
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch(searchValue);
            }}
          />
        </Form.Group>
        <Button onClick={() => onSearch(searchValue)}>Search</Button>
      </div>
    </Form>
  );
};
