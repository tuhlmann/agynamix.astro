/* eslint-disable max-len */
import {
  prepareData,
  sortByDate,
  StoryData,
  AllowedCategories,
} from "../utils/prepare-story-data";

export default (
  [
    {
      position: "Invoicer",
      client: "AGYNAMIX",
      logo: "/images/products/invoicer_logo.png",
      start: "2025-10-01",
      link: "https://invoicer.agynamix.de",
      tags: ["Kotlin", "Jetpack Compose", "SQLite", "GoBD"],
      categories: [AllowedCategories.Product, AllowedCategories.Resume],
      short:
        "Professionelle Desktop-Rechnungssoftware für Freelancer und kleine Unternehmen",
      description: `
      AGYNAMIX Invoicer ist eine umfassende Desktop-Anwendung, die speziell für Freelancer und kleine Unternehmen entwickelt wurde, um Rechnungen effizient zu erstellen und zu verwalten.

      Basierend auf Jetpack Compose bietet sie eine moderne, intuitive Oberfläche zum Erstellen professioneller Rechnungen, zur Kundenverwaltung, zur Nachverfolgung von Zahlungen sowie zur Pflege vollständiger Finanzunterlagen.

      Die Anwendung umfasst u. a. anpassbare Rechnungsvorlagen, automatische Rechnungsnummern, MwSt./Steuer-Berechnungen, Zahlungs-Tracking, Kundenverwaltung und umfangreiche Auswertungen.

      Sie läuft unter Windows, macOS und Linux und speichert alle Daten lokal auf dem Computer der Nutzer – ohne Cloud-Abhängigkeit.

      AGYNAMIX Invoicer legt Wert auf einfache Bedienung bei gleichzeitig leistungsfähigen Funktionen für das Finanzmanagement – ideal für alle, die Datensouveränität schätzen und zuverlässige, offline-fähige Rechnungssoftware benötigen.
      `,
    },
    {
      position: "Symnix",
      client: "AGYNAMIX",
      logo: "/images/products/symnix_logo_dark.svg",
      start: "2022-10-01",
      link: "https://symnix.com",
      tags: ["Rust", "Typescript", "React", "PostgreSQL", "Docker"],
      categories: [AllowedCategories.Product, AllowedCategories.Resume],
      description: `
      Symnix ist ein neues Produkt, das sich derzeit in der Entwicklung befindet.
      Es ist eine webbasierte Anwendung, mit der Nutzer ihre gehosteten Anwendungen effizienter verwalten können.
      Symnix ermöglicht es Einzelpersonen und Organisationen, mehrere Hosts mit mehreren installierten Anwendungen zu erstellen, zu verwalten und zu überwachen.
      Symnix hat das Ziel, Server-Management anhand aktueller Industriestandards und Best Practices zu vereinfachen.

      Der Backend-Teil ist in Rust implementiert, das Frontend in TypeScript und React, als Datenbank kommt PostgreSQL zum Einsatz.
      Die Anwendung wird mit Docker containerisiert, um eine einfache Bereitstellung und Skalierung zu ermöglichen.
    `,
    },
    {
      position: "Senior Frontend Developer",
      client: "TXODDS, Ltd.",
      logo: "/images/clients/TXODDS.svg",
      start: "2024-08-05",
      end: "2025-05-05",
      link: "https://txodds.net/",
      tags: ["VueJS", "Javascript", "Typescript", "Docker"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      short:
        "*Unsere Vision ist es, das Ökosystem für Sportwetten mit einer besonders überzeugenden und innovativen Plattform zur ultra-niedrig-latenziven Auslieferung von Sportquoten zu verbinden*",
      description: `Unser Team entwickelte mehrere Frontend-Applikationen für das Projekt *tx-scores*.

TX-Scores ist „ein professionelles Scouting-Netzwerk – keine beiläufige Berichterstattung.
Eine Community aus Scouts und Analysten, die den Sport kennen, die Teams kennen und großen Wert auf Genauigkeit legen.“

...

„Jeder Scout arbeitet in Echtzeit mit einem dedizierten Analysten … so entsteht für jedes Spiel eine 1:1-Live-Überwachung.“

Wir setzten VueJS 3 mit TypeScript ein; die Anwendungen werden als Docker-Container deployt.

`,
    },
    {
      position: "Senior Fullstack Developer",
      client: "iCombine UG",
      logo: "/images/clients/logo-icombine.png",
      start: "2022-02-01",
      end: "2022-08-31",
      link: "https://icombine.net/",
      tags: [
        "Scala",
        "Lift",
        "AngularJS",
        "React",
        "Javascript",
        "Typescript",
        "PostgreSQL",
      ],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      short:
        "*Verbinden Sie Ihre Experten mit den passenden Projektrollen, Trainings und Peers*",
      description: `
    *iCombine hilft dabei, Experten mit den passenden Projektrollen, Trainings und Peers zu verbinden*

    Damit lassen sich Suchkriterien einfach definieren und Personen aus dem Talent-Pool mit passenden Skills, Interessen und Verfügbarkeit schnell finden.

    Mit iCombine stellen Sie für jeden Einsatz das passende Team zusammen, identifizieren Trainingsbedarfe und vernetzen Experten für kontinuierliche Entwicklung.

    Ich durfte das Team bei der Migration des bestehenden AngularJS-Stacks zu React unterstützen – mit einem Bottom-Up-Ansatz,
    der bestehende AngularJS-Komponenten und neue React-Komponenten während der Übergangsphase in einer Anwendung kombiniert.

    Außerdem konnte ich wieder mit Scala und dem Lift Web Application Framework arbeiten.
    `,
    },
    {
      position: "Senior Fullstack Developer",
      client: "ScaledAgile, Inc",
      logo: "/images/clients/ScaledAgile.svg",
      start: "2019-05-01",
      end: "2024-07-07",
      link: "https://collaborate.scaledagile.com",
      tags: [
        "Scala",
        "Lift",
        "AngularJS",
        "Angular 12",
        "Javascript",
        "Typescript",
        "Docker",
        "PostgreSQL",
      ],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      short: "*Komplexe Probleme durch Online-Zusammenarbeit lösen*",
      description: `
      ScaledAgile Collaborate (vormals Conteneo Weave) ist eine Online-Plattform für Zusammenarbeit und Planung.
      Das Backend nutzt PostgreSQL, Scala und Lift, Containerisierung und AWS.
      Das Frontend ist in Angular umgesetzt. Während noch Legacy-Code in AngularJS 1 existiert,
      werden neue Features in einer neuen, frontend-zentrierten Angular-12/TypeScript-Architektur
      innerhalb eines NX-Workspaces entwickelt.

      In den letzten zwei Jahren haben wir die Reichweite von Collaborate deutlich erweitert,
      u. a. durch kollaborative Planungsfunktionen wie Remote PI Planning oder Online-Trainings.
    `,
      recommendations: [
        {
          title: "Empfehlungsschreiben",
          date: "2022-01-07",
          by: "Dan O' Leary, VP, Software Engineering, Scaled Agile, Inc.",
          link: "/documents/scaledagile_dan_rec_tuhlmann.pdf",
        },
        {
          title: "Empfehlungsschreiben",
          date: "2022-01-07",
          by: "Madison Fisher, Scrum Master, Scaled Agile, Inc.",
          link: "/documents/scaledagile_madi_rec_tuhlmann.pdf",
        },
        {
          title: "Empfehlungsschreiben",
          date: "2022-01-07",
          by: "John Hiemstra, User Experience Lead, Scaled Agile, Inc.",
          link: "/documents/scaledagile_john_rec_tuhlmann.pdf",
        },
      ],
    },
    {
      position: "Senior Software Developer",
      client: "Ascendant, Inc",
      logo: "/images/clients/Ascendant.svg",
      start: "2013-07-01",
      end: "2019-02-28",
      link: "https://www.ascendantcompliancemanager.com",
      tags: [
        "Scala",
        "Lift",
        "GO",
        "AngularJS",
        "Javascript",
        "MarkoJS",
        "Docker",
        "MongoDB",
      ],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      short: "*Compliance & Risk Management – gelöst*",
      description: `
     In einem kleinen Team sehr guter Entwickler implementierten wir eine Suite von Tools.
     Im Frontend nutzten wir u. a. AngularJS.
     Der Backend-Server bestand aus Scala-Anwendungen auf Basis des Lift Web Frameworks.
     Als Datenbank setzten wir MongoDB ein.
    `,
      recommendations: [
        {
          title: "Empfehlungsschreiben",
          date: "2019-03-18",
          by: "Neil Visnapuu, Managing Director, Ascendant",
          link: "/documents/ascendant_rec_tuhlmann.pdf",
        },
      ],
    },
    {
      position: "Scala & Lift Consultant",
      client: "Twisp, Inc",
      logo: "/images/clients/twisp.png",
      start: "2013-03-01",
      end: "2013-07-01",
      tags: ["Scala", "Lift", "MySQL", "Squeryl"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      short: "*Scala, Lift & MySQL. Eine Art personalisierte Wayback-Machine.*",
      description: `
     Für einen Kunden entwickelte ich eine Lift-basierte Information-Engine-Anwendung.
    `,
    },
    {
      position: "Scala & Lift Consultant",
      client: "Underscore Consulting",
      logo: "/images/clients/Underscore.png",
      start: "2012-11-01",
      end: "2013-04-01",
      link: "https://underscore.io",
      tags: ["Scala", "Lift", "MongoDB", "Cloudbees"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      short:
        "*Scala & Lift-Projekte mit den großartigen Leuten von Underscore Consulting.*",
      description: `
     Ich war verantwortlich für die Entwicklung eines Teils einer Scala/Lift-Client-Anwendung
     – gemeinsam mit einem wirklich coolen Team von Underscore-Entwickler.
    `,
      recommendations: [
        {
          title: "Senior Software Consultant für das TagTrail-Projekt",
          by: "Richard Dallaway, Partner Underscore Consulting LLP",
          description: `
Wir arbeiteten mit Torsten an einer innovativen Echtzeit-NFC-Plattform
für ein US-Unternehmen. Es war eine Freude, mit ihm zusammenzuarbeiten.
Er brachte viel technisches Wissen ein – insbesondere zu Lift, Scala und Angular.
Er arbeitete eng mit dem Kunden, um die Anforderungen zu verstehen.
Neben seinen Beiträgen im Projekt übernahm er Verantwortung für ein umfangreiches Reporting-Tool
und lieferte dieses erfolgreich aus.
        `,
        },
      ],
    },
    {
      position: "Senior Software Developer",
      client: "Sgrouples, Inc",
      logo: "/images/clients/MeWe.png",
      start: "2011-09-01",
      end: "2012-09-01",
      link: "https://www.mewe.com",
      tags: ["Scala", "Lift", "Javascript", "MongoDB"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      recommendations: [
        {
          title: "Empfehlungsschreiben",
          date: "2012-09-01",
          by: "Jonathan Wolfe, Chief Scientist",
          link: "/documents/sgrouples_rec_tuhlmann.pdf",
        },
      ],
      short:
        "*Ehemals sgrouples.com. Scala, Lift & MongoDB. MeWe ist ein datenschutzbewusstes soziales Netzwerk.*",
      description: `
     Zusammen mit einem kleinen Team sehr erfahrener Entwickler entwickelten wir die Social-Groups-Plattform https://sgrouples.com (heute: https://mewe.com).
    `,
    },
    {
      position: "Software Supplier",
      client: "B+N Automation",
      logo: "/images/clients/BN-Automation.gif",
      start: "2009-09-01",
      end: "2009-09-01",
      link: "https://www.bn-automation.com/de/startseite.html",
      tags: ["Java", "AGYNAMIX"],
      categories: [AllowedCategories.Client],
      short: `
     *B+N Automation nutzt AGYNAMIX' Net-Herald-Software zur Signalüberwachung und Alarmierung.*
    `,
    },
    {
      position: "Software Supplier",
      client: "WKS Group",
      logo: "/images/clients/WKS-Group.png",
      start: "2011-09-01",
      end: "2015-12-31",
      link: "https://wksgroup.de/",
      tags: ["Java", "AGYNAMIX"],
      categories: [AllowedCategories.Client],
      short: `
     *Die WKS Group betreibt mehrere Installationen von AGYNAMIX' Net-Herald-Software zur Signalüberwachung und Alarmierung.*
    `,
    },
    {
      position: "JSF Developer",
      client: "1822direct Sparkasse",
      logo: "/images/clients/Sparkasse_1822.png",
      start: "2009-04-01",
      end: "2009-07-01",
      link: "https://www.1822direkt.de",
      tags: ["Java", "JBoss", "Tomcat", "JSF"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      short:
        "*Java & JSP. Entwicklung eines Frontends zur Verarbeitung von Kundendokumenten.*",
      description: `
      Entwicklung eines JSF-(Java Server Faces) Frontends für eine interne Anwendung zur Verwaltung der Korrespondenz mit Kunden.
      Wir setzten Tomcat 5, JBoss und JSF 1.2 mit MyFaces für Entwicklung und Deployment ein.
    `,
    },
    {
      position: "AGYNAMIX Numerix",
      client: "AGYNAMIX",
      logo: "/images/clients/Agynamix.png",
      start: "2015-03-01",
      end: "2017-12-31",
      link: "https://github.com/tuhlmann/numerix",
      tags: [
        "Clojure",
        "Clojurescript",
        "MongoDB",
        "Reagent",
        "re-frame",
        "re-com",
      ],
      categories: [AllowedCategories.Product, AllowedCategories.Resume],
      description: `
      Numerix war als Multi-Tenant-Tool für Freelancer oder kleine Unternehmen geplant. Es enthält Module für

      *Zeiterfassung; Rechnungserstellung (aus erfasster Zeit und zusätzlichen Positionen); Dokumentenmanagement inkl. Multi-Upload;
      Wissensdatenbank; Chat-Räume inkl. Benachrichtigungen;
      Benutzerverwaltung inkl. E-Mail-Benachrichtigungen, Passwort-Reset usw.; Kalender*

      Technisch ist Numerix ein Clojure/ClojureScript-Projekt mit Reagent und re-frame, das Daten in MongoDB speichert.
      Es nutzt ein [rollenbasiertes Berechtigungssystem](https://github.com/tuhlmann/permissions)
      ähnlich den [Wildcard-Permissions von Apache Shiro](http://shiro.apache.org/permissions.html).
    `,
      images: [
        {
          image: "/images/products/numerix-invoice.png",
          description: `
        Rechnungen lassen sich aus erfasster Zeit erstellen, zusätzlich können manuelle Positionen und unterschiedliche Steuersätze ergänzt werden.
        Dabei werden u. a. Rechnungsnummern generiert. Anschließend kann über das Flying-Saucer-Projekt ein PDF erzeugt werden.
        `,
          align: "right",
        },
      ],
    },
    {
      position: "Unser Gartenverein",
      client: "AGYNAMIX",
      logo: "/images/clients/Agynamix.png",
      start: "2012-11-01",
      end: "2016-12-31",
      link: "https://github.com/tuhlmann/gartenverein",
      tags: ["Scala", "Lift", "Javascript", "MongoDB"],
      categories: [AllowedCategories.Product, AllowedCategories.Resume],
      description: `
Gartenverein war ein Versuch, eine gehostete Anwendung zur Verwaltung kleiner Gartenvereine in Deutschland zu entwickeln.

Gartenvereine sind häufig als Vereine organisiert. Es müssen Rechnungen verschickt,
Wasser- und Stromzählerstände erfasst und gespeichert werden.

Die Software verwaltet Pächter, Zählerstände, Dokumente, einen gemeinsamen Kalender und mehr.
    `,
      images: [
        {
          image: "/images/products/garden-overview.png",
          description: `
        Nach dem Login sieht man eine Dashboard-ähnliche Übersicht mit aktuellen Informationen.
        Von dort aus kann man schnell zu Bereichen wie Sammelbriefen, Rechnungen, Terminen, Dokumenten usw. navigieren.
        `,
          align: "right",
        },
      ],
    },
    {
      position: "AGYNAMIX Simidude",
      client: "AGYNAMIX",
      logo: "/images/products/Simidude.jpg",
      start: "2008-10-01",
      end: "2011-12-31",
      link: "https://github.com/tuhlmann/simidude",
      tags: ["Java", "SWT", "JFace", "Install4j", "Linux", "Windows", "MacOS"],
      categories: [AllowedCategories.Product, AllowedCategories.Resume],
      description: `
      Ich entwickelte eine kleine, plattformübergreifende Anwendung, mit der man Clipboard-Inhalte, Dateien oder ganze Verzeichnisse an verbundene Rechner übertragen kann.

      Simidude ist ein Netzwerk-Clipboard- und File-Sharing-Tool.
      Beim Start sucht es automatisch im lokalen Netzwerk nach anderen laufenden Instanzen und verbindet sich.
      Danach ist das Übertragen einer Datei von einem Rechner zum anderen nur noch ein Drag-and-Drop-Vorgang.

      Simidude läuft unter Windows, Linux und macOS – auch in virtuellen Maschinen.
    `,
      images: [
        {
          image: "/images/products/Simidude_Ubuntu_All.jpg",
          description: `
        ### AGYNAMIX Simidude
        Das Bild zeigt das Hauptfenster, auf das man Dateien oder Verzeichnisse ziehen kann – sie erscheinen dann auf allen verbundenen Simidude-Instanzen.

        Auch in die Zwischenablage kopierte Elemente erscheinen in der Liste, werden übertragen und können auf jedem verbundenen Computer aktiviert werden.
        `,
          align: "right",
        },
      ],
    },
    {
      position: "AGYNAMIX Net-Herald",
      client: "AGYNAMIX",
      logo: "/images/clients/Agynamix.png",
      start: "2005-07-01",
      end: "2015-12-31",
      link: "https://www.agynamix.de",
      tags: ["Java", "Eclipse RCP", "PostgreSQL", "Spring", "OPC"],
      categories: [AllowedCategories.Product, AllowedCategories.Resume],
      description: `
      Ich gründete AGYNAMIX Ende 2004, um Software so zu entwickeln, wie ich es über viele Jahre gelernt hatte –
      und nicht nach Vorgaben von Managern, die selbst nie programmiert haben.

      Mein erstes Produkt war eine Monitoring-Software für Wasserversorger.
      Es war ein relativ großes Projekt mit einer serverseitigen Java-Anwendung auf Basis u. a. folgender Technologien:

      Spring Framework
      PostgreSQL
      Java-COM-Anbindung zur Steuerung von GSM-Modems zum Versenden von Warnungen
      eine OPC-(OLE for Process Control) COM-Bibliothek zur Anbindung bestehender Systeme

      Zusätzlich entwickelte ich eine Eclipse-RCP-Anwendung, die Eclipse GEF nutzt,
      um Daten zu visualisieren (Charts und aktuelle Werte).
    `,
      images: [
        {
          image: "/images/products/Net-HeraldPackung2.png",
          description: "### Net-Herald Verpackung",
          align: "right",
        },
      ],
    },
    {
      position: "Software Developer",
      client: "T-Systems SL SI",
      logo: "/images/clients/T-Systems.png",
      start: "2005-01-01",
      end: "2011-09-01",
      link: "https://www.t-systems.com/de/de",
      tags: ["Java", "JBoss", "Oracle"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      recommendations: [
        {
          title: "Projekt C++ und Java-Programmierung, 07/98 - 03/02",
          date: "2005-01-03",
          by: "Projektleiter,  T-Systems",
          description: `
        Der Consultant kennt sich gut mit C++ und Java aus, er arbeitet souverän mit den Konzepten
        objektorientierter Programmierung. Alle Arbeiten wurden zu unserer vollsten Zufriedenheit termingerecht
        fertiggestellt. Über die konkrete Programmieraufgabe hinaus bewies der Consultant im Rahmen seiner Tätigkeit
        ein hohes Engagement. Durch ihn wurden Fehler und Verbesserungspotentiale in Anforderungen und Umsetzung aufgezeigt.
        Er unterstützte seine Kollegen auch über seinen Aufgabenbereich hinaus. Die Zusammenarbeit war sehr angenehm,
        der Consultant war eine Bereicherung für das Projektteam. Ich würde sehr gern
        wieder mit dem Consultant zusammenarbeiten.
      `,
        },
        {
          title:
            "Projekt Verschiedene Projekte im Bereich C++ und Java, 11/96 - 01/05",
          date: "2005-02-03",
          by: "Project Center Team Leiter, T-Systems GEI GmbH",
          description: `
          Der Freiberufler verfügt über ein sehr breites Spektrum technologischen Wissens.
          Als Architekt und Entwickler arbeitete er souverän mit den Konzepten objektorientierter Programmierung.
          Alle Arbeiten wurden zu unserer vollsten Zufriedenheit termingerecht fertiggestellt.
          Über die konkrete Programmieraufgabe hinaus bewies er im Rahmen seiner Tätigkeit ein sehr hohes Engagement.
          Durch ihn wurden Fehler und Verbesserungspotentiale in Anforderungen und Umsetzung aufgezeigt.
          Er unterstützte seine Kollegen auch über seinen Aufgabenbereich hinaus. Die Zusammenarbeit war sehr angenehm.
          Er war eine Bereicherung für das Projektteam.
        `,
        },
      ],
      short:
        "*Viele Projekte, viel Erfahrung. Java, Oracle & große Server.*",
      description: `
      Als Freelancer für T-Systems war ich in zahlreiche Projekte involviert:

      __Wartung__ einer mittelgroßen Eclipse-RCP-Anwendung für den internen Test-Bereich.
      Genutzte Technologien u. a.: Eclipse RCP, EMF (Eclipse Modeling Framework), Teneo/Hibernate, Oracle.
      Für bestimmte Features kam zusätzlich Low-Level JDBC zum Einsatz.

      __Erweiterung__ eines bestehenden Migrations-Frameworks (das ich in der Vergangenheit mitentwickelt hatte),
      das für die Transformation großer Datenmengen ausgelegt ist.

      __Entwicklung__ einer Eclipse-RCP-Anwendung für eine vorhandene DSL.
      Plugins wurden mit XText umgesetzt, um Autoren das Schreiben von XML abzunehmen.

      __Aufbau__ und Erweiterung eines Perl-basierten Test-Frameworks, das verteilte Ausführung auf Unix-Systemen ermöglicht.

      __Design__ und Implementierung einer performanten Datenextraktions-Anwendung:
      Lesen aus mehreren Oracle-Schemas, Aggregation und Verteilung in Dateien und andere Datenbanken;
      Verarbeitung von Millionen Datensätzen in wenigen Stunden durch sorgfältiges Design und Multithreading.

      __Entwicklung__ einer Anwendung zur Rechnungserstellung via LaTeX inkl. E-Mail-Versand (optional signiert/verschlüsselt),
      verteilt über mehrere Prozesse/Maschinen; Kommunikation via Corba; Datenhaltung in Oracle.
    `,
    },
    {
      position: "Java Trainer",
      client: "ML Consulting",
      logo: "/images/clients/ML-Consulting.svg",
      start: "2011-09-01",
      end: "2011-12-31",
      link: "https://www.mlgruppe.de/startseite.html",
      tags: ["Java", "Speaking"],
      categories: [AllowedCategories.Training],
      description: `
     Ich unterrichtete mehrere Java- und Programmier-Grundlagenkurse bei ML Consulting (Dresden und Berlin).
     Ich erhielt sehr gute Bewertungen; die Leitung wollte mich für weitere Kurse wieder einsetzen.
    `,
    },
    {
      position: "Vortrag über Scala und Lift3",
      client: "Scala Days 2013 New York",
      logo: "/images/clients/ScalaDays2013.png",
      start: "2013-06-10",
      end: "2013-06-12",
      link: "https://scaladays.org/assets/archive/ny2013/index.html",
      tags: ["Scala", "Speaking"],
      categories: [AllowedCategories.Training],
      description: `
     Ich hielt Vorträge auf Scala-Konferenzen über [Lift](https://liftweb.net) – das Scala-Web-Framework, an dem ich viele Jahre beteiligt war.
    `,
    },
    {
      position: "Vortrag über Scala und Lift3",
      client: "Scala Exchange 2013 London",
      logo: "/images/clients/ScalaExchange.png",
      start: "2013-12-02",
      end: "2013-12-03",
      link: "https://skillsmatter.com/conferences/1765-scala-exchange-2013#program",
      tags: ["Scala", "Speaking"],
      categories: [AllowedCategories.Training],
      description: `
     Ich hielt Vorträge auf Scala-Konferenzen über [Lift](https://liftweb.net) – das Scala-Web-Framework, an dem ich viele Jahre beteiligt war.
    `,
    },
    {
      position: "Autor von 'Lift Web Applications HowTo'",
      client: "Packt Publishing",
      logo: "/images/clients/LiftWebAppsHowTo.png",
      start: "2012-05-01",
      end: "2013-01-31",
      link: "https://www.packtpub.com/web-development/instant-lift-web-applications-how-instant",
      tags: ["Scala", "Authoring"],
      categories: [AllowedCategories.Publication],
      description: `
      Zusammen mit Packt Publishing schrieb ich ein kleines Buch über Lift:
      das ['Lift Web Applications HowTo'](https://www.packtpub.com/web-development/instant-lift-web-applications-how-instant).
    `,
    },
    {
      position: "Diplom",
      client: "TU Chemnitz-Zwickau, Deutschland",
      logo: "/images/clients/TU-Chemnitz-Zwickau.png",
      start: "1991-09-01",
      end: "1996-03-31",
      link: "https://www.tu-chemnitz.de/",
      tags: ["Informatik", "Datenbanken", "Algorithmen"],
      categories: [AllowedCategories.Education],
      description: `
      Ich habe nur einmal studiert – daher gibt es hier nicht viel aufzuzählen.
      Seit ich in der 8. Klasse den programmierbaren Taschenrechner bekam, wollte ich etwas mit Computern machen.

      Also begann ich das Informatikstudium an dieser Universität und schloss es 4,5 Jahre später erfolgreich ab.
      Kurz vor dem Studienende startete ich bereits bei einem großen Telekommunikationsunternehmen.
      Ich war nie ein Fan davon, einfach nur herumzusitzen …
    `,
    },
    {
      position: "Software Developer",
      client: "T-Systems GEI GmbH",
      logo: "/images/clients/T-Systems.png",
      start: "1996-03-01",
      end: "1998-04-31",
      link: "https://www.t-systems.com/de/de",
      tags: ["OS/2", "Windows NT", "C++", "PHP", "Cobol", "Java"],
      categories: [AllowedCategories.Resume],
      description: `
      Cobol-Software zur Konvertierung von Kundenrechnungen für AFP-Druck.
      Java-basierte GUI-Anwendungen zur Erstellung von Spezifikationen für Rechnungslayouts.
    `,
    },
    {
      position: "Software Developer",
      client: "G & K Datensysteme GmbH",
      logo: "/images/clients/GKSoftware.svg",
      start: "1995-04-01",
      end: "1996-04-31",
      link: "https://www.gk-software.com",
      tags: ["MS-DOS", "C", "Pascal"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      description: `
      Entwicklung von Treibern und zugehöriger Software für Kassen, Scanner und Drucker,
      die in Kombination mit der Software des Kunden im Einzelhandel eingesetzt wurden.
    `,
    },
    {
      position: "Software Developer",
      client: "Leicher GmbH",
      logo: "/images/clients/Leicher.jpg",
      start: "1994-02-01",
      end: "1994-04-31",
      link: "https://www.leicher.de/",
      tags: ["MS-DOS", "C++"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      description: `
      Entwicklung einer Konverter-Software, die zwischen dem Datanorm-Standard
      und einem kundenspezifischen Software-Standard konvertiert.
    `,
    },
    {
      position: "Software Developer",
      client: "Jahn Büroorganisation",
      logo: "/images/clients/JahnBueroorganisation.png",
      start: "1993-03-01",
      end: "1993-06-31",
      link: "https://www.jahn-gmbh.de/",
      tags: ["MS-DOS", "Pascal"],
      categories: [AllowedCategories.Client, AllowedCategories.Resume],
      description: `
      Entwicklung einer Verwaltungssoftware für Drucker/Kopierer, die der Kunde an seine Kunden vermietet.
    `,
    },
  ] as StoryData[]
)
  .map(prepareData)
  .sort(sortByDate);
