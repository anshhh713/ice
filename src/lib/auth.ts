// lib/auth.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "./prisma";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error("JWT_SECRET not set in .env");

// hash password
export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

// verify password
export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

// create JWT
export function createJWT(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

// verify JWT
export function verifyJWT(token: string) {
  return jwt.verify(token, JWT_SECRET) as any;
}

// fetch user from token
export async function getUserFromToken(token?: string) {
  if (!token) return null;
  try {
    const { userId } = verifyJWT(token); // payload must have userId
    return await prisma.user.findUnique({ where: { id: userId } });
  } catch {
    return null;
  }
}