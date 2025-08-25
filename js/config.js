let respecConfig = {
  useLogo: true,
  useLabel: true,
  title: "Wijzigingsprotocol geo-standaarden",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  specType: "BD",                 // Beheer Documentatie
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  //-- TODO: vul pubDomain in
  pubDomain: "gsw",
  license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  shortName: "gsw",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2025-07-09",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2021-10-19",
  previousMaturity: "def",
  //-- TODO: de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: [
    {
      name: "Dick Krijtenburg",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },
    {
      name: "Monique van Scherpenzeel",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
  ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors: [
    {
      name: "Monique van Scherpenzeel",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
  ],
  // TODO: Vul de github URL in.
  github: "https://github.com/Geonovum/Geo-standaarden-wijzigingsprotocol",
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig.
  // - Voeg dan pas hieronder toe.
  localBiblio: 
  {
    MIM12: {
      id: "MIM12",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    }
  }
};
