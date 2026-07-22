import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // nodemailer opens raw sockets and isn't in Next's default external list,
  // so it must be required natively rather than bundled.
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
