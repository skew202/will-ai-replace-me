/// <reference types="astro/client" />

declare module '*?raw' {
    const content: string;
    export default content;
}

declare module '*.wasm' {
    const value: any;
    export default value;
}
