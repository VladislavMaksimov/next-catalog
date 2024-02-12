import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./Search.module.css";

export interface SearchProps {
  label?: string;
  value: string;

  onChange: (value: string) => void;
  onSearch: (value: string) => void;
}

export const Search: FC<SearchProps> = ({
  label,
  value,
  onChange,
  onSearch,
}) => {
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
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch(value);
            }}
          />
        </Form.Group>
        <Button onClick={() => onSearch(value)}>Search</Button>
      </div>
    </Form>
  );
};
