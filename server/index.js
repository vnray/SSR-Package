import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      const templatePath = path.resolve(__dirname, '../index.html');
      let template = fs.readFileSync(templatePath, 'utf-8');

      template = await vite.transformIndexHtml(url, template);
    //   const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
      const { render } = await vite.ssrLoadModule('src/entry-server.jsx');


      const appHtml = render(url);
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(5173, () => {
    console.log('Server is running at http://localhost:5173');
  });
}

startServer();
