declare module 'swagger-jsdoc' {
    interface SwaggerJSDocOptions {
      definition?: object;
      apis: string[];
    }
  
    export default function swaggerJsDoc(options: SwaggerJSDocOptions): object;
  }
  