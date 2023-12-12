import img1 from './img/tussupova-1img.png'
import img2 from './img/tussupova-2img.png'
import img3 from './img/tussupova-3img.png'
import img5 from './img/tussupova-5img.png'
import img7 from './img/tussupova-7img.png'
import img8 from './img/tussupova-8img.png'
import img9 from './img/tussupova-9img.png'
import img10 from './img/tussupova-10img.png'
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./ContactForm";

export default function App() {
    return (
        <div className="container">
            <div className="container-fluid about-lawyer p-5">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 text-center">
                        <div className='fs-1'>
                            НОТАРИУС
                        </div>
                        <div className='fs-3'>
                            ТУСУПОВА БАКЫТ РАСОВНА
                        </div>
                        <div>
                            Действует на основании Лицензии
                        </div>
                        <div className='fw-bold'>
                            №12020026
                        </div>
                        <div className='text-center'>
                            выданной Министерством юстиций Республики Казахстан от 28 декабря 2012 года и на основании
                            Приказа Управления Министерства юстиции Республики Казахстан от 28 декабря 2012
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="text-center mt-5 mb-5 fs-3 fw-semibold">Нотариальные услуги</div>
                <div className="row mt-3 mb-3">
                    <div className="col-lg-6">
                        <div className="container border border-warning">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className='fw-semibold fs-5'>Договоры</div>
                                        <span>Купля-продажа, дарение, мена, ипотека, договор пожизненного содержания
                        с иждивением (рента), соглашение об уплате алиментов, поручительство и др.
                      </span>
                                    </div>
                                    <div className="col-sm-4">
                                        <img width='170px' height='120px' src={img1} className="img-fluid" alt="alt"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="container border border-warning">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img width='170px' height='120px' src={img2} className="img-fluid" alt="alt"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className='fw-semibold fs-5'>Доверенности</div>
                                        <span>
                                            Представительство в суде, управление и распоряжение автомобилем,
                                            доверенность на регистрацию права собственности и др.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-sm-6">
                        <div className="container border border-warning">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className='fw-semibold fs-5'>Завещания</div>
                                        <span>
                          Удостоверить завещание, в том числе закрытое, отмена или изменение завещания и др.
                      </span>
                                    </div>
                                    <div className="col-sm-4">
                                        <img width='170px' height='120px' src={img3} className="img-fluid" alt="alt"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="container border border-warning">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img width='170px' height='120px' src={img5} className="img-fluid" alt="alt"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className='fw-semibold fs-5'>Согласия</div>
                                        <span>
                        На выезд несовершеннолетних, супруга на продажу, залог имущества и др.
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-sm-6">
                        <div className="container border border-warning">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className='fw-semibold fs-5'>Заявления</div>
                                        <span>
                          О принятии, выходе из гражданства, об отсутствии брака, на временную регистрацию жильца и др.
                      </span>
                                    </div>
                                    <div className="col-sm-4">
                                        <img width='170px' height='120px' src={img7} className="img-fluid" alt="alt"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="container border border-warning">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img width='170px' height='120px' src={img8} className="img-fluid" alt="alt"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className='fw-semibold fs-5'>Наследство</div>
                                        <span>
                          Открытие, принятие, отказ, охрана наследственного имущества, свидетельство о праве на наследство
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-sm-6">
                        <div className="container border border-warning">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className='fw-semibold fs-5'>Брачный договор</div>
                                        <span>
                          Составление текста договора, разработка дополнений и изменений
                      </span>
                                    </div>
                                    <div className="col-sm-4">
                                        <img width='170px' height='120px' src={img9} className="img-fluid" alt="alt"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="container border border-warning">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img width='170px' height='120px' src={img10} className="img-fluid" alt="alt"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className='fw-semibold fs-5'>Копии</div>
                                        <span>
                          Устава, учредительного договора, справки, диплома и иных документов.
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-5">
                <div className="d-flex justify-content-center mb-3">
                    <h3>
                        Расположение
                    </h3>
                </div>

                <div id="map-container-google-2"
                     className="z-depth-1-half map-container-5 d-flex justify-content-center"

                     style={{'height': '500px'}}>
                    <iframe
                        title='Map location'
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d515.4524279992518!2d74.7072272207032!3d43.04481343943186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDAyJzQxLjMiTiA3NMKwNDInMjcuNiJF!5e0!3m2!1sru!2skz!4v1702360492372!5m2!1sru!2skz"
                        width="500"
                        height="500"
                        border="0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <ContactForm/>
            </div>

        </div>
    );
}

