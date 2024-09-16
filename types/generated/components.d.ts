import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'MetaData';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface LayoutTopNav extends Schema.Component {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
    description: '';
  };
  attributes: {
    logoLink: Attribute.Component<'element.logo-link'>;
    link: Attribute.Component<'element.link', true>;
  };
}

export interface LayoutTheFooter extends Schema.Component {
  collectionName: 'components_layout_the_footers';
  info: {
    displayName: 'TheFooter';
  };
  attributes: {};
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Logo: Attribute.Component<'element.logo-link'>;
    Addresses: Attribute.Component<'element.adress', true>;
  };
}

export interface ElementSocialMedia extends Schema.Component {
  collectionName: 'components_element_social_medias';
  info: {
    displayName: 'SocialMedia';
    icon: 'layout';
  };
  attributes: {
    socialMediaIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Text;
  };
}

export interface ElementSingleInput extends Schema.Component {
  collectionName: 'components_element_single_inputs';
  info: {
    displayName: 'SingleInput';
    description: '';
  };
  attributes: {
    inputText: Attribute.String;
  };
}

export interface ElementPriceCard extends Schema.Component {
  collectionName: 'components_element_price_cards';
  info: {
    displayName: 'PriceCard';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementPartner extends Schema.Component {
  collectionName: 'components_element_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    companyName: Attribute.String;
    companyLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementLogoLink extends Schema.Component {
  collectionName: 'components_element_logo_links';
  info: {
    displayName: 'Logo link';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface ElementLink extends Schema.Component {
  collectionName: 'components_element_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementCard extends Schema.Component {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface ElementButtonLink extends Schema.Component {
  collectionName: 'components_element_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY', 'SUCCESS']>;
  };
}

export interface ElementAdress extends Schema.Component {
  collectionName: 'components_element_adresses';
  info: {
    displayName: 'Adress';
  };
  attributes: {
    Location: Attribute.String;
    phisicalAddress: Attribute.String;
    phone: Attribute.String;
    email: Attribute.String;
  };
}

export interface BlocksTestimonies extends Schema.Component {
  collectionName: 'components_blocks_testimonies';
  info: {
    displayName: 'Testimonies';
  };
  attributes: {};
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksSocialMedia extends Schema.Component {
  collectionName: 'components_blocks_social_medias';
  info: {
    displayName: 'SocialMedia';
  };
  attributes: {
    Linkedin: Attribute.String;
    x: Attribute.String;
    youtube: Attribute.String;
    instagram: Attribute.String;
    facebook: Attribute.String;
  };
}

export interface BlocksServices extends Schema.Component {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BlocksServiceBlock extends Schema.Component {
  collectionName: 'components_blocks_service_blocks';
  info: {
    displayName: 'ServiceBlock';
    description: '';
  };
  attributes: {
    serviceElement: Attribute.Component<'element.single-input', true>;
    heading: Attribute.String;
    serviceImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'element.card', true>;
  };
}

export interface BlocksPartners extends Schema.Component {
  collectionName: 'components_blocks_partners';
  info: {
    displayName: 'Partners';
    description: '';
  };
  attributes: {};
}

export interface BlocksPartnerNote extends Schema.Component {
  collectionName: 'components_blocks_partner_notes';
  info: {
    displayName: 'PartnerNote';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksPartnerHeading extends Schema.Component {
  collectionName: 'components_blocks_partner_headings';
  info: {
    displayName: 'PartnerHeading';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'element.button-link'>;
    image: Attribute.Media<'images'>;
  };
}

export interface BlocksFoterNote extends Schema.Component {
  collectionName: 'components_blocks_foter_notes';
  info: {
    displayName: 'FoterNote';
  };
  attributes: {
    heading: Attribute.String;
    footerbutton: Attribute.Component<'element.button-link'>;
  };
}

export interface BlocksAboutus extends Schema.Component {
  collectionName: 'components_blocks_aboutuses';
  info: {
    displayName: 'Aboutus';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    aboutusImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta-data': SeoMetaData;
      'layout.top-nav': LayoutTopNav;
      'layout.the-footer': LayoutTheFooter;
      'layout.footer': LayoutFooter;
      'element.social-media': ElementSocialMedia;
      'element.single-input': ElementSingleInput;
      'element.price-card': ElementPriceCard;
      'element.partner': ElementPartner;
      'element.logo-link': ElementLogoLink;
      'element.link': ElementLink;
      'element.card': ElementCard;
      'element.button-link': ElementButtonLink;
      'element.adress': ElementAdress;
      'blocks.testimonies': BlocksTestimonies;
      'blocks.team': BlocksTeam;
      'blocks.social-media': BlocksSocialMedia;
      'blocks.services': BlocksServices;
      'blocks.service-block': BlocksServiceBlock;
      'blocks.row': BlocksRow;
      'blocks.partners': BlocksPartners;
      'blocks.partner-note': BlocksPartnerNote;
      'blocks.partner-heading': BlocksPartnerHeading;
      'blocks.hero': BlocksHero;
      'blocks.foter-note': BlocksFoterNote;
      'blocks.aboutus': BlocksAboutus;
    }
  }
}
