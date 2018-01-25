import './polyfills.ts'; /*导入必要库，兼容老版本浏览器*/
import { enableProdMode } from '@angular/core';
/*告诉angular启动哪个模块来启动整改应用*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/*主模块*/
import { AppModule } from './app/app.module';
/*导入环境配置*/
import { environment } from './environments/environment';

if (environment.production) {/*如果是生产环境则关闭开发者模式*/
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) /*启点，传入AppModule作为整个应用的起点*/
  .catch(err => console.log(err));
