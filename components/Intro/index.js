const Intro = () => {
    return (
        <div className="intro d-flex align-items-center">
            <div className="container py-4">
                <h1 className="text-white text-center">
                    Строим дома любой сложности
                </h1>
                <h3 className="text-white text-center">
                    Многоэтажные дома, дачи, коттеджи, гаражи, бани, школы, детские сады быстро и качественно!!!
                </h3>
            </div>

            <style jsx>{`
            .intro {
                height: 600px;
                background-image: url('./img/stroi.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            `}</style>
        </div>
    )
}

export default Intro;