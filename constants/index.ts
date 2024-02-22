export const navLinks = [
    {
      label: "Accueil",
      route: "/",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Restauration d'image",
      route: "/transformations/add/restore",
      icon: "/assets/icons/image.svg",
    },
    {
      label: "Remplissage génératif",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
    },
    {
      label: "Objet Retirer",
      route: "/transformations/add/remove",
      icon: "/assets/icons/scan.svg",
    },
    {
      label: "Recoloration d'objets",
      route: "/transformations/add/recolor",
      icon: "/assets/icons/filter.svg",
    },
    {
      label: "Suppression l'arrière-plan",
      route: "/transformations/add/removeBackground",
      icon: "/assets/icons/camera.svg",
    },
    {
      label: "Profil",
      route: "/profile",
      icon: "/assets/icons/profile.svg",
    },
    {
      label: "Acheter des crédits",
      route: "/credits",
      icon: "/assets/icons/bag.svg",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Free",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 20,
      inclusions: [
        {
          label: "20 Free Credits",
          isIncluded: true,
        },
        {
          label: "Accès de base aux services",
          isIncluded: true,
        },
        {
          label: "Soutien prioritaire à la clientèle",
          isIncluded: false,
        },
        {
          label: "Mises à jour prioritaires",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Package",
      icon: "/assets/icons/free-plan.svg",
      price: 40,
      credits: 120,
      inclusions: [
        {
          label: "120 Credits",
          isIncluded: true,
        },
        {
          label: "Plein accès aux services",
          isIncluded: true,
        },
        {
          label: "Soutien prioritaire à la clientèle",
          isIncluded: true,
        },
        {
          label: "Mises à jour prioritaires",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Premium Package",
      icon: "/assets/icons/free-plan.svg",
      price: 199,
      credits: 2000,
      inclusions: [
        {
          label: "2000 Credits",
          isIncluded: true,
        },
        {
          label: "Plein accès aux services",
          isIncluded: true,
        },
        {
          label: "Soutien prioritaire à la clientèle",
          isIncluded: true,
        },
        {
          label: "Mises à jour prioritaires",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Restaurer l'image",
      subTitle: "Affiner les images en supprimant le bruit et les imperfections",
      config: { restore: true },
      icon: "image.svg",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Supprimer l'arrière-plan",
      subTitle: "Supprime l'arriere plan à l'aide de l'IA",
      config: { removeBackground: true },
      icon: "camera.svg",
    },
    fill: {
      type: "fill",
      title: "Remplissage génératif",
      subTitle: "Améliorer les dimensions d'une image en utilisant l'IA pour extrapoler",
      config: { fillBackground: true },
      icon: "stars.svg",
    },
    remove: {
      type: "remove",
      title: "Supprimer un objet",
      subTitle: "Identifier et éliminer les objets des images",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
    },
    recolor: {
      type: "recolor",
      title: "Recolorer un objet",
      subTitle: "Identifier et recolorer les objets de l'image",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;