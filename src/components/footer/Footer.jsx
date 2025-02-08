const Footer = () => {
    return (
        <footer className='Container max-w-full h-[5vh] flex justify-between items-center'>
            <div>
                © {new Date().getFullYear()} Localhost, Inc. All Rights Reserved
            </div>
            <ul className='flex gap-5'>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact us</li>
            </ul>
        </footer>
    )
}

export default Footer