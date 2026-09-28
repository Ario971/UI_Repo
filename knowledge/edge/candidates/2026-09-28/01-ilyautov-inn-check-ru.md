---
id: "ilyautov/inn-check-ru"
name: "ilyautov/inn-check-ru"
url: "https://github.com/ilyautov/inn-check-ru"
date: "2026-09-28"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 55
risk: 29
integration_effort: 40
expected_gain: 87
composite: 76
replacement_target: ""
related_articles: [{"title":"how to setup llama.cpp and blender to make lovely 3d stuff together","date":"2026-08-28","topic":"Local LLMs","similarity":0.299,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/Local LLMs/2026-08-28/16-how-to-setup-llama-cpp-and-blender-to-make-lovely-3d-stuff-together.md"},{"title":"Show HN: MCP Tool Definition Quality Score (TDQS) Spec","date":"2026-09-03","topic":"AI dev tools","similarity":0.286,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-03/10-show-hn-mcp-tool-definition-quality-score-tdqs-spec.md"},{"title":"WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution","date":"2026-08-27","topic":"AI agents","similarity":0.286,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-27/07-wikiskill-compiling-agent-experience-into-persistent-knowledge-for-ski.md"}]
pros: ["Recently updated (2026-09-28)","Apache-2.0 license","4 GitHub stars","GitHub Actions/CI detected"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 1
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps requires, build-backend, name, version, description, readme, license, license-files"}]
install_commands: ["npx skills add ilyautov/inn-check-ru","claude plugin marketplace update inn-check-ru && claude plugin update inn-check-ru@inn-check-ru"]
risk_flags: []
status: "new"
---

# ilyautov/inn-check-ru

Сбор данных о компании по ИНН для AI-агентов: досье, связи, изменения. Скилл, MCP и CLI. Открытые источники и видимые пробелы в данных

URL: https://github.com/ilyautov/inn-check-ru

## Why it matters
You saved an article on 2026-08-28 about Local LLMs; this candidate overlaps with "how to setup llama.cpp and blender to make lovely 3d stuff together" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-28)
+ Apache-2.0 license
+ 4 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- pyproject.toml: python project; deps requires, build-backend, name, version, description, readme, license, license-files

Install commands found:
- npx skills add ilyautov/inn-check-ru
- claude plugin marketplace update inn-check-ru && claude plugin update inn-check-ru@inn-check-ru

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# inn-check-ru: инструменты агента для поиска информации о компании по ИНН

> 🇬🇧 [English version](README.en.md)

Скилл, MCP-сервер и CLI для Claude, Codex и других агентов. Даёте ИНН, и агент сам обходит ЕГРЮЛ, «Прозрачный бизнес», бухотчётность ГИР БО, Федресурс, реестры ЦБ, санкционные списки и ещё полтора десятка реестров. На выходе досье: жива ли компания, кто владеет и руководит, выручка и долги, признаки банкротства, связанные фирмы. Суды, ФССП и ЕФРСБ закрыты капчей: их агент открывает в браузере, а капчу проходите вы.

В чём фишка: цифры считает код, а не модель. У каждого реестра в ответе видно, что он сказал: нашёл, пусто или проверить не удалось. «Ничего не нашёл» и «не смог проверить» не смешиваются, поэтому капча или упавший сайт не превращаются в «компания чистая».

[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Версия](https://img.shields.io/badge/версия-1.12.2-blueviolet)](CHANGELOG.md)
[![Stars](https://img.shields.io/github/stars/ilyautov/inn-check-ru?style=social)](https://github.com/ilyautov/inn-check-ru/stargazers)
[![skills.sh](https://skills.sh/b/ilyautov/inn-check-ru)](https://skills.sh/ilyautov/inn-check-ru/inn-check-ru)

<p align="center">
  <a href="https://inn-check-ru.aifrontier.tech/">
    <img src="assets/readme-banner.jpg" alt="inn-check-ru: сбор данных о компании по ИНН для AI-агента" width="720">
  </a>
</p>

**Сайт:** [inn-check-ru.aifrontier.tech](https://inn-check-ru.aifrontier.tech/) · разборы: [проверка по ИНН](https://inn-check-ru.aifrontier.tech/proverit-kontragenta-po-inn.html), [ИП](https://inn-check-ru.aifrontier.tech/proverka-ip-po-inn.html), [однодневки](https://inn-check-ru.aifrontier.tech/priznaki-odnodnevki.html), [дробление](https://inn-check-ru.aifrontier.tech/droblenie-biznesa.html), [мониторинг](https://inn-check-ru.aifrontier.tech/monitoring-kontragentov.html)

## Быстрый старт

```bash
npx skills add ilyautov/inn-check-ru
```

И скажите агенту:

```text
Собери досье компании по ИНН 7707083893.
Покажи статус, финансы, долги, суды, владельцев и связи.
Укажи источники, даты и что не удалось проверить.
```

Три основных задачи: нейтральное досье, связи компании, изменения между сохранёнными снимками. Оценка сделки (светофор 🟢/🟡/🔴) — отдельный режим: назовите цель, например «перед отсрочкой».

## Зачем

Банкротство, дисквалификация директора, ликвидация — обычно всё это открыто в ЕГРЮЛ, ФССП, картотеке арбитража и ЕФРСБ ещё до сделки. Но в одну картину это никто не сводит.

Агрегаторам одним верить нельзя. Живой тест 15.06.2026: одна компания, 5 бесплатных агрегаторов, число судебных дел — ~500 / ~1000 / ~1500. Один ещё и подмешал чужие банкротные «намерения». Поэтому здесь **факт — это совпадение ≥3 источников, а расхождение — флаг**.

## Как это работает

**Три состояния вместо «чисто».** У каждого источника в ответе одно из трёх:

| Состояние | Значит |
|---|---|
| `ok` | ответил, поля совпали с контрактом |
| `пусто` | ответил, записи по ИНН нет — это факт |
| `не проверено` | сеть, гео, капча, изменилась схема, не покрыто скриптом |

Сломанный парсер даёт «не проверено», а не «чисто». Если не проверено больше половины стоп-источников, 🟢 не выдаётся.

**Две скорости.** Быстрая фаза за 2–4 секунды: ЕГРЮЛ, риск-флаги ФНС, дисквалифицированные, санкции. Стоп-сигнал (ликвидация, банкротство, недостоверность, дисквалификация, долги больше сделки) → 🔴, досье дальше не собирается. Режимы: `--режим quick|полный|всё`.

**Источники по каскаду:** бесплатные скрипты ФНС без ключей (ЕГРЮЛ, Прозрачный бизнес, ГИР БО, МСП, НПД, ЕРКНМ/РНП, список ЦБ, спецреестры) → ФССП и суды через браузер или агрегаторы → ручной ввод.

**Числа считает код, не модель:**

| Что | Скрипт |
|---|---|
| Финансы из ГИР БО: чистые активы, ликвидность, транзитный профиль | `fin_scoring.py` |
| Санкции офлайн: Росфинмониторинг, OFAC SDN, EU | `sanctions_check.py` |
| Цель проверки задаёт вес фактов: 11 профилей (`нейтрально`, `отсрочка`, `предоплата`, `тендер`…) | `profiles.py` |
| ИП по 12-значному ИНН: ЕГРИП, НПД, МСП, два поиска ФССП | автоматически |
| Граф связей глубины 2, признаки дробления по методике ФНС | `affiliates_graph.py`, `droblenie_check.py` |
| Перцентиль в отрасли: ОКВЭД × регион × размер, 5480 групп | `benchmarks.py` |
| Поиск по ИНН в дампах ФНС: численность, спецрежим, налоги, недоимка | `opendata_index.py` |
| Признаки «бумажного» НДС — фактами, без налоговых заключений | `paper_vat.py` |
| Батч по базе контрагентов, опасное наверх, `--продолжить` после обрыва | `batch_check.py` |
| Мониторинг: снимки, дифф, строки для cron/launchd | `watchlist.py`, `diff_counterparty.py` |
| Светофор на дату в прошлом — только по снимку, сохранённому тогда | `retro_verdict.py` |
| Досье осмотрительности в Markdown или DOCX | `dossier.py` |
| Пакет доказательств: сырые ответы, SHA-256, штамп времени RFC 3161 | `--пакет`, `evidence_pack.py` |
| ИНН из счёта, договора, письма, CSV | `extract_inn.py` |
| Лицензии Росздравнадзора: аптеки, наркотики, медизделия — действует / приостановлена / прекращена | `rzn_licenses.py` |
| Дисквалифицированные руководители — офлайн по выгрузке ФНС, плюс история компании | `disq_dump.py` |
| МФО, кредитные кооперативы, ломбарды в госреестрах ЦБ — действует или исключена и когда | `cbr_registries.py` |
| Залоги движимого имущества: вставленный текст страницы reestr-zalogov.ru → число уведомлений, даты, банки-залогодержатели | `pledge_text.py` |

Подробности, границы и допущения каждого — в [SKILL.md](SKILL.md), [references/](references/) и [KNOWN_LIMITS.md](KNOWN_LIMITS.md).

**Сеть.** `check_access.py` за 10 секунд показывает, что доступно из вашей сети. Недоступное сразу помечается «не проверено». TLS для fedsfm.ru и rosstat.gov.ru чинит `install_ca.py`: корень УЦ Минцифры с проверкой отпечатков, верификация не отключается. Гео-блок обходится только **своей** нодой с российским IP (`--прокси` или `INN_CHECK_PROXY`): общего пула у проекта нет и не будет.

**Кто видит ИНН.** Провайдер модели — он в переписке. Каждый источник — свой запрос. Санкционные перечни, выгрузки ЦБ и дампы ФНС скачиваются целиком и сверяются локально. `--офлайн` не выходит в сеть вовсе. Телеметрии нет.

## Установка

| Где работаете | Как поставить | Что получите |
|---|---|---|
| Claude Code, Cowork | плагин (ниже) | скилл + MCP, обновления через маркетплейс |
| Claude Desktop | [inn-check-ru.mcpb](https://github.com/ilyautov/inn-check-ru/releases/latest/download/inn-check-ru.mcpb) | MCP, Python не нужен |
| Claude.ai (веб) | [ZIP скилла](https://github.com/ilyautov/inn-check-ru/releases/latest/download/inn-check-ru.zip) | скилл |
| Cursor, Codex, другие MCP-клиенты | `uvx inn-check-ru-mcp@latest` | MCP, [конфиги](mcp/README.md) |
| Любой агент со скиллами | `npx skills add ilyautov/inn-check-ru` | скилл |
| Терминал | `uvx inn-check-ru <ИНН>` | CLI |
| Chrome, Brave, Edge | [extension/](extension/README.md) | проверка ИНН со страницы, ручные блоки ФССП и судов |

### Claude Code и Cowork (плагин)

```text
/plugin marketplace add ilyautov/inn-check-ru
/plugin install inn-check-ru@inn-check-ru
```

Сторонний маркетплейс сам не обновляется:

```bash
claude plugin marketplace update inn-check-ru && claude plugin update inn-check-ru@inn-check-ru
```

### Claude Desktop (расширение .mcpb)

[Скачать inn-check-ru.mcpb](https://github.com/ilyautov/inn-check-ru/releases/latest/download/inn-check-ru.mcpb), открыть, «Установить». Движок поставится через uv. Два необязательных поля — ключ checko.ru (граф связей) и свой прокси — хранятся в защищённом хранилище системы. Ставится только MCP; скилл — плагином или ZIP.

### Claude.ai (веб)

[Скачать ZIP](https://github.com/ilyautov/inn-check-ru/releases/latest/download/inn-check-ru.zip) → Settings → Capabilities → Skills → Upload skill. Собрать самому: `python3 scripts/build_release_zip.py`.

### Вручную (Copilot, Cline, Roo Code, Goose, OpenCode)

Скопируйте `SKILL.md`, `references/` и `scripts/` в каталог скиллов агента (например `.agents/skills/inn-check-ru/`). Без `references/` агент молча теряет ветку ИП, мониторинг и батч.

### Браузерное расширение

Распакованное `extension/` + `python3 scripts/install_native_host.py --id <ID>`. macOS, Linux, Windows. Подробно — [extension/README.md](extension/README.md).

## Использование

Обычными словами:

```text
собери досье компании по ИНН 7707083893
с кем связана эта компания
что изменилось у контрагента с прошлой проверки
проверь поставщика по ИНН перед отсрочкой 30 дней
```

Слэш-команды плагина в Claude Code (профиль — вторым аргументом):

| Команда | Что делает |
|---|---|
| `/inn-check <ИНН> [профиль]` | быстрая проверка и светофор |
| `/inn-dossier <ИНН> [профиль]` | полное досье осмотрительности |
| `/inn-batch <файл или ИНН…>` | список, опасное наверх |
| `/inn-watch [добавить/убрать/список/прогон]` | мониторинг изменений |
| `/inn-retro <ИНН> <ГГГГ-ММ-ДД>` | светофор по снимку прошлой даты |
| `/inn-links <ИНН>` | связи и признаки дробления (ключ Checko) |
| `/inn-vat <ИНН> [предмет] [сумма]` | признаки «бумажного» НДС |
| `/inn-self <ИНН>` | как вас видят банк и покупатель |

**Два интерфейса, один движок** (`scripts/`, чистый stdlib): скилл (`SKILL.md` + `references/`) — для разговора с агентом; MCP-сервер (`mcp/`) — 14 read-only инструментов для цепочек. Например: счёт из diadoc-mcp-ru → `counterparty_fetch` до подписи.

## Чем отличается от Контур.Фокуса и Checko

Не замена, а другая задача:

- сводит несколько источников и показывает расхождения вместо одной цифры;
- живёт внутри вашего агента, рядом с остальной работой;
- открытый код: пороги видны и настраиваются.

**Чем не является:** это оценка по открытым данным, а не юридическая или кредитная гарантия. Для крупной сделки — рабочий лист для юриста. Чего не умеет — [KNOWN_LIMITS.md](KNOWN_LIMITS.md).

## Частые вопросы

**Без API-ключей работает?** Базовый контур — да: ЕГРЮЛ, риск-флаги ФНС, финансы, МСП, НПД. Граф связей — бесплатный ключ checko или браузер. Суды, ФССП, банкротство ИП — через браузер.

**Как проверить ИП?** Так же, по 12-значному ИНН. Выручки и налогового долга ИП в открытых данных нет — по закону.

**Как проверить подписанта по доверенности?** Номер машиночитаемой доверенности — в реестре ФНС m4d.nalog.gov.ru. Отозванная доверенность обесценивает подпись.

## Вклад и безопасность

[CONTRIBUTING.md](CONTRIBUTING.md) — баги, расхождения с реестрами, новые источники. [SECURITY.md](SECURITY.md) — модель угроз и как сообщить об уязвимости.

## Лицензия

Apache-2.0 ([LICENSE](LICENSE)). Выделено из [small-business-ru](https://github.com/ilyautov/small-business-ru).

## Кто это сделал

[Илья Утов](https://github.com/ilyautov), лаборатория [AI Frontier](https://aifrontier.tech). Как устроены эти инструменты — в [Telegram](https://t.me/gorilla_under_hood).

Рядом: [small-business-ru](https://github.com/ilyautov/small-business-ru) (34 скилла для МСБ) · [humanizer-ru](https://github.com/ilyautov/humanizer-ru) (очеловечить русский AI-текст) · [marketplaces-mcp-ru](https://github.com/ilyautov/marketplaces-mcp-ru) (WB, Ozon, Яндекс Маркет, Авито из агента). Пригодилось — поставьте звезду.

