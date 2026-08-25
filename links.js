/**
 * PPM Express Quick Start - central link configuration
 * ---------------------------------------------------
 * Update destination URLs in this file only.
 * Do not rename the labels on the left-hand side.
 * Keep each URL inside quotation marks.
 */

const LINKS = {
  // PPM Express essentials
  ppmOverviewVideo: "https://vimeo.com/685714660?fl=pl&fe=sh",
  ppmTaskManagementVideo: "https://vimeo.com/991507302?fl=pl&fe=sh",
  ppmStartGuide: "https://help.ppm.express/89245-getting-started-with-ppm-express/2660024-help-guide-for-ppm-express-enterprise-ultra-plan",

  // Three guide cards
  connectOngoingProjects: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/404-Page-Not-Found.aspx",
  ppsProjectModel: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/PPS---Bolidens-Project-Model.aspx",
  ppmReleaseNotes: "https://help.ppm.express/release-notes-ppm-express",

  // Role-based onboarding
  roleProjectManager: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Role-Based-Onboarding--Choose-Your-Role.aspx",
  roleSteeringGroup: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Role-Based-Onboarding--Choose-Your-Role.aspx",
  roleProjectMember: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Role-Based-Onboarding--Choose-Your-Role.aspx",
  roleBenefitOwner: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Role-Based-Onboarding--Choose-Your-Role.aspx",
  roleProjectOwner: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Role-Based-Onboarding--Choose-Your-Role.aspx",
  rolePortfolioProgrammeManager: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Role-Based-Onboarding--Choose-Your-Role.aspx",
  roleResourceOwner: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Role-Based-Onboarding--Choose-Your-Role.aspx",

  // Tool guides
  toolPpmExpress: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Execution-tools.aspx?csf=1&web=1&e=FHMEEJ",
  toolTeams: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Execution-tools.aspx?csf=1&web=1&e=FHMEEJ",
  toolPlannerPremium: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Execution-tools.aspx?csf=1&web=1&e=FHMEEJ",
  toolMicrosoftProject: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Execution-tools.aspx?csf=1&web=1&e=FHMEEJ",
  toolAzureDevOps: "https://boliden.sharepoint.com/sites/IntranetOnline-Editors-BolidenProjectPortfolio/SitePages/Execution-tools.aspx?csf=1&web=1&e=FHMEEJ",

  // External resources
  ppmDocumentation: "https://help.ppm.express/",
  ppmBlog: "https://www.ppm.express/blog",
  ppmVideos: "https://www.youtube.com/c/PPMExpress",
  ppmWebinars: "https://www.ppm.express/webinars"
};

// Applies the URLs above to matching cards in index.html.
// Normally, nothing below this line needs to be changed.
document.querySelectorAll("[data-link]").forEach((element) => {
  const linkName = element.dataset.link;
  const destination = LINKS[linkName];

  if (destination) {
    element.href = destination;
  } else {
    console.warn(`Missing URL in links.js for: ${linkName}`);
    element.removeAttribute("href");
    element.setAttribute("aria-disabled", "true");
  }
});
