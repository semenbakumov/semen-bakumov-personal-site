const situations = [
  "Одновременно развивается несколько проектов, и трудно удерживать общую картину",
  "Операционные задачи постоянно вытесняют стратегические цели",
  "Нужно принять важное решение, но внутри слишком много противоречивых факторов",
  "Собственник остаётся единственным человеком, который связывает цели, проекты и работу команды",
  "Команда много работает, но движение к главным целям не всегда очевидно",
  "Важные решения приняты, но не превращаются в устойчивые действия",
];

const directions = [
  {
    number: "01",
    title: "Личная стратегия",
    text: "Разобрать сложную ситуацию, согласовать личные и бизнес-приоритеты и определить дальнейшее направление.",
    result: "Карта ситуации, приоритеты, решения, план на квартал и ближайшие действия.",
  },
  {
    number: "02",
    title: "Стратегическая сессия",
    text: "Сформировать общее понимание, согласовать направление и перевести стратегию в конкретные действия команды.",
    result: "Общее видение, цели, решения, план реализации, ответственные и следующие шаги.",
  },
  {
    number: "03",
    title: "Сопровождение реализации",
    text: "Удерживать рабочий ритм после принятых решений, регулярно сверяться с целями и преодолевать блокеры.",
    result: "Трекинг, работа с собственником, командные встречи, процессы и поддержка между встречами.",
  },
];

const facts = [
  ["300+", "часов фасилитации"],
  ["3 года", "Agile-коуч в Альфа-Банке"],
  ["100+", "индивидуальных коуч-сессий"],
  ["до 6", "команд одновременно"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="На начало страницы">СБ</a>
        <nav aria-label="Навигация по странице">
          <a href="#work">Форматы работы</a>
          <a href="#about">Обо мне</a>
        </nav>
        <a className="header-contact" href="https://t.me/SemenBakumov" target="_blank" rel="noreferrer">Связаться <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-identity">
          <img src="/semen-bakumov.svg" alt="Семён Бакумов" width="64" height="64" />
          <span>Семён Бакумов</span>
        </div>
        <h1>Помогаю собственникам и командам сохранять <em>ясность</em> и двигаться к стратегическим целям без хаоса</h1>
        <div className="hero-bottom">
          <p>Когда проектов и решений становится больше, стратегия часто теряется в операционной работе. Я помогаю увидеть ситуацию целиком, определить приоритеты и превратить решения в согласованные действия.</p>
          <a className="primary-button" href="https://t.me/SemenBakumov" target="_blank" rel="noreferrer">Обсудить мою ситуацию <span>↗</span></a>
        </div>
        <div className="service-line">Стратегические сессии <i /> Личная работа <i /> Сопровождение реализации <i /> AI как рабочий инструмент</div>
      </section>

      <section className="section situations-section">
        <div className="section-label">Когда я могу быть полезен</div>
        <div className="section-content">
          <h2>Когда решений становится больше, а ясности меньше</h2>
          <div className="situations-grid">
            {situations.map((item, index) => (
              <article className="situation" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section directions-section" id="work">
        <div className="section-label light">Форматы работы</div>
        <div className="section-content">
          <div className="section-heading-row">
            <h2>С чего можно начать</h2>
            <p>Формат зависит от масштаба задачи и того, кому важно принять и реализовать решение.</p>
          </div>
          <div className="directions-list">
            {directions.map((item) => (
              <article className="direction" key={item.number}>
                <span className="direction-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <div className="direction-result"><span>Результат</span><p>{item.result}</p></div>
              </article>
            ))}
          </div>
          <article className="ai-card">
            <div className="ai-badge">Исследование</div>
            <div>
              <h3>AI и управленческая система</h3>
              <p>Исследую, как AI может помогать руководителю сохранять связь между стратегическими целями, решениями, проектами и ежедневной работой команды.</p>
            </div>
            <a href="https://semenbakumov-ai-management-clarity-e42b.twc1.net/" target="_blank" rel="noreferrer">Принять участие <span>↗</span></a>
          </article>
        </div>
      </section>

      <section className="section approach-section">
        <div className="section-label">Подход</div>
        <div className="section-content approach-content">
          <div className="approach-title">
            <h2>Сначала ясность.<br />Затем решения, система и движение.</h2>
          </div>
          <div className="approach-copy">
            <p className="lead">В сложных управленческих ситуациях важно одновременно учитывать цели бизнеса, интересы собственника, состояние команды и реальные ограничения системы.</p>
            <ol>
              <li><span>01</span>Увидеть ситуацию целиком</li>
              <li><span>02</span>Отделить главное от шума</li>
              <li><span>03</span>Принять решения, за которые участники готовы отвечать</li>
              <li><span>04</span>Перевести решения в понятные действия</li>
              <li><span>05</span>Создать ритм, который удерживает направление</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-intro">
          <div className="section-label light">Обо мне</div>
          <div>
            <p className="eyebrow">Семён Бакумов</p>
            <h2>Работаю с людьми и системами в период изменений и роста сложности</h2>
            <p className="about-text">Соединяю фасилитацию, коучинг, стратегическое консультирование, практики командной работы и AI-инструменты. Не приношу готовый правильный ответ сверху, а помогаю создать решения, которые учитывают реальность бизнеса и могут быть реализованы людьми.</p>
          </div>
        </div>
        <div className="facts-grid">
          {facts.map(([value, label]) => <div className="fact" key={value + label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <div className="experience">
          <p>В Альфа-Банке участвовал в Agile-трансформации подразделения из 250 человек: помогал выстраивать организационную структуру и взаимодействие, внедрять систему управления задачами и сопровождал команды в переходе к новым принципам работы.</p>
          <div className="certificate"><span>Сертификация</span><strong>ICAgile Certified Agile Team Facilitator</strong></div>
        </div>
      </section>

      <section className="contact">
        <p className="eyebrow">Первый шаг</p>
        <h2>Если сейчас вам важно увидеть ситуацию целиком</h2>
        <p>Расскажите, что происходит в бизнесе, команде или конкретном проекте. За короткий разговор мы поймём основную задачу и какой формат работы может быть полезен.</p>
        <a className="primary-button light-button" href="https://t.me/SemenBakumov" target="_blank" rel="noreferrer">Написать Семёну в Telegram <span>↗</span></a>
      </section>

      <footer><span>Семён Бакумов</span><span>Фасилитация · стратегия · сопровождение</span><span>© 2026</span></footer>
    </main>
  );
}
