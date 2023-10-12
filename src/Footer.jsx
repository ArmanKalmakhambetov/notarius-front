export default function Footer () {
    return (
        <footer>
            <div className="container-fluid bg-light border footer">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4 full-name mt-4">
                        <h3>
                            Тусупова Бакыт Расовна
                        </h3>
                    </div>
                    <div className="col-sm-2 contact-info mt-4">
                        <a className='text-decoration-none'
                           href="https://wa.me/+77025920790?text=
                           Здравствуйте,%20интересуют%20нотариальные%20услуги.">
                            <h5>+7 (702) 592-07-90</h5>
                        </a>

                    </div>
                    <div className="col-sm-2 mt-4 location">
                        <h5>c.Кордай, Жамбылская обл.</h5>
                        <h5>Жибек жолы 260</h5>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </footer>
    );
}