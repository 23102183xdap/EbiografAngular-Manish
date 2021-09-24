import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/Content/profile/profile.component';
import { AboutComponent } from './components/Content/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyprofileComponent } from './components/Content/Profile-content/myprofile/myprofile.component';
import { MyHistoryComponent } from './components/Content/Profile-content/my-history/my-history.component';
import { EditProfileComponent } from './components/Content/Profile-content/edit-profile/edit-profile.component';
import { JwtInterceptor } from './guards/jwt.interceptor';
import { ErrorInterceptor } from './guards/error.interceptor';
import { MoviesComponent } from './components/Content/movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MovieDetailsComponent } from './components/Content/movies/movie-details/movie-details.component';
import {MatButtonModule} from '@angular/material/button';
import { MovieTicketComponent } from './components/Content/movies/movie-ticket/movie-ticket.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BookingNavComponent } from './components/Content/movies/movie-ticket/booking-nav/booking-nav.component';
import {MatCardModule} from '@angular/material/card';
import { TicketComponent } from './components/Content/movies/movie-ticket/bookingNav/ticket/ticket.component';
import { QrCodeModule } from 'ng-qrcode';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    AboutComponent,
    NavbarComponent,
    MyprofileComponent,
    MyHistoryComponent,
    EditProfileComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieTicketComponent,
    BookingNavComponent,
    TicketComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    QrCodeModule,
    MatTableModule
  ],
  providers: [
     {provide:HTTP_INTERCEPTORS,useClass:
    JwtInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:
      ErrorInterceptor,multi:true},
    AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
