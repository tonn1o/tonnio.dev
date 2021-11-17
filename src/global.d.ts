// Hack to remove warning when trying to import image as a module
declare module "*.png" {
    const value: any;
    export = value;
}

declare module "*.svg" {
    const value: any;
    export = value;
}

declare module "*.jpg" {
    const value: any;
    export = value;
}
