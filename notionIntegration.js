const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_kcQaIi1nHI9TwHzTbber2ls5mRLKPCvSBjWevTwDJ3v' });

(async () => {
  const databaseId = 'd6e9847e66344b55b9bd3f62b69ec63b'; // Die Datenbank-ID aus deiner Notion-Datenbank
  const response = await notion.databases.query({ database_id: databaseId });
  
  // Hier durchläufst du die erhaltenen Daten und verwendest sie entsprechend in deinem Blog
  response.results.forEach(item => {
    const name = item.properties.Name.title[0].plain_text;
    const description = item.properties.Description.rich_text[0].plain_text;
    const tags = item.properties.Tags.multi_select.map(tag => tag.name);
    const author = item.properties.Author.rich_text[0].plain_text;
    const slug = item.properties.Slug.rich_text[0].plain_text;
    const lastUpdated = item.properties['Last Updated'].last_edited_time;
    
    // Verwende die Daten, um deinen Blog zu erstellen oder zu aktualisieren
    console.log(`Name: ${name}`);
    console.log(`Beschreibung: ${description}`);
    console.log(`Tags: ${tags}`);
    console.log(`Autor: ${author}`);
    console.log(`Slug: ${slug}`);
    console.log(`Zuletzt aktualisiert: ${lastUpdated}`);
    console.log('------------------------');
    
    // Hier kannst du den Inhalt deines Blogs mit den abgerufenen Daten erstellen
    // Zum Beispiel: Erstelle einen Blogpost in deinem Astro-Blog mit diesen Daten
  });
})();
