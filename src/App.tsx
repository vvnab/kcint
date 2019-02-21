import React from "react";
import "./App.scss";
import logo from "./logo.svg";
import logoText from "./logo-text.png";
import col1 from "./col-1.png";
import col2 from "./col-2.png";
import col3 from "./col-3.png";

const Header = () => (
  <section className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 hidden-xs hidden-sm">
          <div className="side-col">
            <div className="top">
              <i className="fas fa-map-marker-alt" />
              <a href="#map">
                167000, Республика Коми, г.Сыктывкар,
                ул.&nbsp;Первомайская&nbsp;92, 4&nbsp;этаж, офис&nbsp;406
              </a>
            </div>
            <div className="bottom">
              <div>Комплекс кадастровых работ</div>
              <div>Закупочная деятельность</div>
              <div>Геодезия</div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <img src={logo} className="logo" />
          <img src={logoText} className="logo-text" />
          <div className="bars hidden-lg hidden-md">
            <a href="#footer">
              <i className="fas fa-bars" />
            </a>
          </div>
        </div>
        <div className="col-md-4 hidden-xs hidden-sm">
          <div className="side-col">
            <div className="top right">
              <div className="">
                <div className="with-icon">
                  <i className="fas fa-envelope" />
                  <a href="mailto:kci@kcikomi.ru">kci@kcikomi.ru</a>
                </div>
                <div className="with-icon">
                  <i className="fas fa-phone" />
                  <a href="tel:+7212391624">(8212) 39-16-24</a>
                </div>
              </div>
            </div>
            <div className="bottom left">
              <div>
                Оказание высококачественных услуг в установленные сроки на
                территории Северо-Западного ФО
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Main = () => (
  <section className="main">
    <div className="container-fluid">
      <div className="row between-xs">
        <div className="col-xs-12 col-md-4">
          <img src={col1} className="colx hidden-xs" />
          <h3>Инженерные изыскания</h3>
          <ul>
            <li>
              Инженерно-геодезические изыскания, в том числе: создание опорных
              геодезических сетей (включая особо опасные и технически сложные
              объекты капитального строительства), трассирование линейных
              объектов.
            </li>
            <li>
              Инженерно-геологические изыскания, а именно
              инженерно-геологическая съемка в масштабах 1:500 – 1:25000.
            </li>
          </ul>
          <p>
            Полный перечень допустимых видов работ в области инженерных
            изысканий представлен в <a target="_blank" href={"./sro.pdf"}>Приложении</a> к Свидетельству СРО. <a target="_blank" href={"./lic.pdf"}>Лицензия</a> на
            вид деятельности. <a target="_blank" href={"./iso.pdf"}>Сертификаты</a> соответствия ISO 9001:2015.
          </p>
        </div>
        <div className="col-xs-12 col-md-4">
          <img src={col2} className="colx hidden-xs" />
          <h3>Комплекс кадастровых работ</h3>
          <ul>
            <li>Составление и подготовка межевых планов и карта-планов.</li>
            <li>Подготовка технических планов объектов недвижимости.</li>
            <li>
              Сопровождение процедуры внесения сведений в государственный
              кадастр недвижимости.
            </li>
            <li>
              Внесение в ГКН сведений о границах земельных участков и охранных
              зон объектов.
            </li>
            <li>
              Сопровождение оформления документов на объекты недвижимости в
              органах государственной власти и местного самоуправления.
            </li>
            <li>Заключение договоров аренды земельных участков.</li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-4">
          <img src={col3} className="colx hidden-xs" />
          <h3>Закупочная деятельность</h3>
          <p>
            Содействие в осуществлении закупочной деятельности государственными
            организациями и отдельными видами юридических лиц.
          </p>
          <ul>
            <li>Организация и проведение закупок в рамках 223-ФЗ.</li>
            <li>
              Подготовка документации для участия в тендерах, представление
              интересов в УФАС РФ.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Map = () => (
  <section className="map" id="map">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A79178478e1ef33fc8ccce48f929cbf01c0ef13d560e187328def1511e85ac7b3&amp;source=constructor" />
  </section>
);

const Footer = () => (
  <section className="footer" id="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <h4>Контакты:</h4>
          <div className="with-icon">
            <i className="fas fa-envelope" />
            <a href="mailto:kci@kcikomi.ru">kci@kcikomi.ru</a>
          </div>
          <div className="with-icon">
            <i className="fas fa-phone" />
            <a href="tel:+7212391624">(8212) 39-16-24</a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <h4>Информация:</h4>
          <ul>
            <li><a target="_blank" href={"./rekvizity.pdf"}>Реквизиты</a></li>
            <li><a target="_blank" href={"./feedback.pdf"}>Отзывы</a></li>
          </ul>
          167000, Республика Коми, г.Сыктывкар, <br /> ул. Первомайская 92, 4
          этаж, офис&nbsp;406
        </div>
        <div className="col-xs-12 copy">
          ООО "Кадастровый центр "Интеграция" {new Date().getFullYear()} &copy;
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Map />
      <Footer />
    </React.Fragment>
  );
};

export default App;
