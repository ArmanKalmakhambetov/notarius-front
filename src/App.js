import file from './img/file.jpg';
import img1 from './img/tussupova-1img.png'
import img2 from './img/tussupova-2img.png'
import img5 from './img/tussupova-5img.png'
import img7 from './img/tussupova-7img.png'
import img8 from './img/tussupova-8img.png'
import img9 from './img/tussupova-9img.png'
import img10 from './img/tussupova-10img.png'
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
      <div className="container">
        <div className="container-fluid about-lawyer p-5">
          <div className="row">
            <div className="col-sm-8">
              <div>
                <img src={file} className="img-fluid" alt='not found'/>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="text-center">
                <h1>
                  НОТАРИУС
                </h1>
                <h3>
                  ТУСУПОВА БАКЫТ РАСОВНА
                </h3>
                <span>
                    Действует на основании Лицензии
                </span>
                <p className="fw-bold">
                  №12020026
                </p>
                <p>
                  выданной Министерством юстиций Республики Казахстан от 28 декабря
                  2012 года и на основании Приказа Управления Министерства юстиции
                  Республики Казахстан от 28 декабря 2012
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h3 className="text-center mt-5 mb-5">Нотариальные услуги</h3>
          <div className="row mt-3 mb-3">
            <div className="col-sm-6">
              <div className="container border border-warning">
                <div className="container p-3">
                  <div className="row">
                    <div className="col-sm-8">
                      <h5>Договоры</h5>
                      <span>Купля-продажа, дарение, мена, ипотека, договор пожизненного содержания
                        с иждивением (рента), соглашение об уплате алиментов, поручительство и др.
                      </span>
                    </div>
                    <div className="col-sm-4">
                      <img src={img1} className="img-fluid" alt="Responsive image"/>
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
                      <img src={img2} className="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col-sm-8">
                      <h5>Доверенности</h5>
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
                      <h5>Завещания</h5>
                      <span>
                          Удостоверить завещание, в том числе закрытое, отмена или изменение завещания и др.
                      </span>
                    </div>
                    <div className="col-sm-4">
                      <img src={img2} className="img-fluid" alt="Responsive image"/>
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
                      <img src={img5} className="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col-sm-8">
                      <h5>Согласия</h5>
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
                      <h5>Заявления</h5>
                      <span>
                          О принятии, выходе из гражданства, об отсутствии брака, на временную регистрацию жильца и др.
                      </span>
                    </div>
                    <div className="col-sm-4">
                      <img src={img7} className="img-fluid" alt="Responsive image"/>
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
                      <img src={img8} className="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col-sm-8">
                      <h5>Наследство</h5>
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
                      <h5>Брачный договор</h5>
                      <span>
                          Составление текста договора, разработка дополнений и изменений
                      </span>
                    </div>
                    <div className="col-sm-4">
                      <img src={img9} className="img-fluid" alt="Responsive image"/>
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
                      <img src={img10} className="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col-sm-8">
                      <h5>Копии</h5>
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

          <div id="map-container-google-2" className="z-depth-1-half map-container-5 d-flex justify-content-center"

               style={{'height':'500px'}}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d889.369381880517!2d74.70695026966375!3d43.04478297830292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDAyJzQxLjIiTiA3NMKwNDInMjcuMyJF!5e1!3m2!1sru!2skz!4v1686567352973!5m2!1sru!2skz"
                width="500"
                height="500"
                border = '0'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
  );
}

