import RaitingVeiw from "../RaitingVeiw"
import "./Raitings.scss"

const Raitings = (props) => {
  const { items = [] } = props

  return (
    <div className="raitings">
      <ul className="raitings__list">
        {items.map(({ title, raitingValue }, index) => (
          <li className="raitings__item" key={index}>
            <h4 className="taitings__title">{title}</h4>
            <RaitingVeiw label={raitingValue} value={raitingValue} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Raitings
