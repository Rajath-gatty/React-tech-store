import React from 'react'

const cartColumns = () => {
    return (
        <div className="container-fluid text-center d-none d-lg-block my-5">
            <div className="row">
                {/* single Column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Products</p>
                </div>
                {/* single Column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Name of product</p>
                </div>
                {/* single Column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                {/* single Column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">quanity</p>
                </div>
                {/* single Column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                {/* single Column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
        </div>
    );
}

export default cartColumns;