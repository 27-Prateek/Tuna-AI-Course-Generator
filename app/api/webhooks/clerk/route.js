// // // // import { headers } from "next/headers";
// // // // import { Webhook } from "svix";
// // // // import { db } from "@/configs/db";
// // // // import { users } from "@/db/schema";
// // // // import { eq } from "drizzle-orm";

// // // // export async function POST(req) {
// // // //   const payload = await req.text();
// // // //   const headerList = headers();

// // // //   const svix_id = headerList.get("svix-id");
// // // //   const svix_timestamp = headerList.get("svix-timestamp");
// // // //   const svix_signature = headerList.get("svix-signature");

// // // //   if (!svix_id || !svix_timestamp || !svix_signature) {
// // // //     console.error("❌ Missing svix headers");
// // // //     return new Response("Missing headers", { status: 400 });
// // // //   }

// // // //   const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

// // // //   let evt;
// // // //   try {
// // // //     evt = wh.verify(payload, {
// // // //       "svix-id": svix_id,
// // // //       "svix-timestamp": svix_timestamp,
// // // //       "svix-signature": svix_signature,
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("❌ Webhook verification failed", err);
// // // //     return new Response("Invalid signature", { status: 400 });
// // // //   }

// // // //   console.log("🔥 Clerk Webhook Event:", evt.type);

// // // //   const { type, data } = evt;

// // // //   // 📌 Extract email (THIS MATCHES YOUR DB)
// // // //   const email =
// // // //     data?.customer?.email ||
// // // //     data?.user?.email_addresses?.[0]?.email_address;

// // // //   if (!email) {
// // // //     console.error("❌ No email found in webhook");
// // // //     return new Response("No email", { status: 200 });
// // // //   }

// // // //   // ✅ SUBSCRIPTION ACTIVE
// // // //   if (
// // // //     type === "subscription.created" ||
// // // //     type === "subscription.updated"
// // // //   ) {
// // // //     await db
// // // //       .update(users)
// // // //       .set({ hasMembership: true })
// // // //       .where(eq(users.email, email));

// // // //     console.log("✅ Membership enabled for", email);
// // // //   }

// // // //   // ❌ SUBSCRIPTION CANCELED
// // // //   if (type === "subscription.deleted") {
// // // //     await db
// // // //       .update(users)
// // // //       .set({ hasMembership: false })
// // // //       .where(eq(users.email, email));

// // // //     console.log("❌ Membership disabled for", email);
// // // //   }

// // // //   return new Response("OK", { status: 200 });
// // // // }


// // // import { headers } from "next/headers";
// // // import { Webhook } from "svix";
// // // import { db } from "@/db";
// // // import { users } from "@/db/schema";
// // // import { eq } from "drizzle-orm";

// // // export async function POST(req: Request) {
// // //   const payload = await req.text();
// // //   const headerList = headers();

// // //   const svix_id = headerList.get("svix-id");
// // //   const svix_timestamp = headerList.get("svix-timestamp");
// // //   const svix_signature = headerList.get("svix-signature");

// // //   if (!svix_id || !svix_timestamp || !svix_signature) {
// // //     return new Response("Missing headers", { status: 400 });
// // //   }

// // //   const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

// // //   let evt: any;

// // //   try {
// // //     evt = wh.verify(payload, {
// // //       "svix-id": svix_id,
// // //       "svix-timestamp": svix_timestamp,
// // //       "svix-signature": svix_signature,
// // //     });
// // //   } catch {
// // //     return new Response("Invalid signature", { status: 400 });
// // //   }

// // //   const { type, data } = evt;

// // //   if (
// // //     type === "subscription.created" ||
// // //     type === "subscription.updated"
// // //   ) {
// // //     if (data.status === "active") {
// // //       await db
// // //         .update(users)
// // //         .set({ hasMembership: true })
// // //         .where(eq(users.email, data.user_email));
// // //     }
// // //   }

// // //   if (type === "subscription.deleted") {
// // //     await db
// // //       .update(users)
// // //       .set({ hasMembership: false })
// // //       .where(eq(users.email, data.user_email));
// // //   }

// // //   return new Response("OK", { status: 200 });
// // // }
// // import { NextRequest } from "next/server";
// // import { headers } from "next/headers";
// // import { Webhook } from "svix";
// // import { db } from "@/db";
// // import { users } from "@/db/schema";
// // import { eq } from "drizzle-orm";

// // export async function POST(req: NextRequest) {
// //   const payload = await req.text();
// //   const headerList = await headers();

// //   const svix_id = headerList.get("svix-id");
// //   const svix_timestamp = headerList.get("svix-timestamp");
// //   const svix_signature = headerList.get("svix-signature");

// //   if (!svix_id || !svix_timestamp || !svix_signature) {
// //     return new Response("Missing headers", { status: 400 });
// //   }

// //   const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

// //   let evt: any;

// //   try {
// //     evt = wh.verify(payload, {
// //       "svix-id": svix_id,
// //       "svix-timestamp": svix_timestamp,
// //       "svix-signature": svix_signature,
// //     });
// //   } catch {
// //     return new Response("Invalid signature", { status: 400 });
// //   }

// //   const { type, data } = evt;

// //   if (
// //     type === "subscription.created" ||
// //     type === "subscription.updated"
// //   ) {
// //     if (data.status === "active") {
// //       await db
// //         .update(users)
// //         .set({ hasMembership: true })
// //         .where(eq(users.email, data.user_email));
// //     }
// //   }

// //   if (type === "subscription.deleted") {
// //     await db
// //       .update(users)
// //       .set({ hasMembership: false })
// //       .where(eq(users.email, data.user_email));
// //   }

// //   return new Response("OK", { status: 200 });
// // // }
// // import { headers } from "next/headers";
// // import { Webhook } from "svix";
// // import { db } from "@/configs/db";
// // import { users } from "@/db/schema";
// // import { eq } from "drizzle-orm";

// // export async function POST(req) {
// //   const payload = await req.text();
// //   const headerList = await headers();

// //   const svix_id = headerList.get("svix-id");
// //   const svix_timestamp = headerList.get("svix-timestamp");
// //   const svix_signature = headerList.get("svix-signature");

// //   if (!svix_id || !svix_timestamp || !svix_signature) {
// //     return new Response("Missing headers", { status: 400 });
// //   }

// //   const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

// //   let evt;

// //   try {
// //     evt = wh.verify(payload, {
// //       "svix-id": svix_id,
// //       "svix-timestamp": svix_timestamp,
// //       "svix-signature": svix_signature,
// //     });
// //   } catch {
// //     return new Response("Invalid signature", { status: 400 });
// //   }

// //   const { type, data } = evt;

// //   if (
// //     type === "subscription.created" ||
// //     type === "subscription.updated"
// //   ) {
// //     if (data.status === "active") {
// //       await db
// //         .update(users)
// //         .set({ hasMembership: true })
// //         .where(eq(users.email, data.user_email));
// //     }
// //   }

// //   if (type === "subscription.deleted") {
// //     await db
// //       .update(users)
// //       .set({ hasMembership: false })
// //       .where(eq(users.email, data.user_email));
// //   }

// //   return new Response("OK", { status: 200 });
// // }


// import { headers } from "next/headers";
// import { Webhook } from "svix";
// import { db } from "@/configs/db";
// import { users } from "@/db/schema";
// import { eq } from "drizzle-orm";

// export async function POST(req) {
//   const payload = await req.text();
//   const headerList = await headers();

//   const svix_id = headerList.get("svix-id");
//   const svix_timestamp = headerList.get("svix-timestamp");
//   const svix_signature = headerList.get("svix-signature");

//   if (!svix_id || !svix_timestamp || !svix_signature) {
//     return new Response("Missing headers", { status: 400 });
//   }

//   const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

//   let evt;
//   try {
//     evt = wh.verify(payload, {
//       "svix-id": svix_id,
//       "svix-timestamp": svix_timestamp,
//       "svix-signature": svix_signature,
//     });
//   } catch {
//     return new Response("Invalid signature", { status: 400 });
//   }

//   const { type, data } = evt;

//   if (
//     type === "subscription.created" ||
//     type === "subscription.updated" ||
//     type === "subscription.active"
//   ) {
//     await db
//       .update(users)
//       .set({
//         hasMembership: data.status === "active",
//       })
//       .where(eq(users.email, data.user_email));
//   }

//   return new Response("OK", { status: 200 });
// }
import { headers } from "next/headers";
import { Webhook } from "svix";
import { db } from "@/configs/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  const payload = await req.text();
  const headerList = await headers();

  const svix_id = headerList.get("svix-id");
  const svix_timestamp = headerList.get("svix-timestamp");
  const svix_signature = headerList.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing headers", { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  let evt;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const { type, data } = evt;

  if (
    type === "subscription.created" ||
    type === "subscription.updated" ||
    type === "subscription.active"
  ) {
    await db
      .update(users)
      .set({
        hasMembership: data.status === "active",
      })
      .where(eq(users.clerkUserId, data.user_id));
  }

  return new Response("OK", { status: 200 });
}
