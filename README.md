# @vnodesign/slugify

[![npm](https://img.shields.io/npm/v/@vnodesign/slugify)](https://www.npmjs.com/package/@vnodesign/slugify)
[![license](https://img.shields.io/github/license/vnodesign/slugify)](https://github.com/vnodesign/slugify/blob/main/LICENSE)
[![funding](https://img.shields.io/badge/sponsor-%E2%9D%A4-lightgrey)](https://github.com/sponsors/tuanductran)

## Description

`@vnodesign/slugify` is a lightweight and efficient utility for converting strings into clean, URL-friendly slugs. It is specially designed to handle Vietnamese diacritics and special characters, making it ideal for projects that require localization or SEO optimization.

## Features

- **Vietnamese Diacritics Removal**: Converts characters like `ắ`, `ế`, `ở`, and `đ` into their base form (e.g., `a`, `e`, `o`, `d`).
- **Special Character Stripping**: Removes all non-alphanumeric characters, leaving only letters, numbers, spaces, and hyphens.
- **Space-to-Hyphen Conversion**: Converts spaces into hyphens to create slugs suitable for URLs.
- **Redundant Hyphen Handling**: Removes consecutive or trailing hyphens for a clean result.
- **Case Insensitive**: Converts all input to lowercase for uniformity.

## Installation

Install the package via npm or pnpm:

```bash
npm install @vnodesign/slugify
# or
pnpm add @vnodesign/slugify
```

## Usage

Here’s how to use `@vnodesign/slugify` in your project:

### Example

```typescript
import { slugify } from "@vnodesign/slugify";

const title = "Chào bạn! Đây là bài viết của tôi.";
const slug = slugify(title);

console.log(slug); // Output: "chao-ban-day-la-bai-viet-cua-toi"
```

### Input and Output Examples

| Input                              | Output                               |
|------------------------------------|--------------------------------------|
| `Chào bạn!`                        | `chao-ban`                           |
| `Ngày hôm nay trời rất đẹp.`       | `ngay-hom-nay-troi-rat-dep`          |
| `Hello @World!!!`                  | `hello-world`                        |
| `Test--Case`                       | `test-case`                          |

## API

### `slugify(str: string): string`

Converts a given string into a URL-friendly slug.

#### Parameters

- `str` *(string)*: The input string to be converted.

#### Returns

- *(string)*: The cleaned and formatted slug.

## Testing

This package includes unit tests powered by [Vitest](https://vitest.dev).

Run tests with:

```bash
pnpm test
```

## Development

### Build

To build the package, run:

```bash
pnpm build
```

### Lint

Lint the code using:

```bash
pnpm lint
```

### Type Checking

Ensure all types are valid:

```bash
pnpm typecheck
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on [GitHub](https://github.com/vnodesign/slugify/issues).

## License

This project is licensed under the [MIT License](https://github.com/vnodesign/slugify/blob/main/LICENSE).

## Funding

If you find this package helpful, consider [sponsoring me on GitHub](https://github.com/sponsors/tuanductran) ❤️. Your support helps maintain and improve this project!
