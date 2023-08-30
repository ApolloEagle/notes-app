import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/lib/prisma";

//Initial setup for persisting note data in PostgreSQL db
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const notes = await prisma.note.findMany();

      return res.status(200).json({ notes });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving your notes" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
