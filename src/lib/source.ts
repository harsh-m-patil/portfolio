import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { docs } from "@/.source";

export const source = loader({
  baseUrl: "/blogs",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});
