import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const problems = [
    {
      icon: 'fas fa-phone-slash',
      title: 'Verpasste Anrufe nach Feierabend',
      description: 'Das Problem: Jeder nicht angenommene Anruf nach 18 Uhr bedeutet potenziell einen verlorenen Neupatienten. Studien zeigen, dass 70% der Patienten bei nicht erreichter Zahnarztpraxis direkt zur Konkurrenz weiterwählen.'
    },
    {
      icon: 'fas fa-users',
      title: 'Chronische Personalengpässe',
      description: 'Das Problem: Ihr bestens ausgebildetes Rezeptionsteam ist dauerhaft überlastet mit repetitiven Telefonaten zu Standardfragen, Öffnungszeiten und einfachen Terminanfragen.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Lange Wartezeiten für Rückrufe',
      description: 'Das Problem: Neue Patienten müssen oft tagelang auf Rückrufe warten - in Zeiten von Sofort-Service eine fatale Erfahrung. Jeder Tag Wartezeit reduziert Ihre Konversionsrate um bis zu 30%.'
    },
    {
      icon: 'fas fa-calendar-times',
      title: 'Unbemerkte Terminabsagen',
      description: 'Das Problem: Absagen auf dem Anrufbeantworter bleiben häufig stundenlang unbemerkt. Wertvolle Behandlungstermine bleiben ungenutzt, während andere Patienten wochenlang warten müssen.'
    },
    {
      icon: 'fas fa-language',
      title: 'Sprachbarrieren',
      description: 'Das Problem: In multilingualen Städten gehen wertvolle Patientenpotenziale verloren, weil Anfragen auf Türkisch, Arabisch oder anderen Sprachen nicht professionell bearbeitet werden können.'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Termin-Chaos',
      description: 'Das Problem: Manuelle Terminverwaltung führt zu Doppelbuchungen und Terminkollisionen. Die Folge: gestresste Teams, verärgerte Patienten und Imageschaden.'
    },
    {
      icon: 'fas fa-user-times',
      title: 'Hohe Ausfallquote',
      description: 'Das Problem: Ohne systematische Erinnerungen liegt die Ausfallquote bei 15-20%. Das sind täglich mehrere ungenutzte Behandlungseinheiten bei gleichzeitig vollen Wartelisten.'
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Ineffiziente Zeitverteilung',
      description: 'Das Problem: Ihr Fachpersonal verbringt 60-70% der Arbeitszeit mit einfachen Telefonaten statt mit wertschöpfender Patientenbetreuung. Sie zahlen Fachpersonal-Gehälter für Telefondienst.'
    },
    {
      icon: 'fas fa-exclamation-circle',
      title: 'Verlorene Dringlichkeitstermine',
      description: 'Das Problem: Patienten mit akuten Zahnschmerzen rufen mehrere Zahnarztpraxen an und wählen die erste, die sofort antwortet. Wenn Ihr Telefon besetzt ist, gehen diese wertvollen Notfall- und Akutpatienten unwiderruflich verloren.'
    }
  ]

  const solutionFeatures = [
    { icon: 'fas fa-bolt', title: 'Sofortige Antworten auf alle Patientenanfragen', gradient: 'bg-gradient-blue' },
    { icon: 'fas fa-calendar-check', title: 'Automatische Terminbuchungen rund um die Uhr', gradient: 'bg-gradient-teal' },
    { icon: 'fas fa-stethoscope', title: 'Tiefes Zahnmedizin-Fachwissen und Behandlungserklärungen', gradient: 'bg-gradient-purple' },
    { icon: 'fas fa-user-friends', title: 'Komplette Entlastung Ihres Zahnarztpraxisteams', gradient: 'bg-gradient-orange' },
    { icon: 'fas fa-clock', title: 'Mehr Zeit für hochwertige Patientenbehandlung', gradient: 'bg-gradient-pink' },
    { icon: 'fas fa-globe', title: 'Mehrsprachige Kommunikation (100+ Sprachen)', gradient: 'bg-gradient-blue' },
    { icon: 'fas fa-exclamation-triangle', title: 'Intelligente Triage und Notfall-Weiterleitung', gradient: 'bg-gradient-teal' },
    { icon: 'fas fa-bell', title: 'Automatische Patientenerinnerungen', gradient: 'bg-gradient-purple' },
    { icon: 'fas fa-plug', title: 'Integration mit bestehenden Zahnarztpraxissystemen', gradient: 'bg-gradient-orange' },
    { icon: 'fas fa-brain', title: 'Lernfähige AI - passt sich Ihrer Zahnarztpraxis an', gradient: 'bg-gradient-pink' },
    { icon: 'fas fa-phone-alt', title: 'Nachverfolgung verpasster Anrufe', gradient: 'bg-gradient-blue' },
    { icon: 'fas fa-star', title: 'Automatische Zahnarztpraxis-Bewertungen sammeln', gradient: 'bg-gradient-teal' }
  ]

  const mainFeatures = [
    {
      icon: 'fas fa-clock',
      title: '24/7 Erreichbarkeit',
      description: 'Beantwortet Anrufe und Chats rund um die Uhr, auch nachts und am Wochenende. Ihre Patienten erreichen Sie immer.'
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Intelligente Terminverwaltung',
      description: 'Bucht, ändert und bestätigt Termine automatisch - Integration mit Ihrem bestehenden Kalender- und Zahnarztpraxissystem.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Vollständig Mehrsprachig',
      description: 'Kommuniziert perfekt in jeder Sprache - Deutsch, Englisch, Türkisch, Arabisch, Russisch, Polnisch und über 100 weitere Sprachen für maximale Patientenreichweite.'
    },
    {
      icon: 'fas fa-brain',
      title: 'KI-gestützte Triage',
      description: 'Erkennt Notfälle automatisch und leitet diese sofort an das richtige Personal weiter. Kategorisiert Anfragen nach Dringlichkeit.'
    },
    {
      icon: 'fas fa-tooth',
      title: 'Zahnmedizin-Expertise',
      description: 'Umfassendes Fachwissen zu allen zahnmedizinischen Behandlungen, Prophylaxe und Nachsorge. Erklärt komplexe Behandlungen verständlich.'
    },
    {
      icon: 'fas fa-bell',
      title: 'Automatische Erinnerungen',
      description: 'Sendet Terminerinnerungen per SMS, E-Mail oder Anruf. Reduziert die Ausfallquote um bis zu 80% und optimiert Ihre Kapazitätsauslastung.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div>
      {/* Problems Section */}
      <section className="py-20 bg-neutral-light" id="probleme">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Kennen Sie diese Probleme in Ihrer Zahnarztpraxis?</h2>
            <p>Diese typischen Herausforderungen kosten Sie täglich Patienten und Umsatz</p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-blue transition-all duration-300 group-hover:h-full"></div>
                <div className="relative z-10">
                  <i className={`${problem.icon} text-4xl gradient-text mb-6 block`}></i>
                  <h3 className="text-xl font-semibold mb-4 text-neutral-dark">{problem.title}</h3>
                  <p className="text-neutral-text leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white" id="loesung">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Die Lösung: Ihr intelligenter Zahnarztpraxis-Assistent
            </h2>
            <p className="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
              Unser KI-Agent mit tiefem Zahnmedizin-Fachwissen übernimmt sofort alle Patientenanfragen - 
              telefonisch und per Chat auf Ihrer Website.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center group relative overflow-hidden"
              >
                <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <i className={`${feature.icon} text-3xl mb-4 block ${feature.gradient} bg-clip-text text-transparent`}></i>
                  <h3 className="font-semibold text-neutral-dark leading-tight">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-neutral-light" id="funktionen">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Alles, was Ihre Zahnarztpraxis braucht</h2>
            <p>Umfassende KI-Funktionen für moderne Zahnarztpraxen</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                className="card group text-center"
              >
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-dark">{feature.title}</h3>
                <p className="text-neutral-text leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Features