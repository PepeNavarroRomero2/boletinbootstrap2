import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Navbar";
import ProductGrid from "./ProductGrid";
import Carousel from "./Carousel";
import Form from "./Form"
import UserTable from "./Table";
import RegisterModal from "./RegisterModal";
import CardSystem from "./Ejercicio7";
import BootstrapUtilitiesPage from "./BootstrapUtilitiesPage";
import PricingPage from "./PricingPage";
import LoginPage from "./LoginPage";
export default function Home() {
  return (
    <div>
      <h3>Ejercicio 1</h3>
      <Navbar/>
      <h3>Ejercicio 2</h3>
      <ProductGrid/>
      <h3>Ejercicio 3</h3>
      <Carousel/>
      <h3>Ejercicio 4</h3>
      <Form/>
      <h3>Ejercicio 5</h3>
      <UserTable/>
      <h3>Ejercicio 6</h3>
      <RegisterModal/>
      <h3>Ejercicio 7</h3>
      <CardSystem/>
      <h3>Ejercicio 8</h3>
      <BootstrapUtilitiesPage/>
      <h3>Ejercicio 9</h3>
      <PricingPage/>
      <h3>Ejercicio 10</h3>
      <LoginPage/>
    </div>
  );
}
