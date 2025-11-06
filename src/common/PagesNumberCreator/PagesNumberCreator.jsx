import css from './PagesNumberCreator.module.css'
import { useState, useEffect } from 'react'

const PagesNumberCreator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rigthPageNumber = portionNumber * props.portionSize
    useEffect(() => setPortionNumber(Math.ceil(props.currentPage / props.portionSize)),
        [props.currentPage, props.portionSize]
    );


    return (
        <div key={props.currentPage} className={css.pagesNumber}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>
                    previous
                </button>}
            {pages
                .filter(pages => pages >= leftPageNumber && pages <= rigthPageNumber)
                .map(pages => {
                    return <span className={props.currentPage === pages ? css.active : css.notActive}
                        key={pages}
                        onClick={() => { props.onPageChanged(pages) }}>
                        {pages}
                    </span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>
                    next
                </button>}
        </div>
    )
}

export default PagesNumberCreator;