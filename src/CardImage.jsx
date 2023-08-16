export default function CardImage({ desktopView, mobileView }) {
  return <picture className="CardImage">
    <source className="CardImage" srcset={desktopView} media="(min-width: 50rem)" alt="" />
    <img className="CardImage" src={mobileView} alt="" role="presentation" />
  </picture>
}