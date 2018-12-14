# Parcel IE 11 Demo

A quick and dirty demo of behavior of basic app configuration with babel for parcel bundling, and its current issue with IE(11).

Ref: [parcel-bundler/parcel#2364](https://github.com/parcel-bundler/parcel/issues/2364).

TL;DR: The multi-bundler loading done by parcel, before the app code even loads, blocks support in IE, as `Promise` and `fetch` are un-polyfilled. Definining a polyfill for my app code doesn't even get loaded yet, since it's done by the [`bundle-loader.js`](https://github.com/parcel-bundler/parcel/blob/3042224b8caeb5b195fe64db399be24d3b7ad7cc/packages/core/parcel-bundler/src/builtins/bundle-loader.js#L27-L29).

## Installation

`npm install`

## Usage

- `npm run dev` for development + local server
- `npm run build` for production build to `./dist`

## History

Parcel is an amazing bundler with superpowers. It's focus on low-to-no configuration makes for a great out of the box experience. This is just one hiccup on the way to proper, blissful web development.

## Credits

Thank you [Parcel](https://parceljs.org/)! ❤

## License

MIT