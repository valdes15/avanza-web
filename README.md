# avanza-web

Sitio público de Avanza (avanzafreight.com): Astro + Tailwind, estático. Lee `CLAUDE.md` antes de tocar nada.

```
npm install
npm run dev         # http://localhost:4321
npm run verificar   # tipos + build + prueba de humo (Chrome instalado)
npm run capturas    # capturas a 390 y 1440 px en capturas/
```

## Vista previa en AWS (Amplify, manual)

```
PUBLIC_VISTA_PREVIA=1 npx astro build
cd dist && tar -a -cf ../sitio.zip *     # el tar de Windows (no Compress-Archive: rompe las subcarpetas)
aws amplify create-deployment --app-id d1f9c5qxhqyuch --branch-name main --profile avanza --region us-west-2
# subir sitio.zip al zipUploadUrl con PUT y luego: aws amplify start-deployment ... --job-id <jobId>
```
Queda en https://main.d1f9c5qxhqyuch.amplifyapp.com (sin indexar). El dominio se apunta cuando Pedro lo apruebe.
