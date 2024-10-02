import "../UI_Design/about.css"

export default function About() {


    return (

        <>


            <div className="Navbar sticky">
                <div className="nav-logo"></div>
                <div className="nav-heading">Question Bank <div className="nav-heading-logo"></div></div>
                <div className="nav-links">
                    <a href="/home#home-background">Home</a>
                    <a href="/Admin">Admin</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/about"> About Us</a>
                </div>
            </div>

            <div className="container">

            <div className="about-heading">|  Contributors  |</div>

            
 <div className="box ">
                    <div className="box1">
                        <div className="box1-photo p-photo"></div>

                    </div>
                    <div className="box2">
                        <div className="box2-text">
                            <h2>PRAMOD KEDAR</h2>
                            <p>Pramod managed the database, added questions, and implemented advanced filtering logic to enhance the user experience</p>
                        </div>
                        <div className="box2-social">
                            <a href="https://www.instagram.com/pramod.k_77/" target="_blank">
                                <div className="img1"></div></a>

                            <a href="https://www.linkedin.com/in/pramod-kedar-69b8b2217/" target="_blank">
                                <div className="img2"></div></a>
                        </div>
                    </div>
                </div>

                <div className="box reverse-box">
                    <div className="box1">
                        <div className="box1-photo s-photo"></div>

                    </div>
                    <div className="box2">
                        <div className="box2-text">
                            <h2>SARTHAK CHOUDHARI</h2>
                            <p>Sarthak led the team, applied core logic across the entire system, and handled both backend and frontend development, ensuring smooth functionality</p>
                        </div>
                        <div className="box2-social">

                            <a href="https://www.instagram.com/sarthak_8898/" target="_blank">
                                <div className="img1"></div>
                                </a>

                            <a href="https://www.linkedin.com/in/sarthak-choudhari-354b45286/" target="_blank">
                                <div className="img2"></div>
                                </a>

                        </div>
                    </div>
                </div>

                <div className="box ">
                    <div className="box1">
                        <div className="box1-photo t-photo"></div>

                    </div>
                    <div className="box2">
                        <div className="box2-text">
                            <h2>TAMAS BADE</h2>
                            <p>Tamas created the database schema and structured the questions, laying the foundation for efficient data storage and retrieval</p>
                        </div>
                        <div className="box2-social">
                            <a href="https://www.instagram.com/tamas.1314/" target="_blank">
                                <div className="img1"></div></a>
                            <a href="https://www.linkedin.com/in/tamas-bade-27b632248/" target="_blank">
                                <div className="img2"></div></a>
                        </div>
                    </div>
                </div>

                <div className="box reverse-box">
                    <div className="box1">
                        <div className="box1-photo y-photo"></div>

                    </div>
                    <div className="box2">
                        <div className="box2-text">
                            <h2 >YASHRAJ THOMABRE</h2>
                            <p>Yashraj designed the user interface and selected the color scheme, ensuring a visually appealing and user-friendly experience.</p>
                        </div>
                        <div className="box2-social">
                            <a href="https://www.instagram.com/yashraj_thombre_07/" target="_blank">
                                <div className="img1"></div></a>
                            <a href="https://www.linkedin.com/in/yashraj-thombre-636a85287/" target="_blank">
                                <div className="img2"></div></a>
                        </div>
                    </div>
                </div>


            </div>


        </>

    )


}