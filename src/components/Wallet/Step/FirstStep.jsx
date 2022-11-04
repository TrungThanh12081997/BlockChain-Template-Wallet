import copyIcon from '../../../assets/img/copy.svg'
import arrowIcon from '../../../assets/img/arrow.svg'
import arrowLeftIcon from '../../../assets/img/arrow-left.svg'
import loadingIcon from '../../../assets/img/loading.svg'
import Button from '../../Button/Button'
const FirstStep = ({
  step,
  copyTextRef,
  onClickSubmit,
  isLoading,
  firstRequireValue,
  onClickCopy,
}) => {
  return (
    <div className={`t-template-wallet  ${step === 1 ? 'active' : ''}`}>
      <button className="t-template-wallet-back">
        <img src={arrowLeftIcon} alt="arrowLeftIcon" />
        Create New Wallet
      </button>
      <div className="t-template-wallet-title">
        <div className="t-template-wallet-title-content">
          {step > 1 ? 'Confirm Your Seed Phrase' : 'Auto Gen Seed Phrase?'}
        </div>
      </div>
      <div className={`t-template-wallet-board ${step === 1 ? 'active' : ''}`}>
        {firstRequireValue.map((item, idx) => {
          return (
            <div
              key={`t-template-wallet-item-${idx.toString()}`}
              className="t-template-wallet-item"
            >
              <div className="t-template-wallet-item-id">{idx + 1}</div>
              {item}
            </div>
          )
        })}
      </div>
      <div
        className={`t-template-wallet-tutorial  ${step === 1 ? 'active' : ''}`}
      >
        <div className="t-template-wallet-tutorial-desc" ref={copyTextRef}>
          Tap to Copy or Carefully write down your seed phrase and store it in a
          safe place
        </div>
        <button
          className="t-template-wallet-tutorial-icon"
          onClick={onClickCopy}
        >
          <img src={copyIcon} alt="copyIcon" />
        </button>
      </div>

      <div className="t-template-wallet-question">
        <div className="t-template-wallet-question-next">
          <div className="t-template-wallet-question-desc">
            How does this work?
          </div>
          <div className="t-template-wallet-question-icon">
            <img src={arrowIcon} alt="arrowIcon" />
          </div>
        </div>

        <Button
          className={`t-template-wallet-question-button ${
            isLoading ? 'loading ' : ''
          }`}
          title={
            isLoading ? <img src={loadingIcon} alt="loadingIcon" /> : 'next'
          }
          onClick={onClickSubmit}
        />
      </div>
    </div>
  )
}

export default FirstStep
