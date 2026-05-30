import { createSignal } from 'solid-js'
import logo from "./assets/logo.svg";
import logoText from "./assets/logo-text.png";
import col1 from "./assets/col-1.png";
import col2 from "./assets/col-2.png";
import col3 from "./assets/col-3.png";
import './App.css'

const Addr = () => {
  return (
    <>
      167000, Республика Коми, г.&nbsp;Сыктывкар, <br />
      ул.&nbsp;Первомайская&nbsp;92, 4&nbsp;этаж, офис&nbsp;406
    </>
  );
};

const Header = () => (
  <section class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 hidden-xs hidden-sm">
          <div class="side-col">
            <div class="top">
              <i class="fas fa-map-marker-alt" />
              <a href="#map">
                <Addr />
              </a>
            </div>
            <div class="bottom">
              Кадастровые&nbsp;работы Закупочная&nbsp;деятельность
              <br /> Геология Геодезия
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <img src={logo} alt="logo" class="logo" />
          <a href="/">
            <img
              src={logoText}
              class="logo-text"
              alt="Кадастровый Центр ИНТЕГРАЦИЯ"
            />
          </a>
          <div class="bars hidden-lg hidden-md">
            <a href="#footer">
              <i class="fas fa-bars" />
            </a>
          </div>
        </div>
        <div class="col-md-4 hidden-xs hidden-sm">
          <div class="side-col">
            <div class="top right">
              <div class="">
                <div class="with-icon">
                  <i class="fas fa-envelope" />
                  <a href="mailto:kci@kcikomi.ru">kci@kcikomi.ru</a>
                </div>
                <div class="with-icon">
                  <i class="fas fa-phone" />
                  <a href="tel:+7212391624">(8212) 39-16-24</a>
                </div>
              </div>
            </div>
            <div class="bottom left">
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


const Main = () => {
  const [hide, setHide] = createSignal(true);
  return (
    <section class="main">
      <div class="container-fluid">
        <div class="row between-xs">
          <div class="col-xs-12 col-md-4">
            <img src={col1} class="colx hidden-xs" alt="" />
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
          <div class="col-xs-12 col-md-4">
            <img src={col2} class="colx hidden-xs" alt="" />
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
              <li class={hide() ? "hidden" : ""}>
                Сопровождение в органах государственной власти и местного
                самоуправления документов, необходимых для внесения в Единый
                государственный реестр недвижимости, в отношении земельных
                участков либо объектов недвижимости;
              </li>
              <li class={hide() ? "hidden" : ""}>
                Сопровождение процедуры внесения сведений в Единый
                государственный реестр недвижимости;
              </li>
              <li class={hide() ? "hidden" : ""}>
                Разработка документации по планировке территории (проект
                межевания территории и проект планировки территории, в том числе
                на землях лесного фонда);
              </li>
              <li class={hide() ? "hidden" : ""}>
                Разработка проекта изменений, вносимых в генеральный план и
                правила землепользования и застройки;
              </li>
              <li class={hide() ? "hidden" : ""}>
                Составление графического и текстового описания местоположения
                границ населенных пунктов, территориальных зон, особо охраняемых
                природных территорий, зон с особыми условиями использования
                территории;
              </li>
              <li class={hide() ? "hidden" : ""}>
                Подготовка проектной документации лесных участков;
              </li>
              <li class={hide() ? "hidden" : ""}>
                Разработка и оформление проектов освоения лесов к договорам
                аренды лесных участков;
              </li>
              <li class={hide() ? "hidden" : ""}>
                Сопровождение проведения государственной экспертизы проектов
                освоения лесов;
              </li>
              <li class={hide() ? "hidden" : ""}>
                Подготовка и согласование в лесничествах лесной декларации.
              </li>
            </ul>
            <div class={hide() ? "hide" : "hidden hide"} onClick={() => setHide(false)}>Показать полностью</div>
          </div>
          <div class="col-xs-12 col-md-4">
            <img src={col3} class="colx hidden-xs" alt="" />
            <h1>Закупочная деятельность</h1>
            <p>
              Содействие в осуществлении закупочной деятельности
              государственными организациями и отдельными видами юридических
              лиц.
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
};

const Map = () => (
  <section class="map" id="map">
    <iframe
      title="map"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A79178478e1ef33fc8ccce48f929cbf01c0ef13d560e187328def1511e85ac7b3&amp;source=constructor"
    />
  </section>
);

const Footer = () => (
  <section class="footer" id="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <h4>Контакты:</h4>
          <div class="with-icon">
            <i class="fas fa-envelope" />
            <a href="mailto:kci@kcikomi.ru">kci@kcikomi.ru</a>
          </div>
          <div class="with-icon">
            <i class="fas fa-phone" />
            <a href="tel:+7212391624">(8212) 39-16-24</a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
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
        <div class="col-xs-12 copy">
          ООО "Кадастровый центр "Интеграция" &copy;&nbsp;
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <>
      <Header />
      <Main />
      <Map />
      <Footer />
    </>
  )
}

export default App
