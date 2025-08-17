import "./RaitingVeiw.scss"

const RaitingVeiw = (props) => {
  const { value = 5, label } = props

  const ariaLabel = `Raiting: ${value} stars`

  return (
    <div
      className="raiting-view"
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        "--raitingViewValue": value,
      }}
    >
      <div className="raiting-veiw__stars">
        <img
          src="/rating/stars_unfilled.svg"
          alt=""
          className="raiting-veiw__stars-unfilled"
          width={98}
          height={18}
        />
        <img
          src="/rating/stars_filled.svg"
          alt=""
          className="raiting-veiw__stars-filled"
          width={98}
          height={18}
        />
      </div>
      {label && <div className="raiting-veiw__label">{label}</div>}
    </div>
  )
}

export default RaitingVeiw
