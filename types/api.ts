export interface JuryDetail {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  website: string | null;
  city: string;
  country: string;
}

export interface Location {
  city: string;
  venue: string;
  country: string;
}

export interface GalleryItem {
  price: string;
  book_title: string;
  author_name: string;
  redirect_link: string;
  book_image_url: string;
}

export interface TabContent {
  key: string;
  value: string;
}

export interface EventDetail {
  id: string;
  jury_details: JuryDetail[];
  organization_name: string;
  application_form_name: string;
  application_form_description: string;
  thumbnail_url: string;
  banner_content: string;
  call_tagline: string;
  call_title: string;
  slug: string;
  location: Location;
  eligibility: string;
  categories: string[];
  awards: string;
  prizes: string;
  gallery: GalleryItem[];
  tabs_content: TabContent[];
  announcer: string;
  event_deadline: string;
  submission_deadline: string;
  event_date: string;
  status: string;
  color_code: string;
  type: string;
  result_announcement: boolean;
  jury: string;
  created_at: string;
  updated_at: string;
  create_announcement: boolean;
  email_content: string | null;
  view_count: number;
  event_type: string;
  final_submission_deadline: string | null;
  type_content: Record<string, any>;
  post_result_email_sent: boolean;
  form: string;
}

export interface CoverArtist {
  name: string;
  title: string;
  images: string[];
  location: string;
  cover_photo: string;
  description: string;
  profile_link: string;
  social_links: {
    youtube?: string;
    facebook?: string;
    instagram?: string;
  };
  profile_photo: string;
}

export interface Winner {
  name: string;
  title: string;
  images: string[];
  location: string;
  description: string;
  profile_link: string;
  social_links: {
    facebook?: string;
    instagram?: string;
  };
  trophy_image: string;
  profile_photo: string;
}

export interface RunnerUp {
  name: string;
  title: string;
  images: string[];
  location: string;
  description: string;
  profile_link: string;
  social_links: {
    facebook?: string;
    instagram?: string;
  };
  trophy_image: string;
  profile_photo: string;
}

export interface AwardWinner {
  name: string;
  title: string;
  images: string[];
  location: string;
  description: string;
  profile_link: string;
  social_links: {
    facebook?: string;
    instagram?: string;
  };
  trophy_image: string;
  profile_photo: string;
}

export interface BookSponser {
  link: string;
  image: string;
  title: string;
  images: string[];
  description: string;
}

export interface BookDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  images: string[];
  link: string[];
  tags: string[];
  event: string;
  created_at: string;
  updated_at: string;
  cover_artist: CoverArtist;
  winner: Winner;
  runner_up: RunnerUp;
  award_winners: AwardWinner[];
  book_sponsers: BookSponser[];
}

export interface SelectedArtwork {
  image_url: string;
  image_title: string;
  year_created: string;
  material_used: string;
  image_dimensions: string;
  image_description: string;
}

export interface SelectedArtist {
  username: string;
  first_name: string;
  last_name: string;
  preferred_pronouns: string;
  city: string;
  country: string;
  phone_number: string;
  website: string;
  profile_picture: string;
  artistic_skills: string[];
  technical_skills: string[];
  selected_artwork: SelectedArtwork[];
  social_media_links: {
    twitter?: string;
    youtube?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    pinterest?: string;
  };
  form_response: {
    dob: string;
    zip: string;
    email: string;
    phone: string;
    state: string;
    gender: string;
    address: string;
    country: string;
    website: string;
    headshot: string;
    instagram: string;
    last_name: string;
    artist_bio: string;
    first_name: string;
    social_media: {
      linkedin?: string;
      instagram?: string;
    };
    upload_image: {
      url: string;
      file: Record<string, any>;
    };
    artist_statement: string;
  };
}

export interface ApiResponse {
  status: number;
  message: string;
  count: number;
  next: string | null;
  previous: string | null;
  data: {
    event_detail: EventDetail;
    book_detail: BookDetail[];
    selected_artist: SelectedArtist[];
  };
}