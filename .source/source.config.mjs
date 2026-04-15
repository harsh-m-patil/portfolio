// source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
import lastModified from "fumadocs-mdx/plugins/last-modified";
var docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      imageUrl: z.string().optional()
    }),
    postprocess: {
      includeProcessedMarkdown: true
    }
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  plugins: [lastModified()],
  mdxOptions: {
    // MDX options
  }
});
export {
  source_config_default as default,
  docs
};
