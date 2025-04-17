export default function handler(req, res) {
    res.setHeader("Set-Cookie", "myCookie=value; Path=/; Secure; HttpOnly; SameSite=None; Partitioned");
  
    res.status(200).json({ message: "Cookie has been set!" });
  }
  