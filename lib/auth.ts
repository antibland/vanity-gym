import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const getSecret = () => process.env.VANITY_SECRET ?? "vgsecret";

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { VANITY_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id }: any = jwt.verify(token, getSecret());
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
  const user = jwt.verify(token, getSecret());
  return user;
};
