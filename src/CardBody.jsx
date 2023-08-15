import PurchaseButton from "./PurchaseButton.jsx";

export default function CardBody({ type, name, description, salePrice, fullPrice }) {
  return <section className="CardBody">
    <p className="product-type font-medium">{type}</p>
    <h1 className="label-font product-name font-large">{name}</h1>
    <p className="description">{description}</p>
    <PurchaseButton salePrice={salePrice} fullPrice={fullPrice} />
  </section>
}