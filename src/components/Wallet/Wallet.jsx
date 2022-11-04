import JsonData from '../../constant/json'
import './index.scss'
import { useRef, useState } from 'react'
import FirstStep from './Step/FirstStep'
import SecondStep from './Step/SecondStep'
import { useEffect } from 'react'
import { conditionArray } from '../../constant/condition'
import { filterArray } from '../../utils/function'
import PopupRegister from './Step/PopupRegister'
import PopupCopy from './Step/PopupCopy'

const Test = () => {
  /// test1
  const arr = [1, 10, 11]
  const arr1 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12]
  const arr2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]
  const arr3 = [1, 10, 19, 11, 13, 16, 19]
  const maxNumber = (value) => {
    return value
      .map(String)
      .reduce((previousValue, currentValue) => previousValue + currentValue, '')
      .split('')
      .sort((a, b) => b - a)
      .reduce((previousValue, currentValue) => previousValue + currentValue, '')
  }
  //   console.log(maxNumber(arr))
  //   console.log(maxNumber(arr1))
  //   console.log(maxNumber(arr2))
  //   console.log(maxNumber(arr3))
  /// test 2

  const firstRequireValue = filterArray(JsonData).slice(1, 25)
  const secondRequireArray = firstRequireValue.slice(0, 18)
  const secondRequireValue = secondRequireArray
    .map((_, idx) => {
      if (idx % 3 === 0) {
        return {
          values: [
            secondRequireArray[idx],
            secondRequireArray[idx + 1],
            secondRequireArray[idx + 2],
          ],
          primaryIndex: idx,
        }
      }
    })
    .filter(function (element) {
      return element !== undefined
    })
  //   console.log(secondRequireValue)
  /// test3;
  const copyTextRef = useRef(null)
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setIsErr] = useState(false)
  const [activePhrase, setActivePhrase] = useState([])
  const [activePopup, setActivePopup] = useState(true)
  const [activePopupRegister, setActivePopupRegister] = useState(false)
  const [timeCounter, setTimeCounter] = useState(0)
  const [conditions, setConditions] = useState([])
  const [activeButton, setActiveButton] = useState(false)
  console.log(filterArray(activePhrase))
  useEffect(() => {
    if (timeCounter > 0) {
      setTimeout(() => setTimeCounter(timeCounter - 1), 1000)
    }
    if (timeCounter === 0) {
      setActivePopup(false)
    }
  }, [timeCounter])

  useEffect(() => {
    if (conditions.length === conditionArray.length) {
      setActiveButton(true)
    }
  }, [conditions.length, conditions])

  return (
    <>
      <div className="step" style={{ display: 'flex' }}>
        <FirstStep
          step={step}
          copyTextRef={copyTextRef}
          activePhrase={filterArray(activePhrase)}
          setIsLoading={setIsLoading}
          error={error}
          setStep={setStep}
          setIsErr={setIsErr}
          isLoading={isLoading}
          firstRequireValue={firstRequireValue}
          onClickCopy={() => {
            if (copyTextRef.current)
              navigator.clipboard.writeText(copyTextRef.current.textContent)
            setActivePopup(true)
            setTimeCounter(2)
          }}
          onClickSubmit={() => {
            if (step < 6) {
              setStep(step + 1)
              setIsLoading(true)
              setTimeout(() => {
                setIsLoading(false)
              }, 1500)
            }
          }}
        />
        <SecondStep
          step={step}
          secondRequireValue={secondRequireValue}
          setActivePhrase={setActivePhrase}
          activePhrase={filterArray(activePhrase)}
          setIsLoading={setIsLoading}
          error={error}
          setStep={setStep}
          setIsEr={setIsErr}
          isLoading={isLoading}
          onClickNext={() => {
            if (filterArray(activePhrase).length === 0) {
              setIsErr(true)
            }
            if (filterArray(activePhrase).length > 0) {
              setIsErr(false)
              if (step < 6) {
                setStep(step + 1)
                setIsLoading(true)
                setTimeout(() => {
                  setIsLoading(false)
                }, 1000)
              }
              setActivePopupRegister(true)
            }
          }}
        />
      </div>

      <PopupCopy
        setActivePopup={setActivePopup}
        activePopup={activePopup}
        timeCounter={timeCounter}
      />
      <PopupRegister
        activePopupRegister={activePopupRegister}
        setActivePopupRegister={setActivePopupRegister}
        conditions={conditions}
        setConditions={setConditions}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        activeButton={activeButton}
      />
    </>
  )
}
export default Test
