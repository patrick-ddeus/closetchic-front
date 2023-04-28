import DescountBar from "../../components/DescountBar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";
import { ContainerCart, ContainerCartPage, ContainerLeft, ContainerRight, ContainerSubtotal, ContainerToCheckout, ContainerTotal, Coupon, Product, SectionBreak, TableDescriptions } from "./style.jsx";
import {IoClose} from "react-icons/io5"

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
          <h2 style={{width:"39px"}}></h2>
          <h2 style={{width:"172px"}}></h2>
          <h2 style={{width:"120px"}}>Produto</h2>
          <h2 style={{width:"80px"}}>Preço</h2>
          <h2 style={{width:"80px"}}>Quantidade</h2>
          <h2 style={{width:"80px",textAlign:"end"}}>Subtotal</h2>
        </TableDescriptions>
        <SectionBreak/>
        <ContainerCart>
          <Product>
            <IoClose size={"25px"} />
            <img src="" alt="" />
            <strong><p>Camisa Preta</p></strong>
            <p>R$ 85,00</p>
            <input type="text" value={1} />
            <span>R$ 85,00</span>
          </Product>
          <Product>
            <IoClose size={"25px"} />
            <img src="" alt="" />
            <strong><p>Camisa Preta</p></strong>
            <p>R$ 85,00</p>
            <input type="text" value={1} />
            <span>R$ 85,00</span>
          </Product>
          <Product>
            <IoClose size={"25px"} />
            <img src="" alt="" />
            <strong><p>Camisa Preta</p></strong>
            <p>R$ 85,00</p>
            <input type="text" value={1} />
            <span>R$ 85,00</span>
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
        <SectionBreak />
        <Coupon>
          <input type="text" placeholder="Código do cupom" />
          <button>Aplicar Cupom</button>
        </Coupon>
        <SectionBreak />
        <ContainerToCheckout>
          <ContainerTotal>
            <p>Total</p>
            <div>
              <p>R$ 180,00</p>
              <p style={{color:"#FF0E0E"}}>- R$ 25,00</p>
              <p>R$ 155,00</p>
            </div>
          </ContainerTotal>
          <button>Prosseguir para o check-out</button>
        </ContainerToCheckout>
      </ContainerRight>
    </ContainerCartPage>
    <Footer />
    </>
  )
}