import DescountBar from "../../components/DescountBar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";
import { ContainerCart, ContainerCartPage, ContainerLeft, ContainerRight, ContainerSubtotal, Coupon, Product, SectionBreak, TableDescriptions } from "./style.jsx";

export default function CartPage(){
  return(
    <>
    <DescountBar />
    <Header />
    <ContainerCartPage>
      <ContainerLeft>
        <h1>Carrinho de compras</h1>
        <SectionBreak/>
        <TableDescriptions>
          <h2>Produto</h2>
          <h2>Preço</h2>
          <h2>Quantidade</h2>
          <h2>Subtotal</h2>
        </TableDescriptions>
        <SectionBreak/>
        <ContainerCart>
          <Product>

          </Product>
          <Product>
            
          </Product>
          <Product>
            
          </Product>
        </ContainerCart>        
      </ContainerLeft>
      <ContainerRight>
        <h1>Total do carrinho</h1>
        <SectionBreak />
        <ContainerSubtotal>
          <h2>Subtotal</h2>
          <h2>R$ 380,00</h2>
        </ContainerSubtotal>
        <Coupon>
          <input type="text" />
          <button></button>
        </Coupon>
        <SectionBreak />
      </ContainerRight>
    </ContainerCartPage>
    <Footer />
    </>
  )
}