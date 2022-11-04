import check from '../../../assets/img/check.svg'
import checkBlack from '../../../assets/img/check-black.svg'
import loadingIcon from '../../../assets/img/loading.svg'
import Button from '../../Button/Button'
import arrowDown from '../../../assets/img/arrow-down.svg'
import { conditionArray } from '../../../constant/condition'
import { filterArray } from '../../../utils/function'
const PopupRegister = ({
  activePopupRegister,
  setActivePopupRegister,
  conditions,
  setConditions,
  setIsLoading,
  isLoading,
  activeButton,
}) => {
  return (
    <div
      className={`t-template-wallet-popup-overlay  ${
        activePopupRegister ? 'active' : ''
      }`}
    >
      <div
        className={`t-template-wallet-popup large ${
          activePopupRegister ? 'active' : ''
        }`}
      >
        <div
          className="t-template-wallet-popup-close"
          onClick={() => {
            setActivePopupRegister(false)
          }}
        >
          <img src={arrowDown} alt="arrowDown" />
        </div>
        <div className="t-template-wallet-popup-icon">
          <img src={check} alt="check" />
        </div>
        <div className="t-template-wallet-popup-desc">
          Your wallet has been created!
        </div>
        <div className="t-template-wallet-popup-conditions">
          {conditionArray.map((item, idx) => {
            return (
              <div
                key={`t-template-wallet-popup-conditions-${idx.toString()}`}
                className="t-template-wallet-popup-conditions-item"
              >
                <div
                  className="t-template-wallet-popup-conditions-check"
                  onClick={(e) => {
                    e.target.classList.add('active')
                    setConditions(filterArray([...conditions, idx]))
                  }}
                >
                  <img src={checkBlack} alt="check-black" />
                </div>
                <p className="t-template-wallet-popup-conditions-desc">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
        <Button
          title={
            isLoading ? (
              <img src={loadingIcon} alt="loadingIcon" />
            ) : (
              'i understand'
            )
          }
          onClick={() => {
            if (conditionArray.length === conditions.length) {
              setIsLoading(true)
              setTimeout(() => {
                setIsLoading(false)
                setActivePopupRegister(false)
              }, 2000)
              setConditions([])
            }
          }}
          active={activeButton}
          loading={isLoading}
        />
      </div>
    </div>
  )
}
export default PopupRegister
