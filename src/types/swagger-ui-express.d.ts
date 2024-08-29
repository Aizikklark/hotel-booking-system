declare module 'swagger-ui-express' {
    import { Router } from 'express';
    export function serve(req: any, res: any, next: any): void;
    export function setup(
      swaggerDoc: any,
      options?: any,
      options2?: any,
      customCss?: string,
      customfavIcon?: string,
      swaggerUrl?: string,
      customSiteTitle?: string
    ): Router;
  }
  