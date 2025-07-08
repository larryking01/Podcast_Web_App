import { bootstrapApplication } from '@angular/platform-browser';
import { App} from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './app/auth/token-interceptor';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(), 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
});
