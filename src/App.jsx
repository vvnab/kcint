import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import MegaChecksum from "./MegaChecksum";
import "./App.scss";
import logo from "./media/logo.svg";
import logoText from "./media/logo-text.png";
import col1 from "./media/col-1.png";
import col2 from "./media/col-2.png";
import col3 from "./media/col-3.png";

const Addr = () => {
  return (
    <React.Fragment>
      167000, Республика Коми, г.&nbsp;Сыктывкар, <br />
      ул.&nbsp;Первомайская&nbsp;92, 4&nbsp;этаж, офис&nbsp;406
    </React.Fragment>
  );
};

const Header = () => (
  <section className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 hidden-xs hidden-sm">
          <div className="side-col">
            <div className="top">
              <i className="fas fa-map-marker-alt" />
              <a href="#map">
                <Addr />
              </a>
            </div>
            <div className="bottom">
              Кадастровые&nbsp;работы Закупочная&nbsp;деятельность
              <br /> Геология Геодезия
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <img src={logo} alt="logo" className="logo" />
          <Link to="/">
            <img
              src={logoText}
              className="logo-text"
              alt="Кадастровый Центр ИНТЕГРАЦИЯ"
            />
          </Link>
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
                Качественные услуги в установленные сроки на всей территории
                Российской&nbsp;Федерации
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
          <img src={col1} className="colx hidden-xs" alt="" />
          <h1>Инженерные изыскания</h1>
          <ul>
            <li>
              Инженерно-геодезические изыскания, в том числе: создание опорных
              геодезических сетей (включая особо опасные и технически сложные
              объекты капитального строительства), трассирование линейных
              объектов;
            </li>
            <li>
              Инженерно-геологические изыскания, а именно
              инженерно-геологическая съемка в масштабах 1:500 – 1:25000;
            </li>
            <li>Вынос границ земельных участков в натуру.</li>
          </ul>
          <p>
            Полный перечень допустимых видов работ в области инженерных
            изысканий представлен в{" "}
            <a target="_blank" href={"./sro2.pdf"} rel="noopener noreferrer">
              Приложении
            </a>{" "}
            к Свидетельству СРО.{" "}
            <a target="_blank" href={"./lic.pdf"} rel="noopener noreferrer">
              Лицензия
            </a>{" "}
            на вид деятельности.{" "}
            <a target="_blank" href={"./iso.pdf"} rel="noopener noreferrer">
              Сертификаты
            </a>{" "}
            соответствия ISO 9001:2015.
          </p>
        </div>
        <div className="col-xs-12 col-md-4">
          <img src={col2} className="colx hidden-xs" alt="" />
          <h1>Комплекс кадастровых работ</h1>
          <ul>
            <li>
              Подготовка межевых планов на земельные участки в целях
              образования, уточнения либо раздела земельного участка (в том
              числе в отношении части земельного участка);
            </li>
            <li>
              Изготовление технических планов на объекты недвижимости (здания,
              сооружения, объекты незавершенного строительства);
            </li>
            <li>
              Подготовка схем расположения земельного участка на кадастровом
              плане территории, в целях получения разрешений на использование
              земель либо постановки на государственный кадастровый учет
              земельного участка;
            </li>
            <li>
              Сопровождение в органах государственной власти и местного
              самоуправления документов, необходимых для внесения в Единый
              государственный реестр недвижимости, в отношении земельных
              участков либо объектов недвижимости;
            </li>
            <li>
              Сопровождение процедуры внесения сведений в Единый государственный
              реестр недвижимости;
            </li>
            <li>
              Разработка документации по планировке территории (проект межевания
              территории и проект планировки территории, в том числе на землях
              лесного фонда);
            </li>
            <li>
              Разработка проекта изменений, вносимых в генеральный план и
              правила землепользования и застройки;
            </li>
            <li>
              Составление графического и текстового описания местоположения
              границ населенных пунктов, территориальных зон, особо охраняемых
              природных территорий, зон с особыми условиями использования
              территории;
            </li>
            <li>Подготовка проектной документации лесных участков;</li>
            <li>
              Разработка и оформление проектов освоения лесов к договорам аренды
              лесных участков;
            </li>
            <li>
              Сопровождение проведения государственной экспертизы проектов
              освоения лесов;
            </li>
            <li>Подготовка и согласование в лесничествах лесной декларации.</li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-4">
          <img src={col3} className="colx hidden-xs" alt="" />
          <h1>Закупочная деятельность</h1>
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
    <iframe
      title="map"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A79178478e1ef33fc8ccce48f929cbf01c0ef13d560e187328def1511e85ac7b3&amp;source=constructor"
    />
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
            <li>
              <a
                target="_blank"
                href={"./rekvizity.pdf"}
                rel="noopener noreferrer"
              >
                Реквизиты
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={"./feedback.pdf"}
                rel="noopener noreferrer"
              >
                Отзывы
              </a>
            </li>
            {/* <li>
              <Link to="checksum">Калькулятор</Link>
            </li> */}
          </ul>
          <Addr />
        </div>
        <div className="col-xs-12 copy">
          ООО "Кадастровый центр "Интеграция" &copy;&nbsp;
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  </section>
);

const Root = () => (
  <React.Fragment>
    <Main />
    <Map />
  </React.Fragment>
);

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/checksum" component={MegaChecksum} />
        <Route path="/" component={Root} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
