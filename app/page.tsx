"use client"

import type React from "react"

import { useState } from "react"
import {
  Send,
  Check,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Star,
  ChevronRight,
  ChevronLeft,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Translations object
const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      services: "Nos Services",
      quote: "Devis",
      contact: "Contact",
      switchLang: "NL",
    },
    // Hero section
    hero: {
      title: "Transformez votre intérieur avec MisterClean",
      subtitle:
        "Nettoyage à domicile de vos canapés, tapis, matelas, chaises et banquettes à Bruxelles et ses environs.",
      cta: "Demander un devis",
    },
    // Services section
    services: {
      title: "Nos Services",
      items: [
        {
          title: "Canapés",
          description:
            "Nettoyage en profondeur pour éliminer la poussière, les taches et les allergènes de vos canapés.",
        },
        {
          title: "Tapis",
          description: "Nettoyage professionnel de tapis qui élimine la saleté et rafraîchit les fibres.",
        },
        {
          title: "Matelas",
          description: "Nettoyage complet pour éliminer les acariens et les allergènes pour un meilleur sommeil.",
        },
        {
          title: "Chaises",
          description:
            "Nettoyage détaillé des chaises de salle à manger, de bureau et d'appoint pour éliminer les taches.",
        },
        {
          title: "Banquettes",
          description: "Nettoyage spécialisé pour les banquettes intérieures et extérieures.",
        },
        {
          title: "Nettoyage sur mesure",
          description: "Solutions de nettoyage adaptées pour les meubles spéciaux et les besoins uniques.",
        },
      ],
    },
    // Why choose us section
    whyUs: {
      title: "Pourquoi Choisir MisterClean?",
      points: [
        {
          title: "Professionnalisme",
          description: "Notre équipe formée et équipée assure un service de qualité à chaque fois.",
        },
        {
          title: "Efficacité",
          description: "Nous livrons des résultats visibles rapidement, en respectant votre temps et votre planning.",
        },
        {
          title: "Écologique",
          description:
            "Nous utilisons des produits respectueux de l'environnement, sans danger pour votre famille et vos animaux.",
        },
        {
          title: "Tarifs compétitifs",
          description: "Prix transparents sans frais cachés ni surprises.",
        },
      ],
      beforeAfter: {
        carpet: "Nettoyage de Tapis",
        sofa: "Nettoyage de Canapé",
        before: "Avant",
        after: "Après",
      },
    },
    // Quote form section
    quoteForm: {
      title: "Demandez votre devis gratuit",
      subtitle:
        "Faites nettoyer vos meubles sans tracas. Remplissez le formulaire ci-dessous et obtenez un devis personnalisé.",
      firstName: "Prénom",
      lastName: "Nom",
      phone: "Numéro de téléphone",
      email: "Adresse e-mail",
      service: "Type de service",
      selectService: "Sélectionnez un service",
      services: {
        sofa: "Nettoyage de canapé",
        carpet: "Nettoyage de tapis",
        mattress: "Nettoyage de matelas",
        chair: "Nettoyage de chaise",
        bench: "Nettoyage de banquette",
        custom: "Nettoyage personnalisé",
      },
      carpetWidth: "Largeur du tapis (mètres)",
      carpetLength: "Longueur du tapis (mètres)",
      details: "Détails supplémentaires",
      detailsPlaceholder: "Dites-nous en plus sur vos besoins de nettoyage...",
      attachPhotos: "Joindre des photos (Max 5)",
      selectPhotos: "Sélectionner des photos",
      uploadPrompt: "Téléchargez des photos des articles à nettoyer",
      photosSelected: (count) =>
        `${count} photo${count !== 1 ? "s" : ""} sélectionnée${count !== 1 ? "s" : ""} (${5 - count} restante${5 - count !== 1 ? "s" : ""})`,
      preview: "Aperçu",
      submit: "Envoyer ma demande via WhatsApp",
      success: {
        title: "Merci !",
        message: "Votre demande de devis a été soumise. Nous vous contacterons rapidement.",
      },
      errors: {
        requiredFields: "Veuillez remplir tous les champs obligatoires",
        invalidEmail: "Veuillez entrer une adresse e-mail valide",
      },
    },
    // Testimonials section
    testimonials: {
      title: "Ce que disent nos clients",
      googleReviews: "Voir tous nos avis Google",
      items: [
        {
          name: "Sophie",
          location: "Bruxelles",
          text: "Service rapide et professionnel ! Mon canapé n'a jamais été aussi propre.",
        },
        {
          name: "Marc",
          location: "Bruxelles",
          text: "Excellent service. L'équipe était ponctuelle et très minutieuse avec notre nettoyage de tapis.",
        },
        {
          name: "Julie",
          location: "Bruxelles",
          text: "J'ai été impressionnée par la transformation de notre vieux matelas. Il a l'air et se sent comme neuf !",
        },
      ],
    },
    // Call to action section
    cta: {
      title: "Prêt à faire briller votre intérieur ?",
      subtitle: "Demandez un devis maintenant et bénéficiez de notre expertise.",
      button: "Demander un devis",
    },
    // Footer
    footer: {
      description:
        "Services professionnels de nettoyage pour canapés, tapis, matelas, chaises et banquettes à Bruxelles et ses environs.",
      contact: "Contactez-nous",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
  },
  nl: {
    // Navigation
    nav: {
      home: "Home",
      services: "Onze Diensten",
      quote: "Offerte",
      contact: "Contact",
      switchLang: "FR",
    },
    // Hero section
    hero: {
      title: "Transformeer uw interieur met MisterClean",
      subtitle: "Thuisreiniging van uw sofa's, tapijten, matrassen, stoelen en banken in Brussel en omgeving.",
      cta: "Vraag een offerte aan",
    },
    // Services section
    services: {
      title: "Onze Diensten",
      items: [
        {
          title: "Sofa's",
          description: "Dieptereiniging om stof, vlekken en allergenen uit uw sofa's te verwijderen.",
        },
        {
          title: "Tapijten",
          description: "Professionele tapijtreiniging die diep vuil verwijdert en de vezels verfrist.",
        },
        {
          title: "Matrassen",
          description: "Grondige reiniging om huisstofmijt en allergenen te elimineren voor een betere slaap.",
        },
        {
          title: "Stoelen",
          description: "Gedetailleerde reiniging van eetkamer-, kantoor- en bijzetstoel om vlekken te verwijderen.",
        },
        {
          title: "Banken",
          description: "Gespecialiseerde reiniging voor binnen- en buitenbanken en zitplaatsen.",
        },
        {
          title: "Aangepaste reiniging",
          description: "Op maat gemaakte reinigingsoplossingen voor speciaal meubilair en unieke vereisten.",
        },
      ],
    },
    // Why choose us section
    whyUs: {
      title: "Waarom Kiezen voor MisterClean?",
      points: [
        {
          title: "Professionalisme",
          description: "Ons opgeleide en uitgeruste team zorgt elke keer voor een kwaliteitsservice.",
        },
        {
          title: "Efficiëntie",
          description: "We leveren snel zichtbare resultaten, met respect voor uw tijd en planning.",
        },
        {
          title: "Ecologisch",
          description: "We gebruiken milieuvriendelijke producten die veilig zijn voor uw gezin en huisdieren.",
        },
        {
          title: "Concurrerende tarieven",
          description: "Transparante prijzen zonder verborgen kosten of verrassingen.",
        },
      ],
      beforeAfter: {
        carpet: "Tapijtreiniging",
        sofa: "Sofareiniging",
        before: "Voor",
        after: "Na",
      },
    },
    // Quote form section
    quoteForm: {
      title: "Vraag uw gratis offerte aan",
      subtitle:
        "Laat uw meubels zonder gedoe reinigen. Vul het onderstaande formulier in en ontvang een gepersonaliseerde offerte.",
      firstName: "Voornaam",
      lastName: "Achternaam",
      phone: "Telefoonnummer",
      email: "E-mailadres",
      service: "Type dienst",
      selectService: "Selecteer een dienst",
      services: {
        sofa: "Sofareiniging",
        carpet: "Tapijtreiniging",
        mattress: "Matrasreiniging",
        chair: "Stoelreiniging",
        bench: "Bankreiniging",
        custom: "Aangepaste reiniging",
      },
      carpetWidth: "Tapijt breedte (meters)",
      carpetLength: "Tapijt lengte (meters)",
      details: "Extra details",
      detailsPlaceholder: "Vertel ons meer over uw reinigingsbehoeften...",
      attachPhotos: "Foto's bijvoegen (Max 5)",
      selectPhotos: "Selecteer foto's",
      uploadPrompt: "Upload foto's van de te reinigen items",
      photosSelected: (count) => `${count} foto${count !== 1 ? "'s" : ""} geselecteerd (${5 - count} resterend)`,
      preview: "Voorbeeld",
      submit: "Verstuur mijn aanvraag via WhatsApp",
      success: {
        title: "Bedankt!",
        message: "Uw offerteaanvraag is ingediend. We nemen spoedig contact met u op.",
      },
      errors: {
        requiredFields: "Vul alle verplichte velden in",
        invalidEmail: "Voer een geldig e-mailadres in",
      },
    },
    // Testimonials section
    testimonials: {
      title: "Wat onze klanten zeggen",
      googleReviews: "Bekijk al onze Google-recensies",
      items: [
        {
          name: "Sophie",
          location: "Brussel",
          text: "Snelle, professionele service! Mijn sofa is nog nooit zo schoon geweest.",
        },
        {
          name: "Marc",
          location: "Brussel",
          text: "Uitstekende service. Het team was stipt en zeer grondig met onze tapijtreiniging.",
        },
        {
          name: "Julie",
          location: "Brussel",
          text: "Ik was verbaasd over hoe ze onze oude matras hebben getransformeerd. Het ziet eruit en voelt als nieuw!",
        },
      ],
    },
    // Call to action section
    cta: {
      title: "Klaar om uw interieur te laten schitteren?",
      subtitle: "Vraag nu een offerte aan en profiteer van onze expertise.",
      button: "Vraag een offerte aan",
    },
    // Footer
    footer: {
      description:
        "Professionele reinigingsdiensten voor sofa's, tapijten, matrassen, stoelen en banken in Brussel en omgeving.",
      contact: "Contacteer ons",
      followUs: "Volg ons",
      rights: "Alle rechten voorbehouden.",
      privacy: "Privacybeleid",
      terms: "Gebruiksvoorwaarden",
    },
  },
}

export default function Home() {
  // Language state
  const [language, setLanguage] = useState<"fr" | "nl">("fr")
  const t = translations[language]

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "nl" : "fr")
  }

  // State for before/after slider
  const [sliderValue, setSliderValue] = useState(50)
  const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0)
  const beforeAfterSets = [
    { before: "/before.jpg", after: "/after.jpg", title: t.whyUs.beforeAfter.carpet },
    { before: "/before2.jpg", after: "/after2.jpg", title: t.whyUs.beforeAfter.sofa },
  ]

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    carpetWidth: "",
    carpetLength: "",
    message: "",
  })

  // File upload state
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [filePreviewUrls, setFilePreviewUrls] = useState<string[]>([])

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle file uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const filesToAdd = filesArray.slice(0, 5)
      setSelectedFiles((prev) => [...prev, ...filesToAdd])
      const newPreviewUrls = filesToAdd.map((file) => URL.createObjectURL(file))
      setFilePreviewUrls((prev) => [...prev, ...newPreviewUrls])
    }
  }

  // Remove a file
  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
    URL.revokeObjectURL(filePreviewUrls[index])
    setFilePreviewUrls((prev) => prev.filter((_, i) => i !== index))
  }

  // Navigate between before/after sets
  const nextBeforeAfter = () => {
    setCurrentBeforeAfter((prev) => (prev + 1) % beforeAfterSets.length)
  }

  const prevBeforeAfter = () => {
    setCurrentBeforeAfter((prev) => (prev - 1 + beforeAfterSets.length) % beforeAfterSets.length)
  }

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      setFormError(t.quoteForm.errors.requiredFields)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      setFormError(t.quoteForm.errors.invalidEmail)
      return
    }

    // Create WhatsApp message
    let message = `*${language === "fr" ? "Demande de devis depuis le site MisterClean" : "Offerteaanvraag van MisterClean website"}*\n\n`
    message += `*${language === "fr" ? "Nom" : "Naam"}:* ${formData.firstName} ${formData.lastName}\n`
    message += `*${language === "fr" ? "Téléphone" : "Telefoon"}:* ${formData.phone}\n`
    message += `*Email:* ${formData.email}\n`
    message += `*${language === "fr" ? "Service" : "Dienst"}:* ${formData.service}\n`

    // Add carpet dimensions if applicable
    if (formData.service === "carpet" && formData.carpetWidth && formData.carpetLength) {
      message += `*${language === "fr" ? "Dimensions du tapis" : "Tapijt afmetingen"}:* ${formData.carpetWidth}m x ${formData.carpetLength}m\n`
    }

    // Add message if provided
    if (formData.message) {
      message += `*${language === "fr" ? "Détails supplémentaires" : "Extra details"}:* ${formData.message}\n`
    }

    // Add note about attached photos
    if (selectedFiles.length > 0) {
      message += `\n*${selectedFiles.length} ${language === "fr" ? "photo(s) seront envoyées séparément" : "foto('s) worden apart verzonden"}*`
    }

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/32488568259?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    console.log("Form submitted:", formData)
    console.log("Files:", selectedFiles)

    setFormError("")
    setFormSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        carpetWidth: "",
        carpetLength: "",
        message: "",
      })
      setSelectedFiles([])
      setFilePreviewUrls([])
    }, 3000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0077b6] text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/misterclean-logo.png" alt="MisterClean Logo" width={40} height={40} className="object-cover" />
          </div>
          <span className="font-bold text-xl">MisterClean</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="hover:text-[#90e0ef] transition-colors">
            {t.nav.home}
          </Link>
          <Link href="#services" className="hover:text-[#90e0ef] transition-colors">
            {t.nav.services}
          </Link>
          <Link href="#quote" className="hover:text-[#90e0ef] transition-colors">
            {t.nav.quote}
          </Link>
          <Link href="#contact" className="hover:text-[#90e0ef] transition-colors">
            {t.nav.contact}
          </Link>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 bg-white text-[#0077b6] px-3 py-1 rounded-md hover:bg-[#90e0ef] transition-colors"
          >
            <Globe className="h-4 w-4" />
            <span>{t.nav.switchLang}</span>
          </button>
        </nav>
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 bg-white text-[#0077b6] px-2 py-1 rounded-md hover:bg-[#90e0ef] transition-colors mr-2"
          >
            <Globe className="h-3 w-3" />
            <span className="text-sm">{t.nav.switchLang}</span>
          </button>
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#03045e] text-white py-20 px-6">
          <div className="absolute inset-0 opacity-20">
            <Image src="/living-room-2155376.jpg" alt="Mobilier de maison propre" fill className="object-cover" />
          </div>
          <div className="container mx-auto relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">{t.hero.subtitle}</p>
            <a
              href="#quote"
              className="inline-block bg-[#0077b6] hover:bg-[#90e0ef] hover:text-[#03045e] transition-colors text-white font-bold py-3 px-8 rounded-lg text-lg"
            >
              {t.hero.cta}
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-6 bg-[#caf0f8]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#03045e]">{t.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.items.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#0077b6] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-[#03045e]">{service.title}</h3>
                  <p className="text-[#7d8597] text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#03045e]">{t.whyUs.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <ul className="space-y-6">
                  {t.whyUs.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0">
                        <Check className="h-5 w-5 text-[#0077b6]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#03045e]">{point.title}</h3>
                        <p className="text-[#7d8597]">{point.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before/After Slider */}
              <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="absolute top-4 left-0 right-0 text-center font-bold text-lg text-[#03045e] bg-white/80 py-2 z-10">
                    {beforeAfterSets[currentBeforeAfter].title}
                  </h3>

                  <div className="relative w-full h-full overflow-hidden">
                    {/* After Image (Full) */}
                    <div className="absolute inset-0">
                      <Image
                        src={beforeAfterSets[currentBeforeAfter].after || "/placeholder.svg"}
                        alt={t.whyUs.beforeAfter.after}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Before Image (Partial, controlled by slider) */}
                    <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderValue}%` }}>
                      <Image
                        src={beforeAfterSets[currentBeforeAfter].before || "/placeholder.svg"}
                        alt={t.whyUs.beforeAfter.before}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-y-0 right-0 w-1 bg-white"></div>
                    </div>

                    {/* Slider Control */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number.parseInt(e.target.value))}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 z-10"
                    />

                    {/* Labels */}
                    <div className="absolute bottom-12 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {t.whyUs.beforeAfter.before}
                    </div>
                    <div className="absolute bottom-12 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {t.whyUs.beforeAfter.after}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevBeforeAfter}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
                  >
                    <ChevronLeft className="h-6 w-6 text-[#03045e]" />
                  </button>
                  <button
                    onClick={nextBeforeAfter}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
                  >
                    <ChevronRight className="h-6 w-6 text-[#03045e]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="py-16 px-6 bg-[#0077b6] text-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.quoteForm.title}</h2>
            <p className="text-center mb-8 text-lg">{t.quoteForm.subtitle}</p>

            {formSubmitted ? (
              <div className="bg-white text-[#03045e] p-8 rounded-lg shadow-lg text-center">
                <Check className="h-16 w-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-2xl font-bold mb-2">{t.quoteForm.success.title}</h3>
                <p className="text-[#7d8597]">{t.quoteForm.success.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white text-[#03045e] p-8 rounded-lg shadow-lg">
                {formError && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">{formError}</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-medium">
                      {t.quoteForm.firstName} *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-medium">
                      {t.quoteForm.lastName} *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      {t.quoteForm.phone} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      {t.quoteForm.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block mb-2 font-medium">
                    {t.quoteForm.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                  >
                    <option value="">{t.quoteForm.selectService}</option>
                    <option value="sofa">{t.quoteForm.services.sofa}</option>
                    <option value="carpet">{t.quoteForm.services.carpet}</option>
                    <option value="mattress">{t.quoteForm.services.mattress}</option>
                    <option value="chair">{t.quoteForm.services.chair}</option>
                    <option value="bench">{t.quoteForm.services.bench}</option>
                    <option value="custom">{t.quoteForm.services.custom}</option>
                  </select>
                </div>

                {/* Conditional carpet dimensions fields */}
                {formData.service === "carpet" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="carpetWidth" className="block mb-2 font-medium">
                        {t.quoteForm.carpetWidth}
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        id="carpetWidth"
                        name="carpetWidth"
                        value={formData.carpetWidth}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                      />
                    </div>
                    <div>
                      <label htmlFor="carpetLength" className="block mb-2 font-medium">
                        {t.quoteForm.carpetLength}
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        id="carpetLength"
                        name="carpetLength"
                        value={formData.carpetLength}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                      />
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    {t.quoteForm.details}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                    placeholder={t.quoteForm.detailsPlaceholder}
                  ></textarea>
                </div>

                {/* File upload section */}
                <div className="mb-6">
                  <label className="block mb-2 font-medium">{t.quoteForm.attachPhotos}</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <input
                      type="file"
                      id="photos"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={selectedFiles.length >= 5}
                    />
                    <label
                      htmlFor="photos"
                      className={`cursor-pointer inline-block px-4 py-2 bg-[#0077b6] text-white rounded-lg hover:bg-[#90e0ef] hover:text-[#03045e] transition-colors ${selectedFiles.length >= 5 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {t.quoteForm.selectPhotos}
                    </label>
                    <p className="text-sm text-[#7d8597] mt-2">
                      {selectedFiles.length === 0
                        ? t.quoteForm.uploadPrompt
                        : t.quoteForm.photosSelected(selectedFiles.length)}
                    </p>
                  </div>

                  {/* Preview selected files */}
                  {filePreviewUrls.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {filePreviewUrls.map((url, index) => (
                        <div key={index} className="relative">
                          <img
                            src={url || "/placeholder.svg"}
                            alt={`${t.quoteForm.preview} ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0077b6] hover:bg-[#90e0ef] hover:text-[#03045e] transition-colors text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t.quoteForm.submit}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 bg-[#caf0f8]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#03045e]">{t.testimonials.title}</h2>

            {/* Google Reviews Link */}
            <div className="text-center mb-12">
              <a
                href="https://www.google.com/search?udm=1&q=MISTER%20CLEAN%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2tDSzMDAztzQwMzU2MLc0Nzcx38DI-IpR0NczOMQ1SMHZx9XRT8GxLLN4ESumGACuaHGEQgAAAA&rldimm=1968067906530797747&tbm=lcl&client=opera-gx&cs=1&hl=fr&sa=X&ved=0CCAQ9fQKKABqFwoTCNDEisG4oIwDFQAAAAAdAAAAABAG&biw=1358&bih=646&dpr=1.38#lkt=LocalPoiReviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0077b6] px-4 py-2 rounded-lg shadow-md hover:bg-[#0077b6] hover:text-white transition-colors"
              >
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>{t.testimonials.googleReviews}</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.items.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0077b6] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#03045e]">{testimonial.name}</h3>
                      <p className="text-sm text-[#7d8597]">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-[#7d8597] italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-[#03045e] text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8">{t.cta.subtitle}</p>
            <a
              href="#quote"
              className="inline-block bg-[#0077b6] hover:bg-[#90e0ef] hover:text-[#03045e] transition-colors text-white font-bold py-3 px-8 rounded-lg text-lg"
            >
              {t.cta.button}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#03045e] text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/misterclean-logo.png"
                    alt="MisterClean Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="font-bold text-xl">MisterClean</span>
              </div>
              <p className="text-sm text-[#90e0ef] mb-4">{t.footer.description}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-[#90e0ef]" />
                  <span>Bruxelles</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#90e0ef]" />
                  <span>+32 488 56 82 59</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-[#90e0ef]" />
                  <span>misterclean.bx@gmail.com</span>
                </li>
              </ul>

              <h3 className="font-bold text-lg mt-6 mb-4">{t.footer.followUs}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/misterclean.bx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#90e0ef] transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/misterclean.bx/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#90e0ef] transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#0077b6] mt-8 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} MisterClean. {t.footer.rights}
            </p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-[#90e0ef] hover:underline">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-[#90e0ef] hover:underline">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

