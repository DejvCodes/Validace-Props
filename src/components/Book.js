import "./Book.css"
import PropTypes from "prop-types"
import defaultImage from "../images/book-default.png"

const Book = ({id, image, title, price}) => {
  return <div key={id}>
    <h2>{title || "Defaultní název"}</h2>
    <img src={image || defaultImage} alt="obrazky" />
    <p>{price || 1000} Kč</p>
  </div>
}

// Validace props
Book.propTypes = {
  image:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
}

// Book.defaultProps = {
//   image: defaultImage,
//   title: "Defaultní název",
//   price: 1000,
// }

export default Book