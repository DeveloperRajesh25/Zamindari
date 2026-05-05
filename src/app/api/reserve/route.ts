import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2),
  phone: z.string().regex(/^(\+91[\s-]?)?[6-9]\d{9}$/),
  email: z.string().email().optional().or(z.literal("")),
  date: z.string().min(1),
  time: z.string().min(1),
  partySize: z.string(),
  occasion: z.string().optional(),
  seating: z.string(),
  notes: z.string().max(500).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // For now: log to server console. In production this would push to a CRM / email.
  console.log("[reservation]", JSON.stringify(parsed.data));

  return NextResponse.json({ ok: true });
}
