import preloader from '../../redux/images/common/preloader/preloader.gif'

function Preloader() {
    return (
        <div>
            <img src={preloader} alt='preloader' />
        </div>
    )
}

export default Preloader;