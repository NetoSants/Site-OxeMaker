export interface EventGeneralInfo {
  name: string;
  shortName: string;
  edition: string;
  year: number;
  tagline: string;
  theme2026: string;
  organizer: string;
  organizerFullName: string;
  dates: {
    display: string;
    day1: string;
    day2: string;
    isoStartDate: string; // "2026-07-02T09:00:00-03:00"
    isoEndDate: string;
    timeRange: string;
  };
  location: {
    venue: string;
    space: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    referencePoints: string[];
    transitTips: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    email: string;
    instagram: string;
    youtube: string;
    phone: string;
  };
  links: {
    generalRegistration: string;
    tournamentRegistration: string;
    geekRegistration: string;
    oxethonRegistration: string;
    workshopRegistration: string;
    volunteerRegistration: string;
    schoolCaravanRegistration: string;
    generalEditalPdf: string;
  };
}

export interface MetricProof {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  link: string;
  tag: string;
  accentColor: 'yellow' | 'cyan' | 'blue';
}

export interface ScheduleItem {
  id: string;
  day: 'day1' | 'day2';
  time: string;
  title: string;
  description: string;
  category: 'robotica' | 'oficinas' | 'geek' | 'palestras' | 'cerimonia';
  location: string;
  speakerOrHost?: string;
}

export interface RoboticsTournament {
  id: string;
  name: string;
  category: string;
  description: string;
  requirements: string[];
  arenaDetails: string;
  maxTeamSize: number;
  scheduleTime: string;
  editalPdfUrl: string;
  registrationUrl: string;
  prizeSummary: string;
  icon: string;
}

export interface GeekCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  criteria: string[];
  rulesHighlight: string[];
  scheduleTime: string;
  stage: string;
  registrationUrl: string;
  rulesPdfUrl: string;
  prizes: string;
}

export interface Workshop {
  id: string;
  title: string;
  instructor: {
    name: string;
    role: string;
    institution: string;
    bio: string;
  };
  schedule: string;
  duration: string;
  capacity: number;
  room: string;
  targetAudience: string;
  prerequisites: string;
  description: string;
  materialsProvided: string[];
  registrationUrl: string;
}

export interface OxethonTrack {
  id: string;
  number: string;
  title: string;
  problemStatement: string;
  expectedDeliverable: string;
  focusArea: string;
}

export interface OxethonInfo {
  title: string;
  durationHours: number;
  theme: string;
  description: string;
  registrationDeadline: string;
  maxTeams: number;
  teamSize: string;
  stages: {
    phase: string;
    time: string;
    description: string;
  }[];
  tracks: OxethonTrack[];
  prizes: {
    place: string;
    reward: string;
    perks: string;
  }[];
  regulationsSummary: string[];
}

export interface TimelineMilestone {
  year: number;
  edition: string;
  title: string;
  description: string;
  stats: string;
}

export interface FounderTribute {
  name: string;
  role: string;
  title: string;
  quote: string;
  bio: string[];
  imagePlaceholder: string;
}

export interface SponsorTier {
  tierName: string;
  description: string;
  sponsors: {
    name: string;
    role: string;
    logoAlt: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  year: number;
  category: 'competicoes' | 'projetos' | 'oficinas' | 'geek';
  description: string;
  caption: string;
}
