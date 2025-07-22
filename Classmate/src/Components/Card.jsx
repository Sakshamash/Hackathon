import TiltedCard from '../AnimatedComponents/CardReact'
const Card = (props) => {
  return (
    <div>
        <TiltedCard
  imageSrc={props.imagesrc}
  altText="HRX TSHIRT"
  captionText={props.caption}
  containerHeight="20rem"
  containerWidth="20rem"
  imageHeight="200px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className=" font-bold text-cyan-800 tilted-card-demo-text">
      {props.category}
    </p>
  }
/>
    </div>
  )
}

export default Card