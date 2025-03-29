import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const distFolder = join(process.cwd(), 'dist/dairis-space/browser');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser

  // Servir robots.txt
  server.get('/robots.txt', (req, res) => {
    res.sendFile(join(distFolder, 'robots.txt'));
  });

  // Ruta para generar y servir el sitemap.xml
  server.get('/sitemap.xml', async (req, res) => {
    try {
      const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        // Agrega más rutas según sea necesario
      ];

      const sitemapStream = new SitemapStream({ hostname: 'https://dairis.space' });
      const xmlData = await streamToPromise(Readable.from(links).pipe(sitemapStream));

      res.header('Content-Type', 'application/xml');
      res.send(xmlData.toString());
    } catch (error) {
      console.error('Error al generar el sitemap:', error);
      res.status(500).send('Error al generar el sitemap');
    }
  });



  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
