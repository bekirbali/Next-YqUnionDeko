import { getActiveAnnouncements } from "./lib/api";

const URL = "https://www.yqunion.com";

export default async function sitemap() {
  // Aktif duyuruları API'den çek
  const announcementsData = await getActiveAnnouncements("tr"); // veya varsayılan dil
  const announcements = announcementsData.results || [];

  const announcementUrls = announcements.map((announcement) => {
    return {
      url: `${URL}/announcements/${announcement.slug}`,
      lastModified: new Date(announcement.created_at).toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  // Statik sayfaları tanımla
  const staticRoutes = [
    "",
    "/announcements",
    "/contact",
    "/contact-form",
    "/faaliyet-alanlari",
    "/office-locations",
    "/whyus",
    "/about",
  ].map((route) => {
    return {
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    };
  });

  return [...staticRoutes, ...announcementUrls];
}
