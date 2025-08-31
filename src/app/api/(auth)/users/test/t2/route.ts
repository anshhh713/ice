// src/app/api/test/t2/route.ts
export async function POST(req: Request) {
  const body = await req.json();
  
  return Response.json({
    message: "Received data successfully!",
    yourData: body
  });
}
