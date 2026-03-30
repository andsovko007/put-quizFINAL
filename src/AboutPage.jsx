import { useState, useEffect, useRef } from "react";

const TG_CALL = "https://t.me/sovkoandrei?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D0%BF%D0%BE%20%D0%B4%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D0%BA%D0%B5%20%D0%9F%D0%A3%D0%A2%D0%AC";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVis(true), delay); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(24px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>{children}</div>
  );
}

export default function AboutPage() {
  return (
    <div style={{
      background: "#0A0A0A", color: "#F5F5F0", minHeight: "100dvh",
      fontFamily: "'SF Pro Display', -apple-system, 'Segoe UI', sans-serif",
      maxWidth: 480, margin: "0 auto", WebkitFontSmoothing: "antialiased",
      padding: "0 0 60px"
    }}>

      {/* HEADER */}
      <FadeIn>
        <div style={{ padding: "44px 24px 0" }}>
          <span style={{
            fontSize: 11, letterSpacing: 3, color: "#FF6B4A", fontWeight: 600
          }}>ПУТЬ / АНДРЕЙ СОВКО</span>

          <h1 style={{
            fontSize: 26, lineHeight: 1.2, fontWeight: 800,
            color: "#F5F5F0", marginTop: 20, marginBottom: 10
          }}>
            Почему ты много делаешь, а клиентов, продаж и денег больше не становится
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.4, color: "#999", marginBottom: 0
          }}>
            Ты уже пробовал это чинить. И каждый раз откатывалось.
          </p>
        </div>
      </FadeIn>

      <div style={{ height: 1, background: "#1A1A1A", margin: "32px 24px" }} />

      {/* БЛОК 1: УЗНАВАНИЕ */}
      <FadeIn>
        <div style={{ padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              "Новые инструменты",
              "Больше усилий",
              "Больше контроля",
              "Перезапуск",
            ].map((item, i) => (
              <div key={i} style={{
                background: "#111", borderRadius: 12, padding: "16px 14px",
                border: "1px solid #1A1A1A", display: "flex", alignItems: "center", gap: 10
              }}>
                <span style={{ color: "#EF4444", fontSize: 16, fontWeight: 700 }}>✕</span>
                <span style={{ color: "#999", fontSize: 14 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.6, color: "#C0C0C0", marginTop: 18
          }}>
            Пробовал менять подход. Давить сильнее. Искать инструменты. Каждый раз казалось, вот сейчас заработает. Не заработало.
          </p>
          <p style={{
            fontSize: 15, lineHeight: 1.6, color: "#C0C0C0", marginTop: 10
          }}>
            Дело не в усилиях. Ты чинишь куски, а ломается связка.
          </p>

          {/* Мост к истории */}
          <p style={{
            fontSize: 15, color: "#888", marginTop: 20, fontStyle: "italic"
          }}>
            Я знаю, как это выглядит изнутри. Потому что сам там был.
          </p>
        </div>
      </FadeIn>

      <div style={{ height: 1, background: "#1A1A1A", margin: "32px 24px" }} />

      {/* БЛОК 2: Я БЫЛ ТАМ ЖЕ */}
      <FadeIn>
        <div style={{ padding: "0 24px" }}>

          <p style={{ fontSize: 14, color: "#666", marginBottom: 12 }}>
            Я построил это:
          </p>

          {/* Цифровая лента */}
          <div style={{
            display: "flex", justifyContent: "space-between", gap: 6, marginBottom: 24,
            background: "#111", borderRadius: 12, padding: "14px 16px",
            border: "1px solid #1A1A1A"
          }}>
            {[
              ["5000", "заявок/мес"],
              ["150", "человек"],
              ["30%", "конверсия"],
              ["топ-1%", "рынка"],
            ].map(([num, label], i) => (
              <div key={i} style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#FF6B4A" }}>{num}</div>
                <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#C0C0C0", marginBottom: 14 }}>
            Со стороны это выглядело как победа.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#C0C0C0", marginBottom: 14 }}>
            Изнутри на груди лежала бетонная плита. Челюсть сведена. Дрожь, которую никто не видит. Решения кривые от усталости. Срываюсь на команду. Бизнес без меня не едет ни дня.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#C0C0C0", marginBottom: 14 }}>
            Я делал то же, что и ты сейчас. Давил сильнее. Больше дисциплины, больше контроля, больше часов. Вытаскивал на зубах. И это работало. До момента, когда перестало.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#C0C0C0", marginBottom: 14 }}>
            Тело сдало. Голова перестала варить. А бизнес продолжал требовать то же включение.
          </p>

          {/* Ключевая фраза */}
          <div style={{
            borderLeft: "3px solid #FF6B4A",
            paddingLeft: 16, margin: "24px 0"
          }}>
            <p style={{
              fontSize: 17, lineHeight: 1.5, color: "#F5F5F0", fontWeight: 600
            }}>
              Воля — отличный инструмент, чтобы построить масштаб. Но плохой, чтобы его обслуживать.
            </p>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#C0C0C0", marginBottom: 6 }}>
            Проблема не в том, что ты мало стараешься. А в том, что система, которую ты построил, жрёт больше, чем можешь восстановить. Чинить по частям бесполезно.
          </p>
          <p style={{ fontSize: 14, color: "#888", marginTop: 14 }}>
            Не из книг. Из реального пролома, когда система ломается под нагрузкой и ты сам становишься узким горлышком.
          </p>

          {/* Промежуточный CTA */}
          <a href={TG_CALL} target="_blank" rel="noopener noreferrer" style={{
            display: "block", marginTop: 24, fontSize: 14, color: "#FF6B4A",
            textDecoration: "none", fontWeight: 500
          }}>
            Записаться на разбор →
          </a>
        </div>
      </FadeIn>

      <div style={{ height: 1, background: "#1A1A1A", margin: "32px 24px" }} />

      {/* БЛОК 3: ЧТО Я НАШЁЛ — схема */}
      <FadeIn>
        <div style={{ padding: "0 24px" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, color: "#555", letterSpacing: 2, marginBottom: 20 }}>
            ЧТО ЛОМАЕТСЯ
          </h2>

          {/* Внутренний контур */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, color: "#FF6B4A", fontWeight: 700, marginBottom: 10, letterSpacing: 1 }}>
              ВНУТРЕННИЙ КОНТУР
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
              {["Состояние", "Внимание", "Паттерны", "Действия", "Среда"].map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    background: "#111", border: "1px solid #FF6B4A30",
                    borderRadius: 10, padding: "10px 28px",
                    fontSize: 13, color: "#D0D0D0", fontWeight: 500, textAlign: "center"
                  }}>{item}</div>
                  {i < 4 && (
                    <div style={{ color: "#FF6B4A40", fontSize: 16, lineHeight: 1, padding: "2px 0" }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Стрелки */}
          <div style={{
            textAlign: "center", margin: "16px 0",
            fontSize: 13, color: "#FF6B4A", fontWeight: 600
          }}>
            ↕ ломают друг друга
          </div>

          {/* Внешний контур */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 12, color: "#FF6B4A", fontWeight: 700, marginBottom: 10, letterSpacing: 1 }}>
              ВНЕШНИЙ КОНТУР
            </p>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center"
            }}>
              {["Рынок", "Клиент", "Оффер", "Продажа", "Команда", "Деньги"].map((item, i) => (
                <div key={i} style={{
                  background: "#111", border: "1px solid #1E1E1E",
                  borderRadius: 8, padding: "8px 14px",
                  fontSize: 12, color: "#999"
                }}>{item}</div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#C0C0C0", marginTop: 18 }}>
            Когда оба перегружены, они ломают друг друга. Именно поэтому "просто отдохнуть" или "просто нанять маркетолога" не даёт устойчивого результата.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#C0C0C0", marginTop: 10 }}>
            Метод ПУТЬ — диагностика связки. Находим один главный узел. Не всё сразу. Одно место, с которого пойдёт сдвиг.
          </p>
        </div>
      </FadeIn>

      <div style={{ height: 1, background: "#1A1A1A", margin: "32px 24px" }} />

      {/* БЛОК 4: КАК РАБОТАЕТ РАЗБОР */}
      <FadeIn>
        <div style={{ padding: "0 24px" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, color: "#555", letterSpacing: 2, marginBottom: 18 }}>
            КАК РАБОТАЕТ РАЗБОР
          </h2>

          <p style={{ fontSize: 15, color: "#C0C0C0", lineHeight: 1.7, marginBottom: 18 }}>
            30–40 минут. Не коучинг. Не мотивация. Не общий разговор про жизнь.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              ["01", "Покажу, где главный узел"],
              ["02", "Объясню, что он ломает в системе"],
              ["03", "Скажу, что чинить первым и почему"],
              ["04", "Честно скажу, есть ли смысл глубже"],
            ].map(([num, text], i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{
                  fontSize: 13, fontWeight: 800, color: "#FF6B4A",
                  minWidth: 24
                }}>{num}</span>
                <span style={{ fontSize: 14, color: "#C0C0C0", lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: 15, color: "#999", lineHeight: 1.6, marginTop: 20
          }}>
            Ты выйдешь с разбора с ясностью, а не с ещё одним списком дел.
          </p>
          <p style={{ fontSize: 14, color: "#888", marginTop: 8 }}>
            Разбор покажет картину. Дальше — решаешь сам.
          </p>
        </div>
      </FadeIn>

      <div style={{ height: 1, background: "#1A1A1A", margin: "32px 24px" }} />

      {/* CTA */}
      <FadeIn>
        <div style={{ padding: "0 24px" }}>
          <p style={{
            fontSize: 18, fontWeight: 700, color: "#F5F5F0",
            textAlign: "center", marginBottom: 8, lineHeight: 1.4
          }}>
            Один разговор. Один узел. Один сдвиг.
          </p>

          <p style={{
            fontSize: 13, color: "#666", textAlign: "center", marginBottom: 24
          }}>
            Каждую неделю беру ограниченное количество разборов.
          </p>

          <a href={TG_CALL} target="_blank" rel="noopener noreferrer" style={{
            display: "block", width: "100%", padding: "17px 0", borderRadius: 14,
            background: "#FF6B4A", color: "#fff", fontSize: 16,
            fontWeight: 700, textDecoration: "none", textAlign: "center",
          }}>
            Записаться на разбор
          </a>

          {/* Trust */}
          <div style={{
            marginTop: 28, paddingTop: 20,
            borderTop: "1px solid #1A1A1A", textAlign: "center"
          }}>
            <p style={{ fontSize: 12, color: "#555", lineHeight: 1.7 }}>
              14 лет в консалтинге · 100+ проектов · Чемпион мира WPC
            </p>
            <p style={{
              fontSize: 12, color: "#FF6B4A", marginTop: 8, fontStyle: "italic"
            }}>
              Я сам смотрю каждую анкету. Это не автоворонка.
            </p>
          </div>
        </div>
      </FadeIn>

    </div>
  );
}
