// import './index.scss'
import arrowIcon from '../../../assets/img/arrow.svg'
import arrowLeftIcon from '../../../assets/img/arrow-left.svg'
import arrowDown from '../../../assets/img/arrow-down.svg'
import errIcon from '../../../assets/img/error.svg'
import loadingIcon from '../../../assets/img/loading.svg'
import Button from '../../Button/Button'

const SecondStep = ({
  step,
  secondRequireValue,
  setActivePhrase,
  activePhrase,
  error,
  isLoading,
  onClickNext,
}) => {
  return (
    <>
      <div className={`t-template-wallet  ${step > 1 ? 'active' : ''}`}>
        <button className="t-template-wallet-back">
          <img src={arrowLeftIcon} alt="arrowLeftIcon" />
          Create New Wallet
        </button>
        <div className="t-template-wallet-title">
          <div className="t-template-wallet-title-content">
            {step > 1 ? 'Confirm Your Seed Phrase' : 'Auto Gen Seed Phrase?'}
          </div>
        </div>
        <div
          className={`t-template-wallet-confirm ${step > 1 ? 'active' : ''}`}
        >
          {secondRequireValue.map((item, idx) => {
            return (
              <div
                key={`t-template-wallet-confirm-board${idx.toString()}`}
                className="t-template-wallet-confirm-board"
              >
                <div className="t-template-wallet-confirm-id">
                  {item.primaryIndex}
                </div>
                {item.values.map((cate, idx) => {
                  return (
                    <div
                      key={`t-template-wallet-confirm-t-template-wallet-confirm-desc${idx.toString()}`}
                      className="t-template-wallet-confirm-desc"
                      onClick={(e) => {
                        e.target.classList.toggle('active')
                        if (
                          activePhrase.filter((item) => item === cate).length >
                          0
                        ) {
                          setActivePhrase(
                            activePhrase.filter((item) => item !== cate),
                          )
                        } else {
                          setActivePhrase([...activePhrase, cate])
                        }
                      }}
                    >
                      {cate}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        {error && (
          <div className="t-template-wallet-error">
            <img src={errIcon} alt="errIcon" />
            <div className="t-template-wallet-error-desc">
              Wrong seed phrases. Please try again!
            </div>
          </div>
        )}
        <div className="t-template-wallet-question">
          <div className="t-template-wallet-question-next">
            <div className="t-template-wallet-question-desc">
              How does this work?
            </div>
            <div className="t-template-wallet-question-icon">
              <img src={arrowIcon} alt="errIcon" />
            </div>
          </div>
          <Button
            className={`t-template-wallet-question-button ${
              isLoading ? 'loading ' : ''
            }`}
            onClick={onClickNext}
            title={
              isLoading ? <img src={loadingIcon} alt="loadingIcon" /> : 'next'
            }
          />
        </div>
        <div className="t-template-wallet-popup">
          <div className="t-template-wallet-popup-close">
            <img src={arrowDown} alt="arrowDown" />
          </div>
        </div>
      </div>
    </>
  )
}
export default SecondStep
