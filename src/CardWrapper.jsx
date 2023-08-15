import CardBody from "./CardBody.jsx"
import CardImage from "./CardImage.jsx";

export default function CardWrapper({ config }) {
  const { desktopView, mobileView, type, name, description, salePrice, fullPrice } = config;
  return <div className="CardWrapper">
    <CardImage
      desktopView={desktopView}
      mobileView={mobileView}
    />
    <CardBody
      type={type}
      name={name}
      description={description}
      salePrice={salePrice}
      fullPrice={fullPrice}
    />
  </div>
}