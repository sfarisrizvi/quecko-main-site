export async function GET(request) {
  return Response.json(
    { message: "Cookie has been set!" },
    {
      headers: {
        "Set-Cookie":
          "myCookie=value; Path=/; Secure; HttpOnly; SameSite=None; Partitioned",
      },
    }
  );
}
