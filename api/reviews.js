export default async function handler(req, res) {
  const apiKey = process.env.VITE_API_KEY;
  const data_id = process.env.VITE_DATA_ID;

  const baseUrl = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${data_id}&hl=pt&api_key=${apiKey}`;

  try {
    let allReviews = [];
    let nextPageToken = null;
    let pageCount = 0;
    const maxPages = 5; // limite de segurança (evita loop infinito)

    do {
      const url = nextPageToken
        ? `${baseUrl}&next_page_token=${nextPageToken}`
        : baseUrl;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Falha na requisição à SerpApi");
      }

      const data = await response.json();

      if (data.reviews) {
        allReviews = [...allReviews, ...data.reviews];
      }

      nextPageToken = data.serpapi_pagination?.next_page_token || null;
      pageCount++;
    } while (nextPageToken && pageCount < maxPages);

    res.status(200).json({ reviews: allReviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
