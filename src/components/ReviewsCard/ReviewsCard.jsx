import Badge from "../Badge"
import RaitingVeiw from "../RaitingVeiw"
import "./ReviewsCard.scss"

const ReviewsCard = (props) => {
  const { name, subtitle, descriotion, raitingValue } = props

  return (
    <div className="review-card">
      <header className="review-card__header">
        <div className="review-card__author">
          <h4 className="review-card__name h6">{name}</h4>
          <p className="review-card__subtitle">{subtitle}</p>
        </div>
        <Badge>
          <RaitingVeiw value={raitingValue} label={raitingValue} />
        </Badge>
      </header>
      <div className="review-card__body">
        <p>{descriotion}</p>
      </div>
    </div>
  )
}

export default ReviewsCard
