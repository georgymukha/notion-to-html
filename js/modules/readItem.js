import { Client } from "@notionhq/client";
import { env } from "process";
const notion = new Client({
  auth: env.NOTION_KEY,
});

// console.log(env.NOTION_KEY);
// console.log(env.PAGE1_ID);
// const pageId = env.PAGE1_ID;
const pageId = "162c4dcbde464d319c2e28279b48b2fe";

async function getPageInfo(pageId) {
  const page = await notion.blocks.children.list({ block_id: pageId });
  const blocks = page.results;
  console.log(blocks[0].code);
}

getPageInfo(pageId);
