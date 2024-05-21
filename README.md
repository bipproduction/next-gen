![logo](./logo.png)

# NEXT GEN
---
#### Auto-generate API and page files in the Next.js Framework

### Description

Next-gen is a tool that helps you automatically generate API and page files in the Next.js framework. This is particularly useful when you have numerous API files, as next-gen helps you organize them and simplify the calling process.

### Project Structure
```log
PROJECT_DIR
src/
    -- app/
        -- api/
        -- dashboard/
        -- else/
```

Next-gen will automatically detect and generate routes or pages based on the structure.

### Installation

```bash
npm install -g next-gen
```

### Usage
Ensure you are in the root of your project directory.

To generate API files:
```bash
next-gen api
```

To generate page files:
```bash
next-gen page
```

To generate a specific API file with a custom path and file name:
```bash
next-gen api -n /path/file_name
```

### Configuration
Create a file at `/util/app_config.ts` for server or client distinction:

```ts
import os from 'os';

const app_config = {
    title: 'Example Title',
    description: 'Example Description',
    host: os.platform() === 'darwin' ? 'http://localhost:3005' : 'https://example.com',
    isLocal: os.platform() === 'darwin',
};

export default app_config;
```

### Result

The generated code for API calls will be structured as follows:

```ts
import app_config from "@/util/app_config";

export const gen_api = {
    /**
     *  [/Users/yourusername/projects/yourproject/src/app/api/users/route.ts](file:///Users/yourusername/projects/yourproject/src/app/api/users/route.ts)
     */
    users: async ({isServer}: {isServer?: boolean}) => {
        return fetch(`${isServer ? app_config.host : ''}/api/users/`, { method: 'GET', cache: 'no-cache' })
            .then(res => res.json());
    },
    /**
     *  [/Users/yourusername/projects/yourproject/src/app/api/test/route.ts](file:///Users/yourusername/projects/yourproject/src/app/api/test/route.ts)
     */
    test: async ({isServer}: {isServer?: boolean}) => {
        return fetch(`${isServer ? app_config.host : ''}/api/test/`, { method: 'GET', cache: 'no-cache' })
            .then(res => res.json());
    }
}
```

### Features

- **Automatic Detection:** Automatically detects and generates API and page files based on your project structure.
- **Custom Configuration:** Easily configure server and client settings.
- **Streamlined Workflow:** Simplifies the management and calling of numerous API endpoints.

### Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for more information on how to get started.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Contact

For any issues or questions, please open an issue on [GitHub](https://github.com/yourusername/next-gen).

---

Happy coding with Next-gen! 🚀