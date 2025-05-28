# AGYNAMIX Website

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## Deploy New Version

Follow these steps to trigger the Github action to deploy a new version of the website:

- Merge/push the desired changes to the main branch
- Let the GitHub Action run (you can view the details in the Actions tab)
- Look up the created tag in the Container Registry
(https://github.com/tuhlmann/agynamix.astro/pkgs/container/agynamix.astro)
- Update the created tag in docker-compose.yml under
image: ghcr.io/tuhlmann/agynamix.astro:$TAG
- Push the change to docker-compose.yml to the main branch
- GitHub Action deploys the new image to the server → done

