import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../components/home/home.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ProductsComponent } from "../components/products/products.component";
import { ProductFormComponent } from "../components/products/product-form/product-form.component";
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from "../components/products/product-view/product-view.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { ProductEditComponent } from "../components/products/product-edit/product-edit.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4';
}
