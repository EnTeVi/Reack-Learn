import {Link} from "react-router-dom";

function Headers () {
    return (
        <div className='box'>
            <div>
                <h1>Menu</h1>
            </div>
            <div className='menuHeader'>
                <div className='button'>
                    <Link className='link' to={'albums'}>
                        Albums
                    </Link>
                </div>
                <div className='button'>
                    <Link className='link' to={'comments'}>
                        Comments
                    </Link>
                </div>
                <div className='button'>
                    <Link className='link' to={'todos'}>
                        Todos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export {Headers};