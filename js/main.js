import NotionPageToHtml from "notion-page-to-html";

async function getPage() {
  const { title, icon, cover, html } = await NotionPageToHtml.convert(
    "https://www.notion.so/devx-attendance/Testing-API-162c4dcbde464d319c2e28279b48b2fe"
  );
  console.log(title);
  console.log(icon);
  console.log(cover);
  console.log(html);
}

getPage();
