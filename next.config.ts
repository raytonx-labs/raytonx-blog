import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withContentlayer(withNextIntl(nextConfig));
