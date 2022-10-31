import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "100vh",
        width: "100%"
    }
    return (
        <div>
            <footer className='bg-dark text-light py-3' style={footerStyle}>
                <p className='text-center'>
                    CopyRight &copy; SHREYAS KULKARNI
                </p>
            </footer>
        </div>
    )
}

export default Footer
