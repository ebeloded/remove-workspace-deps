Simple utility to remove workspace dependencies/devDependencies from package.json

## Usage

```bash
npm install remove-workspace-deps
npm run remove-workspace-deps
```

package.json before:

```json
{
  "dependencies": {
    "@myproject/xyz": "workspace:*",
    "firebase-admin": "latest"
  },
  "devDependencies": {
    "@myproject/xyz-dev": "workspace:*",
    "esbuild": "latest",
    "remove-workspace-deps": "1.0.0"
  }
}
```

package.json after:

```json
{
  "dependencies": {
    "firebase-admin": "latest"
  },
  "devDependencies": {
    "esbuild": "latest",
    "remove-workspace-deps": "1.0.0"
  }
}
```
