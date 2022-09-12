import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";
const secret = process.env.VANITY_GYM_SECRET ?? "";

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { VANITY_GYM_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id }: any = jwt.verify(token, secret);
        user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not authorized" });
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not authorized" });
  };
};

export const validateToken = (token: string) => {
  const user = jwt.verify(token, secret);
  return user;
};
