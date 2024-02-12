// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export type UserGender = "male" | "female";

export type UserSubscription = "free" | "basic" | "business";

export interface User {
  _id: string;
  avatar: string;
  birthdate: Date;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: UserGender;
  subscription: UserSubscription;
  createdAt: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  const usersPath = path.join(process.cwd(), "/src/mocks/users.json");
  const rawUsers = await fs.readFile(usersPath, "utf-8");
  const users = JSON.parse(rawUsers) as User[];
  res.status(200).json(users);
}
