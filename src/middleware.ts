import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Todas las rutas excepto archivos estáticos y API de Next.js
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
