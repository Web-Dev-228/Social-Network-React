import css from './PagesNumberCreator.module.css'

const PagesNumberCreator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div key={props.currentPage} className={css.pagesNumber}>
            {pages.map(pages => {
                return <span className={props.currentPage === pages ? css.active : css.notActive} onClick={() => { props.onPageChanged(pages) }}> {pages}</span>
            })}
        </div>
    )
}

export default PagesNumberCreator;