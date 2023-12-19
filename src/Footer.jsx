export default function Footer () {
    return (
        <footer>
            <div className="container-fluid footer">
                <div className="row pb-5">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4 full-name mt-4 fs-3 fw-semibold">
                            Тусупова Бакыт Расовна
                    </div>
                    <div className="col-sm-2 contact-info mt-4">
                        <a className='fs-5 text-decoration-none'
                           href="https://wa.me/+77025920790?text=
                           Здравствуйте,%20интересуют%20нотариальные%20услуги.">
                            +7 (702) 592-07-90
                        </a>
                    </div>
                    <div className="col-sm-2 mt-4 location fw-semibold fs-5">
                        <div>
                            Жамбылская обл., c.Кордай
                        </div>
                        <div>
                            ул. Жибек жолы 185
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </footer>
    );
}