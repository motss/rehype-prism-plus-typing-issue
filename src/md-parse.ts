import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { VFile } from 'vfile';

export async function mdParse(value: string): Promise<VFile> {
  return unified()
    // remark
    .use(remarkParse)
    .use(remarkRehype)
    // rehype
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(value);
}
