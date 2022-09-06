import { useAppDispatch } from "../../hooks"
import { offsetMinus, offsetPlus, offsetStart } from "../../store/squeeze-slice"

const arrowRightGoNext = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
</svg>

const arrowRightGoEnd = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
</svg>

const arrowRightGoPrev = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
</svg>

const arrowRightGoStart = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
</svg>

const LittlePaginator = ({ hasNext }: { hasNext: boolean }) => {

  const dispatch = useAppDispatch()

  const onStartButtonClick = () => {
    dispatch(offsetStart())
  }
  const onNextButtonClick = () => {
    dispatch(offsetPlus())
  }
  const onPrevButtonClick = () => {
    dispatch(offsetMinus())
  }

  return (
    <>
      <button
        onClick={onStartButtonClick}
        className="btn border-0"
      >
        {arrowRightGoStart}
      </button>
      <button
        onClick={onPrevButtonClick}
        className="btn border-0"
      >
        {arrowRightGoPrev}
      </button>
      <button
        disabled={!hasNext ? true : false}
        onClick={onNextButtonClick}
        className="btn border-0"
      >
        {arrowRightGoNext}
      </button>
      <button
        className="btn disabled border-0"
      >
        {arrowRightGoEnd}
      </button>

    </>
  )
}

export { LittlePaginator }
