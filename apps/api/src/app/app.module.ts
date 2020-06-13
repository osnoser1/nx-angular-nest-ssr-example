import { Module } from '@nestjs/common';
import { AngularUniversalModule } from "@nestjs/ng-universal";

import { join } from 'path';

import { AppServerModule } from "apps/nx-angular-ssr/src/app/app.server.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/nx-angular-ssr/browser'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
