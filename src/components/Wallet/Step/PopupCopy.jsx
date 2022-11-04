import arrowDown from '../../../assets/img/arrow-down.svg'
import copyWhite from '../../../assets/img/copy-white.svg'

import { Progress } from 'antd'
const PopupCopy = ({ setActivePopup, activePopup, timeCounter }) => {
  return (
    <div
      className={`t-template-wallet-popup-overlay  ${
        activePopup ? 'active' : ''
      }`}
    >
      <div
        className={`t-template-wallet-popup small ${
          activePopup ? 'active' : ''
        }`}
      >
        <div
          className="t-template-wallet-popup-close"
          onClick={() => {
            setActivePopup(false)
          }}
        >
          <img src={arrowDown} alt="" />
        </div>
        <div className="t-template-wallet-popup-icon">
          <img src={copyWhite} alt="copy-white" />
        </div>
        <div className="t-template-wallet-popup-desc">Saved to clipboard</div>
        <div className="t-template-wallet-popup-counter">
          <p className="">{`${timeCounter}s`}</p>
          <Progress
            type="circle"
            percent={(timeCounter / 2) * 100}
            width={28}
            strokeColor="#ff0366"
          />
        </div>
      </div>
    </div>
  )
}

export default PopupCopy
